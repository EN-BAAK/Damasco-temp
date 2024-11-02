import React from 'react'
import { useTranslation } from 'react-i18next';

const HeadingTitle = ({ title, desc }: { title: string, desc?: string }): React.ReactNode => {
  const { i18n } = useTranslation("global");

  return (
    <div className='heading-title' data-ani="down" >
      <h1 className='text-lowercase'>{title}</h1>
      {
        desc && (
          <p>{desc}</p>
        )
      }
      <span className={`${i18n.language === 'ar' ? "ar" : ""} text-lowercase`}>{title}</span>
    </div >
  )
}

export default HeadingTitle
