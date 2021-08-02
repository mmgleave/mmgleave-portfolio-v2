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
            <nav>
                <ul id="nav">
                    <li>
                        <span
                            className={`${aboutSelected && 'navActive'}`}

                            onClick={() => {
                                setAboutSelected(true);
                                setContactSelected(false);
                                setPortfolioSelected(false);
                                setResumeSelected(false);
                            }}
                        >About Me
                        </span>
                    </li>
                    <li>
                        <span
                            className={`${contactSelected && 'navActive'}`}

                            onClick={() => {
                                setAboutSelected(false);
                                setContactSelected(true);
                                setPortfolioSelected(false);
                                setResumeSelected(false);
                            }}

                        >Contact
                        </span>
                    </li>
                    <li>
                        <span
                            className={`${portfolioSelected && 'navActive'}`}

                            onClick={() => {
                                setAboutSelected(false);
                                setContactSelected(false);
                                setPortfolioSelected(true);
                                setResumeSelected(false);
                            }}

                        >Portfolio
                        </span>
                    </li>
                    <li>
                        <span
                            className={`${resumeSelected && 'navActive'}`}

                            onClick={() => {
                                setAboutSelected(false);
                                setContactSelected(false);
                                setPortfolioSelected(false);
                                setResumeSelected(true);
                            }}

                        >Resume
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;