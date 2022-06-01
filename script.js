const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');

function allEventListners(){
  navToggler.addEventListener('click', togglerClick);
}
function togglerClick() {
  navToggler.classList.toggle('toggler-open');//add/remove hamburger mjd silang
  navMenu.classList.toggle('open');//add/remove class open pada .site-navbar ul
}
allEventListners();

// --------------- Seksi Nav Tab ---------------
const tabWrapper = document.querySelector(".tabWrapper");
const tombolTab = document.querySelectorAll(".tabButton");
const tabKonten = document.querySelectorAll(".tabKonten");

tabWrapper.addEventListener('click', tw => {//parameter tw mengacu tabWrapper
  const id = tw.target.dataset.id;
  if (id) {
    //forEach() memanggil fungsi untuk setiap elemen dalam array
    tombolTab.forEach(tt => {//parameter tt mengacu pd tombolTab
      tt.classList.remove("active");//classList mengembalikan nama kelas CSS dari suatu elemen
    });
    tw.target.classList.add("active");//menambahkan kelas aktif pd tombol yang ditarget
    tabKonten.forEach(tk => {//parameter tk mengacu ke tabKonten
      tk.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});