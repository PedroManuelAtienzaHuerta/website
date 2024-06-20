import Layout from '@/components/layout/Layout';
import { MinimalFooter } from '@/components/layout/MinimalFooter';
import Navbar from '@/components/layout/Navbar';
import PriceTable from '@/components/prices/PriceTable';
import CtaSection from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/FaqSection';
import { FeatureSectionForSpecialOffer } from '@/components/specialoffer/FeatureSection';
import { HeroSectionForSpecialOffer } from '@/components/specialoffer/HeroSection';
import { InxtFeaturesSection } from '@/components/specialoffer/InxtFeaturesSection';
import { WhatWeDoSectionForSpecialOffer } from '@/components/specialoffer/WhatWeDoSection';
import { CouponType } from '@/lib/types';

const FreeUserPage = ({ metatagsDescriptions, footerLang, navbarLang, lang, textContent, couponCode }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'free-user')[0];

  return (
    <Layout title={metatags.title} description={metatags.description} segmentName={'Free User'}>
      <Navbar textContent={navbarLang} cta={['default']} lang={lang} fixed isLinksHidden />

      <HeroSectionForSpecialOffer textContent={textContent.HeroSection} />

      <PriceTable
        lang={lang}
        setSegmentPageName={() => {}}
        isTableInHomePage
        textContent={textContent.tableSection}
        couponCode={CouponType.freeUserCoupon}
      />

      <FeatureSectionForSpecialOffer textContent={textContent.FeatureSection} />

      <InxtFeaturesSection textContent={textContent.InxtFeaturesSection} />

      <CtaSection textContent={textContent.CtaSection} url={'/specialoffer/freeuser#priceTable'} target="_self" />

      <WhatWeDoSectionForSpecialOffer textContent={textContent.WhatWeDoSection} />

      <FAQSection textContent={textContent.FaqSection} />

      <MinimalFooter lang={lang} footerLang={footerLang.FooterSection} bgColor="bg-gray-1" />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/specialoffer/free-user.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const homeComponentsLang = require(`@/assets/lang/${lang}/home.json`);
  const couponCode = process.env.FREE_PROMO_COUPON;

  return {
    props: {
      metatagsDescriptions,
      footerLang,
      navbarLang,
      lang,
      textContent,
      homeComponentsLang,
      couponCode,
    },
  };
}

export default FreeUserPage;
