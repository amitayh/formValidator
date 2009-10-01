(function(msg){
    msg.required = "{title} is required";
    msg.length_min = "{title} is not valid - must contain at least {min} characters";
    msg.length_max = "{title} is not valid - can't be longer than {max} characters";
    msg.is = "{title} must be '{value}'";
    msg.isnot = "{title} cannot be '{value}'";
    msg.match = "{title1} doesn't match {title2}";
    msg.email = "{title} is not valid - must contain a valid e-mail address";
    msg.alpha = "{title} is not valid - must contain alphabet characters only";
    msg.numeric = "{title} is not valid - must contain digits only";
    msg.alphanumeric = "{title} is not valid - must contain alphanumeric characters only";
    msg.spacenumeric = "{title} is not valid - must contain digits or spaces only";
    msg.checked = "{title} must be checked";
    msg.checkmin = "Select at least {min} checkboxes";
})(formValidator.messages);