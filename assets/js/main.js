// DISPLAY CURRENT DATE IN HEADER
var showTime = function () {
    $("#year").text(moment().format('YYYY'));
    $("#currentDay").text(moment().format('dddd, MMMM DD'));
    $("#time").text(moment().format('hh:mm a'));
}
setInterval(showTime, 1000); 

// SAVE USER INPUT TO LOCAL STORAGE
$(".saveBtn").click(function (event) {
    localStorage.setItem($(this).attr("id"), $(this).siblings(".user-input").val());

})

// LOAD ITEMS FROM LOCAL STORAGE
$("#div1 .user-input").val(localStorage.getItem("saveBtn0"));
$("#div2 .user-input").val(localStorage.getItem("saveBtn1"));
$("#div3 .user-input").val(localStorage.getItem("saveBtn2"));
$("#div4 .user-input").val(localStorage.getItem("saveBtn3"));
$("#div5 .user-input").val(localStorage.getItem("saveBtn4"));
$("#div6 .user-input").val(localStorage.getItem("saveBtn5"));
$("#div7 .user-input").val(localStorage.getItem("saveBtn6"));
$("#div8 .user-input").val(localStorage.getItem("saveBtn7"));
$("#div9 .user-input").val(localStorage.getItem("saveBtn8"));

// COLOR CODE EVENT TIME STATUS
var textArea = $(".user-input");
var now = moment().format('h A');
var time = $(".hour").text();
var hourBlocks = document.getElementsByClassName("hour");
var currentHour = parseInt(moment().format('H'));

function changeColor() {
    for (i = 0; i < 9; i++)
        if (hourBlocks[i].id < currentHour) {
            $(hourBlocks[i]).siblings(".user-input").addClass('bg-secondary');

        } else if (hourBlocks[i].id == currentHour) {
        $(hourBlocks[i]).siblings(".user-input").addClass('bg-danger');

    } else if (hourBlocks[i].id > currentHour) {
        $(hourBlocks[i]).siblings(".user-input").addClass('bg-success');
    }
}

showTime();
changeColor();