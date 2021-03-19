import React from 'react'
import hairct from '../images/gallery/haircut.jpg'
import skin_fade from '../images/gallery/skin_fade.jpg'
import beard_trim from '../images/gallery/beard_trim.jpg'
import hot_towel from '../images/gallery/hot_towel.jpg'
import kids from '../images/gallery/kids_haircut.jpg'
import face_mask from '../images/gallery/face_mask.jpg'
import wax from '../images/gallery/wax.jpg'

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="gallery-wrapper">
                <div className="gallery-photo">
                    <img src={hairct} alt=""></img>
                </div>
                <div className="gallery-description">
                    <h2>Haircut</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="gallery-wrapper">
                <div className="gallery-description">
                    <h2>Beard Trim and Shape Up</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="gallery-photo">
                    <img src={beard_trim} alt=""></img>
                </div>
            </div>
            <div className="gallery-wrapper">
                <div className="gallery-photo">
                    <img src={skin_fade} alt=""></img>
                </div>
                <div className="gallery-description">
                    <h2>Skin Fade</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="gallery-wrapper">
                <div className="gallery-description">
                    <h2>Hot Towel Shave</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="gallery-photo">
                    <img src={hot_towel} alt=""></img>
                </div>
            </div>
            <div className="gallery-wrapper">
                <div className="gallery-photo">
                    <img src={kids} alt=""></img>
                </div>
                <div className="gallery-description">
                    <h2>Kids Haircut</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="gallery-wrapper">
                <div className="gallery-description">
                    <h2>Face Mask</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="gallery-photo">
                    <img src={face_mask} alt=""></img>
                </div>
            </div>
            <div className="gallery-wrapper">
                <div className="gallery-photo">
                    <img src={wax} alt=""></img>
                </div>
                <div className="gallery-description">
                    <h2>Ears and Nose Wax</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    )
}

export default Gallery