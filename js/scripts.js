var lyrics = function(x) {
  var text = "";
  for (var i = x; i > 1; i--) {
    text = text + i + "bottles of beer on the wall " + i +  "bottles of beer! Take one down, pass it around, " + (i-1) + "bottles of beer on the wall." + "<br>";
  }
  return text;
};

$(document).ready(function() {
  $("form#numberInput").submit(function(event) {
    var x = parseInt($("input#x").val());
    var answer = lyrics(x);


    $(".answer").html(answer);
    $("#song").show();

    event.preventDefault();
  });
});
