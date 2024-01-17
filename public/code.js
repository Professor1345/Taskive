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
        date: [
          new Date().toLocaleTimeString(),
          new Date().toLocaleDateString(),
        ],
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
      "<div class='date'>" +
      "<div>" +
      i.date[0] +
      "</div>" +
      "<div>" +
      i.date[1] +
      "</div>" +
      "</div>" +
      "<div class = 'value'>" +
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
  outputUl.length == 0
    ? (Ul.innerHTML = "<div class='nothing'>" + "Nothing To Show..." + "</div>")
    : (Ul.innerHTML = outputUl);
  closeButton();
}

updateList();
