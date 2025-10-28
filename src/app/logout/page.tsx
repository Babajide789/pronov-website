"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LogoutPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);

  const handleConfirmLogout = () => {
    // Clear user session/local storage
    localStorage.removeItem("checkoutCart");
    localStorage.removeItem("userToken");

    setShowModal(false);

    // Show logout animation after modal closes
    setTimeout(() => {
      setShowLogoutMessage(true);

      // Automatically redirect to signin page after a short delay
      setTimeout(() => {
        router.push("/signin");
      }, 2000); // 2 seconds delay before redirect
    }, 300);
  };

  const handleCancelLogout = () => {
    router.push("/"); // redirect back to homepage
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 relative">
      {/* Confirmation Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center"
            >
              <XCircle size={48} className="text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                Are you sure you want to log out?
              </h2>
              <p className="text-gray-600 mb-6">
                Confirming will log you out of your account.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleCancelLogout}
                  className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmLogout}
                  className="px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Log Out
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logout Animation & Message */}
      <AnimatePresence>
        {showLogoutMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center max-w-md w-full"
          >

            <CheckCircle size={56} className="text-green-600 mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Logged Out
            </h1>
            <p className="text-gray-600 mb-6">
              You have successfully logged out. Redirecting to Sign In page...
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/signin")}
              className="flex items-center gap-2 bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition"
            >
             
              Go to Sign In Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
