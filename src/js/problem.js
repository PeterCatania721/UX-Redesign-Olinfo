var oTable = $('#previos-submissions').DataTable( {
    dom: '<"top">rt<"bottom"lp><"clear">',
    "language": {
        "lengthMenu": "Display _MENU_",
    }
});

$(window).on('load', function() {
    $('.bottom').addClass('row');
    $('.bottom').children().addClass('col-md-6');
    $('#previos-submissions_filter').children().css('font-size', '20px');
    $('#previos-submissions_length').children().css('font-size', '18px');
    $('#previos-submissions_length').css('margin', '2px 0 2px 0');
});