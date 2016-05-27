$(document).ready(function()
{

    function table_data(){
    	$.ajax({
              url: host_api+"/m-api/admin/get_admin_lab_test_csv_data",
              type:'POST',
              dataType: 'json',
              success:function(data){
                 
              }
  
          }); //ajax
    }

});