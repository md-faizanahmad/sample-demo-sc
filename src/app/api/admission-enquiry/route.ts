import { NextResponse } from "next/server";
import { AdmissionSchema } from "@/lib/validation/admission";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Validate with Zod
    const validatedData = AdmissionSchema.parse(body);

    // 2. Check Environment Variables
    if (
      !process.env.GOOGLE_SHEET_WEBHOOK ||
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS
    ) {
      throw new Error(
        "Missing server-side configuration (Environment Variables)",
      );
    }

    // 3. Save to Google Sheets
    const sheetResponse = await fetch(process.env.GOOGLE_SHEET_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...validatedData,
        timestamp: new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
      }),
    });

    if (!sheetResponse.ok) throw new Error("Google Sheets Webhook failed");

    // 4. Send Emails
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.SCHOOL_EMAIL,
      subject: `📌 NEW ENQUIRY: ${validatedData.studentName} (${validatedData.classApplyingFor})`,
      html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-top: 5px solid #1e3a8a; padding: 20px; color: #1a202c;">
      <h2 style="color: #1e3a8a; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">New Admission Enquiry</h2>
      <p style="font-size: 14px; color: #4a5568;">A new enquiry has been submitted via the school website. Details are provided below:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; background: #f8fafc; font-weight: bold; border: 1px solid #e2e8f0; width: 40%;">Student Name</td>
          <td style="padding: 10px; border: 1px solid #e2e8f0;">${validatedData.studentName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background: #f8fafc; font-weight: bold; border: 1px solid #e2e8f0;">Applying for Class</td>
          <td style="padding: 10px; border: 1px solid #e2e8f0;">${validatedData.classApplyingFor}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background: #f8fafc; font-weight: bold; border: 1px solid #e2e8f0;">Parent/Guardian</td>
          <td style="padding: 10px; border: 1px solid #e2e8f0;">${validatedData.parentName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background: #f8fafc; font-weight: bold; border: 1px solid #e2e8f0;">WhatsApp Number</td>
          <td style="padding: 10px; border: 1px solid #e2e8f0;"><a href="https://wa.me/91${validatedData.mobile}" style="color: #059669; text-decoration: none; font-weight: bold;">+91 ${validatedData.mobile}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px; background: #f8fafc; font-weight: bold; border: 1px solid #e2e8f0;">Email Address</td>
          <td style="padding: 10px; border: 1px solid #e2e8f0;">${validatedData.email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; background: #f8fafc; font-weight: bold; border: 1px solid #e2e8f0;">Current Address</td>
          <td style="padding: 10px; border: 1px solid #e2e8f0;">${validatedData.address}</td>
        </tr>
      </table>
      
      <p style="margin-top: 30px; font-size: 12px; color: #718096; text-align: center;">
        Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
      </p>
    </div> `,
    };

    const parentOptions = {
      from: process.env.EMAIL_USER,
      to: validatedData.email,
      subject: `Welcome to ABC Public School - Admission Enquiry for ${validatedData.studentName}`,
      html: `
    <div style="font-family: 'Georgia', serif; max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #1e3a8a; padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">ABC Public School</h1>
        <p style="color: #bfdbfe; margin-top: 5px; text-transform: uppercase; font-size: 10px; letter-spacing: 2px;">Excellence in Education</p>
      </div>
      
      <div style="padding: 40px; line-height: 1.6; color: #374151;">
        <h2 style="color: #111827; font-size: 20px;">Dear ${validatedData.parentName},</h2>
        <p>Thank you for choosing <strong>ABC Public School</strong>. We have successfully received your admission enquiry for <strong>${validatedData.studentName}</strong> for the upcoming session.</p>
        
        <div style="background-color: #f3f4f6; border-left: 4px solid #1e3a8a; padding: 20px; margin: 25px 0;">
          <p style="margin: 0; font-weight: bold;">What happens next?</p>
          <p style="margin: 5px 0 0; font-size: 14px;">Our admissions counselor will contact you at <strong>+91 ${validatedData.mobile}</strong> within 24 hours to guide you through the next steps and schedule your campus visit.</p>
        </div>
        
        <p>In the meantime, feel free to explore our curriculum and facilities on our website.</p>
        
        <p style="margin-top: 40px;">Warm Regards,<br>
        <span style="color: #1e3a8a; font-weight: bold;">Admissions Office</span><br>
        ABC Public School, Gaya</p>
      </div>
      
      <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af;">
        This is an automated acknowledgement. Please do not reply to this email.
      </div>
    </div>
      
      `,
    };

    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(parentOptions),
    ]);

    return NextResponse.json({ success: true, message: "Enquiry submitted!" });
  } catch (error: any) {
    console.error("--- API ERROR ---", error);

    // Safety: Handle Zod errors without crashing
    if (error.name === "ZodError" && error.errors?.[0]) {
      return NextResponse.json(
        {
          success: false,
          message: error.errors[0].message,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Internal Server Error",
      },
      { status: 500 },
    );
  }
}
