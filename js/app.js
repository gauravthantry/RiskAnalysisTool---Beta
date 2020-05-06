$(document).ready(function () {
    let currentCategoryIndex = 0;
    $("#bGroup").hide();

    $("#next").click(function(){
     if(currentCategoryIndex == 0){
        console.log("true");
           $("#aGroup").hide(200);
           $("#bGroup").show(200);
           currentCategoryIndex++;
     }
    });

    $("#prev").click(function(){
        if(currentCategoryIndex == 1){
           console.log("true");
              $("#bGroup").hide(200);
              $("#aGroup").show(200);
              currentCategoryIndex--;
        }
       });
});