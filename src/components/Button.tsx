import React from 'react'

const Button = ({ title }: { title: string }): React.ReactNode => {
  return (
    <button className='uni-btn'>
      <a href="#branches">{title}</a>
    </button>
  )
}

export default Button
