$('#color-picker').on('click', function(){
    var color = ($('#color-picker').val());
    $('body').css('background', color);
});
