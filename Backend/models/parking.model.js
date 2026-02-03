import mongoose from "mongoose";
const parkingSlotSchema = new mongoose.Schema({
  slotNo: {
    type: Number,
    required: true,
    unique: true
  },
  isCovered: {
    type: Boolean,
    required: true
  },
  isEVCharging: {
    type: Boolean,
    required: true
  },
  isOccupied: {
    type: Boolean,
    default: false
  }
});

const Parking =  mongoose.model("Parking", parkingSlotSchema);
export default Parking