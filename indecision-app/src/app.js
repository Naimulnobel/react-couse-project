console.log("App js is running!");

//JSX- JavaScript XML.
//const tempate = React.createElement('h1',null,'This is JSX from app.js')
const app={
    title:'Indecision App',
    subTitle:'this is some info',
    option:['one','two']
}
function getSubtitle(subTitle){
    if (subTitle){
        return <p> {subTitle}</p>
    }
    
}
const tempate =(
    <div>
        <h1>{app.title}</h1>
        {getSubtitle(app.subTitle)}
        {app.option.length>0?<p>Here are your options</p>:<p>No Option</p>}
    </div>
);
// const user={
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
let count=0
const addOne=()=>{
    count=count+1
    console.log("Plus 1")
}
const reset=()=>{
    count==0
    console.log("reset")
}
const minusOne=()=>{
    count=count-1
    console.log("Minus 1")
    
}

const templateChange=(
    <div>
        <h1>Count:{count}</h1>
        <button onClick={addOne} className="button">+1</button>
        <button onClick={reset} className="button">Reset</button>
        <button onClick={minusOne} className="button">-1</button>
    </div>
)
const appRoot=document.getElementById('app');
ReactDOM.render(templateChange, appRoot);