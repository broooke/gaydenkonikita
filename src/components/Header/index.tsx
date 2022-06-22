import React, {FC} from 'react';
import './index.scss';

export const Header: FC = () => {
    return (
        <header className='header'>
            <div className='header-container'>
                <div className='name'>
                    Nikita
                    <br />
                    Gaydenko
                </div>
                <nav>
                    <ul className='menu'>
                        <li>Intro</li>
                        <li>About</li>
                        <li>Experience</li>
                        <li>Project</li>
                        <li>Content</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
