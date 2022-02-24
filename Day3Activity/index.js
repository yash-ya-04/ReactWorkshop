// window.onload = function () {
//   var input = document.getElementById("ip");
//   var inputValue;
//   input.addEventListener("input", function () {
//     inputValue = input.value;
//     alert(inputValue);
//   });
//   setInterval(function () {
//     inputValue = Math.floor(Math.random() * 101);
//     input.value = inputValue;
//     alert(inputValue);
//   }, 10000); 
// };

window.onload = function () {
  var abc = {};
  var input = document.getElementById("ip");
  Object.defineProperty(abc, "inputValue", {
    get: function () {
      return value;
    },
    set: function (inputVal) {
      input.value = inputVal;
      value = inputVal;
    },
  });
  input.addEventListener("input", function () {
    abc.inputValue = input.value;
    document.getElementById("iv").innerHTML = abc.inputValue;
  });
  setInterval(function () {
    abc.inputValue = Math.floor(Math.random() * 101);
    document.getElementById("iv").innerHTML = abc.inputValue;
  }, 10000);
};
