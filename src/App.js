import "./App.css";

import Navbar  from "./pages/Navbar/index.js";
import Main from "./pages/Main/index.js";


// main app: which is to exported and encapsulated <div id="root"></div>
const App = (props) => {
    return (
        <div className="App">
            <Navbar />
            <Main />
        </div>
    );
};


export default App;