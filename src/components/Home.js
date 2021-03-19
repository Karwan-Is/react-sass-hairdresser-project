import React from 'react'
import banner from '../images/banner.jpg'
import haircut from '../images/haircut.jpg'
import trim from '../images/beard_trim.png'
import twoel from '../images/hot_towel.jpg'
import wax from '../images/wax.webp'
import bottom_banner from '../images/bottom-banner.jpg'

const Home = () => {
    return (
        <div>
            <div className="banner">
                <img src={banner} alt=""></img>
                <h2>Finding a Barber is like finding a good Lawyer - you gotta go to the same guy!</h2>
            </div>
            <div className="service-wrap">
                <h2>SERVICES</h2>
                <p>Our highly experienced team at Hairdresser have extensive knowledge of the barbering trade and we have created a menu of First class services designed to ensure you receive a high quality personal service from start to finish.</p>
            </div>
            <div className="services">
                <section>
                    <img src={haircut} alt=""></img>
                    <p>Haircut</p>
                </section>
                <section>
                    <img src={trim} alt=""></img>
                    <p>Beard Trim & Shape Up</p>
                </section>
                <section>
                    <img src={twoel} alt=""></img>
                    <p>Hot Towel Shave</p>
                </section>
                <section>
                    <img src={wax} alt=""></img>
                    <p>Nose & Ear Wax</p>
                </section>
            </div>
            <div className="bottom-banner">
                <img src={bottom_banner} alt=""></img>
                <div className="price-list">
                    <h1>Price List</h1>
                    <div>
                        <h3>Wash</h3>
                        <h2>£3</h2>
                    </div>
                    <div>
                        <h3>Haircut and Wash</h3>
                        <h2>£12</h2>
                    </div>
                    <div>
                        <h3>Skin Fade</h3>
                        <h2>£14</h2>
                    </div>
                    <div>
                        <h3>Beard Trim & Shape Up</h3>
                        <h2>£9</h2>
                    </div>
                    <div>
                        <h3>Hot Towel Shave</h3>
                        <h2>£12</h2>
                    </div>
                    <div>
                        <h3>Kids Under 12</h3>
                        <h2>£10</h2>
                    </div>
                    <div>
                        <h3>Face Mask</h3>
                        <h2>£5</h2>
                    </div>
                    <div>
                        <h3>Ear Wax</h3>
                        <h2>£2</h2>
                    </div>
                    <div>
                        <h3>Nose</h3>
                        <h2>£2</h2>
                    </div>
                    <h1>Hairdressers</h1>
                </div>
            </div>
            <div className="opening">
                <h3>Opening Hours</h3>
                <div>
                    <p>Monday</p>
                    <span>09:00 - 07:00</span>
                </div>
                <div>
                    <p>Tuesday</p>
                    <span>09:00 - 07:00</span>
                </div>
                <div>
                    <p>Wednesday</p>
                    <span>09:00 - 07:00</span>
                </div>
                <div>
                    <p>Thursday</p>
                    <span>09:00 - 07:00</span>
                </div>
                <div>
                    <p>Friday</p>
                    <span>09:00 - 07:00</span>
                </div>
                <div>
                    <p>Saturday</p>
                    <span>09:00 - 06:00</span>
                </div>
                <div>
                    <p>Sunday</p>
                    <span>10:00 - 04:00</span>
                </div>
            </div>
        </div>
    )
}

export default Home