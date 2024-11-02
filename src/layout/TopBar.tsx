import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaMobileScreenButton } from "react-icons/fa6";
import { phone } from '../misc/global';

const TopBar = (): React.JSX.Element => {
  const { t: translating, i18n } = useTranslation("global");
  const language = i18n.language;

  const handleCall = () => {
    window.location.href = `tel:${phone}`
  }

  return (
    <div id="topbar" className=" w-100">
      <div
        className={`container d-flex justify-content-between text-nowrap`}
      >
        <p className="text-white d-md-block">
          <i className="fa-regular fa-clock"></i>
          {translating("topBar.time")}
        </p>
        <p
          className={`text-white d-flex align-items-center justify-content-between`}
          onClick={handleCall}
        >
          <FaMobileScreenButton className={language === "ar" ? "arabic" : ""} />
          <span>{translating("topBar.calling")}</span>
          <span className='pointer mx-1'>{translating("topBar.number")}</span>
        </p>
      </div>
    </div>
  )
}

export default TopBar
