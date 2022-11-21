import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Rundown Last Vulture</title>
        <meta property="og:title" content="Rundown Last Vulture" />
      </Helmet>
      <span>Text</span>
      <button className="button">Button</button>
      <img
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        alt="image"
        className="home-image"
      />
    </div>
  )
}

export default Home
