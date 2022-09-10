import React from "react";

export interface IGreetProps {
    name?: string;
}

const Greet: React.FunctionComponent<IGreetProps> = (props) => {
    return (
        <div>
            <h1 className="title">Greet Component</h1>
            Good day {props.name}!
        </div>
    );
};

export default Greet;
