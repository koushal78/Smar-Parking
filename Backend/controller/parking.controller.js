import Parking from "../models/parking.model.js";

export const AddParkingSlote = async(req,res)=>{
 try {
    const { slotNo, isCovered, isEVCharging } = req.body;

    if (slotNo === undefined) {
      return res.status(400).json({ message: "Slot number required" });
    }

    const exists = await Parking.findOne({ slotNo });
    if (exists) {
      return res.status(400).json({ message: "Slot already exists" });
    }

    const newSlot = await Parking.create({
      slotNo,
      isCovered,
      isEVCharging
    });

    res.status(201).json({
      message: "Slot added",
      slot: newSlot
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

export const viewParking = async(req,res)=>{
    try {
    const slots = await Parking.find().sort({ slotNo: 1 });
    res.json(slots);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

export const ParkVehical = async(req,res)=>{
     try {
    const { needsEV, needsCover } = req.body;

    const slot = await Parking.findOne({
      isOccupied: false,
      ...(needsEV && { isEVCharging: true }),
      ...(needsCover && { isCovered: true })
    }).sort({ slotNo: 1 });

    if (!slot) {
      return res.status(404).json({ message: "No slot available" });
    }

    slot.isOccupied = true;
    await slot.save();

    res.json({
      message: "Vehicle parked",
      slotNo: slot.slotNo
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

export const removeVehical = async(req,res)=>{
     try {
    const { slotNo } = req.body;

    const slot = await Parking.findOne({ slotNo });

    if (!slot) {
      return res.status(404).json({ message: "Slot not found" });
    }

    if (!slot.isOccupied) {
      return res.status(400).json({ message: "Slot already empty" });
    }

    slot.isOccupied = false;
    await slot.save();

    res.json({ message: `Slot ${slotNo} is now free` });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}
