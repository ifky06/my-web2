var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-warning", "shadow", "navbar-light");
    nav.classList.remove("navbar-dark");
  } else {
    nav.classList.remove("bg-warning", "shadow", "navbar-light");
    nav.classList.add("navbar-dark");
  }
});
// function navControl() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
//     document.querySelector("naw").classList = "scrolled";
//   else document.querySelector("header").classList = "";
// }
// let elemen =
// let elemen1 =
// let elemen2 =
// let elemen3 =

// if (win.matches) {
//   elemen.getAttribute('hidden');
//   elemen1.removeAttribute('hidden');
// } else {
//   elemen1.getAttribute('hidden');
//   elemen.removeAttribute('hidden');
// }
// var win = window.matchMedia("(min-width: 575.98px)");
function ilang(x) {
  if (x.matches) {
    document.getElementById("hidden1").setAttribute("hidden", "");
    document.getElementById("hidden2").removeAttribute("hidden");
    document.getElementById("hidden11").setAttribute("hidden", "");
    document.getElementById("hidden22").removeAttribute("hidden");
  } else {
    document.getElementById("hidden1").removeAttribute("hidden");
    document.getElementById("hidden2").setAttribute("hidden", "");
    document.getElementById("hidden11").removeAttribute("hidden");
    document.getElementById("hidden22").setAttribute("hidden", "");
  }
}
const mmObj = window.matchMedia("(max-width: 767.98px)");
ilang(mmObj);
mmObj.addListener(ilang);
// window.matchMedia("(max-width: 575.98px)").addEventListener("change", () => {

//     // elemen1.removeAttribute("hidden");
// });

// countdown
let awal = new Date("march 26, 2022 19:00:00");

const sekarang = new Date();
const perbedaan = sekarang.getTime() - awal.getTime();

const hari = Math.round(perbedaan / 1000 / 60 / 60 / 24);
// console.log(hari);

let tambahHari = [0, 6, 5, 4, 3, 2, 1];

if (hari >= 0) {
  let sisaBagi = hari % 7;
  let tambah = awal.getTime() + (hari + tambahHari[sisaBagi]) * 24 * 60 * 60 * 1000;
  awal = new Date(tambah);
}
// console.log(awal.toDateString());

let $hari = document.getElementById("hari");
let $jam = document.getElementById("jam");
let $menit = document.getElementById("menit");
let $detik = document.getElementById("detik");

setInterval(function () {
  var now = new Date();
  var timeLeft = (awal - now) / 1000;
  updateWaktu(timeLeft);
}, 1000);

function updateWaktu(remainingTime) {
  let days = Math.floor(remainingTime / 86400);
  remainingTime -= days * 86400;

  let hours = Math.floor(remainingTime / 3600) % 24;
  remainingTime -= hours * 3600;

  let minutes = Math.floor(remainingTime / 60) % 60;
  remainingTime -= minutes * 60;

  let seconds = Math.floor(remainingTime % 60);

  if (days < 0) {
    $hari.innerHTML = formNumber(days + 7);
  } else {
    $hari.innerHTML = formNumber(days);
  }

  $jam.innerHTML = formNumber(hours);
  $menit.innerHTML = formNumber(minutes);
  $detik.innerHTML = formNumber(seconds);
}
function formNumber(number) {
  return number < 10 ? "0" + number : number;
}

// kejutan
let count = 0;
function moreInfo() {
  if (count % 2 == 0) {
    document.getElementById("moreInfo").removeAttribute("hidden");
  } else {
    document.getElementById("moreInfo").setAttribute("hidden", "");
  }
  count++;
}
