import React from 'react'

export const ChartItem = (props) => {
  return (
    <div className='app-chart-item-wrapper' style={{width:props.width}} >
        <div className='app-chart-item' style={{backgroundColor:props.backgroundColor}}>{props.text}</div>
        <div className='app-chart-text'>{props.count}</div>
    </div>
  )
}
