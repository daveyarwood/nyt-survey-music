var piece = 'buzz';

function getTrackUrl(track) {
  var match = track.id.match(/track(\d+)/);
  if (match) {
    var n = Number(match[1]);
    var trackNumber = n < 10 ? '0' + n : n.toString();
    return 'audio/' + piece + '/' + trackNumber + '.mp3';
  } else {
    throw new Error('track element id isn\'t "track+<number>"');
  }
}

function getActiveTracks() {
  return $('#tracks input[type=checkbox]:checked').map(function(i, checkbox) {
    return getTrackUrl(checkbox);
  });
}

function playActiveTracks() {
  playTracks(getActiveTracks());
}

$(function() {
  $('#play button').click(playActiveTracks);
});
