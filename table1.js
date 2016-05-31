var host_api = "http://localzotey.com" ;
var param_csv_file_id=22;
var final_csv_data;
var mark_test_options=["map_to_lab","map_error_master_test","map_error_department","map_this_duplicate","keep_it_pending","duplicate_test"];

  function deletedbtn_handler(){
    var deleted_text_value=$(this).text();
    var i=$(this).parents("tr").index();
    if(deleted_text_value=="no"){
      $(this).text("yes"); 
      $(this).parents("tr").css('color','rgb(255, 102, 0)');
      $(this).css('backgroundColor','#d9534f');
      final_csv_data[i].deleted="yes";
    }
    else if(deleted_text_value=="yes"){ 
      $(this).text("no");
      $(this).css('backgroundColor','rgb(70, 184, 218)');
      $(this).parents("tr").css('color','black');
      final_csv_data[i].deleted="no";
    } 
  }//function deletedbtn_handler

    function table_data(){
    	$.ajax({
              url: host_api+"/m-api/admin/get_admin_lab_test_csv_data",
              type:'GET',
              dataType: 'json',
              data:{csv_file_id:param_csv_file_id}, 
              success:function(data){
               
                  final_csv_data=data.csv_data;
                  console.log(data.csv_data.length);
                  for(var i=0; i<data.csv_data.length; i++){
                     var csv_table_row=document.createElement('tr');
                     var csv_table_cell=document.createElement('td');
                     var csv_table_cell1=document.createElement('td');
                     var csv_table_cell3=document.createElement('td');
                     var csv_table_cell4=document.createElement('td');
                     var csv_table_cell5=document.createElement('td');
                     var csv_table_cell6=document.createElement('td');
                     var csv_table_cell8=document.createElement('td');
                     var csv_table_cell9=document.createElement('td');
                     var csv_table_cell10=document.createElement('td');
                     var csv_table_cell11=document.createElement('td');
                     var csv_table_cell12=document.createElement('td');
                     var csv_table_cell13=document.createElement('td');
                     var csv_table_cell15=document.createElement('td');
                     var csv_table_cell16=document.createElement('td');
                     var csv_cell_label1=document.createElement('label');
                     var csv_cell_label2=document.createElement('label');
                     var csv_cell_label3=document.createElement('label');
                     var csv_cell_label4=document.createElement('label');
                     var csv_cell_label5=document.createElement('label');
                     var csv_marktest_dropdown=document.createElement('select');
                     
                     
                     var csv_marktest_dropdown_option=document.createElement('option');
                     var csv_marktest_dropdown_option1=document.createElement('option');
                     var csv_marktest_dropdown_option2=document.createElement('option');
                     var csv_marktest_dropdown_option3=document.createElement('option');
                     var csv_marktest_dropdown_option4=document.createElement('option');
                     var csv_marktest_dropdown_option5=document.createElement('option');
                     //$(csv_marktest_dropdown_option3).attr('selected', 'selected' );
                     $(csv_marktest_dropdown_option).text(mark_test_options[0]);
                     $(csv_marktest_dropdown_option1).text(mark_test_options[1]);
                     $(csv_marktest_dropdown_option2).text(mark_test_options[2]);
                     $(csv_marktest_dropdown_option3).text(mark_test_options[3]);
                     $(csv_marktest_dropdown_option4).text(mark_test_options[4]);
                     $(csv_marktest_dropdown_option5).text(mark_test_options[5]);
                     
                     for(var j=0; j<mark_test_options.length; j++){
                     if(data.csv_data[i].mark_test_as==mark_test_options[j])
                     {
                       $(csv_marktest_dropdown).attr('selected', +data.csv_data[i].mark_test_as);
                     }
                     else
                     {
                       $(csv_marktest_dropdown_option).text(mark_test_options[0]);
                     }}
                     
                    
                     $(csv_marktest_dropdown_option).appendTo(csv_marktest_dropdown);
                     $(csv_marktest_dropdown_option1).appendTo(csv_marktest_dropdown);
                     $(csv_marktest_dropdown_option2).appendTo(csv_marktest_dropdown);
                     $(csv_marktest_dropdown_option3).appendTo(csv_marktest_dropdown);
                     $(csv_marktest_dropdown_option4).appendTo(csv_marktest_dropdown);
                     $(csv_marktest_dropdown_option5).appendTo(csv_marktest_dropdown);
                     //$(csv_marktest_dropdown_option1).appendTo(csv_marktest_dropdown);
                     
                     //$(csv_deleted_btn).css({"color" : "white", "backgroundColor":"rgb(70, 184, 218)", "border":"none", "border-radius":"4px"});
                     //$(csv_deleted_btn).on("click", deletedbtn_handler);
                     //var deleted_value=data.csv_data[i].deleted;
                     //if(deleted_value=="yes"){
                     //  $(csv_table_row).css("color", "red");
                     //}
                     
                     //appending td's to tr
                     $(csv_table_cell).appendTo(csv_table_row);
                     $(csv_table_cell1).appendTo(csv_table_row);
                     $(csv_table_cell3).appendTo(csv_table_row);
                     $(csv_table_cell4).appendTo(csv_table_row);
                     $(csv_table_cell5).appendTo(csv_table_row);
                     $(csv_table_cell6).appendTo(csv_table_row);
                     $(csv_table_cell8).appendTo(csv_table_row);
                     $(csv_table_cell9).appendTo(csv_table_row);
                     $(csv_table_cell10).appendTo(csv_table_row);
                     $(csv_table_cell11).appendTo(csv_table_row);
                     $(csv_table_cell12).appendTo(csv_table_row);
                     $(csv_table_cell13).appendTo(csv_table_row);
                     $(csv_table_cell15).appendTo(csv_table_row);
                     $(csv_table_cell16).appendTo(csv_table_row);
                     $(csv_cell_label1).appendTo(csv_table_cell);
                     $(csv_cell_label2).appendTo(csv_table_cell1);
                     $(csv_cell_label3).appendTo(csv_table_cell3);
                     $(csv_cell_label4).appendTo(csv_table_cell4);
                     $(csv_cell_label5).appendTo(csv_table_cell5);
                     $(csv_marktest_dropdown).appendTo(csv_table_cell6);
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
                     $(csv_table_cell15).text(data.csv_data[i].highlight_msg);
                     $(csv_table_cell16).text(data.csv_data[i].master_test_slug);
                     //highlighting row
                     $(csv_table_cell15).addClass("high");
                     var highlight_row=data.csv_data[i].highlight;
                     var highlight_row_msg=data.csv_data[i].highlight_msg;
                     if(highlight_row=="yes"){
                       $(csv_table_row).css("color", "red");
                       $(csv_table_row).mouseover (function() {
                       $(this).children(".high").text(highlight_row_msg);
                       $(this).attr('title', 'This is the hover-over text');
                      });
                     }
                     //appending tr to table
                     $(csv_table_row).appendTo('#csv_tabledata');
                  }//forloop
                    //updatetable button create
                     var update_div=document.createElement('div');
                     var update_table_btn=document.createElement('button');
                     $(update_table_btn).css({"background":"#1e5799", "border":"none", "width":"95px", "color":"white", "fontWeight":"800", "height":"35px", "borderRadius":"5px", "float":"right", "margin":"0px 60px 10px"});
                     $(update_table_btn).text("Update").appendTo(update_div);
                     $(update_div).appendTo("body");
                     $(update_table_btn).on("click", update_data);
               }//success
        }); //ajax
    }//function table_data

    function update_data(){   
      $.ajax({
              url: host_api+"/m-api/admin/put_admin_lab_test_csv_data",
              type:'POST',
              dataType: 'json',
              data: { csv_data: JSON.stringify(final_csv_data), csv_file_id: param_csv_file_id }, 
              success:function(data){
                console.log(data);
              }//success
      });//ajax
    }//update_data

    $(document).ready(function(){
      table_data();
    });//ready function   
    

