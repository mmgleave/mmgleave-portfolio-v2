import React from 'react';

function Portfolio({ projects }) {
    return (
        <section>
            {projects.map((item) => {
                return (
                    <div>
                        <h1>{item.title}</h1>
                    </div>
                )
            })}
        </section>
    )
};

export default Portfolio;