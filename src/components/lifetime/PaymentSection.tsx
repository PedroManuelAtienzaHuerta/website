import React from 'react';
import PriceTable from './PriceTable';
import { Detective, FolderLock } from '@phosphor-icons/react';
import OpenSource from '../../../public/icons/open-source.svg';
import { CouponType } from '@/lib/types';
import { formatText } from '../utils/format-text';

interface PaymentSectionProps {
  lang: string;
  textContent: any;
  normalPrice?: boolean;
  discount?: number;
  couponCode?: CouponType;
  isLifetimeSpecial?: boolean;
  percent?: string;
  isCelebrationPage?: boolean;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({
  lang,
  textContent,
  normalPrice,
  couponCode,
  discount,
  isLifetimeSpecial,
  percent,
  isCelebrationPage,
}) => {
  const features = [
    {
      icon: FolderLock,
      text: textContent.features.endToEnd,
    },
    {
      icon: OpenSource,
      text: textContent.features.openSource,
    },
    {
      icon: Detective,
      text: textContent.features.anonymousAccount,
    },
  ];
  return (
    <section id="payment" className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-8 bg-gray-1 py-10 text-center md:flex-row md:space-x-32 md:space-y-0">
        {features.map((feature) => (
          <div key={feature.text} className="flex flex-row items-center space-x-3">
            <feature.icon size={40} className="text-primary" />
            <p className="text-xl font-medium text-gray-80">{feature.text}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col space-y-8 pt-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center px-6 text-center">
            <p className="w-full text-5xl font-semibold leading-tight">
              {!isLifetimeSpecial ? (
                <>
                  <span className="text-primary">
                    {formatText(textContent.title.blueText, {
                      percent: percent ?? '70',
                    })}
                  </span>{' '}
                  <br />
                </>
              ) : undefined}
              <span>{textContent.title.normalText}</span>
            </p>
            <p className="pt-4 text-xl font-normal">{textContent.description}</p>
          </div>
        </div>

        <PriceTable
          lang={lang}
          normalPrice={normalPrice}
          discount={discount}
          couponCode={couponCode}
          isLifetimeSpecial={isLifetimeSpecial}
          isCelebrationPage={isCelebrationPage}
        />
      </div>
    </section>
  );
};

export default PaymentSection;
