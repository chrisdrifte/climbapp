import { deleteLog } from "../db";
import { Button } from "./Button";

export const HistoryItem = ({ id, grade, date }) => {
  const parsedDate = new Date(date);

  const historyItem = document.createElement("div");
  historyItem.classList.add("historyItem");

  const timeCell = document.createElement("time");
  timeCell.setAttribute("datetime", parsedDate.toISOString);
  timeCell.innerText = parsedDate.toDateString();
  historyItem.append(timeCell);

  const gradeCell = document.createElement("strong");
  gradeCell.innerText = grade;
  historyItem.append(gradeCell);

  const optionsCell = document.createElement("aside");
  optionsCell.append(Button({ text: "Delete", onClick: () => deleteLog(id) }));
  historyItem.append(optionsCell);

  return historyItem;
};
