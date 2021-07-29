import React from 'react'; 

function Portfolio({ projects }) {
    return (
        <section>
            {projects.map((project) => {
                <div>
                    <span>
                        {project.title}
                    </span>
                    {/* <img
                        src={require(``).default}
                        alt={project.title}
                    /> */}
                    <div>
                        <a href={project.link}/>
                    </div>
                </div>
            })}
        </section>
    )
};

export default Portfolio;