import styles from './CarouselItem.module.scss';

const CarouselItem = (props) => {
  return (
    <div className={styles.CarouselItemList}>
      <div className={styles.CarouselItem}>
        <img
          src={props.currentPicture.img}
          width='948'
          height='513'
          className={styles.CarouselItemImage}
        />
        <div className={styles.CarouselItemCaption}>
          <p>{props.currentPicture.text1}</p>
          <h3>{props.currentPicture.text2}</h3>
        </div>
      </div>

      <div className={styles.CarouselNextItem}>
        <div>
          <div className={styles.CarouselItemImageWrapper}>
            <img
              src='/assets/images/shade.png'
              alt='shade img'
              className={styles.Shade}
            />
            <img
              src={props.nextPicture.img}
              width='948'
              height='513'
              className={styles.CarouselItemImage}
            />
          </div>
          <div className={styles.CarouselItemCaption}>
            <p>{props.nextPicture.text1}</p>
            <h3>{props.nextPicture.text2}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
