$(document).ready(function() {
    $("#demo01").animatedModal();
    $("#demo02").animatedModal();
    $("#demo03").animatedModal();
    $("#demo04").animatedModal();
});

$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
});


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
///FOOTER form ABout
$("#footer-form-about").validate({
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
        $("#footer-form-about")[0].reset();
        $('#myModal__question').removeClass('in').attr('style','display:none;');
        $(".modal-backdrop.fade.in").remove();
        $('body').removeAttr('class').removeAttr('style');
    }
});




//////////////////DATATABLE
$(document).ready(function() {
    $('#object-table').DataTable( {
        "iDisplayLength": 25,
        "autoWidth": true,
        "ajax": {
            "url": "/data/table-data.json",
            "dataSrc": ""
        },

        "columns": [
            { "data": "zip",
                sClass: "code__color",
                "render": function(data, type, row) {
                    return '<p>Код: <span>'+data+'</span></p>';
                }
            },
            { "data": "location",
                "width": "20%",
                "render": function(data, type, row) {
                    return '<img src="img/object-page/location-icon.png" /> '+data;
                }
            },
            { "data": "rooms",
                sClass: "rooms_color",
                "width": "20%",
                "render": function(data, type, row) {
                    return '<p>Комнат всего/разд: <span> 3/'+data+'</span></p>';
                }
            },
            { "data": "buttons",
                sClass: "just",
                "width": "30%",
                "render": function(data, type, row) {
                    return '<a href="#"><img src="img/object-page/icon-chair.png" /></a><a href="#"><img src="img/object-page/tv-icon.png" /></a><a href="#"><img src="img/object-page/washing-icon.png" /></a><a href="#"><img src="img/object-page/fridge-icon.png" /></a><a href="#"><img src="img/object-page/metro-icon.png" /></a>';
                }
            },
            { "data": "price",
                sClass: "price__btn",
                "width": "10%",
                "render": function(data, type, row) {
                    return '<img src="img/object-page/dollar-icon.png" /><span>100 000 $</span><p><button type="button" class="btn btn-default">Подробнее</button></p>';
                }
            }
        ]
    } );
} );


