import React from 'react'
import t1 from '../../gsw images/t1.webp'
import p2 from '../../gsw images/p4.webp'

function Rotavator() {
  return (
    <div className="bg-yellow-50 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="relative">
          <img
            src={t1} 
            alt="GSW Fighter Rotavator"
            className="w-full h-[500px] object-cover" 
          />
          <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-4">
            <h1 className="text-4xl font-extrabold tracking-wide">GSW Fighter Rotavator</h1>
          </div>
        </div>

        {/* Features Section */}
        <div className="p-6 bg-yellow-100 flex justify-between items-center">
          <div className="w-2/3">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg font-light">
              <li className="hover:text-red-600 transition-all duration-300 ">Multi Speed Gear Box</li>
              <li className="hover:text-red-600 transition-all duration-300 ">Adjustable Lower Hitch Brackets</li>
              <li className="hover:text-red-600 transition-all duration-300 ">L Type Blades</li>
              <li className="hover:text-red-600 transition-all duration-300 ">Chain/Gear Driven Side Transmission in Oil Bath</li>
              <li className="hover:text-red-600 transition-all duration-300 ">Adjustable Skids</li>
              <li className="hover:text-red-600 transition-all duration-300 ">Rear Board Springs</li>
            </ul>
          </div>
          <div className="w-1/3 pl-6">
            <img
              src={p2} 
              alt="GSW Fighter Rotavator Features"
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Models Table Section */}
        <div className="p-6">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Model Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm text-left">
              <thead>
                <tr className="bg-yellow-200">
                  <th className="border border-gray-300 p-2 text-lg font-medium">Model</th>
                  <th className="border border-gray-300 p-2 text-lg font-medium">Overall Length (mm)</th>
                  <th className="border border-gray-300 p-2 text-lg font-medium">Overall Width (mm)</th>
                  <th className="border border-gray-300 p-2 text-lg font-medium">Overall Height (mm)</th>
                  <th className="border border-gray-300 p-2 text-lg font-medium">HP</th>
                  <th className="border border-gray-300 p-2 text-lg font-medium">Tractor Power (KW)</th>
                  <th className="border border-gray-300 p-2 text-lg font-medium">3-Point Hitch Type</th>
                  <th className="border border-gray-300 p-2 text-lg font-medium">No. of Tines (L/C)</th>
                  <th className="border border-gray-300 p-2 text-lg font-medium">No. of Tines (Spike Type)</th>
                  <th className="border border-gray-300 p-2 text-lg font-medium">Transmission Type</th>
                  <th className="border border-gray-300 p-2 text-lg font-medium">Max. Working Depth (mm)</th>
                  <th className="border border-gray-300 p-2 text-lg font-medium">Drive Line Safety Device</th>
                  <th className="border border-gray-300 p-2 text-lg font-medium">Weight (kg)</th>
                </tr>
              </thead>
              <tbody>
                {[ 
                  { model: "Fighter 4", length: 114, width: 959, height: 1135, hp: "40-55", kw: "30-41", hitch: "", tinesLc: 30, tinesSpike: "34 & 46", transmission: "Gear Drive", depth: 152, safety: "Shear Bolt", weight: 406 },
                  { model: "Fighter 5", length: 1760, width: 959, height: 1135, hp: "45-60", kw: "34-45", hitch: "", tinesLc: 36, tinesSpike: "37 & 48", transmission: "Gear Drive", depth: 152, safety: "Shear Bolt", weight: 426 },
                  { model: "Fighter 5.5", length: 1889, width: 959, height: 1135, hp: "50-65", kw: "37-48", hitch: "Cat - II", tinesLc: 39, tinesSpike: "52", transmission: "Gear Drive", depth: 152, safety: "Shear Bolt", weight: 426 },
                  { model: "Fighter 6", length: 2026, width: 959, height: 1135, hp: "55-70", kw: "41-52", hitch: "Cat - II", tinesLc: 42, tinesSpike: "46 & 58", transmission: "Gear Drive", depth: 152, safety: "Shear Bolt", weight: 446 },
                  { model: "Fighter 7", length: 2026, width: 959, height: 1135, hp: "65-80", kw: "49-60", hitch: "Cat - II", tinesLc: 48, tinesSpike: "70", transmission: "Gear Drive", depth: 152, safety: "Shear Bolt", weight: 465 },
                ].map((row, index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-100">
                    {Object.values(row).map((value, idx) => (
                      <td key={idx} className="border border-gray-300 p-2 text-gray-700 font-light">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rotavator;
