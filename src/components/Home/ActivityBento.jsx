import React from "react";
import "../style/ActivityBento.css";

const ActivityBento = () => {
  // replace these paths with your real images in public/images
  const mainImg = "Activity.jpg";
  const thumb1 = "Activity.jpg";
  const thumb2 = "Activity.jpg";

  return (
    <section className="activity-section">
      {/* Header */}
      <div className="activity-header">
        <h2 className="activity-title">गतिविधि</h2>
        <div className="activity-line" />
        <div className="activity-all">
          <button className="circle-arrow" aria-label="see all">➜</button>
          <span>सबै हर्नुस</span>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="bento-grid">
        {/* Large card (left) */}
        <article className="big-card">
          <div className="big-img-wrap">
            <img src={mainImg} alt="मुख्य कार्यक्रम" />
          </div>

          <div className="big-caption">
            <time className="date">8th February 2026</time>
            <h3 className="big-title">
              कैलाली क्षेत्र नम्बर - ४ का युवा साथीहरु सङ्गको भेटघाट कार्यक्रम
            </h3>
          </div>
        </article>

        {/* Right column: small stacked cards */}
        <div className="small-col">
          <article className="small-card">
            <div className="small-img-wrap">
              <img src={thumb1} alt="सहयोग सभा 1" />
            </div>
            <h4 className="small-title">
              कैलाली क्षेत्र नम्बर - ४ का युवा साथीहरु सङ्गको भेटघाट कार्यक्रम
            </h4>
          </article>

          <article className="small-card">
            <div className="small-img-wrap">
              <img src={thumb2} alt="सहयोग सभा 2" />
            </div>
            <h4 className="small-title">
              कैलाली क्षेत्र नम्बर - ४ का युवा साथीहरु सङ्गको भेटघाट कार्यक्रम
            </h4>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ActivityBento;
