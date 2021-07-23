import React from 'react';

function Nav() {
    return (
        <header>
            <h2>
                <a>
                    <span>Michelle GLEAVE</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="/">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="/">
                            Contact
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="/">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="/">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;