import RevealY from '@/components/components/RevealY';
import Image from 'next/image';
import { useRouter } from 'next/router';

const GetLifetimeSection = ({ textContent }) => {
  const router = useRouter();
  const lang = router.locale;
  const { title } = textContent;
  const splitTitle = title.split('!');
  const firstTitle = splitTitle[0];
  const secondTitle = splitTitle[1];

  return (
    <section className="overflow-hidden bg-[url('/images/lifetime/celebration/normal-bg.png')] bg-cover bg-no-repeat">
      <div className="relative mx-auto flex max-w-screen-2xl flex-col">
        <div className="flex flex-col items-center py-16">
          <div className="mb-8 flex flex-col items-center px-6 text-center font-semibold text-white">
            {lang === 'it' || lang === 'de' || lang === 'ru' ? (
              <h2 className="max-w-[900px] text-5xl font-semibold leading-tight">
                {firstTitle}!{secondTitle}
              </h2>
            ) : (
              <h2 className="max-w-[800px] text-5xl font-semibold leading-tight">
                {firstTitle}!
                <br />
                {secondTitle}
              </h2>
            )}

            <p className="pt-4 text-xl font-normal">{textContent.description}</p>
          </div>

          <RevealY className="content relative flex h-full w-full flex-col items-center px-5 pt-6">
            <Image
              src="/images/lifetime/celebration/confetti-horizontal.svg"
              alt="Confetti"
              width={1103}
              height={464}
              className="absolute"
            />
            <Image
              src="/images/home/internxt_secure_cloud_storage.webp"
              alt="Internxt secure cloud storage"
              draggable={false}
              width={805}
              height={431}
              className="z-50"
            />
          </RevealY>
        </div>
      </div>
    </section>
  );
};

export default GetLifetimeSection;
