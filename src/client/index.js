import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";

console.log(checkForName);

alert("I exist");
console.log("Change!");

// import scss files
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

/*
fetch("/summarise", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ url: "http://example.com/article" }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok" + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Summary:", data);
  })
  .catch((error) => console.error("Error:", error));
*/
