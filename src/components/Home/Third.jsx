import React from 'react'
import styles from '../style/Third.module.css'
function Third() {
  return (
    <>
      <div className={styles.line}>
      <h1 className={styles.title}>प्रेरणा र अनुभूति</h1>
      <div className={styles.box}></div>

     </div> 
     <div className={styles.container}>
     <div className={styles.wrapper}>
     
    
      <h2 className={styles.subtitle}>प्रेरणादायी भेट : रतन टाटा ज्यूसँगको सान्निध्य</h2>
      <p className={styles.paragraph}>
        करिब चार वर्षअघि मैले विश्वप्रसिद्ध उद्योगपति तथा मानवतावादी स्वर्गीय रतन
        टाटा ज्यूसँग भेट गर्ने अवसर पाएको थिएँ, र त्यो मेरो जीवनको अमूल्य स्मृतिमध्ये
        एक हो।
      </p>
      <p className={styles.paragraph}>
        मेरो अनुभवमा, त्यो भेट केवल औपचारिक शिष्टाचारमा सीमित थिएन; यसले
        नेतृत्व, मानवता र सेवाभावको वास्तविक अर्थ बुझ्ने प्रेरणादायी अनुभव पनि
        दिएको थियो। सादगी, गहिरो सोच र अपार नम्रताको प्रतीक रतन टाटा ज्यूसँगको
        संवाद र सान्निध्यले मलाई अझ जिम्मेवार नागरिक र समाजप्रति संवेदनशील
        व्यक्तिका रुपमा अघि बढ्न ऊर्जा दियो।
      </p>
      <button className={styles.button}>पूरा पढ्नुहोस्</button>
      </div>
      <div className={styles.img}>
        <img src="Tata.png" alt="" />
      </div>
    </div>
    </>
  )
}

export default Third


