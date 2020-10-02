import CarouselItem from './CarouselItem/CarouselItem';

import styles from './Carousel.module.scss';
import {useState} from 'react';

const Carousel = () => {
  const [currentPicture, setCurrentPicture] = useState({
    img: '/assets/images/carousel_img_steam.jpg',
    text1: 'Design concept',
    text2: 'Steam - website and mobile app',
  });

  const [nextPicture, setNextPicture] = useState({
    img: '/assets/images/carousel_img_shipt.jpg',
    text1: 'UX/UI design',
    text2: 'Shipt - Food delivery app',
  });

  const clickHandler = () => {
    if (
      currentPicture.img === '/assets/images/carousel_img_steam.jpg' &&
      currentPicture.text1 === 'Design concept' &&
      currentPicture.text2 === 'Steam - website and mobile app'
    ) {
      setCurrentPicture({
        img: '/assets/images/carousel_img_shipt.jpg',
        text1: 'UX/UI design',
        text2: 'Shipt - Food delivery app',
      });
      setNextPicture({
        img: '/assets/images/carousel_img_steam.jpg',
        text1: 'Design concept',
        text2: 'Steam - website and mobile app',
      });
    } else if (
      currentPicture.img === '/assets/images/carousel_img_shipt.jpg' &&
      currentPicture.text1 === 'UX/UI design' &&
      currentPicture.text2 === 'Shipt - Food delivery app'
    ) {
      setCurrentPicture({
        img: '/assets/images/carousel_img_steam.jpg',
        text1: 'Design concept',
        text2: 'Steam - website and mobile app',
      });
      setNextPicture({
        img: '/assets/images/carousel_img_shipt.jpg',
        text1: 'UX/UI design',
        text2: 'Shipt - Food delivery app',
      });
    }
  };

  return (
    <section className={styles.Carousel}>
      <div className={styles.CarouselHeading}>
        <h2>Ukázky referencí</h2>
        <a href='#'>Zobrazit vše</a>
      </div>
      <CarouselItem currentPicture={currentPicture} nextPicture={nextPicture} />
      <button className={styles.CarouselButton} onClick={clickHandler}>
        <img
          src='/assets/svg/arrow.svg'
          alt='arrow for slide switch'
          width='21'
          height='18'
        />
      </button>
    </section>
  );
};

export default Carousel;
