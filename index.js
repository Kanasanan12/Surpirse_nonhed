const modal = document.querySelector(".modal-container");
const button_test = document.querySelector(".button");
const main_content = document.querySelector(".surprise");
const button_confirm = document.querySelector(".confirm");
const button_cancle = document.querySelector(".cancle");

button_test.addEventListener("click", () => {
    modal.classList.add("active");
});

button_confirm.addEventListener("click", () => {
    modal.classList.remove("active");
    button_test.style.display = "none";
    main_content.style.display = "flex";
});

button_cancle.addEventListener("click", () => {
    modal.classList.remove("active");
});