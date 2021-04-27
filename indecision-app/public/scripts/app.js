"use strict";

console.log("App js is running!"); //JSX- JavaScript XML.
//const tempate = React.createElement('h1',null,'This is JSX from app.js')

var app = {
  title: 'Indecision App',
  subTitle: 'this is some info',
  option: ['one', 'two']
};

function getSubtitle(subTitle) {
  if (subTitle) {
    return /*#__PURE__*/React.createElement("p", null, " ", subTitle);
  }
}

var tempate = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), getSubtitle(app.subTitle), app.option.length > 0 ? /*#__PURE__*/React.createElement("p", null, "Here are your options") : /*#__PURE__*/React.createElement("p", null, "No Option")); // const user={
//     name:'Naimul Islam Nobel',
//     age:25,
//     location:'Bangladesh'
// }
// function getLocation(location){
//     if (location){
//         return <p>Location: {location}</p>
//     }
// }
// const tempateChange =(
//     <div>
//         <h1>{user.name? user.name:'Anonumous'}</h1>
//          {user.age>= 18 && <p>Age:{user.age}</p>}
//          {getLocation(user.location)}
//     </div>
// );

var count = 0;

var addOne = function addOne() {
  count = count + 1;
  console.log("Plus 1");
};

var reset = function reset() {
  count == 0;
  console.log("reset");
};

var minusOne = function minusOne() {
  count = count - 1;
  console.log("Minus 1");
};

var templateChange = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count:", count), /*#__PURE__*/React.createElement("button", {
  onClick: addOne,
  className: "button"
}, "+1"), /*#__PURE__*/React.createElement("button", {
  onClick: reset,
  className: "button"
}, "Reset"), /*#__PURE__*/React.createElement("button", {
  onClick: minusOne,
  className: "button"
}, "-1"));
var appRoot = document.getElementById('app');
ReactDOM.render(templateChange, appRoot);
