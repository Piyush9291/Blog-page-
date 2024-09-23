import Image from 'next/image';
import styles from './styles.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="" width={50} height={50} />
        </div>
        <h1 className={styles.logintext}>Continue to use BeerBiceps SkillHouse</h1>
        <p className={styles.logintextDesc}>Welcome back! Please enter your details.</p>
        <div className={styles.inputGroup}>
        <span>+91</span>
          <input type="text" placeholder="Enter mobile" className={styles.inputbox} />
        </div>
        <button className={styles.otpButton}>Request OTP</button>
        <p className={styles.loginText}>
          OR, <a href="#">Login using Email</a>
        </p>
      </div>
      <footer className={styles.footer}>
        <p>BeerBiceps SkillHouse 2024. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Help Centre</a>
        </div>
      </footer>
    </div>
  );
}
