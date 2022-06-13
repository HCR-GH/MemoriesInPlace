var audio = document.querySelector('audio');
var constraints = { audio: true };

const recordButton = document.getElementById('mic').addEventListener('click', function () {
  

navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
  var mediaRecorder = new MediaRecorder(stream);
  const downloadLink = document.getElementById('download');
  var chunks = [];

  mediaRecorder.addEventListener('dataavailable', function (event) {
    chunks.push(event.data);
  });

  mediaRecorder.addEventListener('stop', function () {
    var blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
    var url = URL.createObjectURL(blob);
    audio.src = url;
    var para = document.createElement("p")
    para.innerText = "Recording Finished"
    document.body.appendChild(para)
    downloadLink.href = URL.createObjectURL(blob)
    downloadLink.download = test2.wav
    chunks = []; // reset
  });

  document.getElementById('record').addEventListener('click', function () {
    mediaRecorder.start();
    var para = document.createElement("p")
    para.innerText = "Recording Started"
    document.body.appendChild(para)
  });

  document.getElementById('stop').addEventListener('click', function () {
    mediaRecorder.stop();
  });
});
});