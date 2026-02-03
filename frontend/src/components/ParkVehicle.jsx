import { useState } from "react";

const API = "http://localhost:5000/api";

export default function ParkVehicle({ fetchSlots, setMessage }) {
  const [needsEV, setNeedsEV] = useState(false);
  const [needsCover, setNeedsCover] = useState(false);

  const park = async () => {
    const res = await fetch(`${API}/parkVehical`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ needsEV, needsCover })
    });

    const data = await res.json();
    setMessage(data.message);
    fetchSlots();
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Park Vehicle</h2>

      <label className="block">
        <input type="checkbox" onChange={() => setNeedsEV(!needsEV)} /> Needs EV
      </label>

      <label className="block">
        <input type="checkbox" onChange={() => setNeedsCover(!needsCover)} /> Needs Covered
      </label>

      <button onClick={park} className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
        Park
      </button>
    </div>
  );
}
