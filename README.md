
# Smart Parking Lot System

This is a full-stack web application that manages a parking lot and automatically allocates parking slots based on vehicle requirements.  
The system is designed to demonstrate backend logic, filtering and optimization, database usage, and a simple usable UI.

## Project Overview



### Add Parking Slots
Users create parking slots by providing the slot number, covered parking option, and EV charging availability.  
All slots are stored as **available by default**, and duplicate slot numbers are not allowed.

### View Parking Slots
The application displays all parking slots along with their features and current status (Available / Occupied).

### Park a Vehicle
The system automatically:
- Filters available slots
- Matches EV and covered parking requirements
- Selects the nearest suitable slot
- Marks it as occupied  

If no suitable slot is found, a message is returned.

### Remove a Vehicle
Users can remove a vehicle by entering the slot number.  
The system validates the slot and marks it as available again, showing errors for invalid cases.

## Live Link
Frontend:  
 https://smar-parking-1.onrender.com/
## Screensort

![Smart Parking UI](https://raw.githubusercontent.com/koushal78/Smar-Parking/main/frontend/public/img1.png)



## Demo Video

[▶️ Click here to watch the demo](https://user-images.githubusercontent.com/XXXX/demo.mp4)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI`=

`PORT`



