
function openCity(cityName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(cityName).style.display = "block";
  elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/*======================Product Filtering================*/
filterSelection("all")
function filterSelection(c) {
  var x, i;
  /* Get products -------------------------*/
  x = document.getElementsByClassName("productDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    sectionRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) sectionAddClass(x[i], "show");
  }
}

/* Show Elements---------------------*/
function sectionAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++ ){
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

/* Hide elements---------------------*/
function sectionRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++ ){
    while (arr1.indexOf(arr2[i]) > -1){
      arr1.splice(arr1.indexOf(arr2[i]), 1)
    }
  }
  element.className = arr1.join(" ");
}