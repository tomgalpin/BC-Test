var formatInputValues = function(){
    var inputValues = {};
    var name;
    var value;
    $('form input').each(function() {
        name = $(this).attr("name");
        value = $(this).val();
        inputValues[name] = value;
    });
    return inputValues;
};

var getResponses = function(urls){
    var responseString = "";
    for (i=0; i<urls.length; i++){
        $.ajax({
            type: "GET",
            url: urls[i],
            success: function(response){
                responseString = responseString + response.text;
            },
            error: function(error){
                console.debug(error);
            },
            async: false
        });
    }
    return responseString;
};

var displayResponses = function(response){
    var string = getResponses(response)
    window.alert(string);
};

var validateForm = function() {
    $("form[name='bcForm']").validate({
        rules: {
            full_name: "required",
            terms: "required",
            email: {
                email: true
            },
            month: {
                number: true,
                rangelength: [1, 2],
            }, 
            day: {
                number: true,
                rangelength: [1, 2],
            },
            year: {
                number: true,
            },
        },
        messages: {
            full_name: "Please enter your full name",
            email: "Please enter a valid email address",
            month: "Please enter a valid month.",
            day: "Please enter a valid day.",
            year: "Please enter a valid year.",
            terms: "You must agree to the terms of service."
        },
        errorPlacement: function(error, element) {
            switch(element.attr("name")) {
                case "full_name":
                    $('.error_message.full_name').append(error);
                    break;
                case "email":
                    $('.error_message.email').append(error);
                    break;
                case "email":
                    $('.error_message.email').append(error);
                    break;
                case "month":
                    $('.error_message.month').append(error);
                    break;
                case "day":
                    $('.error_message.day').append(error);
                    break;
                case "year":
                    $('.error_message.year').append(error);
                    break;
                case "terms":
                    $('.error_message.terms').append(error);
                    break;
                default:
                $('.error_message.other').append("Something is wrong, please refresh and try again!");
            }
        },
        submitHandler: function(form) {
            var url = 'http://www.mocky.io/v2/573283c60f0000f816ead7ac';
            var data = formatInputValues();
            $.ajax({
                type: "POST",
                url: url,
                data: data,
                success: function(response){
                    displayResponses(response);
                }
            });
        }
    });
};

$(document).ready(function(){
    validateForm();
});

