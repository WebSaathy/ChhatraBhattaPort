import React, { useState, useEffect, useRef } from "react";
import "../style/VotingSteps.scss";

const LeftIcon = () => (
  <svg viewBox="0 0 64 64" width="90" height="90">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="18" cy="22" r="6" />
      <rect x="8" y="30" width="20" height="18" rx="3" />
      <path d="M32 18h18v28H32" />
    </g>
  </svg>
);

const CenterIcon = () => (
  <svg viewBox="0 0 64 64" width="150" height="150">
    <g fill="none" stroke="currentColor" strokeWidth="2.4">
      <rect x="10" y="6" width="44" height="52" rx="6" />
      <path d="M44 6v12a4 4 0 0 0 4 4h6" />
      <circle cx="32" cy="34" r="8" />
    </g>
  </svg>
);

const RightIcon = () => (
  <svg viewBox="0 0 64 64" width="80" height="80">
    <g fill="none" stroke="currentColor" strokeWidth="3">
      <rect x="6" y="12" width="40" height="36" rx="4" />
      <rect x="18" y="24" width="22" height="14" rx="2" />
    </g>
  </svg>
);

function ImageWithFallback({ src, fallback }) {
  const [error, setError] = useState(false);

  if (error) {
    return <div className="svg-fallback">{fallback}</div>;
  }
  return (
    <img
      src={src}
      alt=""
      className="icon-img"
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}

const slides = [
  {
    id: 0,
    title: "Step 1:",
    subtitle: "मत दिनको तयारी गर्नुहोस्।",
    img: "step1.svg",
    fallback: <LeftIcon />,
  },
  {
    id: 1,
    title: "Step 2:",
    subtitle: "भोट पत्रमा उचित चिन्ह लगाउनुहोस्।",
    img: "step2.png",
    fallback: <CenterIcon />,
  },
  {
    id: 2,
    title: "Step 3:",
    subtitle: "भोट बक्समा राख्नुहोस्।",
    img: "step3.svg",
    fallback: <RightIcon />,
  },
];

export default function VotingSteps({ autoplay = false, autoplayDelay = 4000 }) {
  const [index, setIndex] = useState(1); // default to center (Step 2)
  const len = slides.length;
  const timerRef = useRef(null);

  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % len);
    }, autoplayDelay);
    return () => clearInterval(timerRef.current);
  }, [autoplay, autoplayDelay, len]);

  function goPrev() {
    setIndex((prev) => (prev - 1 + len) % len);
  }

  function goNext() {
    setIndex((prev) => (prev + 1) % len);
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []); // only once

  // IMPORTANT: wrapperWidth is len * 100%,
  // and transform percent is relative to wrapper width so we use (-index * 100 / len)%
  const wrapperWidth = `${len * 100}%`;
  const translatePercent = `${(-index * 100) / len}%`;

  return (
    <section className="voting-section" aria-roledescription="carousel">
      <div className="voting-inner">
        <div className="voting-head">
          <h2>मलाई कसरी भोट गर्न?</h2>
          <p>आउँदो चुनावमा मलाई भोट गर्न सिक्नुस्।</p>
        </div>

        <div className="voting-stage">
          <div
            className="slides"
            style={{
              width: wrapperWidth,
              transform: `translateX(${translatePercent})`,
            }}
          >
            {slides.map((s, i) => (
              <div
                key={s.id}
                className={`slide ${i === index ? "active" : ""} ${
                  i < index ? "left" : i > index ? "right" : ""
                }`}
                style={{ flex: `0 0 ${100 / len}%` }} // make each slide equal to visible width
              >
                <div className="icon-wrap">
                  <ImageWithFallback src={s.img} fallback={s.fallback} />
                </div>
                <div className="step-copy">
                  <h3>{s.title}</h3>
                  <p>{s.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="voting-controls">
          <button className="ctrl left" onClick={goPrev} aria-label="Previous">
            ‹
          </button>

          <div className="dots" role="tablist" aria-label="Steps">
            {slides.map((s, i) => (
              <button
                key={s.id}
                className={`dot ${i === index ? "on" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Step ${i + 1}`}
                aria-selected={i === index}
                role="tab"
              />
            ))}
          </div>

          <button className="ctrl right" onClick={goNext} aria-label="Next">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
