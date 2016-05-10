
$(document).ready(function()
{
  var secondcoldrop=["Saab", "Volvo", "BMW", "John"];

  /*Addition of row*/
  $(".add").click(function()
  {

       $("table").append('<tr class="addrow"><td><input type="checkbox"></td><td><label>  </label> <input type="text" >  </td> <td><label> <input type="text" > </label></td> <td> <label> <input type="text" > </label> </td> <td> <button class="btn btn-primary save">Save</button> </td> <td> <button class="btn btn-warning cancel_btn" >Cancel</button></td></tr>');
       $('.save').click(function(){
          var  n = $(this).parents("tr").children("td").size();
          for(i=1; i<=n-3; i++)
          {
              var val = $(this).parents("tr").children("td:eq(" +i+ ")").find("input:text").val();
              if (val=="" || val==null)
              {
                alert("Please fillup All fields");
              }//
             else
              {
                $(this).parents("tr").children("td:eq(" +i+ ")").html('<label> '+ val +' </label>');
                $(this).parents("tr").find("input:text").hide();      
              }
        }//
        $(this).parents("tr td").siblings().children("button").replaceWith("<button class='btn btn-danger delete'>Delete</button>");
        $(this).replaceWith("<button class='btn btn-info edit'>Edit</button>");
    });
  });

 /*Deletion of row*/
  $(document).on("click", "button.delete" , function() 
  {
     $(this).parents("tr").remove();
  });

 /*Edit of row*/
  $(document).on("click", "button.edit" , function()
   {
     var  n = $(this).parents("tr").children("td").size();
     for(var i=1; i<=n-3; i++)
     {
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
                           }//
                            
                           else
                           { 
                               $(this).parents("tr").find("td:eq(" +i+ ")").children("select").append('<option>'+dropdownopt[j]+'</option>');
                           }//
                      }
                      $(this).parents("tr").find("td:eq(" +i+ ")").children("select").append('</select>') ;
                }//

               else
               {
                    $(this).parents("tr").children("td:eq(" +i+ ")").children("label").hide();
                    $(this).parents("tr").children("td:eq(" +i+ ")").children("select").show();
                    $(this).parents("tr").children("td:eq(" +i+ ")").children("select").children("option:selected").html(lab);
               }//
           }
           else
           {
                var hasvaluetext=$(this).parents("tr").children("td:eq(" +i+ ")").children("select").html();
                console.log(hasvaluetext);
                if(!hasvaluetext)
                {
                    $(this).parents("tr").children("td:eq(" + i + ")").append('<input type="text" value="'+lab+'">');
                }//

                else
                {
                    $(this).parents("tr").children("td:eq(" +i+ ")").children("label").hide();
                    $(this).parents("tr").children("td:eq(" +i+ ")").children("input:text").show();
                    $(this).parents("tr").children("td:eq(" +i+ ")").children("input:text").html(lab);
                }//
         }//
    } //
    $(this).parents("tr td").siblings().children("button").replaceWith("<button class='btn btn-warning cancel_btn'>Cancel</button>");
    $(this).replaceWith("<button class='btn btn-primary save'>Save</button>");

  /*Saving after Edit*/
  $(document).on("click", ".save" , function() 
  {
     for(i=1; i<=n-3; i++)
     {
         var value = $(this).parents("tr").children("td:eq(" +i+ ")").data('inputtype');
         if(value=="dropdown")
         {
             var optval= $(this).parents("tr").children("td:eq(" +i+ ")").children("select").find("option:selected").text();
             $(this).parents("tr").children("td:eq(" +i+ ")").find("select").hide();
             $(this).parents("tr").children("td:eq(" +i+ ")").children("label").show().html(optval);
         }//
         else
         {
             $(this).parents("tr").find("input:text").hide();
             var val = $(this).parents("tr").children("td:eq(" +i+ ")").find("input:text").val();
             $(this).parents("tr").children("td:eq(" +i+ ")").children("label").show().html(val);
         }//
     }//
         $(this).parents("tr td").siblings().children("button").replaceWith("<button class='btn btn-danger delete'>Delete</button>");
         $(this).replaceWith("<button class='btn btn-info edit'>Edit</button>");
  });//

  /*Canceling after Edit*/
  $('.cancel_btn').click(function()
  { 
     for(i=1; i<=n-3; i++)
     {
        var lab=$(this).parents("tr").children("td:eq(" +i+ ")").find("label").text(); 
        var value = $(this).parents("tr").children("td:eq(" +i+ ")").data('inputtype');
        if(value=="dropdown")
        {
            $(this).parents("tr").children("td:eq(" +i+ ")").find("select").hide();
        }//
        else
        {
            $(this).parents("tr").find("input:text").hide();   
        } // 
        $(this).parents("tr").children("td:eq(" +i+ ")").children("label").show().html(lab);
     }//
     $(this).parents("tr td").siblings().children(".save").replaceWith("<button class='btn btn-info edit'>Edit</button>");
     $(this).replaceWith("<button class='btn btn-danger delete'>Delete</button>");
  });//
});//

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

    }//

    $("#search").focusout(function()
    {
      $("table tr").removeClass("trbackground");  
    });//
  });//
}//

});//


