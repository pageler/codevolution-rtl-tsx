import React, { useState } from "react";
import { SkillsProps } from "./Skills.types";

export const Skills = (props: SkillsProps) => {
    const { skills } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true);
        }, 3000);
    }, []);

    return (
        <div>
            <h1 className="title">Skills Component</h1>
            <ul>
                {skills.map((skill) => {
                    return <li key={skill}>{skill}</li>;
                })}
            </ul>

            {isLoggedIn ? (
                (console.log("learning"), (<button>Start learning</button>))
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </div>
    );
};
