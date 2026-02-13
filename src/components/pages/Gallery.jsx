import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/gallery.css";
import VolunteerCard from "../Home/Volunteercard";
import Footer from "../Home/Footer";

const galleryData = [
  {
    id: 1,
    title: "कैलाली क्षेत्र नम्बर - ४ का युवा साथिभाइहरु सङ्गको भेटघाट कार्यक्रम",
    image: "/src/assets/images/Cardsimg.png",
  },
  {
    id: 2,
    title: "कैलाली क्षेत्र नम्बर - ४ का युवा साथिभाइहरु सङ्गको भेटघाट कार्यक्रम",
    image: "/src/assets/images/Cardsimg.png",
  },
  {
    id: 3,
    title: "कैलाली क्षेत्र नम्बर - ४ का युवा साथिभाइहरु सङ्गको भेटघाट कार्यक्रम",
    image: "/src/assets/images/Cardsimg.png",
  },
    {
    id: 4,
    title: "कैलाली क्षेत्र नम्बर - ४ का युवा साथिभाइहरु सङ्गको भेटघाट कार्यक्रम",
    image: "/src/assets/images/Cardsimg.png",
  },
    {
    id: 5,
    title: "कैलाली क्षेत्र नम्बर - ४ का युवा साथिभाइहरु सङ्गको भेटघाट कार्यक्रम",
    image: "/src/assets/images/Cardsimg.png",
  },
];

function Gallery() {
  const [selectedGallery, setSelectedGallery] = useState(null);

  return (
    <>
      <div className="gallery-heading">
        <h1 className="gallery-title">
          ग्यालेरी <div className="line"></div>
        </h1>

        <div className="gallery-container">
          <div className="gallery-grid">
            {galleryData.map((item) => (
              <div
                className="gallery-card"
                key={item.id}
                onClick={() => setSelectedGallery(item)}
              >
                <Link to={`/related/${item.id}`}>
                  <img src={item.image} alt="news" />
                </Link>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <VolunteerCard />
      <Footer />
    </>
  );
}

export default Gallery;
