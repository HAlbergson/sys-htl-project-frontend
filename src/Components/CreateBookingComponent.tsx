import React, { useState } from "react";
import Draggable from "react-draggable";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";

const CreateBooking = ({ open, handleClose, handleBookingSubmit, roomID, roomType }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const handleSubmit = () => {
    const booking = {
      numberOfGuests,
      room: {
        roomID,
        roomType,
      },
      arrivalDate,
      departureDate,
      email,
      name,
    };
    handleBookingSubmit(booking);
  };

  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Dialog open={open} onClose={handleClose} hideBackdrop>
        <div>
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            Book a Room
          </DialogTitle>
          <DialogContent>
            <TextField fullWidth label="Name" margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField fullWidth label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField fullWidth label="Number of Guests" margin="normal" type="number" value={numberOfGuests} onChange={(e) => setNumberOfGuests(parseInt(e.target.value))} />
            <TextField fullWidth label="Check-in Date" type="date" margin="normal" InputLabelProps={{ shrink: true }} value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} />
            <TextField fullWidth label="Check-out Date" type="date" margin="normal" InputLabelProps={{ shrink: true }} value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary" variant="contained">
              Book Now
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </Draggable>
  );
};

export default CreateBooking;
