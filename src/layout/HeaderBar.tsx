import React, { useEffect, useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LanguageBox from '../components/LanguageBox';

const HeaderBar = (): React.JSX.Element => {
  const [active, setActive] = useState<boolean>(false)

  const { t: translating, i18n } = useTranslation("global");

  useEffect(() => {
    const links: NodeListOf<HTMLLIElement> | null = document.querySelectorAll("#header ul li");

    if (links) {
      links.forEach((e: HTMLLIElement) => {
        e.onclick = () => setActive(false);
      });
    }
  }, []);

  return (
    <header id='header'>
      <Container className={`d-flex align-items-center pt-3 pb-3`}>
        <div className={`logo ${i18n.language === 'ar' && "arabic"}`}>
          {translating("global.damasco")}
        </div>

        <Navbar className='order-md-0 order-last position-static pe-md-4'>
          <ul className={`m-0 p-0 ${active && "active"}`}>
            <li>
              <a className='active text-uppercase' href='#hero'>
                {translating("global.home")}
              </a>
            </li>
            <li>
              <a className='text-uppercase' href='#about'>
                {translating("global.about")}
              </a>
            </li>
            <li>
              <a className='text-uppercase' href='#guarantee'>
                {translating("global.guarantee")}
              </a>
            </li>
            <li>
              <a className='text-uppercase' href='#brands'>
                {translating("global.brands")}
              </a>
            </li>
            <li>
              <a className='text-uppercase' href='#services'>
                {translating("global.services")}
              </a>
            </li>
            <li>
              <a className='text-uppercase' href='#branches'>
                {translating("global.branches")}
              </a>
            </li>
            <li>
              <a className='text-uppercase' href='#gallery'>
                {translating("global.gallery")}
              </a>
            </li>
          </ul>

          <div
            id="bar"
            className={`d-block d-lg-none ${active && "active"}`}
            onClick={() => setActive(!active)}
          >
            <span className="top"></span>
            <span className="mid"></span>
            <span className="bottom"></span>
          </div>
        </Navbar>

        <div className={`${i18n.language !== 'ar' ? "me-2 me-lg-0 ms-2" : "ms-2 ms-lg-0 me-2"}`}>
          <LanguageBox />
        </div>
      </Container>
    </header>
  );
}

export default HeaderBar;