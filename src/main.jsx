import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HashRouter as Router} from "react-router-dom";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
<Router>
<App />
</Router>
);
