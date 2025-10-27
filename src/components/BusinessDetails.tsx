


export default function BusinessDetails() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">
          Business Details
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business Name
            </label>
            <input
              type="text"
              placeholder="Enter business name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Branch Name
            </label>
            <input
              type="text"
              placeholder="Enter branch name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Branch Phone Number
            </label>
            <input
              type="number"
              placeholder="Enter branch phone number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Area (e.g. Oshodi)
            </label>
            <input
              type="text"
              placeholder="Enter area"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Business Type
            </span>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="businessType"
                  value="male"
                  className="text-green-600 focus:ring-green-500"
                />
                <span>Male-Owned</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="businessType"
                  value="female"
                  className="text-green-600 focus:ring-green-500"
                />
                <span>Female-Owned</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              placeholder="Enter state"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Local Government Area
            </label>
            <input
              type="text"
              placeholder="Enter LGA"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 font-semibold"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
