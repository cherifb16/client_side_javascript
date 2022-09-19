// function getElement() {
//     const element = document.getElementsByTagName("h1");
//     console.log(element)
//   };
  
//   window.onload = getElement;



//   function getElement() {
//     const element = document.getElementsByTagName("h1");

//     element[0].innerText = "Changed"
//   };
  
//   window.onload = getElement;


// function getElement() {
//     const element = document.getElementsByTagName("p");
//     console.log(element[0].innerText)
//     console.log(element[0].innerHTML)
//   };
  
//   window.onload = getElement;

// function getElement() {
//     const element = document.getElementsByTagName("div");
//     console.log(element[0].children)
//   };
  
//   window.onload = getElement;

function getElement() {
    const element = document.getElementById("title");
    element.innerText = "changed the element retrieved by id"
  };
  
  window.onload = getElement;