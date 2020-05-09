$(document).ready(function () {
   let currentCategoryIndex = 0;
   let totalScore = 0;
   var risk = 0;
   $("#bGroup").hide();
   $("#cGroup").hide();
   $("#dGroup").hide();
   $("#eGroup").hide();
   $("#fGroup").hide();
   $("#gGroup").hide();
   $("#evaluateScore").hide();
   $("#evaluate").hide();
   $("#reEvaluate").hide();
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
            $(".nextButton").hide();
            $(".evaluate").show();
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
            $(".evaluate").hide();
            $(".nextButton").show();
         });
         currentCategoryIndex--;
      }
   });

   $("#evaluate").click(() => {
      $(".totalScore").hide();
      var totalScore = parseInt($("#score").text());
      var maxScore = parseInt($("#maxScore").text());
      var scorePercentage = ((totalScore / maxScore) * 100).toFixed(2);
      var mainRiskReasons = [];
      $(".mainContainer").fadeOut(300, function () {
         $("#gGroup").hide();
         $(".mainContainer").fadeIn(300);
         $("#evaluateScore").fadeIn(300);
         $("#reEvaluate").show();
         $("#evaluate").hide();
         $("#next").hide();
         $("#prev").hide();
      });

      if (scorePercentage < 90 && scorePercentage >= 80) {
         risk = 1;
      }
      else if (scorePercentage < 80 && scorePercentage >= 70) {
         risk = 2;
      }
      else if (scorePercentage < 70 && scorePercentage >= 60) {
         risk = 3;
      }
      else if (scorePercentage < 60) {
         risk = 4;
      }
      $(".important").each((i, obj) => {
         if ($(obj).children('select').val() < 5) {
            if (risk < 2) {
               risk = 2;
            }
         }
         else if ($(obj).children('select').val() < 4) {
            if (risk < 3) {
               risk = 3;
            }
         }
         else if ($(obj).children('select').val() < 3) {
            if (risk < 4) {
               risk = 4;
            }
         }
      });

      if (risk === 0) {
         $("#successPercentage").css("color", "#008000");
         $("<div class=\"alert alert-success\" role=\"alert\"><p class=\"lead\">This project has passed all the Risk assessment criterias and can be deployed in production</p></div>").insertAfter("#successPercentage");
      }
      else if (risk === 1) {
         $("#successPercentage").css("color", "#90EE90");
         $("<div class=\"alert alert-success\" role=\"alert\"><p class=\"lead\">This project has passed most of the Risk assessment criterias and can be deployed in production if it is agreed that the below issues do not affect the application</p></div>").insertAfter("#successPercentage");
         lowRiskIssues();
      }
      else if (risk === 2) {
         $("#successPercentage").css("color", "#ffa500");
         $("<div class=\"alert alert-warning\" role=\"alert\"><p class=\"lead\">This project has only passed some of the Risk assessment criterias or might have failed in some important assessment criterias. It is recommended to look into the below issues and not deploy the project until they are fixed</p></div>").insertAfter("#successPercentage");
         riskIssues();
      }
      else if (risk === 3) {
         $("#successPercentage").css("color", "#ff0000");
         $("<div class=\"alert alert-danger\" role=\"alert\"><p class=\"lead\">Deploying this project will be risky, as it does not meets many of the Risk Assessment criterias or it fails to meet some of the important assessment criterias </p></div>").insertAfter("#successPercentage");
         riskIssues();
      }
      else if (risk === 4) {
         $("#successPercentage").css("color", "#991A00");
         $("<div class=\"alert alert-danger\" role=\"alert\"><p class=\"lead\">This project does not meet most of the Assessment citerias or fails to meet the expectations of the important ones. It is strogly recommended that the project is not deployed</p></div>").insertAfter("#successPercentage");
         riskIssues();
      }

      $(".display-4").html("Success rate : ");
      $("#successPercentage").html(scorePercentage + "%");
   });

   $("#reEvaluate").click(() => {
      risk = 0;
      $(".totalScore").show();
      $(".display-4").empty();
      $("#importantCriteria").remove();
      $("#normalCriteria").remove();
      $(".mainContainer").fadeOut(300, function () {
         $(".mainContainer").fadeIn(300);
         $("#aGroup").fadeIn(300);
         $("#evaluateScore").hide();
         $("#reEvaluate").hide();
         $("#evaluate").hide();
         $("#next").show();
         $("#prev").show();
         $(".alert").hide();
      });
      currentCategoryIndex = 0;
   });
});


