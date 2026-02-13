// import { useState } from 'react'
// import styles from '../style/Navbar.module.css'

// function Navbar() {
//   const [open, setOpen] = useState(false)

//   return (
//     <div className={styles.container}>
//       {/* Top row */}
//       <div className={styles.topRow}>
//         <div className={styles.logoContainer}>
//           <img src="/NavLogo.png" alt="Logo" className={styles.logo} />
//           <h1 className={styles.title}>छत्रबहादुर भट्ट</h1>
//         </div>

//         {/* Hamburger */}
//         <div
//   className={styles.hamburger}
//   onClick={() => setOpen(!open)}
// >
//   <span className={open ? styles.line1Open : ''}></span>
//   <span className={open ? styles.line2Open : ''}></span>
//   <span className={open ? styles.line3Open : ''}></span>
// </div>

//       </div>

//       {/* Menu */}
//       <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
//         <a href="#" className={styles.navLink}>मेरो परिचय</a>
//         <a href="#" className={styles.navLink}>दृष्टि, मिशन र प्रतिबद्धता</a>
//         <a href="#" className={styles.navLink}>काम र उपलब्धिहरु</a>
//         <a href="#" className={styles.navLink}>समाचार तथा गतिविधि</a>
//         <a href="#" className={styles.navLink}>ग्यालेरी</a>

//         <button className={styles.contactButton}>
//           सम्पर्क गर्नुहोस्
//         </button>
//       </nav>
//     </div>
//   )
// }

// export default Navbar

import { useState } from 'react'
import styles from '../style/Navbar.module.css'
import ContactInfo from './Topbar'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
    <ContactInfo/>
    <div className={styles.container}>
      {/* TOP ROW */}
      <div className={styles.topRow}>
        <div className={styles.logoContainer}>
          <img src="/NavLogo.png" alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>छत्रबहादुर भट्ट</h1>
        </div>

        {/* HAMBURGER */}
        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          <span className={open ? styles.line1Open : ''}></span>
          <span className={open ? styles.line2Open : ''}></span>
          <span className={open ? styles.line3Open : ''}></span>
        </div>
      </div>

      {/* NAV */}
      <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
        <div className={styles.links}>

        
        <a href="#" className={styles.navLink}>मेरो परिचय</a>
        <a href="#" className={styles.navLink}>दृष्टि, मिशन र प्रतिबद्धता</a>
        <a href="#" className={styles.navLink}>काम र उपलब्धिहरु</a>
        <a href="#" className={styles.navLink}>समाचार तथा गतिविधि</a>
        <a href="#" className={styles.navLink}>ग्यालेरी</a>
        </div>
        <button className={styles.contactButton}>
          सम्पर्क गर्नुहोस्
        </button>
      </nav>
    </div>
     </>
  )
}

export default Navbar
