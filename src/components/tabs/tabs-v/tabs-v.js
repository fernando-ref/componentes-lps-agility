
import tabsV from './tabs-v.html';
import tabsVSS from './tabs-v.css';

export default {
    init: function () {

        $(".vtabs li:nth-child(1)").addClass('active');

        $('.tabsContent > div').hide();
        $('.tabsContent > div:nth-child(1)').show();

        $('.vtabs li').click(function () {

            var tabsContent = '#' + $(this).parent().data('content');
            $(this).parent().children('li').removeClass('active');
            $(this).addClass('active');

            $(tabsContent + ' > div').hide();
            $(tabsContent + ' > div:nth-child(' + $(this).data('tab') + ')').fadeIn();
        });
    },
    tabsV: function(){
        return tabsV
    }
}