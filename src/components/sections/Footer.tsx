import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/logo.png"
import { useTranslation } from 'react-i18next'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Footer = (): React.JSX.Element => {
  const { t: translating, i18n } = useTranslation("global")

  const language = i18n.language === "ar" ? "ar" : "en"
  const links = [
    {
      id: 1,
      text: translating("footer.links.content.home"),
      href: "#hero"
    },
    {
      id: 2,
      text: translating("footer.links.content.about"),
      href: "#about"
    },
    {
      id: 3,
      text: translating("footer.links.content.brands"),
      href: "#brands"
    },
    {
      id: 4,
      text: translating("footer.links.content.services"),
      href: "#services"
    },
    {
      id: 5,
      text: translating("footer.links.content.branches"),
      href: "#branches"
    }
  ];
  const services = [
    {
      id: 1,
      content: translating("footer.services.content.braces"),
    },
    {
      id: 2,
      content: translating("footer.services.content.Instruments"),
    },
    {
      id: 3,
      content: translating("footer.services.content.catheters"),
    },
    {
      id: 4,
      content: translating("footer.services.content.devices"),
    },
    {
      id: 5,
      content: translating("footer.services.content.apparel"),
    },
    {
      id: 6,
      content: translating("footer.services.content.oxygen"),
    }
  ];
  const contact = [
    {
      id: 1,
      social: translating("footer.contact.social.mail"),
      link: "xxxxxx@gmail.com",
    },
    {
      id: 2,
      social: translating("footer.contact.social.phone"),
      link: "0954439592"
    },
    {
      id: 3,
      social: translating("footer.contact.social.telephone"),
      link: "6632432"
    }
  ]

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleLinkClick = (link: string) => {
    if (!isNaN(Number(link)))
      window.location.href = `tel:${link}`
    else if (isValidEmail(link))
      window.location.href = `mailto:${link}`;
  }

  return (
    <section id='footer' className="bg-light">
      <Container>
        <Row className='g-5'>
          <Col
            data-ani={language === "ar" ? "left" : "right"}
            md={6}
            lg={language === "ar" ? { span: 2, offset: 1 } : { span: 2, offset: 0 }}
            className="pe-3 p-sm-1 text-md-start text-center">
            <img
              src={logo}
              alt='logo'
              loading='lazy'
              className='img-fluid' />
          </Col>

          <Col
            data-ani={language === "ar" ? "left" : "right"}
            data-delay="0.6"
            md={6}
            lg={language === "ar" ? { span: 2, offset: 0 } : { span: 2, offset: 1 }}
            className="pe-3 p-sm-1 links">
            <h1 className={`mb-3 fw-semibold fs-5 ${language === "ar" ? "text-end" : "text-start"}`}>{translating("footer.links.title")}</h1>

            <ul className="m-0 p-0 d-flex flex-column gap-3">
              {links.map(link => <li key={`footer-link-${link.id}`}>
                <a href={link.href} className='d-flex align-items-center gap-1 decoration-none'>
                  {language === "ar" ? <IoIosArrowBack className='d-none d-md-block' /> : <IoIosArrowForward className='d-none d-md-block' />}
                  {link.text}
                </a>
              </li>)}
            </ul>
          </Col>

          <Col
            data-ani={language === "ar" ? "left" : "right"}
            data-delay="0.9"
            md={6}
            lg={{ span: 2, offset: language === "ar" ? 1 : 0 }}
            className="pe-3 p-sm-1">
            <h1 className={`mb-3 fw-semibold fs-5 ${language === "ar" ? "text-end" : "text-start"}`}>{translating("footer.services.title")}</h1>

            <ul className="m-0 p-0 d-flex flex-column gap-3">
              {services.map((service) => (
                <li key={`footer-services-${service.id}`}>
                  <p className='d-flex align-items-center gap-1 m-0'>
                    {language === "ar" ? <IoIosArrowBack className='d-none d-md-block' /> : <IoIosArrowForward className='d-none d-md-block' />}
                    {service.content}
                  </p>
                </li>
              ))}
            </ul>
          </Col>

          <Col
            data-ani={language === "ar" ? "left" : "right"}
            data-delay="1.2"
            lg={{ span: 4, offset: language === "ar" ? 0 : 1 }}
            md={6}
            className={`pe-3 p-sm-1 ${language === "ar" ? "text-end" : "text-start"} contact`}
          >
            <h1 className={`mb-3 fw-semibold fs-5`}>{translating("footer.contact.damasco")}</h1>

            <p className="mb-5">
              {translating("footer.contact.marketing")}
            </p>

            <ul className='m-0 p-0 contact'>
              {contact.map(contact => <li key={`footer-contact-${contact.id}`}>
                <p className='fw-semibold'>{contact.social}: {""}
                  <span
                    className='fw-normal pointer'
                    onClick={() => handleLinkClick(contact.link)}>{contact.link}</span></p>
              </li>)}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer
