function someInputs () {
  $('#textOutput').text($('#textInput').val());
  $('#passwordOutput').text($('#passwordInput').val());
  $('#colorOutput').text($('#colorInput').val());
  $('#dateOutput').text($('#dateInput').val());
  $('#timeOutput').text($('#timeInput').val());
  $('#emailOutput').text($('#emailInput').val());
  $('#monthOutput').text($('#monthInput').val());
  $('#numberOutput').text($('#numberInput').val());
  $('#rangeOutput').text($('#rangeInput').val());
  $('#searchOutput').text($('#searchInput').val());
  $('#telOutput').text($('#telInput').val());
  $('#urlOutput').text($('#urlInput').val());
  $('#weekOutput').text($('#weekInput').val());
  $('#radioOutput').text($('#radioInput:checked').val());
  $('#selectOutput').text($('#selectInput').val());
  $('#checkOutput').text($('#checkInput').prop('checked'));
  $('#datetimeOutput').text($('#datetimeInput').val());

}

$('document').ready(someInputs);
$('form').change(someInputs);