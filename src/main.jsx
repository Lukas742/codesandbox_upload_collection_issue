import { createRoot } from "react-dom/client";
import App from "./App";
import "./main.css";
const root = createRoot(document.getElementById("app"));
import "@ui5/webcomponents-react/dist/Assets";

root.render(<App />);
