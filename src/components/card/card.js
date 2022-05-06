
import card from './card.html';
import cardFeature from './card--feature.html';
import cardProduct from './card--product.html';
import cardCombo from './card--combo.html';
import cardVideo from './card--video.html';
import cardButton from './card--button.html';
import cardPromo from './card--promo.html';
import cardPromoBrand from './card--promo-brand.html';
import cardColored from './card--colored.html';

import cardCSS from './card.css';

export default {
    init: function () {

        /*-------Video card----- */
        $('.card--video > div:nth-child(1)').click(function (e) {
            // Inject data
            var video = '<iframe class="full-video" width="560" height="315" style="margin:0 auto;" src="' + $(this).data('video') + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            $('.videoC .modal-generic-content > .video-container').html(video);

            $('.videoC').show();
            $('body').addClass('modal-view');

        });

        $('.videoC').click(function (e) {
            $('.videoC').hide();
            $('body').removeClass('modal-view');
            // Clean injected data
            $('.videoC .video-container').html('');
        });


        /*-------Promo card----- */
        $('.chevy').click(function () {

            $(this).toggleClass('open');

            var x = $(this).parent().parent().parent().children('.card_promo-card_content');

            if (x.hasClass('expand')) {
                x.removeClass('visibleTC');
                x.removeClass('expand');
            } else {
                x.addClass('expand');
            }
        });

        $('.tc').click(function () {
            $(this).parent().parent().addClass('visibleTC');
        });

        $('.back').click(function () {
            $(this).parent().parent().parent().removeClass('visibleTC');
        });

        /*-------Button card----- */
        $('.card--button').click(function (e) {
            // Inject data
            $('#generic .customContent').html($(this).children('.description').html());
        });

    },
    card: function () {
        return card
    },
    cardFeature: function () {
        return cardFeature
    },
    cardProduct: function () {
        return cardProduct
    },
    cardProductBrand: function () {
        return cardPromoBrand
    },
    cardCombo: function () {
        return cardCombo
    },
    cardVideo: function () {
        return cardVideo
    },
    cardButton: function () {
        return cardButton
    },
    cardPromo: function () {
        return cardPromo
    },
    cardColored: function () {
        return cardColored
    }
}