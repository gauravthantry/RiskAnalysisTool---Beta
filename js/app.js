$(document).ready(function () {
    let currentCategoryIndex = 0;
    let totalScore = 0;
    $("#bGroup").hide();
    $("#score").html("0");
    $("#next").click(function(){
     if(currentCategoryIndex == 0){
        console.log("true");
           $("#aGroup").fadeOut(1000, function(){
            $("#bGroup").fadeIn(2000);
           });
           
           currentCategoryIndex++;
     }
    });

      $(".ratingSelect").change(function(){
         $("select").each(function(){
            let selectionScore = parseInt($(this).val());
            totalScore = totalScore + selectionScore;
         });
         $("#score").html(totalScore);
         totalScore = 0;
         $(this).blur();
    });

  

    $("#prev").click(function(){
        if(currentCategoryIndex == 1){
           console.log("true");
              $("#bGroup").fadeOut(1000, function(){
               $("#aGroup").fadeIn(2000);
              });
              
              currentCategoryIndex--;
        }
       });
});