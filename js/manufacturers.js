$(function () {
    showCars();
});

function showCars() {
    $.getJSON("manufacturers", function (data) {
        var table = $('<table id="manstable" class="ajaxtable"></table>');
        table.append('<tr><th>Name</th><th>Country</th><th>Founded</th></tr>');
        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            $.each(value, function (k, v) {
                row.append('<td>' + v.valueOf() + '</td>');
            });
            table.append(row);
        });
        $('#table').append(table);
    });
}