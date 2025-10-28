// "use client";
// import { useState, useEffect } from "react";
// import { Search, Trash2, ShoppingCart, Plus, Minus } from "lucide-react";

// export default function SalesCheckout() {
//   const [loading, setLoading] = useState(true);
//   const [products] = useState([
//     { id: 1, name: "Agary Paracetamol A4-3549", stock: true, price: 3500 },
//     { id: 2, name: "Acepol Paracetamol Susp. A4-0704", stock: true, price: 4000 },
//     { id: 3, name: "Albemol Paracetamol Syrup 60ml: A4-7709", stock: false, price: 5000 },
//   ]);

//   const [search, setSearch] = useState("");
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000); // simulate delay
//     return () => clearTimeout(timer);
//   }, []);

//   const filteredProducts = products.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const addToCart = (product) => {
//     if (!product.stock) return;
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//         );
//       } else {
//         return [...prev, { ...product, qty: 1 }];
//       }
//     });
//   };

//   const updateQty = (id, change) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   const removeFromCart = (id) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-semibold text-green-600">Sales Checkout</h1>
//         <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
//           Add Sales
//         </button>
//       </div>

//       {/* Two-column layout */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Left: Product Table */}
//         <div className="lg:w-[70%] bg-white rounded-xl shadow p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold">Sales 1</h2>
//           </div>

//           {/* Search bar */}
//           <div className="relative mb-5">
//             <Search className="absolute left-3 top-3 text-gray-400" size={18} />
//             <input
//               type="text"
//               placeholder="Search for a product or scan a barcode"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
//             />
//           </div>

//           {/* Loading Skeleton or Product List */}
//           {loading ? (
//             <div className="space-y-3">
//               {[...Array(5)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="h-10 bg-gray-100 animate-pulse rounded-lg"
//                 ></div>
//               ))}
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-100 text-left text-sm text-gray-600">
//                     <th className="py-3 px-4">Product Name</th>
//                     <th className="py-3 px-4">Stock</th>
//                     <th className="py-3 px-4">Price</th>
//                     <th className="py-3 px-4 text-right">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredProducts.map((product) => (
//                     <tr
//                       key={product.id}
//                       className="border-b hover:bg-gray-50 transition text-sm"
//                     >
//                       <td className="py-3 px-4 font-medium text-gray-800">
//                         {product.name}
//                       </td>
//                       <td className="py-3 px-4">
//                         {product.stock ? (
//                           <span className="text-green-600 font-medium">In Stock</span>
//                         ) : (
//                           <span className="text-red-500 font-medium">Out of Stock</span>
//                         )}
//                       </td>
//                       <td className="py-3 px-4 text-gray-700">₦{product.price}</td>
//                       <td className="py-3 px-4 text-right">
//                         <button
//                           disabled={!product.stock}
//                           onClick={() => addToCart(product)}
//                           className={`px-3 py-1 rounded font-medium ${
//                             product.stock
//                               ? "bg-green-600 text-white hover:bg-green-700"
//                               : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                           }`}
//                         >
//                           Add to Cart
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>

//         {/* Right: Cart Section */}
//         <div className="lg:w-[30%] bg-white rounded-xl shadow p-6 flex flex-col justify-between">
//           <div>
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold">Cart</h2>
//               <ShoppingCart className="text-green-600" size={22} />
//             </div>

//             {loading ? (
//               <div className="space-y-3">
//                 {[...Array(3)].map((_, i) => (
//                   <div key={i} className="h-8 bg-gray-100 animate-pulse rounded"></div>
//                 ))}
//               </div>
//             ) : cart.length === 0 ? (
//               <div className="text-center text-gray-500 py-10">
//                 <p className="font-medium">Cart is empty</p>
//                 <p className="text-sm">Add products to your sale</p>
//               </div>
//             ) : (
//               <div className="space-y-3 max-h-80 overflow-y-auto">
//                 {cart.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex justify-between items-center border-b pb-2"
//                   >
//                     <div>
//                       <p className="font-medium">{item.name}</p>
//                       <p className="text-sm text-gray-500">₦{item.price}</p>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <button
//                         onClick={() => updateQty(item.id, -1)}
//                         className="p-1 rounded bg-gray-100 hover:bg-gray-200"
//                       >
//                         <Minus size={16} />
//                       </button>
//                       <span>{item.qty}</span>
//                       <button
//                         onClick={() => updateQty(item.id, 1)}
//                         className="p-1 rounded bg-gray-100 hover:bg-gray-200"
//                       >
//                         <Plus size={16} />
//                       </button>
//                       <button
//                         onClick={() => removeFromCart(item.id)}
//                         className="text-red-500 hover:text-red-600"
//                       >
//                         <Trash2 size={18} />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {!loading && (
//             <div className="border-t pt-4 mt-4">
//               <div className="flex justify-between text-lg font-semibold">
//                 <p>Total</p>
//                 <p className="text-green-600">₦{total.toLocaleString()}</p>
//               </div>
//               <button
//                 disabled={cart.length === 0}
//                 className={`w-full mt-4 py-3 rounded-lg font-semibold transition ${
//                   cart.length === 0
//                     ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                     : "bg-green-600 text-white hover:bg-green-700"
//                 }`}
//               >
//                 Record Sale
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
