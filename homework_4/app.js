const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const regest = new XMLHttpRequest();
  regest.open("GET", "data.json");
  regest.setRequestHeader("Content-type", "application/json");
  regest.send();
  regest.addEventListener("load", () => {
    console.log(JSON.parse(regest.response));
    const data = JSON.parse(regest.response);
    document.querySelector(".age").innerHTML = data.age;
    document.querySelector(".last-name").innerHTML = data.lastName;
    document.querySelector(".first-name").innerHTML = data.firstName;
    document.querySelector(".address").innerHTML = data.address;
  });
});