function lowRiskIssues() {
   $("<div class=\"alert alert-secondary\" id=\"normalCriteria\" role=\"alert\"></div>").insertAfter(".sectionDiv")
   var issueEntered = false;
   $(".criteria").each((i, obj) => {
      if ($(obj).children("select").val() < 5) {
         var criteriaScore = parseInt($(obj).children("select").val());
         if (issueEntered) {
            $("#normalCriteria").append("<hr class=\"my-4\">");
         }
         if (criteriaScore === 4) {
            $("#normalCriteria").append($($(obj).parent().contents()[0]).text()+"<span class=\"individualScore\">"+criteriaScore+" / 5");
            issueEntered = true;
         }
         else if (criteriaScore === 3) {
            $("#normalCriteria").append("<i class=\"fa fa-exclamation-triangle yellow\"></i>" + "  " + $($(obj).parent().contents()[0]).text()+"<span class=\"individualScore\">"+criteriaScore+" / 5");
            issueEntered = true;
         }
         else if (criteriaScore < 3) {
            $("#normalCriteria").append("<i class=\"fa fa-exclamation-triangle red\"></i> <i class=\"fa fa-exclamation-triangle red\"></i>" + "  " + $($(obj).parent().contents()[0]).text()+"<span class=\"individualScore\">"+criteriaScore+" / 5");
            issueEntered = true;
         }
      }
   })
}


function riskIssues() {
   var normalIssueEntered = false;
   var importantIssueEnetered = false;
   var normalCriteriaRisk = false;
   var importantCriteriaRisk = false;

   $(".criteria").each((i, obj) => {
      if (($(obj).children("select").val() < 5) && ($(obj).hasClass("important"))) {
         importantCriteriaRisk = true;
      }
      else if (($(obj).children("select").val() < 5)) {
         normalCriteriaRisk = true;
      }
   });
   if (importantCriteriaRisk) {
      $(".jumbotron").append("<div class=\"alert alert-danger\" id=\"importantCriteria\" role=\"alert\"></div>");
   }
   if (normalCriteriaRisk) {
      $(".jumbotron").append("<div class=\"alert alert-secondary\" id=\"normalCriteria\" role=\"alert\"></div>")
   }
   $(".criteria").each((i, obj) => {
      if (($(obj).children("select").val() < 5) && ($(obj).hasClass("important"))) {
         var criteriaScore = parseInt($(obj).children("select").val());
         if (importantIssueEnetered) {
            $("#importantCriteria").append("<hr class=\"my-4\">");
         }
         if (criteriaScore === 4) {
            console.log("entered final important condition 4");
            $("#importantCriteria").append("<i class=\"fa fa-exclamation-triangle yellow\"></i>" + "  " + $($(obj).parent().contents()[2]).text()+"<span class=\"individualScore\">"+criteriaScore+" / 5");
            importantIssueEnetered = true;
         }
         else if (criteriaScore <= 3) {
            $("#importantCriteria").append("<i class=\"fa fa-exclamation-triangle red\"></i> <i class=\"fa fa-exclamation-triangle red\"></i>" + "  " + $($(obj).parent().contents()[2]).text()+"<span class=\"individualScore\">"+criteriaScore+" / 5");
            importantIssueEnetered = true;
         }
      } else if ($(obj).children("select").val() < 5) {
         var criteriaScore = parseInt($(obj).children("select").val());
         if (normalIssueEntered) {
            $("#normalCriteria").append("<hr class=\"my-4\">");
         }
         if (criteriaScore === 4) {
            $("#normalCriteria").append($($(obj).parent().contents()[0]).text()+"<span class=\"individualScore\">"+criteriaScore+" / 5");
            normalIssueEntered = true;
         }
         else if (criteriaScore === 3) {
            $("#normalCriteria").append("<i class=\"fa fa-exclamation-triangle yellow\"></i>" + "  " + $($(obj).parent().contents()[0]).text()+"<span class=\"individualScore\">"+criteriaScore+" / 5");
            normalIssueEntered = true;
         }
         else if (criteriaScore < 3) {
            $("#normalCriteria").append("<i class=\"fa fa-exclamation-triangle red\"></i> <i class=\"fa fa-exclamation-triangle red\"></i>" + "  " + $($(obj).parent().contents()[0]).text()+"<span class=\"individualScore\">"+criteriaScore+" / 5");
            normalIssueEntered = true;
         }
      }
   })
}