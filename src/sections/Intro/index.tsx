import React from 'react';
import './index.scss'
import {useScrollPosition} from "../../hooks/scroll";

const Intro = () => {
    const scrollPos = useScrollPosition()

    return (
        <div className='intro-container'>
            <div className='intro-wrapper'>
                <div className='intro-text'>
                    <h1
                        style={{
                            transform: `translate3d(-${scrollPos / 2}px, -${scrollPos * 0.1}px, 0px)`
                        }}
                    >The strength of the team is each individual member</h1>
                    <h1
                        style={{
                            transform: `translate3d(${scrollPos / 2}px, -${scrollPos * 0.1}px, 0px)`
                        }}
                    >I really get motivated when I have doubters</h1>
                </div>

                <img
                    src='bg.jpg'
                    style={{
                        transform: `translate3d(-50%, calc(-${scrollPos * 0.9}px - 50%), 0)`
                    }}
                    className='bg-intro'
                />
                <img
                    src='scroll.png'
                    className='scroll-intro'
                />

                <div className='intro-text'>
                    <h1
                        className='intro-text-outline'
                        style={{
                            transform: `translate3d(-${scrollPos / 2}px, -${scrollPos * 0.1}px, 0px)`
                        }}
                    >The strength of the team is each individual member</h1>
                    <h1
                        className='intro-text-outline'
                        style={{
                            transform: `translate3d(${scrollPos / 2}px, -${scrollPos * 0.1}px, 0px)`
                        }}
                    >I really get motivated when I have doubters</h1>
                </div>
            </div>
        </div>
    );
};

export default Intro;
