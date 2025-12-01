import React, { useState } from "react";
import { rtoDistricts, testingCenters } from "../data";

const TestingCentersPage: React.FC = () => {
  const [selectedRTO, setSelectedRTO] = useState<string | null>(null);
  const [selectedSubRTO, setSelectedSubRTO] = useState<string | null>(null);

  const handleMainRTOClick = (id: string) => {
    setSelectedRTO(id);
    setSelectedSubRTO(null);
  };

  const handleSubRTOClick = (code: string) => {
    setSelectedSubRTO(code.toLowerCase());
  };

  return (
    <div className="p-6">

      {/* 🔵 Step 1: Show MAIN RTO List */}
      {!selectedRTO && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Select RTO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rtoDistricts.map((rto) => (
              <div
                key={rto.id}
                onClick={() => handleMainRTOClick(rto.id)}
                className="cursor-pointer bg-blue-100 p-4 rounded shadow hover:bg-blue-200 transition"
              >
                <h3 className="text-xl font-semibold">{rto.name}</h3>
                <p className="text-gray-600">{rto.code}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🔵 Step 2: Show SUB RTO List */}
      {selectedRTO && !selectedSubRTO && (
        <div>
          <button
            onClick={() => setSelectedRTO(null)}
            className="mb-4 px-4 py-2 bg-gray-300 rounded"
          >
            ⬅ Back
          </button>

          <h2 className="text-2xl font-bold mb-4">
            Select Sub RTO –{" "}
            {rtoDistricts.find((d) => d.id === selectedRTO)?.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rtoDistricts
              .find((d) => d.id === selectedRTO)
              ?.subRTO.map((sub) => (
                <div
                  key={sub.id}
                  onClick={() => handleSubRTOClick(sub.code)}
                  className="cursor-pointer bg-green-100 p-4 rounded shadow hover:bg-green-200 transition"
                >
                  <h3 className="text-xl font-semibold">{sub.name}</h3>
                  <p className="text-gray-600">{sub.code}</p>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* 🔵 Step 3: Show Testing Centers */}
      {selectedSubRTO && (
        <div>
          <button
            onClick={() => setSelectedSubRTO(null)}
            className="mb-4 px-4 py-2 bg-gray-300 rounded"
          >
            ⬅ Back
          </button>

          <h2 className="text-2xl font-bold mb-4">
            Centers under {selectedSubRTO.toUpperCase()}
          </h2>

          {testingCenters.filter((tc) => tc.rto === selectedSubRTO).length === 0 ? (
            <p className="text-red-500">No centers found for this Sub RTO.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testingCenters
                .filter((tc) => tc.rto === selectedSubRTO)
                .map((center) => (
                  <div key={center.id} className="bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-semibold">{center.name}</h3>
                    <p className="text-gray-600">Location: {center.location}</p>
                    <p className="text-gray-600">RTO: {center.rto.toUpperCase()}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TestingCentersPage;
