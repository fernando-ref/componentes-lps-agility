
import carrousel from './carrousel.html';
import cerrouselCSS from './carrousel.css';


export default {
    init: function () {
        
            var config = {
                autoplayTimeout: 9000,
                autoplay: true,
                loop: true,
                responsive: { 0: { items: 1 } }
            };
        
            jQuery("#primerC").owlCarousel(config);
    },
    carrousel: function(){
        return carrousel
    }
}