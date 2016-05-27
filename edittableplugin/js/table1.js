var host_api = "http://beta.zotey.com" ;
var param_csv_file_id=1;
    function table_data(){
    	$.ajax({
              url: host_api+"/m-api/admin/get_admin_lab_test_csv_data",
              type:'GET',
              dataType: 'json',
              data: { csv_file_id: param_csv_file_id }, 
              success:function(data){
                  for(var i=0; i<data.csv_data.length; i++){
                     var csv_table_row=document.createElement('tr')
                     var csv_table_cell=document.createElement('td');
                     var csv_table_cell1=document.createElement('td');
                     var csv_table_cell3=document.createElement('td');
                     var csv_table_cell4=document.createElement('td');
                     var csv_table_cell5=document.createElement('td');
                     var csv_table_cell6=document.createElement('td');
                     var csv_table_cell7=document.createElement('td');
                     var csv_table_cell8=document.createElement('td');
                     var csv_table_cell9=document.createElement('td');
                     var csv_table_cell10=document.createElement('td');
                     var csv_table_cell11=document.createElement('td');
                     var csv_table_cell12=document.createElement('td');
                     var csv_table_cell13=document.createElement('td');
                     var csv_table_cell14=document.createElement('td');
                     var csv_table_cell15=document.createElement('td');
                     var csv_table_cell16=document.createElement('td');
                     var csv_cell_label1=document.createElement('label');
                     var csv_cell_label2=document.createElement('label');
                     var csv_cell_label3=document.createElement('label');
                     var csv_cell_label4=document.createElement('label');
                     var csv_cell_label5=document.createElement('label');
                     var csv_edit_btn=document.createElement('button');
                     var csv_delete_btn=document.createElement('button');
                     $(csv_edit_btn).text("Edit");
                     $(csv_edit_btn).addClass("edit");
                     $(csv_delete_btn).text("Delete");
                     $(csv_delete_btn).addClass("delete");
                     $(csv_edit_btn).css({"backgroundColor":"#31b0d5", "color":"white", "border":"none",  "padding":"7px 14px", "borderRadius":"4px"});
                     $(csv_delete_btn).css({"backgroundColor":"#d9534f", "color":"white", "border":"none", "padding":"7px 14px", "borderRadius":"4px"});
                     
                     //adding data attribute to tds 
                     $(csv_table_cell).attr('data-input','text-box');
                     $(csv_table_cell1).attr('data-input','text-box');
                     $(csv_table_cell3).attr('data-input','text-box');
                     $(csv_table_cell4).attr('data-input','text-box');
                     $(csv_table_cell5).attr('data-input','text-box');
                     
                     //appending td's to tr
                     $(csv_table_cell).appendTo(csv_table_row);
                     $(csv_table_cell1).appendTo(csv_table_row);
                     $(csv_table_cell3).appendTo(csv_table_row);
                     $(csv_table_cell4).appendTo(csv_table_row);
                     $(csv_table_cell5).appendTo(csv_table_row);
                     $(csv_table_cell6).appendTo(csv_table_row);
                     $(csv_table_cell7).appendTo(csv_table_row);
                     $(csv_table_cell8).appendTo(csv_table_row);
                     $(csv_table_cell9).appendTo(csv_table_row);
                     $(csv_table_cell10).appendTo(csv_table_row);
                     $(csv_table_cell11).appendTo(csv_table_row);
                     $(csv_table_cell12).appendTo(csv_table_row);
                     $(csv_table_cell13).appendTo(csv_table_row);
                     $(csv_table_cell14).appendTo(csv_table_row);
                     $(csv_table_cell15).appendTo(csv_table_row);
                     $(csv_table_cell16).appendTo(csv_table_row);
                     $(csv_cell_label1).appendTo(csv_table_cell);
                     $(csv_cell_label2).appendTo(csv_table_cell1);
                     $(csv_cell_label3).appendTo(csv_table_cell3);
                     $(csv_cell_label4).appendTo(csv_table_cell4);
                     $(csv_cell_label5).appendTo(csv_table_cell5);
                     $(csv_edit_btn).appendTo(csv_table_cell6);
                     $(csv_delete_btn).appendTo(csv_table_cell7);

                     //appending values to td's
                     $(csv_cell_label1).text(data.csv_data[i].test_name);
                     $(csv_cell_label2).text(data.csv_data[i].mrp);
                     $(csv_cell_label3).text(data.csv_data[i].final_price);
                     $(csv_cell_label4).text(data.csv_data[i].sellable_individually);
                     $(csv_cell_label5).text(data.csv_data[i].parameters_count);
                     $(csv_table_cell8).text(data.csv_data[i].department_name);
                     $(csv_table_cell9).text(data.csv_data[i].master_test_name);
                     $(csv_table_cell10).text(data.csv_data[i].test_id);
                     $(csv_table_cell11).text(data.csv_data[i].total_discount);
                     $(csv_table_cell12).text(data.csv_data[i].customer_discount);
                     $(csv_table_cell13).text(data.csv_data[i].zotey_commission);
                     $(csv_table_cell14).text(data.csv_data[i].highlight);
                     $(csv_table_cell15).text(data.csv_data[i].highlight_msg);
                     $(csv_table_cell16).text(data.csv_data[i].master_test_slug);
                     
                     //appending tr to table
                     $(csv_table_row).appendTo('#csv_tabledata');
                     $("#csv_tabledata tr").on("click", "button.edit", edit_row_handler);
                     $("#csv_tabledata tr").on("click", "button.delete", delete_row_handler);
                     $("#csv_tabledata tr").on("click", ".cancel_btn",cancel_btn_handler);
                     $("#csv_tabledata tr").on("click", ".save",save_btn_handler);   
                  }
                    //updatetable button create
                     var update_div=document.createElement('div');
                     var update_table_btn=document.createElement('button');
                     $(update_table_btn).css({"background":"#1e5799", "border":"none", "width":"95px", "color":"white", "fontWeight":"800", "height":"35px", "borderRadius":"5px", "float":"right", "margin":"0px 60px 10px"});
                     $(update_table_btn).text("Update").appendTo(update_div);
                     $(update_div).appendTo("body");
               }
        }); //ajax

    }

    

    $(document).ready(function(){
      table_data();
    });   
    

