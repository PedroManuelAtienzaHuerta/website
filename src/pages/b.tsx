import { ChooseStorageSizeSection } from '@/components/home/ChooseStorageSizeSection';
import { FeatureSectionV2 } from '@/components/home/FeatureSectionV2';
import HeroSection from '@/components/home/HeroSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import CtaSection from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/FaqSection';
import { MarqueeComponent } from '@/components/specialoffer/MarqueeComponent';
import cookies from '@/lib/cookies';
import { useRouter } from 'next/router';

const HomePageV2 = ({ metatagsDescriptions, langJson, lang, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'home');
  const router = useRouter();

  // TODO: Manage when to show version 2 of the home page
  const isHomePageV2 = false;

  const navbarCta = isHomePageV2 ? 'chooseStorage' : 'default';

  const marqueeBgColor = isHomePageV2 ? 'bg-white' : 'bg-gray-1';
  const faqSectionBgColor = !isHomePageV2 ? 'bg-gray-1' : undefined;
  const faqSectionCardColor = !isHomePageV2 ? 'bg-white' : undefined;

  const onChooseStorageButtonClicked = () => {
    if (isHomePageV2) {
      router.push('/pricing');
    } else {
      window.location.hash = '#priceTable';
    }
  };

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={[navbarCta]} fixed />

      <HeroSection textContent={langJson.HeroSection} lang={lang} isHomePageV2={isHomePageV2} />

      <ChooseStorageSizeSection
        textContent={langJson.ChooseStorageSizeSection}
        onButtonClicked={onChooseStorageButtonClicked}
      />

      <TestimonialsSection textContent={langJson.TestimonialsSection} />

      <div className={`${marqueeBgColor} py-10`}>
        <MarqueeComponent bgColor={marqueeBgColor} />
      </div>

      <FeatureSectionV2 textContent={langJson.FeatureSectionV2} />

      <FAQSection textContent={langJson.FaqSection} bgColor={faqSectionBgColor} cardColor={faqSectionCardColor} />

      <CtaSection textContent={langJson.CtaSection} url={'/pricing'} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/home.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default HomePageV2;
