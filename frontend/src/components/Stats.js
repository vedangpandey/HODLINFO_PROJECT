import React from 'react'

export default function Stats() {
  return (
    <div className='stat-container'>
        <div className='percent-stat'>
            <div><h2>0.27 %</h2></div>
            <div><h5>5 Mins</h5></div>
        </div>
        <div className='percent-stat'>
            <div><h2>0.32%</h2></div>
            <div><h5>1 Hour</h5></div>
        </div>
        <div className='stat-result'>
            <h4>Best Price to Trade</h4>
            <span>₹ 53,48,739</span>
            <h6>Average BTC/INR net price including commission</h6>
        </div>
        <div className='percent-stat'>
            <div><h2>5.78%</h2></div>
            <div><h5>1 Day</h5></div>
        </div>
        <div className='percent-stat'>
            <div><h2>6.89%</h2></div>
            <div><h5>7 Days</h5></div>
        </div>
    </div>
  )
}
