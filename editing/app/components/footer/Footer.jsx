import styles from './style.module.css'

function Footer(){
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <h2>Let's Keep the Conversation Going</h2>
        <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quibusdam eius officiis.
          Rerum voluptatibus eos quas explicabo asperiores, error quam possimus doloremque exercitationem,
           dicta neque, veritatis quia cumque dolorem ipsum?
        </p>
        <div className={styles.icon}>
          <a href="" >
            <img src="" alt="Instagram" className={styles.img} />
            Instagram
          </a>
          <a href="">
            <img src="" alt="YouTube" className={styles.img} />
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
