(function(msg){
    msg.required = "{title} est obligatoire";
    msg.length_min = "{title} n'est pas valide - doit contenir au moins {min} caractères";
    msg.length_max = "{title} n'est pas valide - ne peut pas être plus longue que {max} caractères";
    msg.is = "{title} doit être '{value}'";
    msg.isnot = "{title} ne peut pas être '{value}'";
    msg.match = "{title1} ne correspond pas {title2}";
    msg.email = "{title} n'est pas valide - doit contenir une adresse e-mail valide";
    msg.alpha = "{title} n'est pas valide - doit contenir seulement des caractères alphabétiques";
    msg.numeric = "{title} n'est pas valide - doit contenir seulement des chiffres";
    msg.alphanumeric = "{title} n'est pas valide - doit contenir seulement des caractères alphanumériques";
    msg.spacenumeric = "{title} n'est pas valide - doit contenir seulementles chiffres ou  des espaces";
    msg.checked = "{title} doit être controlé";
    msg.checkmin = "Choisissez au moins {min} Cases à cocher";
})(formValidator.messages);