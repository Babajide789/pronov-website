import Link from "next/link";

export default function OTP() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-8">
        {/* Icon or illustration */}
        <div className="flex justify-center mb-5">
          <img
            src="/otp-message.svg" // optional — replace with your image path
            alt="OTP Message"
            className="w-24 h-24"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center text-green-600 mb-3">
          Verify Your Code
        </h2>

        <p className="text-center text-gray-600 mb-6">
          A 4-digit code has been sent to your registered phone number
        </p>

        <form className="space-y-5">
          <input
            type="number"
            placeholder="Enter OTP Code"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-center tracking-widest text-lg"
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
