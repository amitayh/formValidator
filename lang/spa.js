(function(msg){
    msg.required = "{title} es un campo necesario";
    msg.length_min = "{title} no es válido, debe estar compuesto por al menos {min} caracteres";
    msg.length_max = "{title} no es válido, no debe estar compuesto por más de {max} caracteres";
    msg.is = "{title} debe ser '{value}'";
    msg.isnot = "{title} no puede ser '{value}'";
    msg.match = "{title1} no es coherente con {title2}";
    msg.email = "{title} no es válido, debe ser una dirección de correo electrónico válida";
    msg.alpha = "{title} no es válido, debe estar compuesto sólo por caracteres alfabéticos";
    msg.numeric = "{title} no es válido, debe estar compuesto sólo por cifras";
    msg.alphanumeric = "{title} no es válido, debe estar compuesto sólo por caracteres alfanuméricos";
    msg.spacenumeric = "{title} no es válido, debe estar compuesto sólo por cifras o espacios";
    msg.checked = "{title} Debe comprobar";
    msg.checkmin = "Seleccione al menos {min} campos";
})(formValidator.messages);