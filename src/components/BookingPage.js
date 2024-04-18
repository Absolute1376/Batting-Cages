import React, { useState } from "react";
import '../styles/BookingPage.css';


 
const BookingPage = () => {
    // State to hold booking details
    const [bookingDetails, setBookingDetails] = useState({
        date: '',
        time: '',
        cageType: '',
        equipment: false
    });

    // Handle change in form inputs
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setBookingDetails(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Booking Details:', bookingDetails);
        // Here you would typically send the booking details to your server via an API
        alert('Booking Successful!');
    };

    return (
        <div className="booking">
            <h1>Book a Cage</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={bookingDetails.date}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Time:
                    <input
                        type="time"
                        name="time"
                        value={bookingDetails.time}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Cage Type:
                    <select
                        name="cageType"
                        value={bookingDetails.cageType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a cage type</option>
                        <option value="standard">Standard</option>
                        <option value="premium">Premium</option>
                    </select>
                </label>
                <label>
                    Rent Equipment:
                    <input
                        type="checkbox"
                        name="equipment"
                        checked={bookingDetails.equipment}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit Booking</button>
            </form>
        </div>
    );
};
    
    

 export default BookingPage;