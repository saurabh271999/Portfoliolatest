import React from 'react'
import Ballpit from './Ballpit/Ballpit'
const Home = () => {
  return (
    <div>
 <div
  style={{
    position: 'relative',
    width: '100%',
    height: '100dvh',         // 🔐 Fix height here
    overflow: 'hidden',      // 🔐 Prevent anything from overflowing
  }}
>
  <Ballpit  />
</div>
    </div>
  )
}

export default Home
