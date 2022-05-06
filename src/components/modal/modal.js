
import modal from './modal.html';
import modalCSS from './modal.css';

export default {
    init: function () {
        // Modal
        $('.modal-triger').click(function (e) {
            e.preventDefault();
            $('#generic .customContent').html('');
            $('#generic').show();
            $('body').addClass('modal-view');
        });

        $('#generic .modal-generic-close').click(function (e) {
            $('#generic').hide();
            $('body').removeClass('modal-view');
            $('#generic .customContent').html('');
        });
    },
    modal: function () {
        return modal
    }
}