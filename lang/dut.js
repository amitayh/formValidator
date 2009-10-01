(function(msg){
    msg.required = "{title} is verplicht";
    msg.length_min = "{title} is ongeldig - moet minstens {min} tekens bevatten";
    msg.length_max = "{title} is ongeldig - mag niet meer dan {max} tekens bevatten";
    msg.is = "{title} moet '{value}' zijn";
    msg.isnot = "{title} kan niet '{value}' zijn";
    msg.match = "{title1} komt niet overeen met {title2}";
    msg.email = "{title} is ongeldig - moet een geldig e-mailadres bevatten";
    msg.alpha = "{title} is ongeldig - mag enkel letters bevatten";
    msg.numeric = "{title} is ongeldig - mag enkel cijfers bevatten";
    msg.alphanumeric = "{title} is ongeldig - mag enkel alfanumerieke tekens bevatten";
    msg.spacenumeric = "{title} is ongeldig - mag enkel cijfers of spaties bevatten";
    msg.checked = "{title} moet worden aangekruist";
    msg.checkmin = "Selecteer minstens {min} selectievakjes";
})(formValidator.messages);