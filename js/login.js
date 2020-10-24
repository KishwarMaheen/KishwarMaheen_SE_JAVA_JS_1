$(document).ready(function() {
  localStorage["username"] = "";
  $('#login').submit(function(e){
    e.preventDefault();
    let username = $('#username-login').val();
    let password = $('#password-login').val();
    loginMap = {username: username, password: password};
    request = $.ajax({
      url: "http://localhost:8080/users",
      type: "get",
      data: loginMap
    });
    request.done(function(response, textStatus, jxHQR){
      if(response){
        localStorage.setItem("username", username);
        window.location.replace('products.html');
      }
      else $('.errorShow').html("Username or password doesn't exist. Please try again.");
    });
  });
  $('#signup').submit(function(e){
    e.preventDefault();
    let username = $('#username-signup').val();
    let password = $('#password-signup').val();
    let email = $('#email-signup').val();
    signupMap = {username: username, password: password, email: email};
    request = $.ajax({
      url: "http://localhost:8080/users",
      type: "post",
      data: signupMap
    });
    request.done(function(response, textStatus, jxHQR){
      if(response==-1)
        $('#resultSignUp').html("One or more fields are empty. Please fill them.");
      else if(response==0)
        $('#resultSignUp').html("Username or email already exists! Please use " +
         "a different username or email");
      else $('#resultSignUp').html("You are registered! Please log in above.");
    });
  });
});
