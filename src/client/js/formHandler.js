import { checkForName } from "./nameChecker.js";

function handleSubmit(event) {
  event.preventDefault();

  // check the form is submitted
  console.log("Form submission triggered");

  let formText = document.getElementById("name").value;
  checkForName(formText);

  console.log("::: Form Submitted :::");

  fetch("http://localhost:3000/submitForm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: formText }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok" + res.statusText);
      }
      return res.json();
    })
    .then(function (res) {
      console.log("Response from server:", res);
      document.getElementById("results").innerHTML = res.summary;
    })
    .catch((error) => console.error("Error:", error));
}

export { handleSubmit };
