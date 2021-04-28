import React from 'react';
import Feed from 'rss-to-json';
import Container1 from '../components/about-us/Container1';
import Container2 from '../components/about-us/Container2';
import Container3 from '../components/about-us/Container3';
import Container5 from '../components/about-us/Container5';
import Container6 from '../components/about-us/Container6';
import Container7 from '../components/about-us/Container7';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import TopBar from '../components/layout/TopBar';
import cookies from '../lib/cookies';

const AboutUs = (props) => {
  const metatags = props.metatagsDescriptions.filter((desc) => desc.id === 'about');

  return (
    <Layout segmentName="about" title={metatags[0].title} description={metatags[0].description}>
      <TopBar />
      <Container1 id="1" descriptions={props.descriptions} cardDescriptions={props.cardDescriptions} />
      <Container2 id="2" descriptions={props.descriptions} />
      <Container3 id="3" descriptions={props.descriptions} />
      {/*  <Container4 id='4' descriptions={props.descriptions} /> */}
      <Container5 id="5" descriptions={props.descriptions} />
      <Container6 id="6" descriptions={props.descriptions} cardDescriptions={props.cardDescriptions} />
      <Container7 id="7" descriptions={props.descriptions} cardDescriptions={props.cardDescriptions} articles={props} />
      <Footer descriptions={props.footerDescriptions} cardDescriptions={props.cardDescriptions} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const POSTS_URL = 'https://medium.com/feed/Internxt';

  const rss = await Feed.load(POSTS_URL);
  const data = rss.items;
  const images = [];

  const regex = /<img src="(.*)" width=/;

  data.forEach((elem) => {
    if (elem.description) {
      const image = elem.description.match(regex)[1];
      images.push(image);
    } else images.push(null);
  });
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const descriptions = require(`../assets/lang/${lang}/about-us-descriptions.json`);
  const footerDescriptions = require(`../assets/lang/${lang}/footer-descriptions.json`);
  const cardDescriptions = require(`../assets/lang/${lang}/card-descriptions.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      images,
      metatagsDescriptions,
      descriptions,
      footerDescriptions,
      cardDescriptions,
    },
  };
}

export default AboutUs;
