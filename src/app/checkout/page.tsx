"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import MyDropdownMenu from "@/shadCN/Mydropdown-menu";
import { Bell, ArrowLeft, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

export default function CheckoutPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedCart = localStorage.getItem("checkoutCart");
    setTimeout(() => {
      if (savedCart) setCart(JSON.parse(savedCart));
      setLoading(false);
    }, 1500);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
      setShowModal(true);
      localStorage.removeItem("checkoutCart");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 relative">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <div
          onClick={() => router.back()}
          className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition"
        >
          <ArrowLeft size={20} className="text-gray-700" />
          <h1 className="text-lg font-semibold text-gray-800">Checkout</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell size={22} className="text-gray-700" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></span>
          </div>
          <MyDropdownMenu />
        </div>
      </div>

      {/* MAIN CONTENT */}
      {loading ? (
        // SKELETON LOADER
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-pulse">
          {/* LEFT SIDE SKELETON */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="h-5 w-40 bg-gray-200 rounded mb-4"></div>

            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="grid grid-cols-4 gap-3 items-center">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-4 bg-gray-200 rounded w-12"></div>
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>
              ))}
            </div>

            <div className="h-6 w-32 bg-gray-200 rounded mt-6 ml-auto"></div>
          </div>

          {/* RIGHT SIDE SKELETON */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
            <div className="h-5 w-40 bg-gray-200 rounded mb-4"></div>

            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded mt-6"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: CART ITEMS */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-base font-semibold text-gray-700 mb-4">
              Cart Summary
            </h2>

            <div className="grid grid-cols-4 text-sm font-medium text-gray-500 border-b pb-2">
              <p>Product Name</p>
              <p>Quantity</p>
              <p>Unit Price</p>
              <p>Sub-Total</p>
            </div>

            <div className="py-4 text-gray-600 text-sm space-y-3">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-4 py-2 border-b last:border-none"
                  >
                    <p>{item.name}</p>
                    <p>{item.qty}</p>
                    <p>₦{item.price.toLocaleString()}</p>
                    <p>₦{(item.price * item.qty).toLocaleString()}</p>
                  </div>
                ))
              ) : (
                <p className="text-center py-6 text-gray-400">
                  No items yet — data from Sales Page will display here
                </p>
              )}
            </div>

            {cart.length > 0 && (
              <div className="flex justify-end border-t pt-3 mt-3 text-gray-800 font-semibold text-lg">
                <p>Total: ₦{total.toLocaleString()}</p>
              </div>
            )}
          </div>

          {/* RIGHT: CHECKOUT DETAILS */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-base font-semibold text-gray-700 mb-4">
              Checkout Details
            </h2>

            <div className="space-y-2">
              <label
                htmlFor="deliveryDate"
                className="text-sm font-medium text-gray-600"
              >
                Date of Delivery
              </label>
              
              <Input
                id="deliveryDate"
                type="date"
                placeholder="Select Date"
                className="border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <button
              onClick={handleCheckout}
              disabled={buttonLoading}
              className={`w-full mt-6 bg-green-600 text-white font-semibold py-3 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 ${
                buttonLoading
                  ? "cursor-not-allowed opacity-70"
                  : "hover:bg-green-700"
              }`}
            >
              {buttonLoading ? "Processing..." : "Confirm Checkout"}
            </button>
          </div>
        </div>
      )}

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-96 text-center relative">
            <CheckCircle size={48} className="mx-auto text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Order Placed!</h3>
            <p className="text-gray-600 mb-6">
              Your order has been successfully placed. Thank you for shopping
              with us!
            </p>
            <button
              onClick={() => {
                setShowModal(false);
                router.push("/sales");
              }}
              className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
