



//var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
//var workHours = "" function (){
//for (  i = 0; i < hours.length; i++);
//};
$document.ready(function(){


var timeRow = $("<div>");
timeRow.addClass("row time-block");
timeRow.attr("id", "hour-9"); 
$("#container").append(timeRow);

var timeColumn = $("<div>"); 
timeColumn.addClass("col-mid-1 hour"); 
timeColumn.text("9AM");
$("#hour-9").append(timeColumn);

var descriptionText = $("<textarea>");
descriptionText.addClass("col-md-10 description");
$("#hour-9").append(descriptionText);

var saveButton = $("<button>");
saveButton.addClass("saveBtn col-md-1");
$("#hour-9").append(saveButton)


});


