import React from 'react';
import resume from '../../assets/resume/mg-resume-2021.pdf';

function Resume() {
    return(
        <div>
            <a href={resume} download="MichelleGleaveResume2021.pdf">
                Download Resume
            </a>
        </div>
    );
};

export default Resume;