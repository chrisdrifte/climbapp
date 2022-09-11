import { grades } from "../data/grades";
import { addLog } from "../db";
import { GradeButton } from "./GradeButton";
import { History } from "./History";
import { Title } from "./Title";

export const LogTab = () => {
  const logPage = document.createElement("div");

  logPage.classList.add("log", "tab");

  const title = Title({ text: "Sharma Climbing" });
  logPage.append(title);

  grades.sharma.forEach((grade) => {
    const logGradeButton = GradeButton({
      text: grade,
      onClick: () => addLog(grade),
    });
    logPage.append(logGradeButton);
  });

  const history = History();
  logPage.append(history);

  return logPage;
};
