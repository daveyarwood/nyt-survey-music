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

function allTracks() {
  return $('#tracks input[type=checkbox]');
}

function checkedTracks() {
  return $('#tracks input[type=checkbox]:checked');
}

function activeTracks() {
  return checkedTracks().map(function(i, checkbox) {
    return getTrackUrl(checkbox);
  });
}

function playActiveTracks() {
  playTracks(activeTracks());
}

function randomizeActiveTracks() {
  allTracks().each(function(i, checkbox) {
    $(checkbox).prop('checked', (Math.random() > 0.5));
  });
}

$(function() {
  $('#play').click(playActiveTracks);
  $('#randomize').click(randomizeActiveTracks);
});
