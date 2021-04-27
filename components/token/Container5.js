import React from 'react';
import Image from 'next/image';
import styles from './Container5.module.css';

const Container5 = ({ id, descriptions }) => {
  // Filter container specific descriptions
  const description = descriptions.filter((desc) => desc.id === id);

  // Check if a number is odd
  const isOdd = (num) => num % 2 === 1;

  // Set the background color of the container depending on its id
  const background = isOdd(id) ? 'normal_container' : 'normal_container grey';

  return (
    <div
      className={background}
      id="coinbase"
    >
      <div className={`${styles.container} sm:items-center sm:flex-col sm:py-16 lg:pt-8 lg:justify-center xl:justify-center`}>
        <div className={`${styles.main} sm:w-full sm:items-center lg:pt-32`}>
          <h1
            data-aos="fade-up"
            data-aos-duration="300"
            className={`${styles.title} sm:leading-9 sm:text-4xl sm:text-center sm:w-80 lg:text-5xl lg:w-96 leading-12 xl:leading-13`}
          >
            {description[0].title}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="300"
            className={`${styles.subtitle} sm:text-xl sm:text-center sm:w-84 lg:text-xl lg:w-100`}
          >
            {description[0].subtitle}
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="300"
            className={`${styles.subtitle} sm:text-xl sm:text-center sm:w-84 lg:text-xl lg:w-102`}
          >
            {description[0].subtitle2}
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className={`${styles.button_container} lg:mt-16`}
          >
            <a
              href="https://wallet.coinbase.com/"
              target="_blank"
              className={`${styles.button1} ${styles.appstore} lg:text-xs lg:h-8 lg:w-32`}
              rel="noreferrer"
            >
              <img
                className="mr-2"
                src="/images/1440/Token/Section 5/apple app store.svg"
              />
              {description[0].button1}
            </a>

            <a
              href="https://wallet.coinbase.com/"
              target="_blank"
              className={`${styles.button2} ${styles.appstore} lg:text-xs lg:h-8 lg:w-32`}
              rel="noreferrer"
            >
              <img
                className="mr-2 mt-1"
                src="/images/1440/Token/Section 5/google play store.svg"
              />
              {description[0].button2}
            </a>
          </div>
        </div>

        <div className={`${styles.image} sm:w-11/12 sm:mt-24 lg:pt-24 lg:w-4/12 xl:ml-20`}>
          <Image
            src="/images/1440/Token/Section 5/Coinbase graphic.webp"
            width={560}
            height={612}
          />
        </div>
      </div>
    </div>
  );
};

export default Container5;
