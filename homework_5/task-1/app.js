const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");

const convert = (elem, targetFirst, targetSecond) => {
  elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "aplication/json");
    request.send();
    
    request.addEventListener("load", () => {
      const response = JSON.parse(request.response);
      if (elem.id === "som") {
        targetFirst.value = (elem.value / response.usd).toFixed(2);
        targetSecond.value = (elem.value / response.eur).toFixed(2);
      } else if (elem.id === "usd") {
        targetFirst.value = (elem.value * response.usd).toFixed(2);
        targetSecond.value = (targetFirst.value / response.eur).toFixed(2);
      } else {
        targetFirst.value = (elem.value * response.eur).toFixed(2);
        targetSecond.value = (targetFirst.value / response.usd).toFixed(2);
      }

      elem.value === ""
        ? (targetFirst.value = "") || (targetSecond.value = "")
        : null;
    });
  });
};

convert(som, usd, eur);
convert(usd, som, eur);
convert(eur, som, usd);
