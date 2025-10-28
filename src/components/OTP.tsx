"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function OTPpage() {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    router.push("/business-details");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-8">
        <div className="flex justify-center mb-5">
          <Image
            src="/Text Message.png"
            alt="OTP Message"
            width={44}
            height={44}
          />
        </div>

        <h2 className="text-2xl font-semibold text-center text-green-600 mb-3">
          Verify Your Code
        </h2>

        <p className="text-center text-gray-600 mb-6">
          A 4-digit code has been sent to your registered phone number
        </p>

        <form onSubmit={handleVerify} className="space-y-5">
          {/* OTP Input */}
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={4}
            value={otp}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setOtp(value);
            }}
            placeholder="Enter 4-digit PIN"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-center tracking-[0.5em] text-l font-semibold text-gray-800"
            style={{
              letterSpacing: "0.5em",
              caretColor: "transparent",
            }}
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 font-medium"
          >
            Verify Code
          </button>
        </form>

        <div className="text-center mt-5 space-y-2">
          <p className="text-sm text-gray-600">
            Didn’t get a code?{" "}
            <button
              type="button"
              className="text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              Resend Code
            </button>
          </p>

          <Link
            href="/login"
            className="block text-green-600 font-semibold hover:text-green-700 transition-colors text-sm"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
