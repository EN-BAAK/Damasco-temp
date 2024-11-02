import React, { useState } from 'react'
import { GrLanguage } from "react-icons/gr";
import { setItemToLocalStorage } from '../misc/helpers';
import { langs } from '../misc/global';
import { useTranslation } from 'react-i18next';

const LanguageBox = (): React.JSX.Element => {
  const [active, setActive] = useState<boolean>(false)

  const { i18n } = useTranslation("global");
  const currentLanguage = i18n.language;

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);

    setItemToLocalStorage("lang", lang);

  }

  return (
    <div className="lang-box"
      onClick={() => setActive(!active)}
    >
      <GrLanguage />

      {active && (
        <div className="box">
          <ul className="m-0 p-0">
            {langs.map((item, index) => (
              <li
                key={`lang-${index}`}
                className={currentLanguage === item.key ? "active" : ""}
                onClick={() => handleChangeLanguage(item.key)}
              >{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default LanguageBox
