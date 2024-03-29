import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";

window.handleSubmit = handleSubmit;
window.checkForName = checkForName;

console.log("Form hanlder loaded");

alert("I exist");
console.log("Change!");

// import scss files
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

document.getElementById("button").addEventListener("click", async () => {
  const urlToSummarise = document.getElementById("name").value;

  console.log("Button clicked");
  console.log("URL to summarise:", urlToSummarise);

  try {
    const response = await fetch("/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ urlToSummarise }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    console.log("Response from server", data);

    document.getElementById("results").innerHTML = data.summary;
  } catch (error) {
    console.log("Error", error);
    document.getElementById("results").innerHTML =
      "Error processing your request, please try again";
  }
});
