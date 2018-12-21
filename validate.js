
$(document).ready(function() {
	
	$('#more #checkbox_option').change(function() { 
		$('.other').toggle();
	});
	$.validator.addMethod('phonevn', function(phone_number, element) {
		phone_number = phone_number.replace(/\s+/g, "");
        var gpcPattern = /^(84|0)(9(1|4)|12(3|4|5|7|9)|8(1|2|3|4|5))\d{7}$/;

        var vmsPattern = /^(84|0)(9(0|3)|12(0|1|2|6|8)|7(0|6|7|8|9))\d{7}$/;

        var viettelPattern = /^(84|0)(9(6|7|8)|16(8|9|6|7|3|4|5|2)|3(8|9|6|7|3|4|5|2)|86|88)\d{7}$/;

        var sfone = /^(84|0)(95|155)\d{7}$/;

        var vnm = /^(84|0)(92|188|186|56|58)\d{7}$/;

        var beeline = /^(84|0)((1|)99|59)\d{7}$/;

        var table = /^(84|0)(2)\d{9}$/;
        return this.optional(element) || phone_number.length > 9 && phone_number.length < 12 &&
                (phone_number.match(gpcPattern) || phone_number.match(vmsPattern) || phone_number.match(viettelPattern) || phone_number.match(sfone)
                || phone_number.match(vnm) || phone_number.match(beeline) || phone_number.match(table));
	}, "Please specify a valid phone number");
	
	$.validator.addMethod("customemail", 
    function(value, element) {
        return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
    }, 
    "Sorry, I've enabled very strict email validation"
	);
	$("#myform").validate({
		rules: {
			full_name: {
				required: true
			},
			email: {
				customemail: true,
				required: {
			        depends:function(){
			            $(this).val($.trim($(this).val()));
			            return true;
			        }
			    },
			},
			phone: {
				required: {
		        depends:function(){
			            $(this).val($.trim($(this).val()));
			            return true;
			        }
			    },
				phonevn: true
			},
			other_full_name: {
				required: '#checkbox_option:checked'
			},
			other_phone: {
				required: '#checkbox_option:checked',
				phonevn: '#checkbox_option:checked'
			}
		},
		messages: {
			full_name: {
				required: 'Vui lòng nhập tên của bạn'
			},
			email: {
				required: 'Vui lòng nhập email của bạn',
				customemail: 'Định dạng Email không đúng'
			},
			phone: {
				required: 'Vui lòng nhập số điện thoại của bạn',
				phonevn: 'Định dạng số điện thoại chưa đúng'
			},
			other_full_name: {
				required: 'Vui lòng điền thông tin người đi'
			},
			other_phone: {
				required: 'Vui lòng điền số điện thoại người đi',
				phonevn: 'Định đang số điện thoại không đúng'
			}
		},
		submitHandler: function(form){
			form.submit();
		}
	});
});

$(document).on('click','#nextBtn', function() {
$("#myform").valid();
// $('#transfer-step-1').addClass('hide');
// $('#transfer-step-2').removeClass('hide');
// var to_email = $("#to_email").val();
// var amount = $("amount").val();
// var note = $("#note").val();
// $("#confirm_to").text(to_email);
// $("#confirm_amount").text(amount);
// $('#confirm_note').text(note);
});
