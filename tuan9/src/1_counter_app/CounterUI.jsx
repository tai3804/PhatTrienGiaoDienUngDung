import React from 'react';

function CounterUI({ a, b, result, setA, setB, onIncrease, onDecrease }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Counter App</h2>

        {/* Input Fields */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Value A</label>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Value B</label>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Result */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Result</label>
          <input
            type="number"
            value={result}
            disabled
            className="w-full p-3 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={onIncrease}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
          >
            Increase
          </button>
          <button
            onClick={onDecrease}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterUI;