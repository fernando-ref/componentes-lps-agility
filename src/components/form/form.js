
import form from './form.html';
import formCSS from './form.css';

export default {
    init: function () {



        $("#sendForm").click(function () {

            var flagVal = true;
            var patt1 = /[a-zA-Z0-9]{4}-[0-9]{4}/g;
            /*
            var nombres = document.getElementById('nombres');
            var apellidos = document.getElementById('apellidos');
            var email = document.getElementById('email');
            var telefono = document.getElementById('telefono');
            var empresa = document.getElementById('empresa');
            */
            var codigo = document.getElementById('codigo');
            /*
            var sexoI = document.getElementsByName('sexo');
            var sexo = "";
            for (var i = 0, length = sexoI.length; i < length; i++) {
                if (sexoI[i].checked) { 
                    sexo = sexoI[i].value;
                     break; 
                 }
            }
            */
            var str = codigo.value;


            $('.formReg .error').hide();
            $('#info').show();


            /*
                if(nombres.value == ''){
                    $('#nombres ~ .error').show();
                    flagVal = false;
                }
                if(apellidos.value == ''){
                $('#apellidos ~ .error').show();
                        flagVal = false;
            
                }
                if(email.value == ''){
                $('#email ~ .error').show();
                        flagVal = false;
            
                }
                if(telefono.value == ''){
                $('#telefono ~ .error').show();
                        flagVal = false;
            
                }
                if(empresa.value == ''){
                $('#empresa ~ .error').show();
                        flagVal = false;
            
                }*/
            if (codigo.value == '') {
                $('#info').hide();
                $('#codigo ~ .error').show();
                flagVal = false;

            } else {
                str = codigo.value;
                var result2 = str.match(patt1);
                if (!result2) {
                    $('#info').hide();
                    $('#codigo ~ .error').show();
                    flagVal = false;

                }
            }

            /*
                if(sexo == ''){
                $('#sexo ~ .error').show();
                    flagVal = false;
                }
            
                */

            if (flagVal) {
                console.log('Sending data...');

                /*var data = {
                    landingType:'pyme_talks_2020',
                    jsonInfo:{
                    nombres :nombres.value,
                    apellidos:apellidos.value,
                    email:email.value,
                    telefono:telefono.value,
                    empresa:empresa.value,
                    codigo:codigo.value,
                    sexo:sexo
                    }
                };
                */
                var data = {
                    landingType: 'pyme_talks_2020',
                    jsonInfo: {
                        codigo: codigo.value
                    }
                };
                fetch('https://solicita-tu-creditoms.scotiabank.com.mx:9443/acquisition/proxy/landings/lead', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'recaptchaResponse': '1234567890'
                    },
                    body: JSON.stringify(data) // body data type must match "Content-Type" header
                }).then(response => response.json())
                    .then(data => {
                        console.log(data);
                        $('#formSection').hide();
                        $('#formSectionResult').show();
                        $('#formSectionResult').html('¡Gracias por registrarte a PyME TALKS 2020!<br><br>El 23 de septiembre recibirás un mail con todos los datos para tener acceso a las sesiones.');
                        window.location.href = "https://www.scotiabank.com.mx/campanas/pyme-talks.aspx#record"
                    }).catch(function () {
                        console.log("Error sending data");
                        $('#formSectionResult').show();
                        $('#formSectionResult').html('Error al enviar tu registro.<br> Intenta nuevamente');
                        window.location.href = "https://www.scotiabank.com.mx/campanas/pyme-talks.aspx#record"
                    });;

            }


        });


        var data;
        function validForm() {

            var flagVal = true;
            var cardsM = ['visa', 'mastercard'];
            var cards = ['travel_clasica', 'travel_oro', 'travel_platinum', 'travel_world_elite', 'viva', 'ideal', 'advantage_platinum', 'advantage_world_elite', 'tasa_baja_clasica', 'tasa_baja_oro'];
            var tipo_tarjeta = document.getElementById('tipo_tarjeta');
            var _4digitos = document.getElementById('_4digitos');
            var privacidad = document.getElementById('privacidad').checked;

            var marca_tarjetaI = document.getElementsByName('marca_tarjeta');
            var marca_tarjeta = "";
            for (var i = 0, length = marca_tarjetaI.length; i < length; i++) {
                if (marca_tarjetaI[i].checked) {
                    marca_tarjeta = marca_tarjetaI[i].value;
                    break;
                }
            }

            $('.formReg .error').hide();
            $('#info').show();

            if (tipo_tarjeta.value == '' || cards.indexOf(tipo_tarjeta.value) == -1) {
                $('#tipo_tarjeta ~ .error').show();
                flagVal = false;
            }
            if (marca_tarjeta == '' || cardsM.indexOf(marca_tarjeta) == -1) {
                $('#marca_tarjeta .error').show();
                flagVal = false;
            }
            if (_4digitos.value == '' || isNaN(_4digitos.value) || _4digitos.value.length != 4 || !/\d{4}/.test(_4digitos.value)) {
                $('#_4digitos ~ .error').show();
                flagVal = false;
            }
            if (!privacidad) {
                $('#privacidad ~ .error').show();
                flagVal = false;
            }

            data = {
                tipo_tarjeta: tipo_tarjeta.value,
                _4digitos: _4digitos.value,
                marca_tarjeta: marca_tarjeta
            };
            return flagVal;
        }

        function send() {

            var dataF = {
                landingType: 'bf2020',
                jsonInfo: data
            };

            fetch('https://solicita-tu-creditoms.scotiabank.com.mx:9443/acquisition/proxy/landings/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'recaptchaResponse': '1234567890'
                },
                body: JSON.stringify(dataF) // body data type must match "Content-Type" header
            }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    $('#formSection').hide();
                    $('#formSectionResult').show();
                    $('#formSectionResult').html('¡Gracias por registrarte!');
                    document.body.scrollTop = 0; // For Safari
                    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                }).catch(function () {
                    console.log("Error sending data");
                    $('#formSectionResult').show();
                    $('#formSectionResult').html('Error al enviar tu registro.<br> Intenta nuevamente');
                    document.body.scrollTop = 0; // For Safari
                    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                });;
        }

        $("#sendForm").click(function () {

            if (validForm()) {
                grecaptcha.render('html_element', {
                    'sitekey': '6Ld-XN4ZAAAAAJmomGXbjSv__CNUm0MBHzM_nCWp',
                    'callback': 'send'
                });
            }
        });



    },
    form: function () {
        return form
    }
}