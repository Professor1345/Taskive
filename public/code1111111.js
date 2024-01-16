// Function to set up event listeners for close buttons
function setupCloseButtonListeners() {
    let closeButtons = document.getElementsByClassName("close-btn");
    for (let btn of closeButtons) {
      btn.addEventListener("click", function () {
        // Get the index from the data-index attribute
        let index = parseInt(this.getAttribute("data-index"));
        removeItem(index);
      });
    }
  }
  
  // Call the function to set up event listeners initially
  setupCloseButtonListeners();
  
  // Your existing code...
  let Ul = document.getElementsByClassName("output")[0];
  let ArrText = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  
  function myAdd() {
    let inputText = document.getElementById("content");
    if (inputText.value.trim() !== "") {
      ArrText.push({
        value: inputText.value,
        date: new Date().toLocaleTimeString(),
        close: "X",
      });
      localStorage.setItem("items", JSON.stringify(ArrText));
      inputText.value = "";
      updateList();
    }
  }
  
  function myClear() {
    localStorage.clear();
    ArrText = [];
    updateList();
  }
  
  function removeItem(index) {
    // Remove the item at the specified index
    ArrText.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(ArrText));
    updateList();
  }
  
  function updateList() {
    let outputUl = "";
    let index = 0;
    for (const item of ArrText) {
      outputUl +=
        "<div>" +
        "<div>" +
        item.date +
        "</div>" +
        "<div>" +
        item.value +
        "</div>" +
        "<a class='close-btn' data-index='" + index + "'>" +
        item.close +
        "</a>" +
        "</div>";
      index++;
    }
    Ul.innerHTML = outputUl;
  
    // Call the function to set up event listeners after updating the list
    setupCloseButtonListeners();
  }
  updateList();