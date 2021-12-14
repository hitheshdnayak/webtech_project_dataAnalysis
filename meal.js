let today = new Date();
module.exports.getMealTime = function() {
let time = today.getHours();
if (time > 16)
return "Dinner time.";
else if (time > 12)
return "Lunch time.";
else
return "Breakfast time.";
}

