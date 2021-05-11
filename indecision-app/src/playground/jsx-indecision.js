console.log("App js is running!");

//JSX- JavaScript XML.
//const tempate = React.createElement('h1',null,'This is JSX from app.js')
const app={
    title:'Indecision App',
    subTitle:'this is some info',
    options:[]
}
function getSubtitle(subTitle){
    if (subTitle){
        return <p> {subTitle}</p>
    }
    
}
const onFormSubmit=(e)=>{
    e.preventDefault();
    const option=e.target.elements.option.value
    if(option){
        app.options.push(option)
        e.target.elements.option.value=''
        template()
    }
    console.log("form submited")
}
const removeAll=(e)=>{
    e.preventDefault();
    app.options.length=0
    template()
}
const onMakeDecision=()=>{
    const random=Math.floor(Math.random()*app.options.length)
    const option=app.options[random]
    alert(option)
}
const numbers=[56,101,1000]
const template=()=>{
    const tempate =(
        <div>
            <h1>{app.title}</h1>
            {getSubtitle(app.subTitle)}
            {app.options.length>0?<p>Here are your options</p>:<p>No Option</p>}
            
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={removeAll}>Remove All</button>
            
            <form onSubmit={onFormSubmit}>
                <input type='text' name="option"/>
                <button>Add Option</button>
            </form>
            <ol>
            {
                app.options.map((option)=>{
                    return <li key={option}>Item: {option}</li>
                })
                
            }
            </ol>
        </div>
    )
    ReactDOM.render(tempate, appRoot);
}

const appRoot=document.getElementById('app');
template()

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
