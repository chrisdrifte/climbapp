import "./css/index.css";

import { App } from "./components/App";

const root = document.querySelector("#root");
const app = App();

root.append(app);
