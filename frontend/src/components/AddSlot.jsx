import { useState } from "react";

const API = "https://smar-parking.onrender.com/api";

export default function AddSlot({ fetchSlots, setMessage }) {
  const [slotNo, setSlotNo] = useState("");
  const [isCovered, setIsCovered] = useState(false);
  const [isEVCharging, setIsEVCharging] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API}/addSlot`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slotNo: Number(slotNo),
        isCovered,
        isEVCharging
      })
    });

    const data = await res.json();
    setMessage(data.message);
    fetchSlots();
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Add Parking Slot</h2>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="number"
          placeholder="Slot Number"
          className="border p-2 w-full"
          value={slotNo}
          onChange={(e) => setSlotNo(e.target.value)}
          required
        />

        <label className="block">
          <input type="checkbox" onChange={() => setIsCovered(!isCovered)} /> Covered
        </label>

        <label className="block">
          <input type="checkbox" onChange={() => setIsEVCharging(!isEVCharging)} /> EV Charging
        </label>

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Add Slot
        </button>
      </form>
    </div>
  );
}
