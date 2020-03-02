export const myCustomConsole = data => {
  console.log("%c%s", "color:black;", JSON.stringify(data, null, 2));
};
