let $ = document;
let inputElem = $.getElementById("input-field");
let saveBtn = $.getElementById("btn-save");
let deleteBtn = $.getElementById("btn-delete");
let colors = $.querySelectorAll(".color-box");
let noteList = $.getElementById("listed");
let notification = document.getElementById("notification");
let notificationTxt = document.getElementById("notificationTxt");

//* Notification
function showNotification(err) {
  notificationTxt.innerHTML = err;
  notification.classList.add("show");
  setTimeout(hideNotification, 3000); // Hide the notification after 3 seconds
}
function hideNotification() {
  notification.classList.remove("show");
}

//* Add Note
function addNote() {
  if (inputElem.value === "") {
    return showNotification("Please write a note");
  }
  let note = inputElem.value;

  let newNote = document.createElement("div");
  newNote.classList.add("card", "shadow-sm", "rounded");

  let noteValue = document.createElement("p");
  noteValue.classList.add("card-text", "p-3");

  noteValue.innerText = note;
  newNote.append(noteValue);

  inputElem.value = "";
  noteList.append(newNote);
}

function clearInput() {
  inputElem.value = "";
  inputElem.style.backgroundColor = "#fff";
}

saveBtn.addEventListener("click", addNote);
deleteBtn.addEventListener("click", clearInput);
