export const Title = ({ text }) => {
  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerText = text;

  return title;
};
