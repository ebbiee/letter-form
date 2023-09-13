$(document).ready(() =>{
 $("#formOne").submit(function(event){
  event.preventDefault();


  const writersName = $("#Writer").val();
  const writerState = $("#wstate").val();
  const writersDate = $("#wdate").val();
  const receiveName = $("#receiver").val();
  const companyName = $("#cname").val();
  const theSalutation = $("#salutation").val();
  const theTitle = $("#title").val();
  const theClosing1 = $("#closing1").val();
  const theClosing2 = $("#closing2").val();
  

  //append the letter
  $(".Writer").html(writersName);
  $(".wstate").html(writerState);
  $(".wdate").html(writersDate);
  $(".receiver").html(receiveName);
  $(".cname").html(companyName);
  $(".salutation").html(theSalutation);
  $(".title").html(theTitle.toUpperCase());
  $(".closing1").html(theClosing1);
  $(".closing2").html(theClosing2);


  //show the letter
  $("#letter").fadeIn();
  $("#formOne").fadeOut();
 });

})