document.addEventListener("DOMContentLoaded", () => {
  // Slider
  let imgSlider = document.querySelectorAll('.slider-container .slider-box');
  let btnProx = document.querySelector('.proxima');
  let btnAnter = document.querySelector('.anterior');
  let btnNav = document.querySelectorAll('.btn-nav-box .btn-nav');

  if (imgSlider.length && btnProx && btnAnter && btnNav.length) {
    let contadorImg = imgSlider.length;
    let imgAtiva = 0;

    btnProx.addEventListener('click', () => {
      imgAtiva = (imgAtiva + 1) % contadorImg;
      mostrarSlider();
    });

    btnAnter.addEventListener('click', () => {
      imgAtiva = (imgAtiva - 1 + contadorImg) % contadorImg;
      mostrarSlider();
    });

    function mostrarSlider() {
      document.querySelector('.slider-container .slider-box.ativo')?.classList.remove('ativo');
      document.querySelector('.btn-nav-box .btn-nav.ativo')?.classList.remove('ativo');

      imgSlider[imgAtiva].classList.add('ativo');
      btnNav[imgAtiva].classList.add('ativo');
    }

    btnNav.forEach((btn, indice) => {
      btn.addEventListener('click', () => {
        imgAtiva = indice;
        mostrarSlider();
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        imgAtiva = (imgAtiva + 1) % contadorImg;
        mostrarSlider();
      } else if (event.key === 'ArrowLeft') {
        imgAtiva = (imgAtiva - 1 + contadorImg) % contadorImg;
        mostrarSlider();
      }
    });

    setInterval(() => {
      imgAtiva = (imgAtiva + 1) % contadorImg;
      mostrarSlider();
    }, 5000);
  }

  // Menu Hamburguer

  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const icon = menuToggle?.querySelector('i');

  //Toggle menu hamburguer
  menuToggle.addEventListener('click', () =>{
    //const menuList = navMenu.querySelector('ul');
    //menuList.classList.toggle('active');
    navMenu.querySelector('ul').classList.toggle('active');
    icon.classList.toggle('bi-list');
    icon.classList.toggle('bi-x');
  });

  //abrir submenu com seta
  document.querySelectorAll('.drop-hover > a').forEach(link =>{
    link.addEventListener('click', e =>{
    if (window.matchMedia("(max-width: 1024px)").matches){
      const parent = link.parentElement;
      parent.classList.toggle('open');
      };
    });
  });
});
