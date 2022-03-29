var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-primary', 'shadow');
  } else {
    nav.classList.remove('bg-primary', 'shadow');
  }
});
// function navControl() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
//     document.querySelector("naw").classList = "scrolled";
//   else document.querySelector("header").classList = "";
// }

