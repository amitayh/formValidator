/**
 * Generic stand-alone form validation class
 * @author Amitay Horwitz <amitayh@gmail.com>
 * @version 3.1
 *
 * Usage:
 *     1. Add a special class for each element you want to validate in you form
 *        The class should be in this format: validate[rule1|rule2|...|ruleN]
 *        Each rule should be in this format: rule_name:param1,param2,...,paramN
 *        You can add as many validation rules as you need for each element
 *        Example - required field, 5 to 10 characters long:
 *            <input type="text" class="validate[required|length:5,10]" />
 *     2. Instantiate a new formValidator:
 *        formValidator(form, options)
 *            - form: the form elements
 *            - options: object for options
 */

function formValidator(form, options) {
    if (!form) { return false; }
    this.options = {
        alert: function(el, message) {
            window.alert(message);
            el.focus();
        },
        bindSubmit: true
    };
    this.setOptions(options);
    this.form = form;
    this.rules = [];
    var fields = form.getElementsByTagName('*');
    for (var i = 0, l = fields.length; i < l; i++) {
        var el = fields[i];
        var match = /validate\[(.+?)\]/.exec(el.className);
        if (match) {
            this.rules.push([el, match[1]]);
        }
    }
    if (this.options.bindSubmit) {
        var that = this,
            addEvent = function (el, ev, fn) {
                if (el.addEventListener) { el.addEventListener(ev, fn, false); }
                else if (el.attachEvent) { el.attachEvent('on' + ev, fn); }
                else { el['on' + ev] = fn; }
            },
            stopEvent = function(e) {
                e = e || window.event;
                if (e.stopPropagation) { e.stopPropagation(); }
                if (e.preventDefault) { e.preventDefault(); }
                e.cancelBubble = true;
                e.returnValue = false;
                e.cancel = true
            };
        addEvent(this.form, 'submit', function(e) {
            if (!that.validate()) {
                stopEvent(e);
            }
        });
    }
}
formValidator.prototype.setOptions = function(options) {
    options = options || {};
    for (var i in options) {
        if (options.hasOwnProperty(i)) {
            this.options[i] = options[i];
        }
    }
};
formValidator.prototype.validate = function() {
    for (var i = 0, l = this.rules.length; i < l; i++) {
        var el = this.rules[i][0],
            rule = this.rules[i][1].split('|');
        if (el) {
            for (var _i = 0, _l = rule.length; _i < _l; _i++) {
                var _rule = rule[_i].split(':'),
                    _validator = formValidator.validators[_rule[0]];
                if (_validator) {                    
                    var params = (_rule[1]) ? _rule[1].split(',') : [],
                        validator = new _validator(el, params);
                    if (!validator.isValid()) {
                        if (typeof this.options.alert == 'function') {
                            this.options.alert.apply(this, [el, validator.getMessage()]);
                        }
                        return false;
                    }
                }
            }
        }
    }
    return true;
};
String.prototype.substitute = function(vars) {
    var str = this;
    for (var i in vars) {
        if (vars.hasOwnProperty(i)) {
            str = str.replace(new RegExp('(\{' + i + '\})', 'g'), vars[i]);
        }
    }
    return str;
};
formValidator.version = '3.1';
formValidator.getValue = function(el) { return formValidator.getValues(el)[0]; };
formValidator.getValues = function(el) {
    var value = [];
    if (el.name && !el.disabled) {
        switch (el.tagName.toLowerCase()) {
            case 'input':
                var val = ((el.type == 'radio' || el.type == 'checkbox') && !el.checked) ? null : el.value;
                value.push(val);
                break;
            case 'select':
                var options = el.options;
                for (var i = 0, l = options.length; i < l; i++) {
                    var option = options[i];
                    if (option.selected) {
                        value.push(option.value);
                    }
                }
                break;
            case 'textarea':
                value.push(el.value);
                break;
        }
    }
    return value;
};
formValidator.validators = {
    required: function(el) {
        var pattern = /^$/;
        return {
            isValid: function() { return !pattern.test(formValidator.getValue(el)); },
            getMessage: function() { return formValidator.messages.required.substitute({title: el.title}); }
        }
    },
    length: function(el, params) {
        var min = params[0] || null,
            max = params[1] || null,
            message = '';
        return {
            isValid: function() {
                var length = formValidator.getValue(el).length;
                if (min !== null && length < min) {
                    message = formValidator.messages.length_min.substitute({title: el.title, min: min});
                    return false;
                }
                if (max !== null && length > max) {
                    message = formValidator.messages.length_max.substitute({title: el.title, max: max});
                    return false;
                }
                return true;
            },
            getMessage: function() { return message; }
        };
    },
    is: function(el, params) {
        var value = params[0];
        return {
            isValid: function() { return (formValidator.getValue(el) == value); },
            getMessage: function() { return formValidator.messages.is.substitute({title: el.title, value: value}); }
        };
    },
    isnot: function(el, params) {
        var value = params[0];
        return {
            isValid: function() { return (formValidator.getValue(el) != value); },
            getMessage: function() { return formValidator.messages.isnot.substitute({title: el.title, value: value}); }
        };
    },
    match: function(el, params) {
        var el2 = document.getElementById(params[0]);
        return {
            isValid: function() { return (formValidator.getValue(el) == formValidator.getValue(el2)); },
            getMessage: function() { return formValidator.messages.match.substitute({title1: el.title, title2: el2.title}); }
        };
    },
    email: function(el) {
        var pattern = /^(([0-9a-z]+[-._+&])*[0-9a-z]+@([-0-9a-z]+[.])+[a-z]{2,6}){0,1}$/i;
        return {
            isValid: function() { return pattern.test(formValidator.getValue(el)); },
            getMessage: function() { return formValidator.messages.email.substitute({title: el.title}); }
        };
    },
    alpha: function(el) {
        var pattern = /^[a-z]*$/i;
        return {
            isValid: function() { return pattern.test(formValidator.getValue(el)); },
            getMessage: function() { return formValidator.messages.alpha.substitute({title: el.title}); }
        };
    },
    numeric: function(el) {
        var pattern = /^\d*$/;
        return {
            isValid: function() { return pattern.test(formValidator.getValue(el)); },
            getMessage: function() { return formValidator.messages.numeric.substitute({title: el.title}); }
        };
    },
    alphanumeric: function(el) {
        var pattern = /^[a-z0-9]*$/i;
        return {
            isValid: function() { return pattern.test(formValidator.getValue(el)); },
            getMessage: function() { return formValidator.messages.alphanumeric.substitute({title: el.title}); }
        };
    },
    spacenumeric: function(el) {
        var pattern = /^[\d\-\s]*$/;
        return {
            isValid: function() { return pattern.test(formValidator.getValue(el)); },
            getMessage: function() { return formValidator.messages.spacenumeric.substitute({title: el.title}); }
        };
    },
    checked: function(el) {
        return {
            isValid: function() { return el.checked; },
            getMessage: function() { return formValidator.messages.checked.substitute({title: el.title}); }
        };
    },
    checkmin: function(el, params) {
        var checkboxes = [],
            elements = el.getElementsByTagName('input'),
            min = params[0];
        for (var i = 0, l = elements.length; i < l; i++) {
            var el = elements[i];
            if (el.type == 'checkbox') {
                checkboxes.push(el);
            }
        }
        return {
            isValid: function() {
                var count = 0;
                for (var i = 0, l = checkboxes.length; i < l; i++) {
                    if (checkboxes[i].checked) {
                        count++;
                    }
                }
                return (count >= min);
            },
            getMessage: function() {
                return formValidator.messages.checkmin.substitute({min: min});
            }
        }
    }
};
formValidator.messages = {
    required: "{title} is required",
    length_min: "{title} is not valid - must contain at least {min} characters",
    length_max: "{title} is not valid - can't be longer than {max} characters",
    is: "{title} must be '{value}'",
    isnot: "{title} cannot be '{value}'",
    match: "{title1} doesn't match {title2}",
    email: "{title} is not valid - must contain a valid e-mail address",
    alpha: "{title} is not valid - must contain alphabet characters only",
    numeric: "{title} is not valid - must contain digits only",
    alphanumeric: "{title} is not valid - must contain alphanumeric characters only",
    spacenumeric: "{title} is not valid - must contain digits or spaces only",
    checked: "{title} must be checked",
    checkmin: "Select at least {min} checkboxes"
};