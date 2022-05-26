import minimalHeader from './components/header/minimal/minimal';

import container from './components/container/container';

import heroBanner from './components/banner/hero/hero-banner';
import boomBanner from './components/banner/boom/boom-banner';

import videoBanner from './components/banner/video/video-banner';
import carrousel from './components/banner/carrousel/carrousel';
import bandBanner from './components/banner/band/band-banner';
import stickerBanner from './components/banner/sticker/sticker-banner';

import textBox from './components//text/text-box/text-box';
import title from './components/text/title/title';
import subtitle from './components/text/subtitle/subtitle';
import keyPoints from './components/block/key-points/key-points';
import keyFeatures from './components/block/key-features/key-features';
import combo from './components/block/combo/combo';
import link from './components/text/link/link';
import list from './components/text/list/list';

import apps from './components/button/apps/apps';
import primary from './components/button/primary/primary';
import secondary from './components/button/secondary/secondary';
import pill from './components/button/pill/pill';

import cards from './components/card/card';

import faqs from './components/faqs/faqs';
import modal from './components/modal/modal';
import steps from './components/steps/steps';
import tabsH from './components/tabs/tabs-h/tabs-h';
import tabsV from './components/tabs/tabs-v/tabs-v';
import talks from './components/talks/talks';
import video from './components/video/video';
import table from './components/table/table';
import stickyband from './components/stickyband/stickyband';
import form from './components/form/form';


import legal from './components/legal/legal';
import tagline from './components/tagline/tagline';




