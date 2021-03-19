import React from 'react'

const Booking = () => {
    return (
        <div className="booking">
            <h2>Book Your Favourite Barber</h2>
            <form>
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Barber's Name"></input>
                <input type="date"></input>
                <div className="service-request">

                </div>
                <select className="service-type">
                    <option>Service Type</option>
                    <option>Haircut</option>
                    <option>Skin Fade</option>
                    <option>Beard Trim or Shape Up</option>
                    <option>Beard Trim and Shape Up</option>
                    <option>Hot Towel Shave</option>
                    <option>Face Mask</option>
                    <option>Waxing</option>
                </select>
                <div className="select">
                    <select>
                        <option >Hour</option>
                        <option >09</option>
                        <option >10</option>
                        <option >11</option>
                        <option >12</option>
                        <option >13</option>
                        <option >14</option>
                        <option >15</option>
                        <option >16</option>
                        <option >17</option>
                        <option >18</option>
                    </select>
                    <select>
                        <option >Min</option>
                        <option >00</option>
                        <option >10</option>
                        <option >20</option>
                        <option >30</option>
                        <option >40</option>
                        <option >50</option>
                    </select>
                </div>
                <button>Book</button>
            </form>
        </div>
    )
}

export default Booking