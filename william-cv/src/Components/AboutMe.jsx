import React from 'react';


function AboutMe()
{
    return(

        <div>
            <h1>About Me</h1>
                <p>
                {
                    'As a devoted and dynamic student of software engineering at Murdoch University, '                                  +
                    'I am keen on developing engaging, interactive, and enjoyable gaming experiences that foster global connections. '  +
                    'My vision is rooted in my belief that games, whether community-driven, cooperative, or player versus player, '     +
                    'can offer individuals from diverse backgrounds a platform for interaction, free from bias or prejudice. '          +
                    'This stems from my conviction that gaming can help break down barriers and promote inclusivity.'
                }
                </p>
        </div>
    );
}

export default AboutMe;