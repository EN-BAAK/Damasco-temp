import React from 'react'
import HeadingTitle from '../HeadingTitle'
import { useTranslation } from 'react-i18next';
import { Container, Row } from 'react-bootstrap';
import AboutImg from "../../assets/about.jpg"
import { useAppContext } from '../../context/AppContext';
import CompressedImage from '../CompressedImage';

const AboutUs = (): React.JSX.Element => {
  const { t: translating, i18n } = useTranslation("global");
  const { showImage } = useAppContext()

  const arStyle = i18n.language === 'ar' ? "ar" : "en"
  const isArabic = i18n.language === 'ar';

  return (
    <section id='about'>
      <Container>
        <HeadingTitle
          title={translating("global.about-us")}
        />

        <Row className={`align-items-center ${arStyle}`}>
          <div
            className={`img-holder col-lg-6 col-12 ${arStyle}`}
            data-ani={isArabic ? "left" : "right"}
          >
            <CompressedImage
              clickEvent={() => showImage(AboutImg)}
              src={AboutImg}
              style='img-fluid'
              loading='lazy'
              blurWidth="100%"
              blurHeight={450}
              alt='about-img' />
          </div>

          <div
            className={`col-lg-6 col-12 m-0 ${arStyle}`}
            data-ani={isArabic ? "right" : "left"}
          >
            <p className={arStyle} dangerouslySetInnerHTML={{ __html: translating("about.paragraph") }} />
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
