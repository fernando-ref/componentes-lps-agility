
import talks from './talks.html';
import talksCSS from './talks.css';

export default {
  init: function () {

    $('.expositors > div > div:first-child').click(function (e) {

      e.preventDefault();

      // Modal data injection
      $('#generic .customContent').html($('#' + $(this).data('cnt')).html());

    });

  },
  talks: function () {
    return talks
  }
}