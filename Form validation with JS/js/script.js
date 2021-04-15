function formdata() {
  var fname = document.forms["userform"]["firstname"];
  var lname = document.forms["userform"]["lastname"];
  var mail = document.forms["userform"]["email"];
  var telphone = document.forms["userform"]["phone"];
  var dateofbirth = document.forms["userform"]["dob"];
  var gendr = document.forms["userform"]["gender"];
  // var contry = document.forms["userform"]["Country"];
  // var passwd = document.forms["userform"]["pwd"];

  if (fname.value == "") {
    window.alert("please enter your first name");
    fname.focus();
    return false;
  }
  if (lname.value == "") {
    window.alert("please enter your last name");
    lname.focus();
    return false;
  }
  if (mail.value == "") {
    window.alert("please enter your email id");
    mail.focus();
    return false;
  }
  if (telphone.value == "") {
    window.alert("please enter your phone no");
    telphone.focus();
    return false;
  }
  if (dateofbirth.value == "") {
    window.alert("please enter your date of birth");
    // dateofbirth.focus();
    return false;
  }
  if (gendr.value == "") {
    window.alert("please enter your gender");
    // gendr.focus();
    return false;
  }
  // if (contry.value == "") {
  //   window.alert("please select your country name");
  //   contry.focus();
  //   return false;
  // }
  // if (passwd.value == "") {
  //   window.alert("please enter your password");
  //   // passwd.focus();
  //   return false;
  // }
  return true;
}
