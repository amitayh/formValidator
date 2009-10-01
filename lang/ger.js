(function(msg){
    msg.required = "{title} ist erforderlich";
    msg.length_min = "{title} ist ungültig - muss mindestens {min} Zeichen enthalten";
    msg.length_max = "{title} ist ungültig - darf nicht länger als {max} Zeichen sein";
    msg.is = "{title} muss '{value}' sein";
    msg.isnot = "{title} darf nicht '{value}' sein";
    msg.match = "{title1} stimmt nicht mit {title2} überein";
    msg.email = "{title} ist ungültig - muss eine gültige E-Mail-Adresse enthalten";
    msg.alpha = "{title} ist ungültig - darf nur alphabetische Zeichen enthalten";
    msg.numeric = "{title} ist ungültig - darf nur Ziffern enthalten";
    msg.alphanumeric = "{title} ist ungültig - darf nur alphanumerische Zeichen enthalten";
    msg.spacenumeric = "{title} ist ungültig - darf nur Ziffern oder Leerzeichen enthalten";
    msg.checked = "{title} muss geprüft werden";
    msg.checkmin = "Wählen Sie mindestens {min} Kontrollkästchen";
})(formValidator.messages);