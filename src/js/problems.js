var oTable = $('#problems-table').DataTable( {
    dom: '<"top">rt<"bottom"lp><"clear">',
        "language": {
            "lengthMenu": "Display _MENU_ problems",
        }
    } );

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

  // apply filters on the datatable
  function applySearch() {
    var typeFilters = [];
    var difficultyFilters = [];

    $("#type-filters").find("input[type=checkbox]").each(function() {
        if ($(this).is(":checked")) {
            typeFilters.push($(this).val());
        }
    });

    $("#difficulty-filters").find("input[type=checkbox]").each(function() {
        if ($(this).is(":checked")) {
            difficultyFilters.push($(this).val());
        }
    });

    oTable.search($('#search').val());
    oTable.column(1).search(typeFilters.join("|"), true, false);
    oTable.column(2).search(difficultyFilters.join("|"), true, false);
    oTable.draw();
  }

  // reset filters on button click
  $("#resetFiltersButton").click(function() {
    $("#filters-container").find("input[type=checkbox]").each(function() {
        $(this).prop("checked", false);
    });

    applySearch();
  });

// apply filters on checkbox click
$("#filters-container").find("input[type=checkbox]").each(function() {
    $(this).click(applySearch);
});

$('#search').on( 'keyup', applySearch);