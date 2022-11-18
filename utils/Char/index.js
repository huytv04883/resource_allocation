export const getFirstCharactor = (text) => {
  if (!text) return;
  const listOfFirstChar = [];
  const listText = text?.split(" ");
  listText.forEach((char) => {
    const firstChar = char.split("").shift();
    listOfFirstChar.push(firstChar);
  });
  return listOfFirstChar.join("");
};
