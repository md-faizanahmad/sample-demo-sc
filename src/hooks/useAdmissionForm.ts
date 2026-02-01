"use client";

import { useState } from "react";
import toast from "react-hot-toast";

interface FormState {
  studentName: string;
  classApplyingFor: string;
  parentName: string;
  mobile: string;
  email: string;
  address: string;
}

export const useAdmissionForm = () => {
  const [formData, setFormData] = useState<FormState>({
    studentName: "",
    classApplyingFor: "",
    parentName: "",
    mobile: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    if (!value.trim()) return "This field is required";

    switch (name) {
      case "studentName":
      case "parentName":
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        break;
      case "mobile":
        if (!/^\d{10}$/.test(value)) return "Enter exactly 10 digits";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Invalid email format";
        break;
      case "address":
        if (value.trim().length < 6)
          return "Address must be at least 6 characters";
        break;
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    // Block numbers in name fields
    if (name === "studentName" || name === "parentName") {
      const filteredValue = value.replace(/[0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: filteredValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormState]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill valid .");
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your enquiry...");

    try {
      const response = await fetch("/api/admission-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Enquiry sent successfully!", { id: loadingToast });
        setIsSuccess(true);
        setFormData({
          studentName: "",
          classApplyingFor: "",
          parentName: "",
          mobile: "",
          email: "",
          address: "",
        });
      } else {
        toast.error(result.message || "Submission failed", {
          id: loadingToast,
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please check connection.", {
        id: loadingToast,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    handleChange,
    handleSubmit,
  };
};
