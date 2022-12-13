var oTable = $('#problems-table').DataTable( {
    dom: '<"top">rt<"bottom"lp><"clear">',
        "language": {
            "lengthMenu": "Display _MENU_ problems",
        }
    } );


$('#search').on( 'keyup', function(){
      oTable.search($(this).val()).draw() ;
});

$(window).on('load', function() {
    $('.card-body').vAlign();
    $('.bottom').addClass('row');
    $('.bottom').children().addClass('col-md-6');
    $('#problems-table_filter').children().css('font-size', '20px');
    $('#problems-table_length').css('margin-top', '4px');
    if ($(this).width() < 991.98) {
        $('#tableData').addClass('order-last');
        $('#filterData').addClass('order-first');
        $('#collapseOne').removeClass('show');
    } else {
        $('#tableData').removeClass('order-last');
        $('#filterData').removeClass('order-first');
        $('#collapseOne').addClass('show');
    }
});

$(window).resize(function() {
    $('.card-body').vAlign();
    if ($(this).width() < 991.98) {
        $('#tableData').addClass('order-last');
        $('#filterData').addClass('order-first');
        $('#collapseOne').removeClass('show');
    } else {
        $('#tableData').removeClass('order-last');
        $('#filterData').removeClass('order-first');
        $('#collapseOne').addClass('show');
    }
  });