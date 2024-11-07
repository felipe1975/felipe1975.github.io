/* === show menu creamos las variables*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show -> realiza el llamado al comando o accion CLICK para mostrar el menu*/ 
/* Menu show */
navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
   
   /* Menu hidden */
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
   
   /* ----------  search ----*/

   const search = document.getElementById('search'),
         searchBtn = document.getElementById('search-btn'),
         searchClose = document.getElementById('search-close')

/*Search show*/
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/*search hidden*/
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/* llamado al login */

const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

      /*Mostrar login*/

loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

   /* cerrar login*/

loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})



/* CARRUSEL*/

const slider= document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft= document.querySelector("#btn-left");
const btnRight= document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
   let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
   slider.style.marginLeft = "-200%";
   slider.style.transition = "all 0.5s";
   setTimeout(function(){
      slider.style.transition = "none";
      slider.insertAdjacentElement("beforeend",sliderSectionFirst);
      slider.style.marginLeft = "-100%";
   }, 500);
}

function Prev(){
   let sliderSection = document.querySelectorAll(".slider__section");
   let sliderSectionLast = sliderSection[sliderSection.length -1];
   slider.style.marginLeft = "0%";
   slider.style.transition = "all 0.5s";
   setTimeout(function(){
      slider.style.transition = "none";
      slider.insertAdjacentElement('afterbegin', sliderSectionLast);
      slider.style.marginLeft = "-100%";
   }, 500);
}

btnRight.addEventListener('click', function(){
   Next();
});

btnLeft.addEventListener('click', function(){
   Prev();
});

setInterval(function(){
   Next();
}, 5000)


/* ocultar y mostrar imagenes*/

document.addEventListener('DOMContentLoaded', function() {
   const products = document.querySelectorAll('.product');
   const showMoreBtn = document.getElementById('showMoreBtn');
   const botonSelect = document.querySelector('.botones-navegacion');
   const prevBtn = document.getElementById('prev');
   const nextBtn = document.getElementById('next');
   
   let currentIndex = 0;
   const maxVisibleInicio = 4;
   const maxVisibleMonturas = 6;
   let maxVisible = maxVisibleInicio; 

   // Función para mostrar los siguientes productos
   
   function showProducts() {
      
      for (let i = currentIndex; i < currentIndex + maxVisibleInicio && i < maxVisibleMonturas; i++) {
      products[i].classList.add('show');
      maxVisible = i;
   }

   function nexproduct(ultimo){
      for(let a = ultimo; a < maxVisible + maxVisibleMonturas; a++){
         products[a].classList.add('show');
      }

   }
   if(currentIndex == maxVisibleMonturas){
      botonSelect.style.display = 'block';
      
   }
   nextBtn.addEventListener('click', () => {
      if(currentIndex == products.length){
         products.forEach(product => product.style.display = 'none');
      }
      nexproduct(maxVisible);
   });
   currentIndex += maxVisibleInicio;
   if (currentIndex >= products.length) {
      showMoreBtn.style.display = 'none'; // Ocultamos el botón si no hay más productos
      const message = document.createElement('p');
      message.innerText = 'No hay más productos para mostrar.';
      document.querySelector('.container-products').appendChild(message);
   }
   }
   // Mostrar los primeros productos al cargar la página
   showProducts();
   // Evento para el botón "Mostrar más"
   showMoreBtn.addEventListener('click', showProducts);
   });





// ************* MENU OPCIONES -> OCULTA LAS DEMAS SECCIONES

// Obtener las secciones
const productContainer = document.getElementById('productContainer');
const monturasMenu = document.getElementById('monturas');

// Variable para verificar si el mensaje ya fue creado
let messageDisplayed = false;

// Escuchar el clic en la opción de Monturas en el menú
monturasMenu.addEventListener('click', () => {
   // Ocultar todas las demás secciones excepto el header y footer
   document.querySelectorAll('section').forEach(section => {
      section.style.display = 'none';
   });

   // Mostrar la sección de productos de Monturas solo si no se ha mostrado antes
   if (!messageDisplayed) {
      const message = document.createElement('h2');
      message.innerText = 'Monturas';
      document.querySelector('.main-title').appendChild(message);
      message.style.tableLayout = 'center';
      message.style.marginTop = '240px';
      productContainer.style.display = 'grid';
      productContainer.style.marginTop = '50px';
      messageDisplayed = true; // Marcar que el mensaje ha sido mostrado
   } else {
      // Mostrar solo el contenedor de productos si ya se mostró el mensaje
      productContainer.style.display = 'grid';
      productContainer.style.marginTop = '50px';
   }
});

// Opcional: Si quieres manejar la lógica de cambio de menú y ocultar la sección anterior
document.querySelectorAll('nav ul li').forEach(menuItem => {
   menuItem.addEventListener('click', () => {
       // Aquí puedes agregar la lógica para manejar otras opciones de menú
       // y ocultar la sección anterior si es necesario
   });
});







//  Recarga la pagina

const navLogo = document.getElementById('nav-logo');

// Recargar la página al hacer clic en el logo
navLogo.addEventListener('click', () => {
    location.reload(); // Recarga toda la página
});

/* distribuidores*/


document.addEventListener('DOMContentLoaded', function () {
   var swiper = new Swiper('.swiper-container', {
      loop: true,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
         640: {
            slidesPerView: 1, // En pantallas pequeñas, muestra 1 diapositiva
         },
         768: {
            slidesPerView: 2, // En pantallas medianas, muestra 2 diapositivas
         },
         1024: {
            slidesPerView: 3, // En pantallas grandes, muestra 3 diapositivas
         },
      }
   });
});
