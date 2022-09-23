// let number = 0; //--1
// const titleArea = document.getElementById("title"); //--2
// const contentArea = document.getElementById("content"); //--2
// const videoArea = document.getElementById("video"); //--2
// const button = document.getElementById('btn'); //--3

// function getData() {
//   button.addEventListener('click', e => { //--4
//     const request = new XMLHttpRequest();
//     request.onreadystatechange = function() {
//       if (request.readyState == 4) {
//         if(request.status == 200) {
//           titleArea.innerHTML = request.response[number].title; //--5
//           contentArea.innerHTML = request.response[number].content; //--5
//           videoArea.setAttribute("src", request.response[number].url); //--6
//           number == 2 ? number = 0 : number++; //--7
//         }
//       }
//     }
//     request.open("GET", "ajax.json");
//     request.responseType = "json";
//     request.send(null);
//   })
// }

// window.onload = getData;


// function sayHello(){
//   setTimeout(function(){
//     console.log('Hello!');
//   }, 1000);
// }

// function sayGoodBye(){
//   console.log('GoodBye!');
// }

// sayHello();
// sayGoodBye();


// function sayHello(){
//   const d = new $.Deferred;
//   setTimeout(function(){
//     console.log('Hello!');
//     d.resolve();
//   }, 1000);
//   return d.promise();
// }

// function sayGoodBye(){
//   console.log('GoodBye!');
// }

// sayHello().done(sayGoodBye);



// $(function() {
//   let number = 0;
//   const button = $("#btn");
//   const videoArea = $("#video");
//   const titleArea = $("#title");
//   const contentArea = $("#content");

//   function getData() {
//     return $.ajax('ajax.json',{  //--3
//       type: 'GET',
//     })
//   };

//   function changeVideo() {
//     button.click(function(){
//       getData().then(function(data){ //--4
//         videoArea.html(data[number].url);
//         titleArea.html(data[number].title);
//         contentArea.html(data[number].content);
//         number == 2 ? number = 0 : number++
//       })
//     });
//   };
//   changeVideo();
// })


// let number = 0;
// let data = []; //--1
// const button = document.getElementById('btn');
// const titleArea = document.getElementById("title");
// const contentArea = document.getElementById("content");
// const videoArea = document.getElementById("video");

// function getData() {
//   const request = new XMLHttpRequest();
//   request.onreadystatechange = function () {
//     if (request.readyState == 4) {
//       if (request.status == 200) {
//         data = request.response
//       }
//     }
//   }
//   request.open("GET", "ajax.json");
//   request.responseType = "json"
//   request.send(null);
// }

// function changeVideo() {
//   if (data.length < 1) { //--2
//     getData();
//   }
//   button.addEventListener('click', e => {
//     titleArea.innerHTML = data[number].title;
//     contentArea.innerHTML = data[number].content;
//     videoArea.setAttribute("src", data[number].url);
//     number == 2 ? number = 0 : number++
//   })
// }

// window.onload = changeVideo;