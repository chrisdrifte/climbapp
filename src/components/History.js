import { liveQuery } from "dexie";
import { db } from "../db";
import { HistoryItem } from "./HistoryItem";

export const History = () => {
  const history = document.createElement("div");
  history.classList.add("history");

  const renderLogs = (logs) => {
    history.innerHTML = "";
    logs.map(HistoryItem).forEach((historyItem) => history.append(historyItem));
  };

  liveQuery(() => db.logs.toArray()).subscribe(renderLogs);

  return history;
};
