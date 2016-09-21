(function() {
  'use strict';

  require('./styles.styl');

  setTimeout(function() {
    window.Reveal.initialize({
      transition: 'convex',
      history: true,
    });
    require('script!reveal-code-focus');
    window.RevealCodeFocus();
  }, 100);

})();
