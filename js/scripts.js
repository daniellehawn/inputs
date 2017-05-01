function someInputs () {
  $('#textOutput').text($('#textInput').val());
  $('#passwordOutput').text($('#passwordInput').val());
  $('#colorOutput').text($('#colorInput').val());
  $('#dateOutput').text($('#dateInput').val());
  $('#timeOutput').text($('#timeInput').val());
  $('#emailOutput').text($('#emailInput').val());
  $('#monthOutput').text($('#monthInput').val());
  $('#numberOutput').text($('#numberInput').val());
  $('#rangeOuput').text($('#rangeInput').val());
  $('#searchOuput').text($('#searchInput').val());
  $('#telOutput').text($('#telInput').val());
  $('#urlOutput').text($('#urlInput').val());
  $('#weekOutput').text($('#weekInput').val());
  $('#radioOutput').text($('#radioInput:checked').val());
  $('#selectOutput').text($('#selectInput:checked').val()); 
  $('#checkOutput').text($('#checkInput').prop('checked'));

}

$('document').ready(someInputs);
$('form').change(someInputs);