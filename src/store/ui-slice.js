import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    reservationIsVisible: false,
    contactIsVisible: false,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleReservation(state) {
      state.reservationIsVisible = !state.reservationIsVisible;
    },
    toggleContact(state) {
      state.contactIsVisible = !state.contactIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
