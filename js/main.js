function selectPage(page) {
    $(".selected").removeClass("selected");
    $("#" + page).addClass("selected");

    $("#content-frame").load(page + ".html");
}

$(document).ready(function () {
    selectPage("main");
    $(".nav-item").on("click", function () {
        selectPage(this.id);
    });
});