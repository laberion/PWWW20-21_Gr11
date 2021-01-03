var sec = 0;

function timeSpent() {
  sec ++;
  postMessage(sec);
  setTimeout("timeSpent()",1000);
}

timeSpent();