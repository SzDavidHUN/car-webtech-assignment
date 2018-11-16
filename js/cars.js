$(function () {
    showCars();
});

function showCars() {
    $.getJSON("cars", function (data) {
        var table = $('<table id="carstable" class="ajaxtable"></table>');
        table.append('<tr><th>Name</th><th>Consumption</th><th>Color</th><th>Manufacturer</th><th>Available</th><th>Year</th><th>Horsepower</th></tr>');
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