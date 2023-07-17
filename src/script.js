const Preview = (editorInput) => {
  const textArray = editorInput.split(" ");
  for (let x in textArray) {
    if (textArray[x] === "") {
      continue;
    } else if (textArray[x][0].toUpperCase() !== textArray[x][0].toLowerCase())
      continue;
    else if (
      textArray[x] === "\n" ||
      textArray[x][textArray[x].length - 1] === "\n"
    )
      return <br></br>;
    else if (textArray[x][0] === "#") {
      if (textArray[x][1] === "#") {
        if (textArray[x][2] === "#") {
          return <h3>{textArray[x]}</h3>;
        }
        return <h2>{textArray[x]}</h2>;
      }
      console.log("h1");
      return <h1>{textArray[x]}</h1>;
    } else if (
      textArray[x][0] === "*" &&
      textArray[x][textArray[x].length - 1] === "*"
    ) {
      if (
        textArray[x][1] === "_" &&
        textArray[x][textArray[x].length - 2] === "_"
      ) {
        console.log("bolditalic");
      }
      console.log("bold");
    } else if (
      textArray[x][0] === "_" &&
      textArray[x][textArray[x].length - 1] === "_"
    ) {
      console.log("italic");
    } else if (
      textArray[x][0] === "~" &&
      textArray[x][1] === "~" &&
      textArray[x][x.length - 1] === "~" &&
      textArray[x][x.length - 2] === "~"
    ) {
      console.log("strikethrough");
    } else if (
      textArray[x][0] === "[" &&
      textArray[x][textArray[x].length - 1] === "]"
    ) {
      console.log("link");
    } else if (textArray[x] === ">") {
      console.log("blockquote");
    } else if (textArray[x] === "|") {
      console.log("table");
    } else if (textArray[x] === "-") {
      console.log("ulist");
      // } else if (isNaN(x) === false) {
      //   console.log("olist");
    } else if (textArray[x][0] === "!") {
      console.log("image");
    }
  }
};

export default Preview;
