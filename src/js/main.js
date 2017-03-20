
$(window).scroll(function(){
	var st  = $(this).scrollTop();

	$('.parallax__area__title').css({
		"transform":"translate(0%, "+st / 8+"%"
	});
	$('.parallax__area__carousel').css({
		"transform":"translate(0%, "+st / 6 +"%"
	});
});

$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});


var headerForm = $("#header-form");

$('.close').click(function(){
    $("#header-form")[0].reset()
    $("#footer-form")[0].reset();

});

///HEADER FORM
$("#header-form").validate({
    rules: {
        name: {
            lettersonly: true,
            minlength: 3,
            maxlength: 15,
            required: true
        },
        email: {
            required: true
        },
        number: {
            minlength: 10,
            maxlength: 15,
            required: true
        }
    },
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'div',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    },
    submitHandler: function(form) {

       // $("#header-form").reset();

        toastr.success('Отправлено!');
        $("#header-form")[0].reset();
        $('#myModal').removeClass('in').attr('style','display:none;');
        $(".modal-backdrop.fade.in").remove();
        //$('.modal-backdrop').removeClass('modal-backdrop fade in');
        //$('#myModal').attr('style','display:none');

        $('body').removeAttr('class').removeAttr('style');



    }
});

///FOOTER FORM

$("#footer-form").validate({
    rules: {
        name: {
            lettersonly: true,
            minlength: 3,
            maxlength: 15,
            required: true
        },
        email: {
            required: true
        },
        number: {
            minlength: 10,
            maxlength: 15,
            required: true
        },
        question:{
            required: true
        }
    },
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'div',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    },
    submitHandler: function(form) {
        toastr.success('Вопрос отправлен!');
        $("#footer-form")[0].reset();
        $('#myModal__question').removeClass('in').attr('style','display:none;');
        $(".modal-backdrop.fade.in").remove();
        $('body').removeAttr('class').removeAttr('style');
    }
});

$(document).ready(function() {
    $('#object-table').DataTable( {
        "ajax": {
            "url": "/data/table-data.json",
            "dataSrc": ""
        },
        "columns": [
            { "data": "zip" },
            { "data": "location" },
            { "data": "rooms" }
        ]
    } );
} );

