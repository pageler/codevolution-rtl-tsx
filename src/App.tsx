import "./App.css";
import Application from "./components/application/Application";
import Counter from "./components/counter/Counter";
import Greet from "./components/greet/Greet";
import { Skills } from "./components/skills/Skills";

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
            <Skills skills={["ts", "js", "css", "jsx", "tsx", "HTML"]} />
            <br />
            <hr />
            <Counter />
            <br />
            <hr />
        </div>
    );
}

export default App;
