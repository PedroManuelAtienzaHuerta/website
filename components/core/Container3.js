import React, { useState } from 'react';

import styles from './Container3.module.css';

const Container3 = ({ id, descriptions }) => {
  // Filter container specific descriptions
  const description = descriptions.filter((desc) => desc.id === id);

  // Check if a number is odd
  const isOdd = (num) => num % 2 === 1;

  const [setup, setSetup] = useState(true);
  const [dashboard, setDashboard] = useState(false);

  const onClickSetUp = () => {
    setup ? null : setSetup(true); setDashboard(false);
  };

  const onClickDashboard = () => {
    dashboard ? null : setDashboard(true); setSetup(false);
  };

  // Set the background color of the container depending on its id
  const background = isOdd(id) ? 'normal_container' : 'normal_container grey';

  return (
    <div
      className={background}
    >
      <div
        className={styles.container}
      >
        <div
          className={`${styles.main} items-center`}
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="500"
            className={`${styles.title1} sm:text-center sm:w-84 sm:text-4xl sm:mt-12 lg:text-5xl xl:mt-24`}
          >
            {description[0].title}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="500"
            className={`${styles.subtitle1} sm:text-center sm:w-10/12 sm:text-xl sm:mt-4 lg:text-lg lg:w-10/12 lg:pt-2`}
          >
            {description[0].subtitle}
          </p>
        </div>

        {
                    dashboard
                      ? (
                        <div
                          data-aos="fade-up"
                          data-aos-delay="150"
                          data-aos-duration="500"
                          className="sm:mt-4"
                        >
                          <img src="/images/1440/Core/Section 3/Core dashboard.webp" width={1008} height={658} />
                        </div>
                      )
                      : (
                        <div
                          data-aos="fade-up"
                          data-aos-delay="150"
                          data-aos-duration="500"
                          className="sm:mt-4"
                        >
                          <img src="/images/1440/Core/Section 3/Core interface.webp" width={1008} height={658} />
                        </div>
                      )
                }
      </div>

      <div
        className="grid grid-cols-2 gap-x-24 sm:hidden lg:py-16 xl:mb-40"
      >
        <div
          onClick={() => onClickSetUp()}
          className={dashboard ? `${styles.opacity} cursor-pointer flex flex-col items-center` : 'cursor-pointer flex flex-col items-center'}
        >
          <h1
            data-aos="fade-down"
            data-aos-delay="150"
            data-aos-duration="500"
            className={`${styles.title2} sm:text-3xl lg:text-5xl lg:w-84 lg:leading-tight`}
          >
            {description[0].title2}
          </h1>

          <p
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="500"
            className={`${styles.subtitle2} sm:text-lg sm:w-10/12 lg:text-lg lg:w-96`}
          >
            {description[0].subtitle3}
          </p>
          <div
            className={setup ? `${styles.line}` : 'hidden'}
          />
        </div>

        <div
          onClick={() => onClickDashboard()}
          className={dashboard ? 'cursor-pointer flex flex-col items-center sm:mt-12' : `${styles.opacity} cursor-pointer  flex flex-col items-center sm:mt-12`}
        >
          <h1
            data-aos="fade-down"
            data-aos-delay="150"
            data-aos-duration="500"
            className={`${styles.title2} sm:text-3xl lg:text-5xl lg:w-84 lg:leading-tight`}
          >
            {description[0].title3}
          </h1>

          <p
            data-aos="fade-down"
            data-aos-delay="150"
            data-aos-duration="500"
            className={`${styles.subtitle2} sm:text-lg sm:w-10/12 lg:text-lg lg:w-96`}
          >
            {description[0].subtitle4}
          </p>
          <div
            className={dashboard ? `${styles.line}` : 'hidden'}
          />
        </div>
      </div>

      <div
        className="hidden sm:flex sm:flex-col sm:mb-24"
      >
        <div
          className="flex flex-col items-center"
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="500"
            className={`${styles.title2} sm:text-3xl`}
          >
            {description[0].title2}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="500"
            className={`${styles.subtitle2} sm:text-lg sm:w-10/12`}
          >
            {description[0].subtitle3}
          </p>
        </div>

        <div
          className="flex flex-col items-center sm:mt-12"
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="500"
            className={`${styles.title2} sm:text-3xl`}
          >
            {description[0].title3}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="500"
            className={`${styles.subtitle2} sm:text-lg sm:w-10/12`}
          >
            {description[0].subtitle4}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container3;
