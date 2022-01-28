var input = document.getElementById("input");
var microphone = document.getElementById("microphone");
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  var recoignition = new webkitSpeechRecognition();

  microphone.addEventListener('click', function () {
    recoignition.start();
  });

  recoignition.addEventListener('result', function (e) {
    var trans = e.results[0][0].transcript;
    input.value = trans;
  })

}

function resetFun() {
    document.getElementById("trans").reset();
  }
  

