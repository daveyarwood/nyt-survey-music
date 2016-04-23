var audio = new (window.AudioContext || window.webkitAudioContext)();

function playTracks(tracks) {
  var buffers = []

  function addBuffer(buffer) {
    buffers.push(buffer);
  }

  function loadTrack(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    request.onload = function() {
      function onSuccess(buffer) {
        var source = audio.createBufferSource();
        source.buffer = buffer;
        source.connect(audio.destination);
        buffers.push(source);
      }
      function onError(error) {
        console.error('error decoding audio data', error);
      }
      audio.decodeAudioData(request.response, onSuccess, onError);
    }

    request.onerror = function() {
      console.error('error getting audio file: ' + url);
    }

    request.send();
  }

  function playBuffers() {
    for(var i = 0; i < buffers.length; i++) {
      buffers[i].start(0);
    }
  }

  function playWhenLoaded() {
    if (buffers.length < tracks.length) {
      window.setTimeout(playWhenLoaded, 500);
    } else {
      playBuffers();
    }
  }

  tracks.each(function(i, track) {
    loadTrack(track);
  });

  playWhenLoaded();
}
