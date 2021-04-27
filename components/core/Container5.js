import styles from './Container5.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const Container5 = ({ id, descriptions }) => {

    const description = descriptions.filter(desc => desc.id === id)

    const CENTS_PER_GB = 0.01
    const MIN_INXT_BONUS = 100
    const BONUS_PERCENTAGE = 0.1

    const [storage, setStorage] = useState(0)
    const [inxt, setInxt] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const newEarnings = amountEarned();

        if( newEarnings >= 20  )
        {
            if( inxt < 30 )
            {
                setTotal(20);
            }
            else
            {
                setTotal(newEarnings);
            }
        }
        else
        {
            setTotal(newEarnings);
        }

    }, [inxt, storage]);

    const amountEarned = () => {

        let amountInCents = storage * CENTS_PER_GB

        inxt >= MIN_INXT_BONUS ? amountInCents += addBonus(amountInCents) : null
        let formattedAmount = amountInCents.toFixed(2)

        return parseFloat(formattedAmount);
    }

    const addBonus = (originalAmount) => {
        const bonusMultiplier = (inxt * BONUS_PERCENTAGE) / 100
        return originalAmount * bonusMultiplier
    }

    return (
        <div className={styles.background}>
            <h1  
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="500"

                className={`${styles.title} sm:text-4xl sm:w-80 sm:mt-12`}>
                {description[0].title}
            </h1>

            <p  
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500"

                className={`${styles.subtitle} sm:text-xl sm:w-80`}>
                {description[0].subtitle}
            </p>

            <p  
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-duration="500"

                className={`${styles.subtitle} sm:text-xl sm:w-80`}>
                {description[0].subtitle2}
            </p>

            <div className={`grid grid-cols-3 gap-x-6 sm:flex sm:flex-col `}>
                <div className={`${styles.input_container} sm:mt-12`}>
                    <label  
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="500"

                        className={`${styles.label}`}>
                        {description[0].label}
                    </label>

                    <div  
                        data-aos="fade-up"
                        data-aos-delay="350"
                        data-aos-duration="500"

                        className={`${styles.placeholders}`}>
                        <input type="number"
                            min="1"
                            className={`${styles.input}`}
                            onChange={e => setStorage(e.target.value)}
                        />

                        <div className={`${styles.type_container}`}>
                            <p  
                                data-aos="fade-left"
                                data-aos-delay="1050"
                                data-aos-duration="800"

                                className={`${styles.type}`}>
                                GB
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.input_container} sm:mt-6`}>
                    <label 
                        data-aos="fade-up"
                        data-aos-delay="450"
                        data-aos-duration="500"

                        className={`${styles.label}`}>
                        {description[0].label2}
                    </label>

                    <div 
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="500"
                        
                        className={`${styles.placeholders} `}>
                        <input type="number"
                            min="1"
                            className={`${styles.input}`}
                            onChange={e => setInxt(e.target.value)}
                        />

                        <div className={`${styles.type_container}`}>
                            <p 
                                data-aos="fade-left"
                                data-aos-delay="1050"
                                data-aos-duration="800"
                                
                                className={`${styles.type}`}>
                                INXT
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.input_container} sm:mt-20`}>
                    <label 
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="500"
                        
                        className={`${styles.label}`}>
                        {description[0].label3}
                    </label>

                    <div 
                        data-aos="fade-up"
                        data-aos-delay="650"
                        data-aos-duration="500"
                        
                        className={`${styles.placeholders}`}>
                        <input
                            type="text"
                            min="0"
                            className={`${styles.input}`}
                            value={total}
                        />

                        <div className={`${styles.type_container}`}>
                            <p 
                                data-aos="fade-left"
                                data-aos-delay="1050"
                                data-aos-duration="800"
                                
                                className={`${styles.type}`}>
                                EUR
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <a 
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="500"
                
                href="https://medium.com/internxt/learn-how-to-correctly-set-up-x-core-its-quick-easy-4e738042a8a3" target="_blank" className={`${styles.link} hover:opacity-80 flex flex-row w-auto items-center lg:text-lg lg:mb-16`}>
                <p className="sm:text-lg mr-2">{description[0].link}</p>
                <Image className={styles.image} src="/images/1440/Drive/Section 2/Section2 arrow white.svg" width={14} height={11} />
            </a>
        </div>
    );
}

export default Container5;