$(document).ready(function() {
  let expression = '';
  
  $('.btn').on('click', function() {
    const btnValue = $(this).text();
    
    if(btnValue === '=') {
      try {
        const result = eval(expression);
        $('#display').val(result);
        expression = result.toString();
      } catch(error) {
        $('#display').val('Error');
        expression = '';
      }
    } else if(btnValue === 'C') {
      $('#display').val('');
      expression = '';
    } else {
      expression += btnValue;
      $('#display').val(expression);
    }
  });
});