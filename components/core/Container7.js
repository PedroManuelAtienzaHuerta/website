import React from 'react';
import Faq from 'react-faq-component';

const Container7 = ({ id, descriptions }) => {
  // Filter container specific descriptions
  const description = descriptions.filter((desc) => desc.id === id);

  // Check if a number is odd
  const isOdd = (num) => num % 2 === 1;

  // Set the background color of the container depending on its id
  const background = isOdd(id) ? 'normal_container grey' : 'normal_container';

  const config = {
    animate: true,
  };

  return (
    <div
      className={background}
    >
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="500"
        className="sm:items-center sm:my-24 xl:w-9/12 xl:my-32"
      >
        <Faq
          data={description[0].faq}
          styles={{
            bgColor: 'transparent',
          }}
          config={config}
        />
      </div>
    </div>
  );
};

export default Container7;
