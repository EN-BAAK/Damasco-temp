import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Logo from "../../assets/logo.png"
import { useTranslation } from 'react-i18next';
import Typewriter from "typewriter-effect";

const Hero = (): React.JSX.Element => {
  const { t: translating, i18n } = useTranslation("global");
  const isArabic = i18n.language === "ar"

  return (
    <section className={`hero ${isArabic && "arabic"}`} id='hero'>
      <Container>
        <Row className='align-items-center'>
          <div
            className={`col-lg-6 col-12 hero-title`}
            data-ani={isArabic ? "left" : "right"}
          >
            <div>
              <h1 dangerouslySetInnerHTML={{ __html: translating("hero.welcome") }} />

              <div id='sub-title' className='fs-4'>
                <Typewriter
                  options={{
                    strings: [translating("hero.message1"),
                    translating("hero.message2"),
                    translating("hero.message3"),
                    translating("hero.message4")
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className={`col-lg-6 col-12 img-holder`}
            data-ani={isArabic ? "right" : "left"}
          >
            <img
              src={Logo}
              alt='logo'
              loading='lazy'
            />
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Hero