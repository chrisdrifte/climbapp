import { liveQuery } from "dexie";
import { db } from "../db";
import { Title } from "./Title";

export const StatsTab = () => {
  const statsPage = document.createElement("div");
  statsPage.classList.add("stats", "tab");

  const title = Title({ text: "Stats" });
  statsPage.append(title);

  const countCell = document.createElement("count");
  const renderCount = (count) => {
    countCell.innerText = `${count} climbs logged`;
  };
  liveQuery(() => db.logs.count()).subscribe(renderCount);
  statsPage.append(countCell);

  return statsPage;
};
