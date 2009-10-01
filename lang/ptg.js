(function(msg){
    msg.required = "{title} é obrigatório";
    msg.length_min = "{title} não é válido - deve conter no mínimo {min} caracteres";
    msg.length_max = "{title} não é válido – não pode conter mais que {max} caracteres";
    msg.is = "{title} deve ser '{value}'";
    msg.isnot = "{title} não pode ser '{value}'";
    msg.match = "{title1} não corresponde {title2}";
    msg.email = "{title} não é válido – deve conter um endereço de e-mail válido";
    msg.alpha = "{title} não é válido – deve conter apenas caracteres do alfabeto";
    msg.numeric = "{title} não é válido – deve conter apenas dígitos";
    msg.alphanumeric = "{title} não é válido – deve conter apenas caracteres alfanuméricos";
    msg.spacenumeric = "{title} não é válido – deve conter apenas dígitos e espaços";
    msg.checked = "{title} deve ser selecionado";
    msg.checkmin = "Selecione no mínimo {min} caixas de seleção";
})(formValidator.messages);