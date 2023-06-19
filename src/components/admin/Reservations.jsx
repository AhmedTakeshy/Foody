import React from 'react'

const Reservations = ({ reservations }) => {

    const formatDateAndTime = (dateString, timeString) => {
        // Create a Date object from the given date and time strings
        const dateTime = new Date(`${dateString}T${timeString}`);

        // Get the month abbreviation (e.g., JAN)
        const monthAbbreviation = dateTime.toLocaleString('en-US', { month: 'short' }).toUpperCase();

        // Get the day of the month
        const day = dateTime.getDate();

        // Get the hour in 12-hour format
        let hour = dateTime.getHours() % 12;
        hour = hour === 0 ? 12 : hour;

        // Get the AM/PM indicator
        const ampm = dateTime.getHours() >= 12 ? 'PM' : 'AM';

        // Get the minutes
        const minutes = dateTime.getMinutes().toString().padStart(2, '0');

        return `${monthAbbreviation}\n${day}\n${hour} ${ampm}\n${minutes}`;
    };


    return (
        <div className="mx-auto grid items-center justify-center lg:grid-cols-2 md:gap-6 gap-4 mt-12">
            {reservations.map((reservation) => {
                const newDate = formatDateAndTime(reservation.date, reservation.time);
                return (
                    <div key={reservation.id} className="flex flex-col w-full bg-white rounded shadow-lg dark:bg-transparent">
                        <div className="flex flex-col w-full md:flex-row ">
                            <div className="flex flex-row justify-around p-4 font-bold leading-none dark:rounded-r-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                                <div className="md:text-3xl">{newDate.split("\n")[0]}</div>
                                <div className="md:text-6xl">{newDate.split("\n")[1]}</div>
                                <div className="md:text-xl">{newDate.split("\n")[2]}</div>
                                <div className="md:text-xl">{newDate.split("\n")[3]}</div>
                            </div>
                            <div className="p-4 font-normal dark:text-white text-gray-800 md:w-3/4 dark:border border-[#ccc] dark:rounded dark:rounded-l-none">
                                <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight dark:text-white text-gray-800"><b>Reservation for: </b>{reservation.name}</h1>
                                <p className="leading-normal"><b>Table No.</b> {reservation.tableNumber}</p>
                                <p className="leading-normal"><b>Attended People:</b> {reservation.numberOfPeople}</p>
                                <p className='leading-normal mt-4'><b>Note: </b>{reservation.note}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Reservations