import tabsH from './tabs-h.html';
import tabsHCSS from './tabs-h.css';

export default {
    init: function () {

        $(".tabs-h li:nth-child(1)").addClass('active');

        $('.tabsContent > div').hide();
        $('.tabsContent > div:nth-child(1)').show();

        $('.tabs-h li').click(function () {

            var tabsContent = '#' + $(this).parent().data('content');
            $(this).parent().children('li').removeClass('active');
            $(this).addClass('active');

            $(tabsContent + ' > div').hide();
            $(tabsContent + ' > div:nth-child(' + $(this).data('tab') + ')').fadeIn();
        });
    },
    tabsH: function () {
        return tabsH
    }
}