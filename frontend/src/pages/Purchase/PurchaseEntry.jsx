import React from "react";

const PurchaseEntry = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-semibold mb-2">Purchase <span className="text-gray-500">&raquo; Entry</span></h2>

      {/* Product Entry */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end mb-6">
        <div>
          <label className="block mb-1 font-medium">Select Product</label>
          <select className="w-full border px-3 py-2 rounded">
            <option>Search Product</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Quantity</label>
          <input type="number" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Purchase Price</label>
          <input type="number" className="w-full border px-3 py-2 rounded" />
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 rounded h-[42px]">Add</button>
      </div>

      {/* Product Table */}
      <table className="w-full mb-6 border-t">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">Product</th>
            <th className="px-4 py-2 border">Quantity</th>
            <th className="px-4 py-2 border">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="font-semibold">
            <td className="px-4 py-2 border">TOTAL</td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border">0</td>
            <td className="px-4 py-2 border">0.00</td>
          </tr>
        </tbody>
      </table>

      {/* Invoice Details */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block mb-1 font-medium">Select Company</label>
          <select className="w-full border px-3 py-2 rounded">
            <option>--Select Company--</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Invoice No</label>
          <input type="text" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Total Rebet Amount</label>
          <input type="number" defaultValue={0} className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Invoice Date</label>
          <input type="date" className="w-full border px-3 py-2 rounded" />
        </div>
      </div>

      {/* Submit / Cancel Buttons */}
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded">Submit</button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded">Cancel</button>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-500">
        <span className="text-blue-600 font-semibold">UNIB</span> Application © 2017-2018
      </footer>
    </div>
  );
};

export default PurchaseEntry;
