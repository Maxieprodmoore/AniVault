
function openFilter(catagoryName,elmnt,Colorcode) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(catagoryName).style.display = "block";
  elmnt.style.backgroundColor = Colorcode;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
