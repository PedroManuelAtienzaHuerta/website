import React from 'react';
import styles from './Container4.module.css';

const Container4 = ({ id, descriptions }) => {
  const description = descriptions.filter((desc) => desc.id === id);

  return (
    <div
      className={`${styles.background} sm:p-0 sm:items-center sm:pt-24 sm:pb-12`}
    >
      <div>
        <h1
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="500"
          className={`${styles.title} sm:text-5.5xl`}
        >
          {description[0].title}
        </h1>

        <p
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="500"
          className={`${styles.subtitle} sm:text-2xl`}
        >
          {description[0].subtitle}
        </p>
      </div>

      <div>
        <h1
          data-aos="fade-right"
          data-aos-delay="150"
          data-aos-duration="500"
          className={`${styles.title} sm:text-5.5xl`}
        >
          {description[0].title2}
        </h1>

        <p
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="500"
          className={`${styles.subtitle} sm:text-2xl`}
        >
          {description[0].subtitle2}
        </p>
      </div>

      <div>
        <h1
          data-aos="fade-right"
          data-aos-delay="250"
          data-aos-duration="500"
          className={`${styles.title} sm:text-5.5xl`}
        >
          {description[0].title3}
        </h1>

        <p
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="500"
          className={`${styles.subtitle} sm:text-2xl`}
        >
          {description[0].subtitle3}
        </p>
      </div>
    </div>
  );
};

export default Container4;
