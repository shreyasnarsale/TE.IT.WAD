/* =========================
   Contact Form Validation
========================= */
$(document).on("pagecreate", "#contact", function () {
  var $form = $("#contactForm");
  var $status = $("#formStatus");

  function setError(id, message) {
    $(id).text(message);
  }

  function clearErrors() {
    setError("#nameError", "");
    setError("#emailError", "");
    setError("#serviceError", "");
    setError("#messageError", "");
  }

  function resetStatus() {
    $status.removeClass("success error").text("").hide();
  }

  $form.on("submit", function (event) {
    event.preventDefault();
    clearErrors();
    resetStatus();

    var name = $.trim($("#name").val());
    var email = $.trim($("#email").val());
    var service = $("#service").val();
    var message = $.trim($("#message").val());

    var isValid = true;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 3) {
      setError("#nameError", "Please enter at least 3 characters.");
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      setError("#emailError", "Please enter a valid email address.");
      isValid = false;
    }

    if (!service) {
      setError("#serviceError", "Please select a service.");
      isValid = false;
    }

    if (message.length < 10) {
      setError("#messageError", "Message should be at least 10 characters.");
      isValid = false;
    }

    if (!isValid) {
      $status
        .addClass("error")
        .text("Please correct the highlighted fields and submit again.")
        .show();
      return;
    }

    $status
      .addClass("success")
      .text("Thank you. Your message has been validated and submitted successfully.")
      .show();

    $form[0].reset();
    $("#service").selectmenu("refresh");
  });

  $form.on("reset", function () {
    clearErrors();
    resetStatus();

    // Delay refresh to allow reset value propagation before jQuery Mobile updates UI.
    setTimeout(function () {
      $("#service").selectmenu("refresh");
    }, 0);
  });
});
