import React from 'react'
import { motion } from 'framer-motion'
import ReactTypingEffect from 'react-typing-effect'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
import './Header.scss'

import profile from '../../assets/new-profile.png'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Jotweb</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Working as a</p>
            <ReactTypingEffect
              text={["Freelancer", "Web Developer", "Programmer"]}
              speed={100}
              typingDelay={1000}
              eraseDelay={1000}
              eraseSpeed={100}
              cursorRenderer={cursor => <p className="p-text">{cursor}</p>}
              displayTextRenderer={(text, i) => {
                return (
                  <p className="p-text">{text}</p>
                )
              }}        
            />
          </div>
        </div>

      </motion.div>
              
      <MouseParallaxContainer>
        <MouseParallaxChild factorX={0.03} factorY={0.05} >
          <motion.div
            id='3d-inner'
            whileInView={{ opacity: [0, 1]}}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__header-img"
          >
            <img src={profile} alt="profile_bg" />
            <motion.img
              whileInView={{ scale: [0, 1]}}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="overlay_circle"
              src={images.circle}
              alt="profile_circle"
            />
          </motion.div>
        </MouseParallaxChild>
      </MouseParallaxContainer>
      
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home', )