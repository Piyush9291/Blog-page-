import styles from './style.module.css'

function Service() {
   return (
    
<div className={styles.container}>
<h1 className={styles.heading}> I can Protect Your <br /> <span>Online Reputation for:</span>  </h1>
    <ul className={styles.services}>
        <li className={styles.serviceItem}>Company/Organization Name</li>
        <li className={styles.serviceItem}>Product / Brand Name</li>
        <li className={styles.serviceItem}>Personal Name & Information</li>
        <li className={styles.serviceItem}>Online Videos Posted</li>
        <li className={styles.serviceItem}>Image & Pictures Posted Online</li>
    </ul>
    
    <div className={styles.review}>
    <div className={styles.reviewitem}>
          <p className={styles.icon}>✪</p>
          <p>5 Star Reviews</p>
        </div>
        
        <div className={styles.reviewitem}>
        <p className={styles.icon}>✌</p>
        <p>100% Job Success</p>
        </div>

        <div className={styles.reviewitem}>
        <p className={styles.icon}>⌚</p>
        <p>7+ Years Of Experience</p>
        </div>
    </div>
</div>

   )
}
    





















{/* <section className={styles.container}>
//              <div className={styles.Brandtext}>
//                  <h1 className={styles.heading}>I can Protect Your Online Reputation for:</h1>
//                 <div className={styles.Brandname}>
//                 <h2> . Company/Organization Name</h2>
//                 <h2> . Product / Brand Name</h2>
//                 <h2> . Personal Name & Information</h2>
//                 <h2> . Online Videos Posted</h2>
//                 <h2> . Image & Pictures Posted Online</h2>
//                 </div>
//              </div>

//              <div className={styles.reviews}>
//                  <p> ✪ 5 Start Reviews </p>
//                  <p>✌100% Job Success</p>
//                  <p>⌚7+ Years Of Experience</p>
//              </div>
//          </section> */}
//     )
// }


export default Service;