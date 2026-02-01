"use client";

import { useAdmissionForm } from "@/hooks/useAdmissionForm";
import { Send, AlertCircle, CheckCircle } from "lucide-react";

export default function AdmissionForm() {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    handleChange,
    handleSubmit,
  } = useAdmissionForm();

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 p-10 rounded-[2.5rem] border border-emerald-100 text-center">
        <CheckCircle className="mx-auto text-emerald-500 mb-4" size={50} />
        <h2 className="text-2xl font-bold text-emerald-900 mb-2">
          Enquiry Submitted!
        </h2>
        <p className="text-emerald-700 mb-6">
          The school office will contact you shortly.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold"
        >
          New Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100"
    >
      <FormInput
        label="Student Name"
        name="studentName"
        value={formData.studentName}
        error={errors.studentName}
        onChange={handleChange}
        placeholder="Aryan Kumar"
      />

      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
          Class Applying For *
        </label>
        <select
          name="classApplyingFor"
          value={formData.classApplyingFor}
          onChange={handleChange}
          className={`p-4 rounded-xl bg-slate-50 border ${errors.classApplyingFor ? "border-red-500" : "border-slate-100"} outline-none focus:ring-2 focus:ring-blue-900 transition-all font-medium`}
        >
          <option value="">Select a Class</option>
          {[
            "Nursery",
            "LKG",
            "UKG",
            "Class 1",
            "Class 2",
            "Class 3",
            "Class 4",
            "Class 5",
            "Class 6",
            "Class 7",
            "Class 8",
            "Class 9",
            "Class 10",
          ].map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.classApplyingFor && (
          <ErrorText text={errors.classApplyingFor} />
        )}
      </div>

      <FormInput
        label="Parent Name"
        name="parentName"
        value={formData.parentName}
        error={errors.parentName}
        onChange={handleChange}
        placeholder="Mr. R.K. Sharma"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          label="WhatsApp Number"
          name="mobile"
          value={formData.mobile}
          error={errors.mobile}
          onChange={handleChange}
          placeholder="10-digit number"
          type="tel"
        />
        <FormInput
          label="Email Address"
          name="email"
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
          placeholder="parent@example.com"
          type="email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
          Address *
        </label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows={2}
          className={`p-4 rounded-xl bg-slate-50 border ${errors.address ? "border-red-500" : "border-slate-100"} outline-none focus:ring-2 focus:ring-blue-900 resize-none`}
          placeholder="House No, Area, City..."
        />
        {errors.address && <ErrorText text={errors.address} />}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full bg-blue-900 text-white py-5 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-800 transition-all disabled:opacity-50"
      >
        {isSubmitting ? (
          "Processing..."
        ) : (
          <>
            <Send size={18} /> Submit Enquiry
          </>
        )}
      </button>
    </form>
  );
}

function FormInput({
  label,
  name,
  value,
  error,
  onChange,
  placeholder,
  type = "text",
}: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
        {label} *
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`p-4 rounded-xl bg-slate-50 border ${error ? "border-red-500" : "border-slate-100"} outline-none focus:ring-2 focus:ring-blue-900 transition-all font-medium`}
      />
      {error && <ErrorText text={error} />}
    </div>
  );
}

function ErrorText({ text }: { text: string }) {
  return (
    <span className="text-[10px] font-bold text-red-500 flex items-center gap-1 mt-1">
      <AlertCircle size={12} /> {text}
    </span>
  );
}
