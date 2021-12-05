$(document).ready(function(){

  $('.month_year_text').datepicker( {
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    dateFormat: 'MM yy',
    onClose: function(dateText, inst) { 
        $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
    }
});

  $(document).on('click','.tbl_edit_btn',function(){
    $(this).parent().parent().find('td:nth-child(2)').find('p').hide();
    $(this).parent().parent().find('td:nth-child(2)').find('input').attr('type','text');

    $(this).parent().parent().find('td:nth-child(3)').find('p').hide();
    $(this).parent().parent().find('td:nth-child(3)').find('input').attr('type','number');

    $(this).parent().parent().find('td:nth-child(4)').find('p').hide();
    $(this).parent().parent().find('td:nth-child(4)').find('input').attr('type','number');

    // For showing/hiding the buttons
    $(this).siblings('.save_btn').css('display','inline-block');
    $(this).siblings('.cancel_btn').css('display','inline-block');

    $(this).hide();
  });

  $(document).on('click','.save_btn',function(){

    $(this).parent().parent().find('td:nth-child(2)').find('input').css('border',"1px solid #000000");
    $(this).parent().parent().find('td:nth-child(3)').find('input').css('border',"1px solid #000000");
    $(this).parent().parent().find('td:nth-child(4)').find('input').css('border',"1px solid #000000");

    var month_year = $(this).parent().parent().find('td:nth-child(2)').find('input').val();
    var unit_consumed = $(this).parent().parent().find('td:nth-child(3)').find('input').val();
    var amount = $(this).parent().parent().find('td:nth-child(4)').find('input').val();

    if(month_year=="" || unit_consumed=="" || amount==""){
      if(month_year==""){
        $(this).parent().parent().find('td:nth-child(2)').find('input').css('border',"1px solid #EB3941");
      }
      if(unit_consumed==""){
        $(this).parent().parent().find('td:nth-child(3)').find('input').css('border',"1px solid #EB3941");
      }
      if(amount==""){
        $(this).parent().parent().find('td:nth-child(4)').find('input').css('border',"1px solid #EB3941");
      }
      return false;
    }

    $(this).parent().parent().find('td:nth-child(2)').find('p').html(month_year);   
    $(this).parent().parent().find('td:nth-child(2)').find('p').show();
    $(this).parent().parent().find('td:nth-child(2)').find('input').attr('type','hidden');

    $(this).parent().parent().find('td:nth-child(3)').find('p').html(unit_consumed);
    $(this).parent().parent().find('td:nth-child(3)').find('p').show();
    $(this).parent().parent().find('td:nth-child(3)').find('input').attr('type','hidden');

    $(this).parent().parent().find('td:nth-child(4)').find('p').html(amount);
    $(this).parent().parent().find('td:nth-child(4)').find('p').show();
    $(this).parent().parent().find('td:nth-child(4)').find('input').attr('type','hidden');

    // For showing/hiding the buttons
    $(this).hide();
    $(this).siblings('.cancel_btn').hide();

    $(this).siblings('.tbl_edit_btn').css('display','inline-block');
    if($(this).parent().parent('.add_row').html()!=undefined){
      $(this).parent().parent().removeClass('add_row');
      $(this).parent().parent().addClass('edit_btn_container');
    }

  });

  $(document).on('click','.cancel_btn',function(){

    if($(this).parent().parent('.add_row').html()!=undefined){
      $(this).parent().parent().remove();  
    }
    $(this).parent().parent().find('td:nth-child(2)').find('p').show();
    $(this).parent().parent().find('td:nth-child(2)').find('input').attr('type','hidden');

    $(this).parent().parent().find('td:nth-child(3)').find('p').show();
    $(this).parent().parent().find('td:nth-child(3)').find('input').attr('type','hidden');

    $(this).parent().parent().find('td:nth-child(4)').find('p').show();
    $(this).parent().parent().find('td:nth-child(4)').find('input').attr('type','hidden');

    // For showing/hiding the buttons
    $(this).hide();
    $(this).siblings('.save_btn').hide();

    $(this).siblings('.tbl_edit_btn').css('display','inline-block');
  });

  $(document).on('click','.add_btn',function(){
    var row_no = Number($("#electric_table tbody tr:last td:first").html())+1;
    $('#electric_table tbody').append('<tr class="add_row"><td>'+row_no+'</td><td><p></p><input type="text" value="" class="month_year_text"/></td><td><p></p><input type="number" value="" class="unit_consumed"/></td><td><p></p><input type="number" value="" class="amount"/></td><td><img src="assets/img/edit-button.png" class="tbl_edit_btn" alt="Edit button"/><input type="button" value="Save" class="save_btn"/><input type="button" value="Cancel" class="cancel_btn"/> </td></tr>');
    $('.month_year_text').datepicker( {
      changeMonth: true,
      changeYear: true,
      showButtonPanel: true,
      dateFormat: 'MM yy',
      onClose: function(dateText, inst) { 
          $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
      }
  });
  });


});