import { useEffect, useState } from "react";
import AddSlot from "./components/AddSlot";
import SlotList from "./components/SlotList";
import ParkVehicle from "./components/ParkVehicle";
import RemoveVehicle from "./components/RemoveVehicle";

const API = "http://localhost:5000/api";

function App() {
  const [slots, setSlots] = useState([]);
  const [message, setMessage] = useState("");

  const fetchSlots = async () => {
    const res = await fetch(`${API}/viewSlot`);
    const data = await res.json();
    setSlots(data);
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Smart Parking Lot System
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <AddSlot fetchSlots={fetchSlots} setMessage={setMessage} />
        <ParkVehicle fetchSlots={fetchSlots} setMessage={setMessage} />
        <RemoveVehicle fetchSlots={fetchSlots} setMessage={setMessage} />
      </div>

      <SlotList slots={slots} />

      {message && (
        <div className="mt-4 p-3 bg-blue-100 text-blue-800 rounded">
          {message}
        </div>
      )}
    </div>
  );
}

export default App;
