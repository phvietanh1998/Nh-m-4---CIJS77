"use strict";

// const sortBy1 = (field) => (a, b) => (a.field > b.field) - (a.field < b.field);

// const sortBy = (field) => (a, b) =>
//   (a[field] > b[field]) - (a[field] < b[field]);
// const arr = [];

$(".add").click(function () {
  //Init Div
  if ($(".nameadd").val() && $(".phonenumberadd").val()) {
    let elemDiv = document.createElement("div");
    elemDiv.style.cssText =
      "border-radius: 8px;margin: 2% 15%;height:50px;background:lightgray;text-align:center;padding:auto 5px;text-transform: capitalize;padding: 0px 20px";
    elemDiv.classList.add("sort");

    let elem1 = document.createElement("p");
    let elem2 = document.createElement("p");
    elem1.style.cssText = "float:left";
    elem2.style.cssText = "float:right";
    elemDiv.appendChild(elem1);
    elemDiv.appendChild(elem2);
    document.body.appendChild(elemDiv);
    //console.log(document.querySelector(".nameadd").textContent);
    // Save info from input

    //console.log(obj1);
    //   arr.push(obj1);
    //   arr.sort(sortBy("name"));

    elem1.textContent = $(".nameadd").val().toLowerCase();

    elem2.textContent = $(".phonenumberadd").val().toLowerCase();
    //console.log(elemDiv.children[1].textContent);
    $(".sort")
      .sort(
        (a, b) =>
          (a.children[0].textContent > b.children[0].textContent) -
          (a.children[0].textContent < b.children[0].textContent)
      )
      .appendTo("body");
    //   arr.sort(sortBy1("textContent")).appendTo("body");
    //console.log($("input"));
    $("input").val("");
    //console.log($("input")[1].textContent);
    //$("input")[0].val() = "";
  }
});

$(".searchButton").click(function () {
  for (let i = 0; i < $(".sort").length; i++) {
    $(".search").val().toLowerCase() ===
    $(".sort")[i].children[0].textContent.toLowerCase()
      ? ($(".sort")[i].style.display = "block")
      : ($(".sort")[i].style.display = "none");
    //$(".sort").hide();
    //$(".sort")[i].style.display = "block";
  }
});
$(".deletebutton").click(function () {
  const divs = $(".sort");
  for (let i = 0; i < divs.length; i++) {
    for (let j = i + 1; j < divs.length; j++) {
      if (divs[i].children[1].textContent === divs[j].children[1].textContent)
        divs[j].remove();
    }
    //console.log(divs[i]);
  }
});

$("input").mouseover(function () {
  $(".sort").show();
});
