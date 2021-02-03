(function () {
   const burger = document.querySelector('.burger');
   const mobMenu = document.querySelector('.main-menu__mobile');
   
   burger.addEventListener('click', () => {
      burger.classList.toggle('burger-active');
      mobMenu.classList.toggle('main-menu__mobile_visible');
   });
}());