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

// lesson-6

const forms = document.querySelectorAll("form");

forms.forEach((item) => {
  bindPostData(item);
});

const message = {
  loading: "???????? ????????????????...",
  success: "??????????",
  fail: "????????????",
};

const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: data,
  });
  return res;
};

function bindPostData(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const messageBlock = document.createElement("div");
    messageBlock.textContent = message.loading;
    form.append(messageBlock);

    const formData = new FormData(form);

    const object = {};

    formData.forEach((item, i) => {
      object[i] = item;
    });

    const json = JSON.stringify(object);

    postData("server.php", json)
      .then((resp) => {
        messageBlock.textContent = message.success;
        form.append(messageBlock);
      })
      .catch((e) => {
        messageBlock.textContent = message.fail;
        form.append(messageBlock);
      })
      .finally(() => {
        setTimeout(() => {
          closeModalBtn.addEventListener("click", closeModal);
        }, 3000);
      });
  });
}
