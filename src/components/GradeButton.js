export const GradeButton = ({ text, onClick }) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("button");

  const button = document.createElement("button");
  button.innerText = text;
  button.addEventListener("click", onClick);

  wrapper.append(button);

  return wrapper;
};
