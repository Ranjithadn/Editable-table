
  $(document).ready(function(){

   /*Addition of row*/

     $(".add").click(function(){
   
     $("table").append('<tr class="addrow"><td><input type="checkbox"></td><td><label>  </label> <input type="text" >  </td> <td><label> <input type="text" > </label></td> <td> <label> <input type="text" > </label> </td> <td> <button class="btn btn-info edit" id="edit_btn">Edit</button> </td> <td> <button class="btn btn-danger delete" >Delete</button></td></tr>');

     $("#edit_btn").replaceWith("<button class='btn btn-primary save'>Save</button>");

   window.val1=""
   window.val2=""
   window.val3=""

  
  $('.save').click(function(){
   val1 = $(this).parents("tr").children("td:nth-child(2)").find("input:text ").val();
   val2 = $(this).parents("tr").children("td:nth-child(3)").find("input:text").val();
   val3 = $(this).parents("tr").children("td:nth-child(4)").find("input:text").val();

  if (val1 == null || val1 == "" && val2 == null || val2 == "" && val3 == null || val3 == "")
  {
    alert("Please fillup All fields");
    return false;
  }

  else{

    $(this).parents("tr").find("input:text").hide();

    $(this).parents("tr").children("td:nth-child(2)").html('<label> '+ val1 +' </label>');

    $(this).parents("tr").children("td:nth-child(3)").html('<label> '+ val2 +' </label>');

    $(this).parents("tr").children("td:nth-child(4)").html('<label> ' + val3 +' </label>');

    $(this).parents("tr td").siblings().children("button").replaceWith("<button class='btn btn-danger delete'>Delete</button>");

    $(this).replaceWith("<button class='btn btn-info edit'>Edit</button>");
      }

    });

    
  });

   /*Deletion of row*/

    $(document).on("click", "button.delete" , function() {
            $(this).parents("tr").remove();
        });


     $(document).on("click", "button.edit" , function() {

     var lab1=$(this).parents("tr").find(" td:nth-child(2)>label").text();
     
     var lab2=$(this).parents("tr").find("td:nth-child(3)>label").text();
     
     var lab3=$(this).parents("tr").find(" td:nth-child(4)>label").text();
    
     $(this).parents("tr").find("label").hide();
     
     $(this).parents("tr td").siblings().children("button").replaceWith("<button class='btn btn-warning' id='cancel_btn'>Cancel</button>");
     
     $(this).parents("tr").children("td:nth-child(2)").append('<input type="text" value=" '+lab1+' ">');

     $(this).parents("tr").children("td:nth-child(3)").append('<input type="text" value=" '+lab2+' ">');
 
     $(this).parents("tr").children("td:nth-child(4)").append('<input type="text" value=" '+lab3+' ">');

     $(this).replaceWith("<button class='btn btn-primary' id='save_btn'>Save</button>");

    /*Saving after Edit*/

     $(document).on("click", "#save_btn" , function() {
     
     $(this).parents("tr").find("input:text").hide();

      val1 = $(this).parents("tr").children("td:nth-child(2)").find("input:text").val();
      val2 = $(this).parents("tr").children("td:nth-child(3)").find("input:text").val();
      val3 = $(this).parents("tr").children("td:nth-child(4)").find("input:text").val();

     $(this).parents("tr").children("td:nth-child(2)").html('<label> '+ val1 +' </label>');

     $(this).parents("tr").children("td:nth-child(3)").html('<label> '+ val2 +' </label>');

     $(this).parents("tr").children("td:nth-child(4)").html('<label> '+ val3 +' </label>');

     $(this).parents("tr td").siblings().children("button").replaceWith("<button class='btn btn-danger delete'>Delete</button>");

     $(this).replaceWith("<button class='btn btn-info edit'>Edit</button>");
  
 
});

    /*Canceling after Edit*/

    $('#cancel_btn').click(function(){

    $(this).parents("tr").find("input:text").hide();

    $(this).parents("tr").children("td:nth-child(2)").html('<label> '+ lab1 +' </label>');

    $(this).parents("tr").children("td:nth-child(3)").html('<label> '+ lab2 +' </label>');

    $(this).parents("tr").children("td:nth-child(4)").html('<label> ' + lab3 +' </label>');

    $(this).parents("tr td").siblings().children("#save_btn").replaceWith("<button class='btn btn-info edit'>Edit</button>");

    $(this).replaceWith("<button class='btn btn-danger delete'>Delete</button>");

});


});

  /*Select All table rows*/

    $("#checkAll").change(function () {
    $("input:checkbox").prop('checked', $(this).prop("checked"));
    $("table tr:not(#firstnot)").toggleClass("trbackground");

});

    $("input[type='checkbox']").change(function(){
    if($(this).is(":checked")){
        $(this).parents("tr").addClass("trbackground"); 
    }else{
        $(this).parents("tr").removeClass("trbackground");  
    }
});
    


  /*Search table rows*/

  $('#search').keyup(function()
  {
    searchTable($(this).val());
  });

 
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
        }
      });

      if(found == true){   
        $(row).show();
        $(this).addClass("trbackground");     
     }
        else 
          {
            $(row).hide();
            
          }

    }
    $("#search").focusout(function(){

      $("table tr").removeClass("trbackground");  
       });
  });
}





});


