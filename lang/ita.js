(function(msg){
    msg.required = "{title} necessaria";
    msg.length_min = "{title} è invalida - deve contenere almeno {min} caratteri";
    msg.length_max = "{title} è invalida - non può essere più lunga di {max} caratteri";
    msg.is = "{title} deve essere '{value}'";
    msg.isnot = "{title} non può essere '{value}'";
    msg.match = "{title1} non coincide {title2}";
    msg.email = "{title} è invalida - deve includere un indirizzo e-mail valido";
    msg.alpha = "{title} è invalida - deve contenere solo caratteri alfabetici";
    msg.numeric = "{title} è invalida - deve contenere solo numeri";
    msg.alphanumeric = "{title} è invalida - deve contenere solo caratteri alfanumerici";
    msg.spacenumeric = "{title} è invalida - può contenere solo numeri o spazi";
    msg.checked = "{title} deve essere verificata";
    msg.checkmin = "Selezionare almeno {min} caselle";
})(formValidator.messages);