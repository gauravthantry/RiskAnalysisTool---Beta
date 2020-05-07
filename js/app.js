$(document).ready(function () {
   let currentCategoryIndex = 0;
   let totalScore = 0;
   $("#bGroup").hide();
   $("#cGroup").hide();
   $("#dGroup").hide();
   $("#eGroup").hide();
   $("#fGroup").hide();
   $("#gGroup").hide();
   $("#score").html("0");
   $("#next").click(function () {
      if (currentCategoryIndex == 0) {
         $(".mainContainer").fadeOut(300, function () {
            $("#aGroup").hide();
            $(".mainContainer").fadeIn(300);
            $("#bGroup").fadeIn(300);

         });
         currentCategoryIndex++;
      }
      else if (currentCategoryIndex == 1) {
         $(".mainContainer").fadeOut(300, function () {
            $("#bGroup").hide();
            $(".mainContainer").fadeIn(300);
            $("#cGroup").fadeIn(300);

         });
         currentCategoryIndex++;
      }
      else if (currentCategoryIndex == 2) {
         $(".mainContainer").fadeOut(300, function () {
            $("#cGroup").hide();
            $(".mainContainer").fadeIn(300);
            $("#dGroup").fadeIn(300);

         });
         currentCategoryIndex++;
      }
      else if (currentCategoryIndex == 3) {
         $(".mainContainer").fadeOut(300, function () {
            $("#dGroup").hide();
            $(".mainContainer").fadeIn(300);
            $("#eGroup").fadeIn(300);

         });
         currentCategoryIndex++;
      }
      else if (currentCategoryIndex == 4) {
         $(".mainContainer").fadeOut(300, function () {
            $("#eGroup").hide();
            $(".mainContainer").fadeIn(300);
            $("#fGroup").fadeIn(300);

         });
         currentCategoryIndex++;
      }
      else if (currentCategoryIndex == 5) {
         $(".mainContainer").fadeOut(300, function () {
            $("#fGroup").hide();
            $(".mainContainer").fadeIn(300);
            $("#gGroup").fadeIn(300);

         });
         currentCategoryIndex++;
      }
   });

   $(".ratingSelect").change(function () {
      $("select").each(function () {
         let selectionScore = parseInt($(this).val());
         totalScore = totalScore + selectionScore;
      });
      $("#score").html(totalScore);
      totalScore = 0;
      $(this).blur();
   });



   $("#prev").click(function () {
      if (currentCategoryIndex == 1) {
         $(".mainContainer").fadeOut(300, function () {
            $("#bGroup").hide();
            $(".mainContainer").fadeIn(300);
            $("#aGroup").fadeIn(300);

         });
         currentCategoryIndex--;
      }
      else if (currentCategoryIndex == 2) {
         $(".mainContainer").fadeOut(300, function () {
            $("#cGroup").hide();
            $(".mainContainer").fadeIn(300);
            $("#bGroup").fadeIn(300);

         });
         currentCategoryIndex--;
      }
      else if (currentCategoryIndex == 3) {
         $(".mainContainer").fadeOut(300, function () {
            $("#dGroup").hide();
            $(".mainContainer").fadeIn(300);
            $("#cGroup").fadeIn(300);

         });
         currentCategoryIndex--;
      }
      else if (currentCategoryIndex == 4) {
         $(".mainContainer").fadeOut(300, function () {
            $("#eGroup").hide();
            $(".mainContainer").fadeIn(300);
            $("#dGroup").fadeIn(300);

         });
         currentCategoryIndex--;
      }
      else if (currentCategoryIndex == 5) {
         $(".mainContainer").fadeOut(300, function () {
            $("#fGroup").hide();
            $(".mainContainer").fadeIn(300);
            $("#eGroup").fadeIn(300);

         });
         currentCategoryIndex--;
      }
      else if (currentCategoryIndex == 6) {
         $(".mainContainer").fadeOut(300, function () {
            $("#gGroup").hide();
            $(".mainContainer").fadeIn(300);
            $("#fGroup").fadeIn(300);

         });
         currentCategoryIndex--;
      }
   });
});