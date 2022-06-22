import React from 'react';
import Typewriter from "typewriter-effect";
import './index.scss'

const TypeText = () => {
    return (
        <div className='bio-container'>
            <div className='bio-wrapper'>
                <img src='load.gif' />
                <span className='type-text'>
                        I am &nbsp;
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('<span><span class="word">Frontend</span>&nbsp;<span class="word">Developer!</span></span>')
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString('<span><span class="word"">UI</span>&nbsp;<span class="word">Designer!</span></span>')
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString('<span><span class="word">a</span>&nbsp;<span class="word">little</span>&nbsp;<span class="word">Backend</span>&nbsp;<span class="word">Developer!</span></span>')
                                .pauseFor(2000)
                                .deleteAll()
                                .start()
                        }}
                    />
                    </span>
            </div>
        </div>
    );
};

export default TypeText;
