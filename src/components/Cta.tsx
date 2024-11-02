import React from 'react'
import { useTranslation } from 'react-i18next';
import Button from './Button';

const Cta = (): React.JSX.Element => {
  const { t: translating } = useTranslation("global");

  return (
    <section id='cta'>
      <div data-ani="down">
        <p>{translating("cta.title")}</p>
        <Button title={translating("cta.btn")} />
      </div>
    </section>
  )
}

export default Cta
