const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');
const header = document.querySelector('.header');
const scrollTop = document.querySelector('.scroll-top');

menuBtn.addEventListener('click', function () {
    navbar.classList.toggle('active');
    this.classList.toggle('change');
});
window.addEventListener('scroll', () => {
    if(window.scrollY >= 70){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    };
    if(window.scrollY > 100){
      scrollTop.classList.add('turun');
    }
    else{
      scrollTop.classList.remove('turun');
    };
});
window.addEventListener('load', () =>{
  if(window.scrollY > 70){
    header.classList.add('active');
  };
  if (window.scrollY > 100){
    scrollTop.classList.add('turun');
  }
});

// ---------- swiper js ----------
var swiper = new Swiper(".home-slider", {
    loop:true, 
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
});

// ---------- hitung angka ----------
function dataStatistik() {
  let hitung = document.querySelectorAll(".hitung");
  hitung.forEach(function (arg) {//arg mengacu ke variable hitung
    let tinggiLayar = window.innerHeight;
    let koordinat = arg.getBoundingClientRect().top;
    let batasTampil = 70;
    if (koordinat < tinggiLayar - batasTampil) {
      arg.classList.add("menghitung");
    };
  })
};
window.addEventListener('scroll', dataStatistik);
window.addEventListener('load', dataStatistik);

// ---------- seksi paket => Tab Konten ----------
let tabs = document.querySelectorAll('.tabs_toggle');
let contents = document.querySelectorAll('.tabs_content');
tabs.forEach((tab, index) => {
  //console.log(tab);//tab mengacu ke variable tabs/elemen dg class 'tabs_toggle'
  //console.log(index);//index mengacu ke index nodeList dari variable tabs/'tabs_toggle'
  tab.addEventListener('click', () => {
    contents.forEach((content) => {
      //parameter content mengacu ke variable contents
      // console.log(content);
      content.classList.remove('aktif');
    });
    tabs.forEach((tab) =>{
      tab.classList.remove('aktif');
    });
    tabs[index].classList.add('aktif');
    // console.log(tabs[index]);
    contents[index].classList.add('aktif');
    // console.log(contents[index]);
  });
});

// ---------- Langganan Email ----------
const form = document.getElementById("my-form");

async function handleSubmit(event){
  event.preventDefault();  
  // loaderSubEmail.style.display = 'block';
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert('Sukses! Tunggu email balasan dari kami!');
      // loaderSubEmail.style.display = 'none';
      form.reset();
    }
  })
  .catch(error => {
    alert('Gagal! Pastikan data yang Anda masukkan sudah benar!');
    // loaderSubEmail.style.display = 'none';
    form.reset();
  });
}
form.addEventListener("submit", handleSubmit);
