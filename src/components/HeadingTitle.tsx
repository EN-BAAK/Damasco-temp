import React from 'react'

const HeadingTitle = ({ title, desc }: { title: string, desc?: string }): React.ReactNode => {

  return (
    <div className='heading-title' data-ani="down" >
      <h1 className='text-lowercase'>{title}</h1>
      {
        desc && (
          <p>{desc}</p>
        )
      }
    </div >
  )
}

export default HeadingTitle
