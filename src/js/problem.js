var oTable = $('#previos-submissions').DataTable( {
    dom: '<"top">rt<"bottom"p><"clear">',
    order: [[1, 'desc']],
    "language": {
        "lengthMenu": "Display _MENU_",
    }
});

$(window).on('load', function() {
    $('.bottom').addClass('row');
    $('.bottom').children().addClass('col-md-12');
    $('#previos-submissions_filter').children().css('font-size', '20px');
    $('#previos-submissions_length').children().css('font-size', '18px');
    $('#previos-submissions_length').css('margin', '2px 0 2px 0');
});