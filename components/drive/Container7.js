import React from 'react';
import InfoCard from '../cards/InfoCard';
import styles from './Container7.module.css';

const Container7 = ({ id, descriptions }) => {
  const LINK_INFOCARD_1 = 'https://www2.deloitte.com/us/en/pages/consulting/articles/interest-in-blockchain-continues.html';
  const LINK_INFOCARD_2 = 'https://internxt.com/08893440.pdf';
  const LINK2_INFOCARD_2 = 'https://internxt.com/07506680.pdf';

  // Filter container specific descriptions
  const description = descriptions.filter((desc) => desc.id === id);
  const {
    title, subtitle, subtitle2, title2, subtitle3, subtitle4,
  } = description[0];

  // Check if a number is odd
  const isOdd = (num) => num % 2 === 1;

  // Set the background color of the container depending on its id
  const background = isOdd(id) ? 'normal_container grey' : 'normal_container';

  return (
    <div className={background}>
      <div className={`${styles.cards_container} sm:items-center sm:flex-col sm:mb-24 xl:my-12`}>
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="flex justify-center"
        >
          <InfoCard title={title} subtitle={subtitle} subtitle2={subtitle2} linkText={description[0].link1} link={LINK_INFOCARD_1} image="Deloitte" width={137} heigth={27} />
        </div>
        <div className="hidden sm:block sm:h-1 sm:w-10/12 sm:bg-gray-300 sm:mt-12 sm:mb-6" />
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="150"
          className="flex justify-center"
        >
          <InfoCard title={title2} subtitle={subtitle3} subtitle2={subtitle4} linkText={description[0].link2} link={LINK_INFOCARD_2} linkText2={description[0].link3} link2={LINK2_INFOCARD_2} image="IEEE" width={130} heigth={38} />
        </div>
      </div>
    </div>
  );
};

export default Container7;
