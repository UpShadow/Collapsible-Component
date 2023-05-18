import React from "react";
import Collapsible from "./Collapsible";

function App() {
    return (
        <div>
            <Collapsible label="This is the label">
                <h1>This is collapsible!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quis nibh ut ligula bibendum euismod. Duis tempor vulputate
                    erat ac lacinia. Curabitur bibendum maximus ultrices. Maecenas felis arcu,
                    dictum condimentum mi ut, interdum mattis magna. Quisque blandit faucibus lacus sit amet egestas.
                    Aliquam convallis convallis ex, tincidunt facilisis ante porttitor nec.
                    Morbi volutpat neque rutrum dui convallis imperdiet.
                </p>
            </Collapsible>
            <Collapsible label="Click me">
                <ul>
                    <li>Some stuff</li>
                    <li>Some stuff</li>
                    <li>Some stuff</li>
                    <li>Some stuff</li>
                    <li>Some stuff</li>
                    <li>Some stuff</li>
                </ul>
            </Collapsible>
            <Collapsible label="😎">
                <form>
                    <input type="datetime-local"/>
                    <button>Submit</button>
                </form>
            </Collapsible>
        </div>
    );
}

export default App;