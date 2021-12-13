/* ========Coyier, Chris. 2019. "Smooth Scrolling" CSS-Tricks. https://css-tricks.com/snippets/jquery/smooth-scrolling/. ========== */

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#s1"]')
  .not('[href="#s2"]')
  .not('[href="#s3"]')
  .not('[href="#s4"]')
  .not('[href="#s5"]')
  .not('[href="#s6"]')
  .not('[href="#s7"]')
  .not('[href="#s8"]')
  .not('[href="#s9"]')
  .not('[href="#s10"]')
  .not('[href="#s11"]')
  .not('[href="#s12"]')
  .not('[href="#s13"]')
  .not('[href="#s14"]')
  .not('[href="#s15"]')
  .not('[href="#s16"]')
  .not('[href="#Asia"]')
  .not('[href="#Africa"]')
  .not('[href="#Europe"]')
  .not('[href="#Carribean"]')
  .not('[href="#Americas"]')
  .not('[href="#AllProducts"]')
  .not('[href="#CanvasProducts"]')
  .not('[href="#Paintingmaterials"]')
  .not('[href="#Digital"]')
  .not('[href="#Misc"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });