import React from 'react';

function Nav(props) {
    const {
        aboutSelected,
        setAboutSelected,
        contactSelected,
        setContactSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected
    } = props;

    return (
        <header>
            <h2>
                <a>
                    <span>Michelle GLEAVE</span>
                </a>
            </h2>
            <nav>
                <ul id="nav">
                    <li className={`${aboutSelected && 'navActive'}`}>
                        <p
                            onClick={() => {
                                setAboutSelected(true);
                                setContactSelected(false);
                                setPortfolioSelected(false);
                                setResumeSelected(false);
                                console.log('about clicked')
                            }}

                            >About Me
                        </p>
                    </li>
                    <li className={`${contactSelected && 'navActive'}`}>
                        <p
                            onClick={() => {
                                setAboutSelected(false);
                                setContactSelected(true);
                                setPortfolioSelected(false);
                                setResumeSelected(false);
                            }}

                            >Contact
                        </p>
                    </li>
                    <li className={`${portfolioSelected && 'navActive'}`}>
                        <p
                            onClick={() => {
                                setAboutSelected(false);
                                setContactSelected(false);
                                setPortfolioSelected(true);
                                setResumeSelected(false);
                            }}

                            >Portfolio
                        </p>
                    </li>
                    <li className={`${resumeSelected && 'navActive'}`}>
                        <p
                            onClick={() => {
                                setAboutSelected(false);
                                setContactSelected(false);
                                setPortfolioSelected(false);
                                setResumeSelected(true);
                            }}
                            
                            >Resume
                        </p>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;