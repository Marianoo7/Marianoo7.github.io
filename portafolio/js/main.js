/**
* Template Name: PhotoFolio
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

   // Activate Bootstrap scrollspy on the main nav element
   const mainNav = document.body.querySelector('#mainNav');
   if (mainNav) {
       new bootstrap.ScrollSpy(document.body, {
           target: '#mainNav',
           rootMargin: '0px 0px -40%',
       });
   };


})();