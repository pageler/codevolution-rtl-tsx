import "./App.css";
import Application from "./components/application/Application";
import Greet from "./components/greet/Greet";

function App() {
    return (
        <div>
            <h1 className="title">
                <u>React Testing Library with Jest</u>
            </h1>
            <hr />
            <Greet name="Monica" />
            <br />
            <hr />
            <Application />
            <br />
            <hr />
        </div>
    );
}

export default App;
