// DISPLAY CURRENT DATE IN HEADER

$("#currentDay").text(moment().format('dddd, MMMM DD'));

// ONE BUTTON SAVES ALL INPUTS

$(document).ready(function () {

    var saveBtn = document.querySelector(".saveBtn");

    for (var i = 0; i < 9; i++) {
        $("#slot" + i).val(localStorage.getItem("slot" + i));
    }

    function saveEntry() {
        for (var i = 0; i < 9; i++) {
            localStorage.setItem("slot" + i, $("#slot" + i).val());
        }
    };

    saveBtn.addEventListener("click", saveEntry);
})


// SAVE USER INPUT TO LOCAL STORAGE

$(".saveBtn").click(function (event) {
    localStorage.setItem($(this).attr("id"), $(this).siblings(".user-input").text());

}) 