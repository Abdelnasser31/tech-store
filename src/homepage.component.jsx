import React from 'react'
import './homepage.styles.scss'
const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Software</h1>
          <span className='subtitle'>Shop now</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Samsung</h1>
          <span className='subtitle'>Shop now</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Asus</h1>
          <span className='subtitle'>Shop now</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Apple</h1>
          <span className='subtitle'>Shop now</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>HP</h1>
          <span className='subtitle'>Shop now</span>
        </div>
      </div>

    </div>
  </div>
)

export default HomePage;