import { Button } from "./Button";
import { LogTab } from "./LogTab";
import { StatsTab } from "./StatsTab";

export const Tabs = () => {
  const tabs = document.createElement("div");
  tabs.classList.add("tabs");

  let currentTab;
  const showTab = (tab) => {
    if (currentTab && tab === currentTab) return;

    tabs
      .querySelectorAll(".tab")
      .forEach((tab) => tab.parentNode.removeChild(tab));

    switch (tab) {
      default:
      case "log":
        tabs.append(LogTab());
        window.location.hash = "#log";
        break;

      case "stats":
        tabs.append(StatsTab());
        window.location.hash = "#stats";
        break;
    }
  };

  const logButton = Button({ text: "Log", onClick: () => showTab("log") });
  tabs.append(logButton);

  const statsButton = Button({
    text: "Stats",
    onClick: () => showTab("stats"),
  });
  tabs.append(statsButton);

  const initialTab = window.location.hash.replace("#", "");
  showTab(initialTab);

  return tabs;
};
