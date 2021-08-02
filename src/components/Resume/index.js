import React from 'react';
import resume from '../../assets/resume/mg-resume-2021.pdf';
import { FaDownload } from 'react-icons/fa';

function Resume() {
    return(
        <div id='resume'>
            <a href={resume} download="MichelleGleaveResume2021.pdf">
                <FaDownload color='black' size={30}/>
                <h3>Download Resume</h3>
            </a>
        </div>
    );
};

export default Resume;