$(function () {
    $('#addcarform').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: "post",
            url: 'addCar',
            data: $('form').serialize(),
            success: function (data) {
                selectPage("cars");
            },
            error: function () {
                alert('Something happened!');
            }
        })
    })
});

$(function () {
    $.getJSON("manufacturerNames", function (data) {
        $.each(data, function (key, value) {
            $("#manufacturer").append('<option>' + value + '</option>');
        })
    })
})