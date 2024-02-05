function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("name").value;
  checkForName(formText);

  console.log("::: Form Submitted :::");

  fetch("http://localhost:8080/summarise", {
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
      document.getElementById("results").innerHTML = JSON.stringify(res);
    })
    .catch((error) => console.error("Error:", error));
}

export { handleSubmit };
