var tableData;

$(document).ready(function () {
    showCars();
});

function showCars() {
    $.getJSON("manufacturers", function (data) {
        tableData = data;
        var table = $('<table id="manstable" class="ajaxtable"></table>');
        table.append('<tr><th>Name</th><th>Country</th><th>Founded</th></tr>');
        $.each(data, function (key, value) {
            var row = $('<tr onclick="filter(' + key + ')"></tr>');
            $.each(value, function (k, v) {
                row.append('<td>' + v.valueOf() + '</td>');
            });
            table.append(row);
        });
        $('#table').append(table);
    });
}

function filter(manufacturer) {
    Cookies.set('manufacturer', tableData[manufacturer].name, {expires: 1});
    selectPage("cars");
}