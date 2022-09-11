import { Banner } from "./Banner";
import { Tabs } from "./Tabs";

export const App = () => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("app");
  wrapper.append(Banner());
  wrapper.append(Tabs());

  return wrapper;
};
