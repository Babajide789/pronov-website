"use client";

import React, { useState } from "react";
import { Phone, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ForgotPassword() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber) {
      alert("Please enter your registered phone number.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 relative">
          {/* Back Button */}
          <Link
            href="/signin"
            className="absolute top-4 left-4 flex items-center text-sm text-slate-500 hover:text-green-600 transition-colors"
          >
            <ArrowLeft size={18} className="mr-1" />
            Back
          </Link>

          
          <div className="text-center mb-8 mt-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
              <p className="text-white text-4xl font-bold">P</p>
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              Forgot Pin?
            </h2>
            <p className="text-slate-500 text-sm">
              No worries — enter your registered phone number below, and we&apos;ll send you reset instructions.
            </p>
          </div>

          {!submitted ? (
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Phone Number Input */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                    size={20}
                  />
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d{0,11}$/.test(value)) setPhoneNumber(value);
                    }}
                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 active:scale-95 transition-all shadow-lg hover:shadow-xl"
              >
                Send Reset Code
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="text-green-600" size={36} />
              </div>
              
              <h3 className="text-lg font-semibold text-slate-800">
                Reset Code Sent!
              </h3>
              <p className="text-slate-500 text-sm">
                A password reset code has been sent to{" "}
                <span className="font-medium text-slate-700">
                  {phoneNumber}
                </span>. Please check your messages.
              </p>

              <Link
                href="/reset-pin"
                className="inline-block text-green-600 font-semibold mt-4 hover:text-green-700 transition-colors"
              >
                Enter Reset Code
              </Link>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Remember your password?{" "}
          <Link href="/login" className="text-green-600 hover:underline">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
