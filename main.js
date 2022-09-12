// header 반응형
const mobile = window.matchMedia("screen and (max-width: 767px)");
const header = document.querySelector("#header");

const viewChangeHandler = (mobile) => {
  if (mobile.matches === true) {
    // 모바일 메뉴 아이콘
    const menuIcon = document.querySelector(".menu-icon");
    const lines = document.querySelectorAll(".menu-icon div");
    menuIcon.addEventListener("click", () => {
      for (i = 0; i < lines.length; i++) {
        lines[i].classList.toggle("animate");
        lines[i].classList.remove("start");
      }
      header.classList.toggle("menu-active");
    });
    return;
  } else {
    // 데스크탑 서브메뉴 이벤트
    const menuList = document.querySelectorAll("#menu > ul > li");
    const subMenu = document.querySelectorAll(".sub-menu");
    for (let i = 0; i < menuList.length; i++) {
      menuList[i].addEventListener("mouseover", () => {
        subMenu[i].classList.add("active");
        header.classList.add("active");
      });
      menuList[i].addEventListener("mouseleave", () => {
        subMenu[i].classList.remove("active");
        header.classList.remove("active");
      });
    }
  }
};
viewChangeHandler(mobile);
window.addEventListener("resize", viewChangeHandler);

// gallery slide
const labels = document.querySelectorAll(".gallery-slider-labels label");
const radios = document.querySelectorAll(".gallery-slider input[type=radio]");

for (let i = 0; i < labels.length; i++) {
  labels[i].addEventListener("click", (e) => {
    const active = document.querySelector(".gallery-slider-labels .active");
    active.classList.remove("active");
    e.target.classList.add("active");
  });
}
