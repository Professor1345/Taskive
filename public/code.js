function closeButton() {
  let closeBtn = document.querySelectorAll(".close-btn");
  closeBtn.forEach((btn) => {
    btn.addEventListener("click", updateClickButton);
    function updateClickButton() {
      let index = parseInt(this.getAttribute("data-index"));
      removeItems(index);
    }
  });
}

closeButton();

let Ul = document.getElementsByClassName("output")[0];
let ArrText = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
function myAdd() {
  let inputText = document.getElementById("content");
  inputText.value.trim() != ""
    ? ArrText.push({
        value: inputText.value,
        date: new Date().toLocaleTimeString(),
        close: "X",
      })
    : null;

  localStorage.setItem("items", JSON.stringify(ArrText));
  inputText.value = "";
  updateList();
}

function myClear() {
  localStorage.clear();
  ArrText = [];
  updateList();
}

function removeItems(index) {
  ArrText.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(ArrText));
  updateList();
}

function updateList() {
  let outputUl = "";
  let index = 0;
  for (const i of ArrText) {
    // console.log(i);
    outputUl +=
      "<div class='datas'>" +
      "<div>" +
      i.date +
      "</div>" +
      "<div>" +
      i.value +
      "</div>" +
      "<a class= 'close-btn' data-index= '" +
      index +
      "'>" +
      i.close +
      "</a>" +
      "</div>";
    index++;
  }
  Ul.innerHTML = outputUl;
  closeButton();
}

updateList();
