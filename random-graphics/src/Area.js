import React from 'react'

export const Area = (props) => {
  return (
    <div className='app-area' style={{height:props.data.lenght*40}}>{props.children}</div>
  )
}