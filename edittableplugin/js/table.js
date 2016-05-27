

  var secondcoldrop=["Saab", "Volvo", "BMW", "John", "Mary"];

  /*Addition of row*/
  function add_row_handler()
  {


       $("table").append('<tr><td><input type="checkbox"></td><td data-inputtype="dropdown" data-optionlist="secondcoldrop"><label> <input type="text" > </label></td> <td><label> <input type="text" > </label></td> <td> <label> <input type="text" > </label> </td> <td> <button class="btn btn-primary save">Save</button> </td> <td> <button class="btn btn-warning cancel_btn" >Cancel</button></td></tr>');
       $('.save').click(function()
       {
          var  n = $(this).parents("tr").children("td").size();
          for(i=1; i<=n-12; i++)
          {
              var val = $(this).parents("tr").children("td:eq(" +i+ ")").find("input:text").val();
              if (val=="" || val==null)
              {
                alert("Please fillup All fields");
                return false;
              }//                  
              else
              {
                $(this).parents("tr").children("td:eq(" +i+ ")").html('<label> '+ val +' </label>');
                $(this).parents("tr").find("input:text").hide();      
              }//
          }//save function end
          $(this).parents("tr td").siblings().children("button").replaceWith("<button class='btn btn-danger delete'>Delete</button>");
          $(this).replaceWith("<button class='btn btn-info edit'>Edit</button>");
     });
  }

 /*Deletion of row*/
   function delete_row_handler() 
  {
     $(this).parents("tr").remove();
  }

 /*Edit of row*/
  function edit_row_handler()
   {
     var n = $(this).parents("tbody").siblings("thead").find("th").size();
     for(var i=0; i<=n-12; i++){
     var input_box=$(this).parents("tr").children("td:eq(" +i+ ")").data('input');
     
         var lab = $(this).parents("tr").children("td:eq(" +i+ ")").find("label").text();
         $(this).parents("tr").children("td:eq(" +i+ ")").children("label").hide(); 
         var value = $(this).parents("tr").children("td:eq(" +i+ ")").data('inputtype');
             if(value=="dropdown")
             {
                 var hasvalue=$(this).parents("tr").children("td:eq(" +i+ ")").children("select").html();
                 if(!hasvalue)
                 {
                       var dropdownopt=eval($(this).parents("tr").children("td:eq(" +i+ ")").data('optionlist'));
                       $(this).parents("tr").children("td:eq(" +i+ ")").append('<select>') ;
                       for(var j=0; j<dropdownopt.length; j++)
                       { 
                           if(lab==dropdownopt[j])
                           {
                               $(this).parents("tr").children("td:eq(" +i+ ")").children("select").append('<option selected>'+lab+'</option>');  
                           }//comparing label value to dropdown array endif
                            
                           else
                           { 
                               $(this).parents("tr").find("td:eq(" +i+ ")").children("select").append('<option>'+dropdownopt[j]+'</option>');
                           }//comparing label value to dropdown array endelse
                      }//array loop of dropdown values
                      $(this).parents("tr").find("td:eq(" +i+ ")").children("select").append('</select>') ;
                }//checking dropdown existing endif 

               else
               {
                    $(this).parents("tr").children("td:eq(" +i+ ")").children("label").hide();
                    $(this).parents("tr").children("td:eq(" +i+ ")").children("select").show();
                    $(this).parents("tr").children("td:eq(" +i+ ")").children("select").children("option:selected").html(lab);
               }//checking if dropdown existing endelse 
           }//checking for dropdown dataattribute endif
           else
           {
                var hasvaluetext=$(this).parents("tr").children("td:eq(" +i+ ")").children("input:text").val();
                console.log(hasvaluetext);
                if(!hasvaluetext)
                {
                    $(this).parents("tr").children("td:eq(" + i + ")").append('<input type="text" value="'+lab+'">');
                }//checking textbox existing endif 

                else
                {
                    $(this).parents("tr").children("td:eq(" +i+ ")").children("label").hide();
                    $(this).parents("tr").children("td:eq(" +i+ ")").children("input:text").show();
                    $(this).parents("tr").children("td:eq(" +i+ ")").children("input:text").val(lab);
                }//checking textbox existing endelse
           }//checking for dropdown dataattribute endelse
    } //loop through td's end
    $(this).parents("tr td").siblings().children("button").replaceWith("<button class='btn btn-warning cancel_btn'>Cancel</button>");
    $(this).replaceWith("<button class='btn btn-primary save'>Save</button>");
}//
  /*Saving after Edit*/
   function save_btn_handler() 
  {
     var  n = $(this).parents("tr").children("td").size();
     for(i=0; i<=n-12; i++)
     {
         var value = $(this).parents("tr").children("td:eq(" +i+ ")").data('inputtype');
         if(value=="dropdown")
         {
             var optval= $(this).parents("tr").children("td:eq(" +i+ ")").children("select").find("option:selected").text();
             $(this).parents("tr").children("td:eq(" +i+ ")").find("select").hide();
             $(this).parents("tr").children("td:eq(" +i+ ")").children("label").show().html(optval);
         }//checking for dropdown dataattribute endif 
         else
         {
             var val = $(this).parents("tr").children("td:eq(" +i+ ")").find("input:text").val();
             $(this).parents("tr").children("td:eq(" +i+ ")").find("input:text").hide();
             $(this).parents("tr").children("td:eq(" +i+ ")").children("label").show().html(val);
         }//
     }//loop through td's end
         $(this).parents("tr td").siblings().children("button").replaceWith("<button class='btn btn-danger delete'>Delete</button>");
         $(this).replaceWith("<button class='btn btn-info edit'>Edit</button>");
  }//

  /*Canceling after Edit*/
 function cancel_btn_handler() 
  { 
     var  n = $(this).parents("tr").children("td").size();
     for(i=0; i<=n-12; i++)
     {
        var lab=$(this).parents("tr").children("td:eq(" +i+ ")").find("label").text(); 
        var value = $(this).parents("tr").children("td:eq(" +i+ ")").data('inputtype');
        if(value=="dropdown")
        {
            $(this).parents("tr").children("td:eq(" +i+ ")").find("select").hide();
        }//checking for dropdown dataattribute endif
        else
        {
            $(this).parents("tr").find("input:text").hide();   
        }//checking for dropdown dataattribute endelse
        $(this).parents("tr").children("td:eq(" +i+ ")").children("label").show().html(lab);
     }//for looping of td end
     $(this).parents("tr td").siblings().children(".save").replaceWith("<button class='btn btn-info edit'>Edit</button>");
     $(this).replaceWith("<button class='btn btn-danger delete'>Delete</button>");
  }//


  /*Select All table rows*/
  $("#checkAll").change(function () 
  {
    $("input:checkbox").prop('checked', $(this).prop("checked"));
    $("table tr:not(#firstnot)").toggleClass("trbackground");
  });//

  $("input[type='checkbox']").change(function()
  {
    if($(this).is(":checked"))
    {
      $(this).parents("tr").addClass("trbackground"); 
    }//
    else
    {
        $(this).parents("tr").removeClass("trbackground");  
    }//
  });//
    


  /*Search table rows*/
  $('#search').keyup(function()
  {
    searchTable($(this).val());
  });//

  function searchTable(inputVal)
  {
    var table = $('#tblData');
    table.find('tr').each(function(index, row)
   {
    var allCells = $(row).find('td');
    if(allCells.length > 0)
    {
      var found = false;
      allCells.each(function(index, td)
      {
        var regExp = new RegExp(inputVal, 'i');
        if(regExp.test($(td).text()))
        {
          found = true;
          return false;
        }//
      });//

      if(found == true)
      {   
        $(row).show();
        $(this).addClass("trbackground");     
      }//
      else 
      {
        $(row).hide();
      }//
      var ser_val=$("#search").val();
      if(ser_val==0){
           $("table tr").removeClass("trbackground"); 
      }//if remove color end

   }//

  
  });//
}//




