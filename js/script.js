// business logic
$(document).ready(function () {
  // toggling icons
  $("#designIcon").click(function () {
    $("#designIcon").toggle();
    $(".design").slideToggle();
  });
  $(".design").click(function () {
    $("#designIcon").toggle();
    $(".design").slideToggle();
  });

  $("#devIcon").click(function () {
    $("#devIcon").toggle();
    $(".development").slideToggle();
  });
  $(".development").click(function () {
    $("#devIcon").toggle();
    $(".development").slideToggle();
  });

  $("#productIcon").click(function () {
    $("#productIcon").toggle();
    $(".product").slideToggle();
  });
  $(".product").click(function () {
    $("#productIcon").toggle();
    $(".product").slideToggle();
  });

  // hover effect on portfolio
  $("#work4").mouseenter(function () {
    $("#pName1").show("slow");
  });
  $("#work4").mouseleave(function () {
    $("#pName1").hide("slow");
  });

  $("#work3").mouseenter(function () {
    $("#pName2").show("slow");
  });
  $("#work3").mouseleave(function () {
    $("#pName2").hide("slow");
  });

  $("#work2").mouseenter(function () {
    $("#pName3").show("slow");
  });
  $("#work2").mouseleave(function () {
    $("#pName3").hide("slow");
  });

  $("#work1").mouseenter(function () {
    $("#pName4").show("slow");
  });
  $("#work1").mouseleave(function () {
    $("#pName4").hide("slow");
  });

  $("#work5").mouseenter(function () {
    $("#pName5").show("slow");
  });
  $("#work5").mouseleave(function () {
    $("#pName5").hide("slow");
  });

  $("#work6").mouseenter(function () {
    $("#pName6").show("slow");
  });
  $("#work6").mouseleave(function () {
    $("#pName6").hide("slow");
  });

  $("#work7").mouseenter(function () {
    $("#pName7").show("slow");
  });
  $("#work7").mouseleave(function () {
    $("#pName7").hide("slow");
  });

  $("#work8").mouseenter(function () {
    $("#pName8").show("slow");
  });
  $("#work8").mouseleave(function () {
    $("#pName8").hide("slow");
  });
});

// User Interface
$(document).ready(function () {
  $("#form").submit(function (event) {
    // event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#message").val();

    if (name && email) {
      alert(
        name +
          " we have received your message. Thank you for reaching out to us. "
      );
    } else {
      alert("Ensure you have entered both name and email!");
    }
  });
});
