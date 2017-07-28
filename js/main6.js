var indicator = 0;
var inSection = false;
var currColorRotation = 0;

function toggleMenu() {
    $("#menu, #landing, #menu-status").toggleClass("active");
    if (!inSection) {
        $("#menu").toggleClass("invert");
    }
    indicator = (indicator + 1) % 2;
    if (indicator == 1) {
        $(document.body).css({"overflow-y":"hidden"});
    } else {
        $(document.body).css({"overflow-y":"auto"});
    }
}

$(document).ready(function() {
    $("#main-icon").click(function() {
        window.location.href = 'http://noahfang.me';
    });

    $(document.body).on("click", ".menuItem", function() {
        var selectedID = $(this).attr('id').split("-")[1];
        if(selectedID == "a"){
            window.location.href = 'http://noahfang.me/education.html';
        }
        else if(selectedID == "b"){
            window.location.href = 'http://noahfang.me/skills.html';
        }
        else if(selectedID == "c"){
            window.location.href = 'http://noahfang.me/interests.html';
        }
        else if(selectedID == "d"){
            window.location.href = 'http://noahfang.me';
        }
        console.log(selectedID);
        toggleMenu();
    });
});
