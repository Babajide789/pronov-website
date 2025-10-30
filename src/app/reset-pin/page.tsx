"use client";

import { useState } from "react";
import { KeyRound, Loader2 } from "lucide-react";

export default function ResetPin() {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!pin || !confirmPin) {
      setError("Please fill in both fields");
      return;
    }

    if (pin !== confirmPin) {
      setError("PINs do not match");
      return;
    }

    if (!/^\d{4,6}$/.test(pin)) {
      setError("PIN must be 4 to 6 digits");
      return;
    }

    setError("");
    setLoading(true);
    setSuccess("");

    // LOADING AND REDIRECT
    setTimeout(() => {
      setLoading(false);
      setSuccess("PIN reset successfully! Redirecting...");
      setTimeout(() => {
        window.location.href = "/signin";
      }, 1500);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-6">
          Reset Your PIN
        </h1>

        <form onSubmit={handleReset} className="space-y-5">
          {/* New PIN */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              New PIN
            </label>
            <div className="relative">
              <KeyRound
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter new PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
                maxLength={6}
                className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              />
            </div>
          </div>

          {/* Confirm PIN */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Confirm PIN
            </label>
            <div className="relative">
              <KeyRound
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Re-enter new PIN"
                value={confirmPin}
                onChange={(e) =>
                  setConfirmPin(e.target.value.replace(/\D/g, ""))
                }
                maxLength={6}
                className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              />
            </div>
          </div>

          {/* Error or Success message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && (
            <p className="text-green-600 text-sm text-center">{success}</p>
          )}

          {/* Reset Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center cursor-pointer justify-center gap-2 bg-green-600 text-white py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl ${
              loading
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-green-700 active:scale-95"
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Resetting...
              </>
            ) : (
              "Reset PIN"
            )}
          </button>

          {/* Optional Back to Login */}
          <p className="text-center text-sm text-slate-600 mt-4">
            Remember your PIN?{" "}
            <a
              href="/signin"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
