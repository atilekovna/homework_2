const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabsContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
  tabsContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

hideTabContent();

const showTabContent = (i = 0) => {
  tabsContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

showTabContent();

tabsParent.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (target === item) {
        console.log(i);
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

function showcurrentTab(i) {
  setTimeout(function () {
    hideTabContent();
    showTabContent(i);
  }, 1000 * i);
}

setInterval(() => {
  for (let i = 0; i <= 3; i++) {
    showcurrentTab(i);
  }
}, 5000);

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

console.log(modal);
console.log(modalTrigger);
console.log(closeModalBtn);

const showModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};

modalTrigger.addEventListener("click", showModal);

const closeModal = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
};

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});


onscroll = () => {
  if (
    scrollY + 1 >=
    document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  ) {
    showModal();
  }
};
