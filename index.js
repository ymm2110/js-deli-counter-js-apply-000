var katzDeliLine = [];
var counter = 0;
function takeANumber(katzDeliLine, name) {
  // katzDeliLine.push(name)
  counter++
  return "Welcome. You are number " + counter + " in line."
}





function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(katzDeliLine){
  var line = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i<katzDeliLine.length; i++) {
      line += (i + 1) + ". " + katzDeliLine[i] + ", ";
    }
    line = line.slice(0, line.length-2);
    return "The line is currently: " + line;
  }
}