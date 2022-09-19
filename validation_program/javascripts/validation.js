// window.onload = function() {
//     const forms = document.forms;
//     console.log(forms[0].elements);
//   };


//   window.onload = function() {
//     const forms = document.forms;
//     forms[0].name.value = "please enter your name";
//   };


//   function confirmSubmit() {
//     const forms = document.forms;
//     forms[0].onsubmit = function(){
//       if (!(confirm("do you want to submit this?"))) {
//         alert("cancelled.");
//         return false;
//       }
//     };
//   };
  
  window.onload = confirmSubmit;


  function confirmSubmit() {
    const forms = document.forms;
    forms[0].onsubmit = function(){
      const name = forms[0].name.value;
      if (!(confirm(`Mr.${name},do you want to submit this?`))) {
        alert("cancelled.");
        return false;
      }
    };
  };
  
  window.onload = confirmSubmit;