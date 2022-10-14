const innInput = document.querySelector(".innInput");
const innCheck = document.querySelector(".innCheck");
const innResult = document.querySelector(".innResult");

const innRegExp = /^[01]\d{13}$/;

innCheck.addEventListener("click", () => {
  if (innRegExp.test(innInput.value)) {
    innResult.innerText = "ok";
    innResult.style.color = "green";
  } else {
    innResult.innerText = "not ok";
    innResult.style.color = "red";
  }
});
