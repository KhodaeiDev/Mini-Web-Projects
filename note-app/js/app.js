let $ = document;
let inputElem = $.getElementById("input-field");
let saveBtn = $.getElementById("btn-save");
let deleteBtn = $.getElementById("btn-delete");
let colors = $.querySelectorAll(".color-box");
let noteList = $.getElementById("listed");

function addNote() {
  let note = inputElem.value;

  let newNote = document.createElement("div");
  newNote.classList.add("card", "shadow-sm", "rounded");

  let noteValue = document.createElement("p");
  noteValue.classList.add("card-text", "p-3");

  noteValue.innerText = note;
  newNote.append(noteValue);

  inputElem.value = " ";
  noteList.append(newNote);
}

saveBtn.addEventListener("click", addNote);
