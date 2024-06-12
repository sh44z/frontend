"use client"
import React, { useState } from 'react'

const BookingWidget = () => {
    const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('1');

  return (
    < div className="shadow p-4 rounded-2xl">
        <div className="text-2xl text-center">
        <b>Price Per Night:</b> £230
      </div>
      <div className="flex flex-col">
      <div className="bg-gray-100 py-4 px-4 rounded-2xl">
          <label>Check In: </label>
          <input type="date" value={checkIn} onChange={(ev) => setCheckIn(ev.target.value)} />
        </div>
        <div className="bg-gray-100 py-4 px-4 rounded-2xl">
          <label>Check Out:</label>
          <input type="date" value={checkOut} onChange={(ev) => setCheckOut(ev.target.value)} />
        </div>
        <div className="bg-gray-100 py-4 px-4 rounded-2xl">
          <label>Number of Guests:</label>
          <input type="number" value={numberOfGuests} onChange={(ev) => setNumberOfGuests(ev.target.value)} />
        </div>

      </div>

    </div>
  )
}

export default BookingWidget
