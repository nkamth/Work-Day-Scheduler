$(document).ready(function () {

    var init = false;
    var now = moment().format('LLLL'); // Day, M/D/Y/T format

    let now24 = moment().format('H'); // 12 hour clock format
    let now12 = moment().format('h'); // 24 hour clock format
    if (init) {
        now24 = 13;
        now12 = 1;
    }

    // Display current date
    const currentDate = $('#currentDay');
    currentDate.text(now);

    var cal = new Date(); // init date and time
    var currentHour = cal.getHours(); // returns 0-23 on a 24 hour clock

    for (var i = 8; i < 18; i++) {
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add('past');
        } else if (i === currentHour) {
            document.getElementById(i.toString()).classList.add('present');
        } else if (i > currentHour) {
            document.getElementById(i.toString()).classList.add('future');
        }
    }
    // Local Storage Feature
    var h5=document.querySelector('.eventAdded');
     {
        $('.saveBtn').click(function(){
            var hr8=$("#8").val();
            localStorage.setItem('text8', hr8);
			var hr9 = $("#9").val();
			localStorage.setItem('text9', hr9);
			var hr10 = $("#10").val();
			localStorage.setItem('text10', hr10);
			var hr11 = $("#11").val();
			localStorage.setItem('text11', hr11);
			var hr12 = $("#12").val();
			localStorage.setItem('text12', hr12);
			var hr13 = $("#13").val();
			localStorage.setItem('text13', hr13);
			var hr14 = $("#14").val();
			localStorage.setItem('text14', hr14);
			var hr15 = $("#15").val();
			localStorage.setItem('text15', hr15);
			var hr16 = $("#16").val();
			localStorage.setItem('text16', hr16);
			var hr17 = $("#17").val();
			localStorage.setItem('text17', hr17);
        });
     }

     // Display saved tasks
     $("#8").val(localStorage.getItem("text8"));
     $("#9").val(localStorage.getItem("text9"));
     $("#10").val(localStorage.getItem("text10"));
     $("#11").val(localStorage.getItem("text11"));
     $("#12").val(localStorage.getItem("text12"));
     $("#13").val(localStorage.getItem("text13"));
     $("#14").val(localStorage.getItem("text14"));
     $("#15").val(localStorage.getItem("text15"));
     $("#16").val(localStorage.getItem("text16"));
     $("#17").val(localStorage.getItem("text17"));

    // Button function to clear local storage and clear contents
  $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });
});