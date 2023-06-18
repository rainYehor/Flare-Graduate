$(document).ready(function () {
    $('.delete_button').on('click', function() {
        $.ajax({
            type: "POST",
            url: $('.url').val(),
            data: {
                csrfmiddlewaretoken: $('input[name="csrfmiddlewaretoken"]').val(),
                product_pk: $(this).parent().find('.product').val(),
            },
            success: function(){
                
            }
        })
    })
})
