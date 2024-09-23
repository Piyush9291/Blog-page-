import Image from 'next/image';
import styles from './style.module.css';

function AboutSection() {
  return (
    <section className={styles.container}>
      <div className={styles.Abouttext}>
        <h1 className={styles.heading}>Hey,<br /> I’m Abhishek Verma<br /><span>Aka Digital Monk</span> </h1>
        <p className={styles.about}>
          Top-Rated Online Reputation Management and SEO Expert
          Completed More than 100 Online Reputation Management & SEO Projects
          With over 7+ years of SEO and ORM Online Reputation Management Services experience, I can manage multiple small or large projects at once.
        </p>
        <p className={styles.about}>
          Are you concerned about negative online reviews, feedback, comments, images, or videos that are harming your personal reputation or business branding? Whether these issues are on sites like Ripoff Report, Complaint Dashboard, Pissed Consumer, Scam, Complaints Board, Yelp, blogs, or news articles and forums, I can help. By pushing down negative content and eliminating high-ranking negative BBB ratings from Google search results, I can improve your online reputation, increase trust, and boost your leads and sales
        </p>
      </div>

      <div className={styles.aboutimg}>
        <Image src="" alt="" width={500} height={500} />
      </div>
    </section>
  );
}

export default AboutSection;