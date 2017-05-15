(function() {
  'use strict';

  require('./styles.styl');

  setTimeout(function() {
    window.Reveal.initialize({
      transition: 'fade',
      history: true,
    });
    require('script-loader!reveal-code-focus');
    window.RevealCodeFocus();
  }, 100);

})();
