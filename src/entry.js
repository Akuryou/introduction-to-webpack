(function() {
  'use strict';

  setTimeout(function() {
    window.Reveal.initialize({
      transition: 'convex',
      history: true,
    });
    require('script!reveal-code-focus');
    window.RevealCodeFocus();
  }, 100);

})();
