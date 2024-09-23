import Image from 'next/image';
import styles from './style.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}> 
    
          <div className={styles.imageContainer}>
            <Image src="/logo.png" alt="" width={50} height={50} />
          </div>
          <p>Abhishek Verma</p>
        </div>
        <Link href={"./login"}><button className={styles.loginButton}>Login</button></Link>
        
        
      </header>
      
      <section className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1>Your Online Repuation Management Expert </h1>
          <h2>From Damage Control to Reputation Excellence</h2>
          <button className={styles.joinButton}>Hire Me</button>
          <div className={styles.avatars}>
            <div className={styles.avatar}>
              <Image src="/avatar1.jpg" alt="" width={40} height={40} />
            </div>
            <div className={styles.avatar}>
              <Image src="/avatar2.jpg" alt="" width={40} height={40} />
            </div>
            <div className={styles.avatar}>
              <Image src="/avatar3.jpg" alt="" width={40} height={40} />
            </div>
          </div>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.teamImage}>
            <Image src="/team-image.png" alt="" width={500} height={300} />
          </div>
          <button className={styles.playButton}>
            <Image src="/play-icon.png" alt="" width={20} height={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
