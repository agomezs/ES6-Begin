

// the results are computed one by one, on demand.
function* splitIntoRows(icons, rowLength) {
  // var rows = [];
  for (var i = 0; i < icons.length; i += rowLength) {
    // rows.push(...)
    yield icons.slice(i, i + rowLength);
  }
}