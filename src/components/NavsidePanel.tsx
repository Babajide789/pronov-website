import {
  LayoutDashboard,
  ShoppingBag,
  History,
  Building2,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

export default function NavPanel() {
  return (
    <div className="min-h-screen w-64 bg-white shadow-lg flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-green-600 text-center">American Pharma</h1>
          <p>Alausa Branch</p>
        </div>

        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
              >
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
              >
                <ShoppingBag size={20} />
                <span>Sales</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
              >
                <History size={20} />
                <span>Sales History</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
              >
                <Building2 size={20} />
                <span>Branches</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
              >
                <Users size={20} />
                <span>Users</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
              >
                <Settings size={20} />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Logout Section */}
      <div className="border-t p-4">
        <a
          href="#"
          className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors rounded-lg"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
}