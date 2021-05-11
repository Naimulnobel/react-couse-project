// console.log("visible")
// const visible={
//     name:'Visiblity Toggle',
//     pagarph:'Hey here you can see some details'
// }
// let visblity=false;
// const visibiltyClicked=()=>{
//     visblity=!visblity
//     template()
// }

// const appRoot=document.getElementById('app');
// const template=()=>{
//     const content=(
//         <div>
//             <h1>{visible.name}</h1>
//             <button onClick={visibiltyClicked}>
//             {visblity?" Hide":"Show Details"}
//             </button>
//             {
//                 visblity &&(
//                 <div>
//                     <p>Hey there are some details</p>
//                 </div>
//             )}
//         </div>
       
    
//     );
//     ReactDOM.render(content,appRoot)
// };
// template();
class Visiblity extends React.Component{
    constructor(props){
        super(props)
         this.show=this.show.bind(this)
        // this.hide=this.hind.bind(this)
        this.state={
            visibility: false

        }
        
    }
    show(){
        this.setState((prevState) => {
            return {
              visibility: !prevState.visibility
            };
          });
    }
    render(){
        return(<div>
                 <h2>Visibility Toggle</h2>
                 <button onClick={this.show}>{this.state.visibility? "Hide":"Show Details"}</button>
                 {this.state.visibility &&(
                    <div>
                        <p>Hey there are some details</p>
                    </div>
                )}
             </div>)
    }
} 
ReactDOM.render(<Visiblity/>,document.getElementById('app'))