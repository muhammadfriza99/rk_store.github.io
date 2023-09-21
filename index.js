function handleResize() {
  const viewportWidth = window.innerWidth;
  const link = document.getElementById("link");
  const hamBtn = document.getElementById("ham-button");
  const hamItems = document.getElementById("ham-items");

  if (viewportWidth <= 430) {
    link.style.display = "none";
    hamBtn.style.display = "flex";
    hamItems.style.display = "";
  } else {
    link.style.display = "flex";
    hamBtn.style.display = "none";
    hamItems.style.display = "none";
  }
}
function hamBtnClick() {
  const navItem = document.querySelector("#ham-items");
  navItem.classList.toggle("toggle-navbar");
}
function linkClick(e) {
  const element = e.target;
  if (element.tagName === "A") {
    element.style.background = "linear-gradient(to right, #7fffd4, #bfd0ca)";
    element.style.borderRadius = "50px";
    const navbarItems = document.querySelectorAll("#link a");
    navbarItems.forEach((item) => {
      if (item !== element) {
        item.style.background = "";
        item.style.borderRadius = "";
      }
    });
  }
}
function linkMobileClick(e) {
  const element = e.target;
  if (element.tagName === "A") {
    element.style.borderLeft = "2px solid #7cd6b8";
    const navbarItems = document.querySelectorAll("#ham-items a");
    navbarItems.forEach((item) => {
      if (item !== element) {
        item.style.borderLeft = "";
      };
    });
  };
};
function bodyClick(e){
const element = e.target.tagName;
if (element !== "A") {
  const a = document.querySelectorAll("a");
  a.forEach((item) => {
    item.style.background = "";
    item.style.borderRadius = "";
    item.style.borderLeft = "";
  });
}
};

window.addEventListener("resize", handleResize);
handleResize();

const hamBtn = document.querySelector("#ham-button");
hamBtn.addEventListener("click", hamBtnClick);

const link = document.querySelector("#link");
link.addEventListener("click", linkClick);

const mobileNav = document.querySelector("#ham-items");
mobileNav.addEventListener("click", linkMobileClick);

const body = document.body;
body.addEventListener("click", bodyClick);