document.addEventListener('DOMContentLoaded', function () {

  

document.getElementById("root").innerHTML = `

<div class="container"><div>

<h2 class="component-group">Header</h2>
<h3 class="component">Minimal</h3>
</div></div>
${minimalHeader.minimal()}
<script type="text/plain" class="language-markup">
<div class="header-minimal">
    <img src="https://scotiabankfiles.azureedge.net/scotia-bank-mexico/digital-factory/canvas/logo.svg"
        alt="Scotiabank logo">
</div>
</script>


<div class="container"><div>
<h2 class="component-group">Container</h2>
<h3 class="component">Default</h3>
</div></div>
${container.container()}
<script type="text/plain" class="language-markup">
<div class="container">
    <div>
        <!-- Content here -->
    </div>
</div>
</script>

<div class="container"><div>
<h3 class="component">Colored</h3>
</div></div>
${container.containerColor()}
<script type="text/plain" class="language-markup">
<div class="container container--color">
    <div>
        <!-- Content here -->
    </div>
</div>
</script>





<div class="container"><div>
<h2 class="component-group">Banners</h2>

<h3 class="component">Hero Banner</h3>
</div></div>
${heroBanner.heroBanner()}
<script type="text/plain" class="language-markup">
<!-- redColor, blue, purple, pink, yellow, orange, green, yellow, grey -->
<div class="hero-banner purple">
    <div style="background-image:url('--Here your URL image background--')">
        <div>
            <div><h1 class="title"><!-- Title here --></h1>
            <!-- Description and/or extra content here -->
            </div>
        </div>
    </div>
</div>
</script>

<div class="container"><div>
<h3 class="component">Boom Banner</h3>
</div></div>
${boomBanner.boomBanner()}
<script type="text/plain" class="language-markup">
<!-- redColor, blue, purple, pink, yellow, orange, green, yellow, grey -->
<div class="boom-banner purple">
    <div>
        <div>
            <div>
                <h1>M&aacute;s cajeros<br> a tu alcance</h1> En m&aacute;s de 7,000 ubicaciones
            </div>
        </div>
    </div>
    <div
        style="background-image:url('--Here your URL image background--')">
    </div>
</div>
</script>

<div class="container"><div>
<h3 class="component">Hero Banner Box</h3>
</div></div>
${heroBanner.heroBannerBox()}
<script type="text/plain" class="language-markup">
<!-- redColor, blue, purple, pink, yellow, orange, green, yellow, grey -->
<div class="hero-banner hero-banner--box redColor">
    <div style="background-image:url('--URL image background here--')">
        <div>
            <div><h1 class="title"><!-- Title here --></h1>
            <!-- Description and/or extra content -->
            </div>
        </div>
    </div>
    <div><!-- Box content here --></div>
</div>
</script>

<div class="container"><div>
<h3 class="component">Video Banner</h3>
</div></div>
${videoBanner.videoBanner()}
<script type="text/plain" class="language-markup">
<div class="videoBanner">
        <div class="videoContainer">
                <video width="300" height="150" autoplay="autoplay" loop="loop" muted="">
                        <source src="--URL video background here--"
                                type="video/mp4"> Sorry, your browser doesn't support embedded videos.
                </video>
        </div>
        <div class="videoText">
                <div>
                <h1 class="title"><!-- title here--></h1>
                <!-- Description and/or extra content -->
                </div>
        </div>
</div>
</script>

<div class="container"><div>
<h3 class="component">Carrousel</h3>
</div></div>
${carrousel.carrousel()}
<script type="text/plain" class="language-markup">
<div class="owl-carousel owl-theme" id="primerC">
    <div class="item">
        <div class="hero-banner pink">
            <div style="background-image:url('--URL image background here--')">
                <div>
                    <div><h1 class="title"><!-- Title here --></h1>
                    <!-- Description and/or extra content -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="item">
        <div class="hero-banner green">
            <div style="background-image:url('--URL image background here--')">
                <div>
                    <div><h1 class="title"><!-- Title here --></h1>
                    <!-- Description and/or extra content -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</script>
<script type="text/plain" class="language-javascript">
var config = {
    autoplayTimeout: 9000,
    autoplay: true,
    loop: true,
    responsive: { 0: { items: 1 } }
};

jQuery("#primerC").owlCarousel(config);
</script>

<div class="container"><div>
<h3 class="component">Band banner</h3>
</div></div>
${bandBanner.bandBanner()}
<script type="text/plain" class="language-markup">
<!-- redColor, blue, purple, pink, yellow, orange, green, yellow, grey -->
<div class="band-banner grey">
    <div style="background-image:url('--Here your URL image background--')">
        <div>
            <div><h4><!-- Title here --></h4>
            <!-- Description and/or extra content here -->
            </div>
        </div>
    </div>
</div>
</script>


<div class="container"><div>
<h3 class="component">Sticker banner</h3>
</div></div>
<div class="container"><div>
${stickerBanner.stickerBanner()}
</div></div>
<script type="text/plain" class="language-markup">
<!-- redColor, blue, purple, pink, yellow, orange, green, yellow, grey -->
<div class="sticker-banner blue">
    <div></div>
    <div>
        Las respuestas sobre nuestros productos y servicios en nuestro Centro de Ayuda
        <a href="#">
            <div class="sticker-banner--ftr whiteColor"></div>
        </a>
    </div>
</div>
</script>




<div class="container"><div>
<h2 class="component-group">Text</h2>
<h3 class="component">Text box</h3>
${textBox.textBox()}
<script type="text/plain" class="language-markup">
<div class="text-box">
    <!-- Text here -->
</div>
</script>

<h3 class="component">Title</h3>
${title.title()}
<script type="text/plain" class="language-markup">
<h1 class="title">
    <!-- Text here -->
</h1>
</script>

<h3 class="component">Subtitle</h3>
${subtitle.subtitle()}
<script type="text/plain" class="language-markup">
<h2 class="subtitle">
    <!-- Text here -->
</h2>
</script>

<h3 class="component">Subtitle line</h3>
${subtitle.subtitleLine()}
<script type="text/plain" class="language-markup">
<h2 class="subtitle subtitle--line">
    <!-- Text here -->
</h2>
</script>

<h3 class="component">Link</h3>
${link.link()}
<script type="text/plain" class="language-markup">
<a href="#" class="link"><!-- Text link here --></a>
</script>

<h3 class="component">Important link</h3>
${link.linkImportant()}
<script type="text/plain" class="language-markup">
<a href="#" class="link link--important"><!-- Text link here --></a>
</script>

<h3 class="component">List unorder</h3>
${list.list()}
<script type="text/plain" class="language-markup">
<ul class="list">
    <li><!-- Item 1 --></li>
    <li><!-- Item 2 --></li>
    <li><!-- Item 3 --></li>
    <li><!-- Item n --></li>
</ul>
</script>

<h3 class="component">List order</h3>
${list.listNumber()}
<script type="text/plain" class="language-markup">
<ol class="list list--number">
    <li><!-- Item 1 --></li>
    <li><!-- Item 2 --></li>
    <li><!-- Item 3 --></li>
    <li><!-- Item n --></li>
</ol>
</script>

<h3 class="component">List unorder green</h3>
${list.listGreen()}
<script type="text/plain" class="language-markup">
<ul class="list list--green">
    <li><!-- Item 1 --></li>
    <li><!-- Item 2 --></li>
    <li><!-- Item 3 --></li>
    <li><!-- Item n --></li>
</ul>
</script>

<h3 class="component">List unorder red</h3>
${list.listRed()}
<script type="text/plain" class="language-markup">
<ul class="list list--red">
    <li><!-- Item 1 --></li>
    <li><!-- Item 2 --></li>
    <li><!-- Item 3 --></li>
    <li><!-- Item n --></li>
</ul>
</script>





<h2 class="component-group">Buttons</h2>
<h3 class="component">Primary</h3>
${primary.primary()}
<script type="text/plain" class="language-markup">
<a class="primary" href="#">
        <span><!-- Text button here --></span>
</a>
</script>

<h3 class="component">Secondary</h3>
${secondary.secondary()}
<script type="text/plain" class="language-markup">
<a class="secondary" href="#">
        <span><!-- Text button here --></span>
</a>

<a class="secondary redColor" href="#">
        <span><!-- Text button here --></span>
</a>
</script>


<h3 class="component">Pill</h3>
<div style="background-color:#fb6330;padding:36px;">${pill.pill()}</div>
<script type="text/plain" class="language-markup">
<a class="pill" href="#">
        <span><!-- Text button here --></span>
</a>

<a class="pill dark"  href="#">
        <span><!-- Text button here --></span>
</a>
</script>

<h3 class="component">Apps</h3>
${apps.apps()}
<script type="text/plain" class="language-markup">
<div class="apps">
    <a href="https://itunes.apple.com/mx/app/scotia-tarjetas/id1261040652?mt=8" target="_blank" rel="noopener">
        <img src="https://cdn.agilitycms.com/scotia-bank-mexico/digital-factory/scotia-tarjetas/img/appstore@2x.png">
    </a>
    <a href="https://play.google.com/store/apps/details?id=mx.com.anzen.scotiaTarjetas&amp;hl=es" target="_blank" rel="noopener"> <img
            src="https://cdn.agilitycms.com/scotia-bank-mexico/digital-factory/scotia-tarjetas/img/googleplay@2x.png">
    </a>
</div>
</script>





<h2 class="component-group">Blocks</h2>
<h3 class="component">Key points</h3>
${keyPoints.keyPoints()}
<script type="text/plain" class="language-markup">
<div class="key-points">
    <div>
        <img src="--URL icon 1 here--" alt="">
        <div><!-- Text 1 here --></div>
    </div>
    <div>
        <img src="--URL icon 2 here--" alt="">
        <div><!-- Text 2 here --></div>
    </div>
    <div>
        <img src="--URL icon 3 here--" alt="">
        <div><!-- Text 3 here --></div>
    </div>
    <div>
        <img src="--URL icon n here--" alt="">
        <div><!-- Text n here --></div>
    </div>
</div>
</script>

<h3 class="component">Key points text</h3>
${keyPoints.keyPointsText()}
<script type="text/plain" class="language-markup">
<div class="key-points key-points--text">
    <div>
        <img src="--URL icon 1 here--" alt="">
        <div><!-- Text 1 here --></div>
    </div>
    <div>
        <img src="--URL icon 2 here--" alt="">
        <div><!-- Text 2 here --></div>
    </div>
    <div>
        <img src="--URL icon 3 here--" alt="">
        <div><!-- Text 3 here --></div>
    </div>
    <div>
        <img src="--URL icon n here--" alt="">
        <div><!-- Text n here --></div>
    </div>
</div>
</script>

<h3 class="component">Key features</h3>
${keyFeatures.keyFeatures()}
<script type="text/plain" class="language-markup">
<div class="key-features">
    <div>
        <img src="--URL icon 1 here--" alt="">
        <div>
            <h3><!-- Title 1 here --></h3>
            <!-- Content n here -->
        </div>
    </div>
    <div>
        <img src="--URL icon 2 here--" alt="">
        <div>
            <h3><!-- Title 2 here --></h3>
            <!-- Content n2here -->
        </div>
    </div>
    <div>
        <img src="--URL icon 3 here--" alt="">
        <div>
            <h3><!-- Title 2 here --></h3>
            <!-- Content 2 here -->
        </div>
    </div>
    <div>
        <img src="--URL icon n here--" alt="">
        <div>
            <h3><!-- Title n here --></h3>
            <!-- Content n here -->
        </div>
    </div>
</div>
</script>

<h3 class="component">Combo</h3>
${combo.combo()}
<script type="text/plain" class="language-markup">
<div class="combo">
    <div><!-- Content here --></div>
    <div><img src="--URL image here--" class="illustration"></div>
</div>
</script>

<h3 class="component">Combo inverse</h3>
${combo.comboInverse()}
<script type="text/plain" class="language-markup">
<div class="combo combo--inverse">
    <div><!-- Content here --></div>
    <div><img src="--URL image here--" class="illustration"></div>
</div>
</script>

<h3 class="component">Combo equal</h3>
${combo.comboEqual()}
<script type="text/plain" class="language-markup">
<div class="combo combo--equal">
    <div><!-- Content here --></div>
    <div><!-- Content here --></div>
</div>
</script>





<h2 class="component-group">Cards</h2>
<h3 class="component">Full/Simple Card</h3>
<div class="cardWrapper">
${cards.card()}
</div>
<script type="text/plain" class="language-markup">
<article class="card">
    <!-- Content here -->
</article>
</script>

<h3 class="component">Feature Card</h3>
<div class="cardWrapper sameHeight">
${cards.cardFeature()}
</div>
<script type="text/plain" class="language-markup">
<div class="cardWrapper sameHeight">
    <article class="card card--feature">
        <img src="--URL image 1 here--">
        <h3><!-- Title 1 here --></h3>
        <!-- Content 1 here -->
    </article>
    <article class="card card--feature">
        <img src="--URL image 2 here--">
        <h3><!-- Title 2 here --></h3>
        <!-- Content 2 here -->
    </article>
</div>
</script>

<h3 class="component">Product Card</h3>
<div class="cardWrapper sameHeight">
${cards.cardProduct()}
</div>
<script type="text/plain" class="language-markup">
<div class="cardWrapper sameHeight">
    <article class="card card--product">
        <a href="#">
            <div style="background-image:url('--URL image 1 background here--')"></div>
            <div>
                <h3><!-- Title 1 here --></h3>
                <!-- Content 1 here -->
            </div>
        </a>
    </article>
    <article class="card card--product">
        <a href="#">
            <div style="background-image:url('--URL image 2 background here--')"></div>
            <div>
                <h3><!-- Title 2 here --></h3>
                <!-- Content 2 here -->
                <div class="card--product--ftr redColor"></div>
            </div>
        </a>
    </article>
    <article class="card card--product">
        <a href="#">
            <div style="background-image:url('--URL image 3 background here--')"></div>
            <div>
                <h3><!-- Title 3 here --></h3>
                <!-- Content 3 here -->
                <div class="card--product--ftr blue"><!-- Text 3 here --></div>
            </div>
        </a>
    </article>
</div>
</script>

<h3 class="component">Combo Card</h3>
<div class="cardWrapper sameHeight">
${cards.cardCombo()}
</div>
<script type="text/plain" class="language-markup">
<div class="cardWrapper sameHeight">
    <div class="card card--combo">
        <div><!-- Content  here --></div>
        <div style="background-image:url('--URL image background here--')"></div>
    </div>
    <div class="card card--combo inverse">
        <div><!-- Content  here --></div>
        <div style="background-image:url('--URL image background here--')"></div>
    </div>
</div>
</script>

<h3 class="component">Video Card</h3>
<div class="cardWrapper sameHeight">
${cards.cardVideo()}
</div>
<script type="text/plain" class="language-markup">
<div class="cardWrapper sameHeight">
    <div class="card card--video">
        <div data-video="--YT embed URL here--" class="video-thumbnail" style="background-image:url('--URL image background here--')"></div>
        <div>
            <h3><!-- Title  1 here --></h3>
            <div><!-- Content 1 here --></div>
        </div>
    </div>
    <div class="card card--video">
        <div data-video="--YT embed URL here--" class="video-thumbnail" style="background-image:url('--URL image background here--')"></div>
        <div>
            <h3><!-- Title  1 here --></h3>
            <div><!-- Content 1 here --></div>
        </div>
    </div>
    <div class="card card--video">
        <div data-video="--YT embed URL here--" class="video-thumbnail" style="background-image:url('--URL image background here--')"></div>
        <div>
            <h3><!-- Title  1 here --></h3>
            <div><!-- Content 1 here --></div>
        </div>
    </div>
</div>

<div class="modal-generic videoC">
    <div class="modal-generic-content">
        <div class="video-container popup"></div>
    </div>
</div>
</script>
<script type="text/plain" class="language-javascript">
$('.card--video > div:nth-child(1)').click(function (e) {
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
</script>

<h3 class="component">Button Card</h3>
<div class="cardWrapper sameHeight">
${cards.cardButton()}
</div>
<script type="text/plain" class="language-markup">
<div class="cardWrapper sameHeight">
    <div class="card card--button modal-triger">
        <span><!-- Card Text here --></span>
        <div class="description">
            <div class="description-content">
                <h3><!-- Modal title here --></h3>
                <!-- Modal content  here -->
            </div>
        </div>
    </div>
    <div class="card card--button modal-triger">
        <span><!-- Card Text here --></span>
        <div class="description">
            <div class="description-content">
                <h3><!-- Modal title here --></h3>
                <!-- Modal content  here -->
            </div>
        </div>
    </div>
    <div class="card card--button modal-triger">
        <span><!-- Card Text here --></span>
        <div class="description">
            <div class="description-content">
                <h3><!-- Modal title here --></h3>
                <!-- Modal content  here -->
            </div>
        </div>
    </div>
</div>
</script>
<script type="text/plain" class="language-javascript">
$('.card--button').click(function (e) {
    $('#generic .customContent').html($(this).children('.description').html());
});
</script>

<h3 class="component">Promo Card</h3>
<div class="cardWrapper">
${cards.cardPromo()}
</div>
<script type="text/plain" class="language-markup">
<div class="cardWrapper">
    <div class="card card--promo tagV">
        <div class="card_promo-card_header">
            <div><img
                    src="--URL logo image background here--"
                    caption="false"></div>
            <div><img src="https://scotiabankfiles.azureedge.net/scotia-bank-mexico/chev_down.svg" class="chevy"></div>
        </div>
        <div class="card_promo-card_content">
            <div><!-- Short Promo text here --> <span class="tc">Términos y condiciones</span></div>
            <div>
                <p><!-- Business name here --> - Términos y condiciones</p>
                <div><!-- Legal detail here --></div>
            </div>
        </div>
    </div>
</div>
</script>


<h3 class="component">Product brand Card</h3>
<div class="cardWrapper sameHeight">
${cards.cardProductBrand()}
</div>
<script type="text/plain" class="language-markup">
<div class="cardWrapper sameHeight">
    <article class="card card--product card--product-brand">
        <a href="#">
            <div style="background-image:url('--URL image 1 background here--')"></div>
            <div>
                <div class="brands">
                    <div style="background-image:url('--URL image logo 1 background here--'')"></div>
                    <div style="background-image:url('--URL image brand 1 background here--'')"></div>
                </div>
                <h3><!-- Title 1 here --></h3>
                <!-- Content 1 here -->
            </div>
        </a>
    </article>
    <article class="card card--product">
        <a href="#">
            <div style="background-image:url('--URL image 2 background here--')"></div>
            <div>
                <div class="brands">
                    <div style="background-image:url('--URL image logo 1 background here--'')"></div>
                    <div style="background-image:url('--URL image brand 1 background here--'')"></div>
                </div>
                <h3><!-- Title 2 here --></h3>
                <!-- Content 2 here -->
            </div>
        </a>
    </article>
    <article class="card card--product">
        <a href="#">
            <div style="background-image:url('--URL image 3 background here--')"></div>
            <div>
                <div class="brands">
                    <div style="background-image:url('--URL image logo 1 background here--'')"></div>
                    <div style="background-image:url('--URL image brand 1 background here--'')"></div>
                </div>
                <h3><!-- Title 3 here --></h3>
                <!-- Content 3 here -->
            </div>
        </a>
    </article>
</div>
</script>


<h3 class="component">Colored Card</h3>
<div class="cardWrapper">
${cards.cardColored()}
</div>
<script type="text/plain" class="language-markup">
<div class="cardWrapper">

<article class="card card--colored grey">
    <a href="#">
        <div style="background-image:url('--URL image logo 1 background here--'')"></div>
        <div>
            <h3>!-- Title 1 here --></h3>
            <div class="card--colored--ftr whiteColor"></div>
        </div>
    </a>
</article>
<article class="card card--colored red">
    <a href="#">
        <div style="background-image:url('--URL image logo 1 background here--'')"></div>
        <div>
            <h3>!-- Title 2 here --></h3>
            <div class="card--colored--ftr whiteColor"></div>
        </div>
    </a>
</article>
<article class="card card--colored purple">
    <a href="#">
        <div style="background-image:url('--URL image logo 1 background here--'')"></div>
        <div>
            <h3>!-- Title 3 here --></h3>
            <div class="card--colored--ftr whiteColor"></div>
        </div>
    </a>
</article>
<article class="card card--colored green">
    <a href="#">
        <div style="background-image:url('--URL image logo 1 background here--'')"></div>
        <div>
            <h3>!-- Title 4 here --></h3>
            <div class="card--colored--ftr whiteColor"></div>
        </div>
    </a>
</article>


</div>
</script>





<h2 class="component-group">Others</h2>
<h3 class="component">FAQ's</h3>
${faqs.faqs()}
<script type="text/plain" class="language-markup">
<div class="faq__list">
    <div class="faq__topic">
        <div><!-- Question text here --></div>
        <div class="faq__topic__questions">
            <div class="faq__question">
                <div class="text--small"><!-- Optional subtitle text here --></div>
                <div class="text--small"><!-- Answer text here --></div>
            </div>
        </div>
    </div>
</script>
<script type="text/plain" class="language-javascript">
$('.faq__topic > div:nth-child(1)').click(function () {
    $('.faq__topic > .faq__topic__questions').slideUp('fast');
    if ($(this).hasClass('active')) {
      $(this).parent().find('.faq__topic__questions').slideUp('fast'); $(this).removeClass('active');
    } else {
      $('.faq__topic > div:nth-child(1)').removeClass('active'); $(this).addClass('active'); $(this).parent().find('.faq__topic__questions').slideDown('fast');
    }
  });
</script>

<h3 class="component">Modal</h3>
${modal.modal()}
<script type="text/plain" class="language-markup">
<div class="modal-triger"><!-- Any element using class: 'modal-triger' --></div>
<div class="modal-generic" id="generic">
    <div class="modal-generic-content">
        <div>
            <div class="modal-generic-close"><span>✕</span></div>
            <div class="customContent">
            <!-- Custom content here injected using class: 'customContent' -->
            </div>
        </div>
    </div>
</div>
</script>
<script type="text/plain" class="language-javascript">
$('.modal-triger').click(function (e) {
    e.preventDefault();
    // Comment the next line to show static content
    $('#generic .customContent').html('');
    // Inject dynamic content here
    $('#generic').show();
    $('body').addClass('modal-view');
});

$('#generic .modal-generic-close').click(function (e) {
    $('#generic').hide();
    $('body').removeClass('modal-view');
    // Comment the next line to show static content
    $('#generic .customContent').html('');
});
</script>

<h3 class="component">Steps</h3>
${steps.steps()}
<script type="text/plain" class="language-markup">
<div class="steps">
    <div class="line"></div>
    <div class="step">
        <div>
            <div class="dot"></div>
        </div>
        <div>
            <span><!-- Step title text here --></span>
            <!-- Step title detail text here -->
        </div>
    </div>
</div>
</script>

<h3 class="component">Tabs (Horizontal)</h3>
${tabsH.tabsH()}
<script type="text/plain" class="language-markup">
<ul class="tabs-h" data-content="tabsH1">
    <li data-tab="1"><span><!-- Tab 1 title --></span></li>
    <li data-tab="2"><span><!-- Tab 2 title --></span></li>
    <li data-tab="3"><span><!-- Tab 3 title --></span></li>
    <li data-tab="4"><span><!-- Tab 4 title --></span></li>
    <li data-tab="5"><span><!-- Tab 5 title --></span></li>
</ul>
<div class="tabsContent" id="tabsH1">
    <div>
        <!-- Content Tab 1 -->
    </div>
    <div>
        <!-- Content Tab 1 -->
    </div>
    <div>
        <!-- Content Tab 1 -->
    </div>
    <div>
        <!-- Content Tab 1 -->
    </div>
    <div>
        <!-- Content Tab 1 -->
    </div>
</div>
</script>
<script type="text/plain" class="language-javascript">
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
</script>


<h3 class="component">Tabs (Vertical)</h3>
${tabsV.tabsV()}
<script type="text/plain" class="language-markup">
<div class="dual">
    <div class="fixedMenu">
        <div class="active">
            <div class="formated-title">
                <div><img src="--URL logo here--"><!-- Promo title title --></div>
            </div>
        </div>
        <ul class="vtabs" data-content="tabsV1">
            <li data-tab="1"><span><!-- Tab 1 title --></span></li>
            <li data-tab="2"><span><!-- Tab 2 title --></span></li>
            <li data-tab="3"><span><!-- Tab 3 title --></span></li>
            <li data-tab="4"><span><!-- Tab 4 title --></span></li>
            <li data-tab="5"><span><!-- Tab 5 title --></span></li>
        </ul>
    </div>
    <div class="tabsContent" id="tabsH1">
        <div>
            <!-- Content Tab 1 -->
        </div>
        <div>
            <!-- Content Tab 1 -->
        </div>
        <div>
            <!-- Content Tab 1 -->
        </div>
        <div>
            <!-- Content Tab 1 -->
        </div>
        <div>
            <!-- Content Tab 1 -->
        </div>
    </div>
</div>
</script>
<script type="text/plain" class="language-javascript">
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
</script>

<h3 class="component">Talks</h3>
${talks.talks()}
<script type="text/plain" class="language-markup">
<div class="module"><!-- Module N text --></div>
<div class="expositors">
    <div>
        <div data-cnt="c1" class="modal-triger"><!-- Session N --></div>
        <div><!-- Topic N --></div>
        <img src="https://scotiabankfiles.azureedge.net/scotia-bank-mexico/spanish/campanas/PyME/f1.png">
        <div><span><!-- Expositor N name --></span><!-- Position N --></div><
    </div>
</div>
<div class="module"><!-- Module N text --></div>
<div class="expositors">
    <div>
        <div data-cnt="c6" class="modal-triger"><!-- Session N --></div>
        <div><!-- Topic N --></div>
        <img src="https://scotiabankfiles.azureedge.net/scotia-bank-mexico/spanish/campanas/PyME/f6.png">
        <div><span><!-- Expositor N name --></span><!-- Position N --></div>
    </div>
</div>
<div style="display: none;">
    <div id="c1" class="cnt">
        <div class="subST"><span><!-- Session text N --></span><small>/ <!-- Date text N --></small>
            <p><!-- Topic text N --></p>
            <!-- Content N -->
        </div>
    </div>
</div>
</script>

<script type="text/plain" class="language-javascript">
$('.expositors > div > div:first-child').click(function (e) {

    e.preventDefault();

    // Modal data injection
    $('#generic .customContent').html($('#' + $(this).data('cnt')).html());

  });
</script>

<h3 class="component">Video</h3>
${video.video()}
<script type="text/plain" class="language-markup">
<div class="video-container">
        <iframe width="560" height="315" src="--URL video background here--"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"></iframe>
</div>
</script>


<h3 class="component">Table</h3>
${table.table()}
<script type="text/plain" class="language-markup">
<table class="table">
    <thead>
      <tr>
        <th><!-- Text here --></th>
        <th><!-- Text here --></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><!-- Text here --></td>
        <td><!-- Text here --></td>
      </tr>
      <tr>
        <td><!-- Text here --></td>
        <td><!-- Text here --></td>
      </tr>
      <tr>
        <td><!-- Text here --></td>
        <td><!-- Text here --></td>
      </tr>
    </tbody>
  </table>
</script>

<h3 class="component">Form</h3>
${form.form()}
<script type="text/plain" class="language-markup">


</script>

<h3 class="component">Stickyband</h3>
${stickyband.stickyband()}
<script type="text/plain" class="language-markup">
<div class="stickyband">
    <div>
        <div>
            <img src="--Decorative URL image here--" />
            <div>
                <div class="infoTextMobile">!-- Text mobile --></div>
                <div class="infoTextDesktop">!-- Text desktop --></div>
            </div>
        </div>
        <div>
            <a class="sb_action" href="-- URL details here--" target="_blank" rel="noopener">
                <!-- Link text here -->
            </a>
        </div>
    </div>
</div>
</script>

<h3 class="component">Legal</h3>
${legal.legal()}
<script type="text/plain" class="language-markup">
<div class="legal">
    <div class="legal-point">
        <div><!-- Ref text here --></div>
        <div><!-- Legal text here --></div>
    </div>
    <div class="legal-point legal-point--global">
        <div><!-- Ref text here --></div>
        <div><!-- Legal text here --></div>
    </div>
</script>

<h3 class="component">Tagline</h3>
${tagline.tagline()}
<script type="text/plain" class="language-markup">
<div class="tagline">
    <img src="https://scotiabankfiles.azureedge.net/scotia-bank-mexico/scotiabank_logo_rb.svg">
    <div>Tú decides, nosotros te asesoramos.<sup>®</sup></div>
</div>
</script>


<h3 class="component">Ejemplos</h3>
<h2 class="component">Vid carr</h3>
<div class="owl-carousel owl-theme" id="e1">
			<div class="item">
				<div class="cardWrapper sameHeight">
					<div class="card card--video">
						<div data-video="hhttps://www.youtube.com/embed/WwuvOOec358" class="video-thumbnail"
							style="background-image: url('https://scotiabankfiles.azureedge.net/scotia-bank-mexico/digital-factory/scotiamovil/img/GettyImages-1140190942.jpg');">
						</div>
						<div>
							<h3>Iniciar Sesi&oacute;n</h3>
							<div>
								<!-- Content 1 here -->
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="cardWrapper sameHeight">
					<div class="card card--video">
						<div data-video="https://www.youtube.com/embed/WyfOVlK37_I" class="video-thumbnail"
							style="background-image: url('https://scotiabankfiles.azureedge.net/scotia-bank-mexico/digital-factory/scotiamovil/img/GettyImages-1182285366.jpg');">
						</div>
						<div>
							<h3>Consultar tus movimientos</h3>
							<div>
								<!-- Content 1 here -->
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="cardWrapper sameHeight">
					<div class="card card--video">
						<div data-video="https://www.youtube.com/embed/MEUX28tzfg8" class="video-thumbnail"
							style="background-image: url('https://scotiabankfiles.azureedge.net/scotia-bank-mexico/digital-factory/scotiamovil/img/GettyImages-596631495.jpg');">
						</div>
						<div>
							<h3>Transferir a otros bancos (SPEI)</h3>
							<div>
								<!-- Content 1 here -->
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="cardWrapper sameHeight">
					<div class="card card--video">
						<div data-video="https://www.youtube.com/embed/-lN8ZDawEOc" class="video-thumbnail"
							style="background-image: url('https://scotiabankfiles.azureedge.net/scotia-bank-mexico/digital-factory/scotiamovil/img/GettyImages-900221630.jpg');">
						</div>
						<div>
							<h3>Transferir entre tus Cuenta</h3>
							<div>
								<!-- Content 1 here -->
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="cardWrapper sameHeight">
					<div class="card card--video">
						<div data-video="https://www.youtube.com/embed/4K6bGseT77s" class="video-thumbnail"
							style="background-image: url('https://scotiabankfiles.azureedge.net/scotia-bank-mexico/digital-factory/scotiamovil/img/GettyImages-1188433397.jpg');">
						</div>
						<div>
							<h3>Administrar tus cuentas</h3>
							<div>
								<!-- Content 1 here -->
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="cardWrapper sameHeight">
					<div class="card card--video">
						<div data-video="https://www.youtube.com/embed/ZpSRptS_GQg" class="video-thumbnail"
							style="background-image: url('https://scotiabankfiles.azureedge.net/scotia-bank-mexico/digital-factory/scotiamovil/img/GettyImages-946931092.jpg');">
						</div>
						<div>
							<h3>Comprar Tiempo Aire</h3>
							<div>
								<!-- Content 1 here -->
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="cardWrapper sameHeight">
					<div class="card card--video">
						<div data-video="https://www.youtube.com/embed/h9fwcpjlZOE" class="video-thumbnail"
							style="background-image: url('https://scotiabankfiles.azureedge.net/scotia-bank-mexico/digital-factory/scotiamovil/img/GettyImages-1209864201.jpg');">
						</div>
						<div>
							<h3>Pagar Servicios</h3>
							<div>
								<!-- Content 1 here -->
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="cardWrapper sameHeight">
					<div class="card card--video">
						<div data-video="https://www.youtube.com/embed/_V-tL0oTmK8" class="video-thumbnail"
							style="background-image: url('https://scotiabankfiles.azureedge.net/scotia-bank-mexico/digital-factory/scotiamovil/img/GettyImages-1213169854.jpg');">
						</div>
						<div>
							<h3>Alta de cr&eacute;ditos</h3>
							<div>
								<!-- Content 1 here -->
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="cardWrapper sameHeight">
					<div class="card card--video">
						<div data-video="https://www.youtube.com/embed/0iCOyyg-c9w" class="video-thumbnail"
							style="background-image: url('https://scotiabankfiles.azureedge.net/scotia-bank-mexico/digital-factory/scotiamovil/img/GettyImages-1190950862.jpg');">
						</div>
						<div>
							<h3>Estados de Cuenta</h3>
							<div>
								<!-- Content 1 here -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

        <script type="text/plain" class="language-javascript">

        var config = {
            autoplayTimeout: 9000,
            autoplay: false,
            loop: false,
            nav:true,
            responsive: { 0: { items: 1 },500: { items: 3 }}
            };
            
            jQuery("#e1").owlCarousel(config);
            
            
            document.addEventListener('DOMContentLoaded', function(e){
                $('.card--video > div:nth-child(1)').click(function (e) {
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
            
            
            });


</script>




<script type="text/plain" class="language-css">



.owl-nav {
    display: none;
}


@media only screen and (min-width: 720px) {



    .card--video {
        width: 90%;
    }


    .owl-nav {
        display: block;
    }

    .owl-prev {
        width: 42px;
        height: auto;
        position: absolute;
        top: 20%;
        left: -30px;
        display: block !important;
        border: 0px solid black;
    }

    .owl-next {
        width: 42px;
        height: auto;
        position: absolute;
        top: 20%;
        right: -30px;
        display: block !important;
        border: 0px solid black;
    }

    .owl-prev span,
    .owl-next span {
        font-size: 80px;
        display: inline-block;
        padding: 0 0 10px 0;
    }
}
</script>
<br><br><br><br><br>&nbsp;


</div></div>
`;


heroBanner.init();
container.init();
faqs.init();
modal.init();
cards.init();
tabsH.init();
tabsV.init();
talks.init();
form.init();
carrousel.init();


// <pre><code class="language-javascript">var t =20;</code></pre>
});

