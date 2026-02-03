export default function SlotList({ slots }) {
  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Parking Slots</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Slot</th>
            <th className="border p-2">Covered</th>
            <th className="border p-2">EV</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {slots.map(slot => (
            <tr key={slot.slotNo}>
              <td className="border p-2">{slot.slotNo}</td>
              <td className="border p-2">{slot.isCovered ? "Yes" : "No"}</td>
              <td className="border p-2">{slot.isEVCharging ? "Yes" : "No"}</td>
              <td className="border p-2">
                {slot.isOccupied ? "Occupied" : "Available"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
