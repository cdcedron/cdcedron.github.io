document.addEventListener('DOMContentLoaded', () => {
    
   // Navegation Menu
   var elems = document.querySelectorAll('.sidenav');
   var instances = M.Sidenav.init(elems);

   // Slider
   var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
       indicators: false,
       height: 350,
       duration: 400,
       interval:3000
    });

});