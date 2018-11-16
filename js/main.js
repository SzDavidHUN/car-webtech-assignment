function selectPage(page) {
    $(".selected").removeClass("selected");
    $("#" + page).addClass("selected");

    $("#content-frame").load(page + ".html");
}

$(function () {
    //selectPage("main");
    selectPage("addman");
});