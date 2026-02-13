// import React from 'react'
// import styles from '../style/Five.module.css'
// function Five() {
//   return (
//     <>
//       <div className={styles.container}>
//       <h1>अभियान तालिका</h1>
//       <div className={styles.tableContainer}>
//         <h2>दिन - 25 माघ 2083</h2>
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>समय</th>
//               <th>स्थान</th>
//               <th>कार्यक्रम</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>10:00 बजे बिहान</td>
//               <td>कैलाली नगरपालिका 4</td>
//               <td>मत माग्ने सभा</td>
//             </tr>
//             <tr>
//               <td>12:30 बजे दिउँसो</td>
//               <td>कालिका चौक, महेन्द्रनगर</td>
//               <td>घरदैलो भेटघाट</td>
//             </tr>
//             <tr>
//               <td>3:50 बजे साँझ</td>
//               <td>भट्टपुर बजार</td>
//               <td>मत माग्ने सभा</td>
//             </tr>
//             <tr>
//               <td>10:00 बजे बिहान</td>
//               <td>कैलाली नगरपालिका 4</td>
//               <td>मत माग्ने सभा</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <button className={styles.button}>सम्पूर्ण तालिका हेर्नुहोस्</button>
//     </div>
//     </>
//   )
// }

// export default Five

import React from "react";
import "../style/Five.css";

function Five() {
  return (
    <div className="campaign-container">
      {/* TOP HEADER (now above both left and right) */}
      <div className="campaign-top">
        <div className="campaign-header">
          <h1>अभियान तालिका</h1>
          <div className="header-line" />
          <div className="side">
            {/* If arrow.png is in public folder, use "/arrow.png" */}
            <img src="/arrow.png" alt="arrow" />
            <h4>सबै हर्नुस</h4>
          </div>
        </div>
      </div>

      {/* Main content (left + right) */}
      <div className="campaign-content">
        {/* Left Section (removed header from here) */}
        <div className="campaign-left">
          <div className="table-card">
            <div className="table-title">दिन - 25 माघ 2083</div>

            <table>
              <thead>
                <tr>
                  <th>समय</th>
                  <th>स्थान</th>
                  <th>कार्यक्रम</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="time">10:00 बजे बिहान</td>
                  <td>कैल्लाली नगरपालिका 4</td>
                  <td className="program">मत माग्ने सभा</td>
                </tr>

                <tr>
                  <td className="time">12:30 बजे दिउँसो</td>
                  <td>कालिका चौक, महेन्द्रनगर</td>
                  <td className="program">घरदैलो भेटघाट</td>
                </tr>

                <tr>
                  <td className="time">3:50 बजे साँझ</td>
                  <td>भटपुर बजार</td>
                  <td className="program">मत माग्ने सभा</td>
                </tr>

                <tr>
                  <td className="time">10:00 बजे बिहान</td>
                  <td>कैल्लाली नगरपालिका 4</td>
                  <td className="program">मत माग्ने सभा</td>
                </tr>
              </tbody>
            </table>

            <div className="btn-wrapper">
              <button className="view-btn">सम्पूर्ण तालिका हेर्नुहोस्</button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="campaign-right">
          {/* If Five.jpg is in public folder, use "/Five.jpg" */}
          <img src="/Five.jpg" alt="campaign" />
        </div>
      </div>
    </div>
  );
}

export default Five;
