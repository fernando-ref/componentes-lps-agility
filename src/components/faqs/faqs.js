
import faqs from './faqs.html';
import faqsCSS from './faqs.css';

export default {
    init: function () {
        $('.faq__topic > div:nth-child(1)').click(function () {
            $('.faq__topic > .faq__topic__questions').slideUp('fast');
            if ($(this).hasClass('active')) {
              $(this).parent().find('.faq__topic__questions').slideUp('fast'); $(this).removeClass('active');
            } else {
              $('.faq__topic > div:nth-child(1)').removeClass('active'); $(this).addClass('active'); $(this).parent().find('.faq__topic__questions').slideDown('fast');
            }
          });
    },
    faqs: function(){
        return faqs
    }
}