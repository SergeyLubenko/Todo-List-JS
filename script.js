
const addButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_add");
const closeButton = document.querySelector(".popup__close-icon");

const popupEdit = document.querySelector(".popup_edit");

// const formInputName = document.querySelector(".form__input_name");
// const formInputSearch = document.querySelector(".form__input_search");

const todoInput = document.querySelector(".form__input_name");
const todoButton = document.querySelector(".form__save-button");
const todoList = document.querySelector(".todo_list");

// // функция открыть попап
function openModal(modal) {
  modal.classList.add("popup_opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_opened");
}

closeButton.addEventListener("click", function () {
  closeModal(popupAdd);
});
addButton.addEventListener("click", function () {
  openModal(popupAdd);
 
  todoInput.value = "";
});



   let data = localStorage.getItem("msgList");


   let msgList = [];
  
  if (data !== "" && data !== null) {
    msgList = JSON.parse(data);
  }
 



const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

// let List = document.querySelector('div')
// let todos;

// function toLocal(){
// todos = List.innerHTML;
// localStorage.setItem('todos',todos)
// }

// if(localStorage.getItem('todos')){
//   List.innerHTML = localStorage.getItem('todos')
// }
  btn.addEventListener("click", (e) => {
    e.preventDefault();
  
    let msgObj = {
      name: input.value,
      checked: false,
    };
    msgList.push(msgObj);
  
    localStorage.setItem("msgList",JSON.stringify(msgList));
  
      creteDeleteElement(msgObj);
 
    closeModal(popupAdd);
  
  });
  





for (const name of msgList) {
  creteDeleteElement(name);

}




 
  function creteDeleteElement(msgObj) {
    const li = document.createElement("div");
    const btn = document.createElement("button");
  
    li.className = "todo";
    li.textContent = msgObj.name;
  
    const newTodo = document.createElement("li");
    li.appendChild(newTodo);
  
    const doneButton = document.createElement("button");
    doneButton.textContent = "готово";
    doneButton.classList.add("done_btn");
    li.appendChild(doneButton);
  
    btn.className = "element__delete-button";
    btn.textContent = "удалить";
  
    li.appendChild(btn);
  
    btn.addEventListener("click", () => {
      

     
      result.removeChild(li);

     
   
    });

  
    doneButton.addEventListener("click", (event) =>  {


      li.classList.toggle("done_btn-active");
     
    });
   
    result.appendChild(li);
  }








