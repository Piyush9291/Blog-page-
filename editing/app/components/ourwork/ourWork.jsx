"use client"
import { useState } from 'react'; // Import useState hook
import Image from 'next/image';
import styles from './style.module.css';
import Link from 'next/link';

export default function OurWork() {
  const [selectedCategory, setSelectedCategory] = useState('Podcasts'); // Set default category

  // Data for each category
  const categoryData = {
    Podcasts: [
      { src: '/priyanka.png', link: 'https://youtu.be/VTLCoHnyACE?si=j2z14W4fgD6bXET6', views: '2.4M+ Views' },
      { src: '/yuvraj.png', link: 'https://youtu.be/VTLCoHnyACE?si=j2z14W4fgD6bXET6', views: '75 Lakhs+ Views' },
      { src: '/1crore.png', link: '#', views: '1 Crore+ Views' }
    ],
    'Branded Content': [
      { src: '/branded1.png', link: '#', views: '1M+ Views' },
      { src: '/branded2.png', link: '#', views: '850K+ Views' },
      { src: '/branded3.png', link: '#', views: '900K+ Views' }
    ],
    Reels: [
      { src: '/reel1.png', link: '#', views: '500K+ Views' },
      { src: '/reel2.png', link: '#', views: '650K+ Views' },
      { src: '/reel3.png', link: '#', views: '800K+ Views' }
    ],
    Vlogs: [
      { src: '/vlog1.png', link: '#', views: '300K+ Views' },
      { src: '/vlog2.png', link: '#', views: '450K+ Views' },
      { src: '/vlog3.png', link: '#', views: '600K+ Views' }
    ],
    Infotainment: [
      { src: '/infotainment1.png', link: '#', views: '200K+ Views' },
      { src: '/infotainment2.png', link: '#', views: '350K+ Views' },
      { src: '/infotainment3.png', link: '#', views: '700K+ Views' }
    ]
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.OurWork}>Our Work</h2>
      <div className={styles.categories}>
        {Object.keys(categoryData).map(category => (
          <button
            key={category}
            className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.videos}>
        {categoryData[selectedCategory].map((video, index) => (
          <div key={index} className={styles.videoCard}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VTLCoHnyACE?si=iZAtRr_91d0UOAKo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <Link href={video.link}>
              <Image src={video.src} alt={selectedCategory} width={300} height={150} />
            </Link>
            <p>{video.views}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
