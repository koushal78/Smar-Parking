import { useState } from "react";

const API = "http://localhost:5000/api";

export default function RemoveVehicle({ fetchSlots, setMessage }) {
  const [slotNo, setSlotNo] = useState("");

  const remove = async () => {
    const res = await fetch(`${API}/removeVehical`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slotNo: Number(slotNo) })
    });

    const data = await res.json();
    setMessage(data.message);
    fetchSlots();
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Remove Vehicle</h2>

      <input
        type="number"
        placeholder="Slot Number"
        className="border p-2 w-full"
        value={slotNo}
        onChange={(e) => setSlotNo(e.target.value)}
      />

      <button onClick={remove} className="bg-red-600 text-white px-4 py-2 mt-2 rounded">
        Remove
      </button>
    </div>
  );
}
