import React from 'react'
import Footer from '../Home/Footer';


const galleryData = [
  {
    id: 1,
    image: "/src/assets/images/Cardsimg.png",
  },
  {
    id: 2,
    image: "/src/assets/images/Cardsimg.png",
  },
  {
    id: 3,
    image: "/src/assets/images/Cardsimg.png",
  },
   {
    id: 4,
    image: "/src/assets/images/Cardsimg.png",
  },
   {
    id: 5,
    image: "/src/assets/images/Cardsimg.png",
  },
];

function Realated() {
  return (
   <>
       <div className="gallery-heading">
        <h1 className="gallery-title">
          ग्यालेरी <div className="line"></div>

        </h1>
        <p className='p'>कैलाली क्षेत्र नम्बर - ४ का युवा साथिभाइहरु सङ्गको भेटघाट कार्यक्रम केही झलकहरू</p>

        <div className="gallery-container">
          <div className="gallery-grid">
            {galleryData.map((item) => (
              <div
                className="gallery-card"
                key={item.id}
                onClick={() => setSelectedGallery(item)}
              >

                  <img src={item.image} alt="news" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
   </>
  )
}

export default Realated