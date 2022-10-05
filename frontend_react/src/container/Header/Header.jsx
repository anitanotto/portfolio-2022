import React from 'react';

import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

import './Header.scss';

const scaleVariants = {
    initial: {
        scale: 0,
        opacity: 0
    },
    animate: {
        scale: [0,1],
        opacity: [0,1],
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
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: [-100, 0 ], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
            >
                <div className='app__header-badge'>
                    <div className='badge-cmp app__flex'>
                        <span>✌️</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className='p-text'>Hi, my name's</p>
                            <h1 className='head-text'>Anita</h1>
                        </div>
                    </div>

                    <div className='tag-cmp app__flex'>
                        <p className='p-text'>I'm a Full-Stack Web Developer</p>
                        <p className='p-text'>& Freelancer</p>
                    </div>
                </div>
            </motion.div>

            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <img src={ images.profile } alt="profile_bg" />
                <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={ images.circle }
                    alt="profile_circle"
                    className="overlay_circle"
                />
            </motion.div>

            
            <motion.div
                variant={ scaleVariants }
                initial={ scaleVariants.initial }
                animate={ scaleVariants.animate }
                className="app__header-circles"
            >
                {[images.node, images.react, images.mongodb].map((circle, index) => (
                    <div className='circle-cmp app__flex' key={`circle-${index}`}>
                        <img src={circle} alt="circle" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default AppWrap(Header, 'home');
