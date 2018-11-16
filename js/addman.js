$(function () {
    $('#addcarform').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: "post",
            url: 'addManufacturers',
            data: $('form').serialize(),
            success: function (data) {
                selectPage("mans");
            },
            error: function () {
                alert('Something happened!');
            }
        })
    })
});