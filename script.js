$(document).ready(function() {
    $('#calculate').click(function() {
        var age = parseFloat($('#age').val());
        if (!isNaN(age)) {
            var insuranceCost = 5 * age + 300;
            $('#insuranceCost').text('$' + insuranceCost.toFixed(2));
            $('#result').fadeIn();
        } else {
            alert('Please enter a valid age.');
        }
    });

    $('#clear').click(function() {
        $('#age').val('');
        $('#result').fadeOut();
    });
});
