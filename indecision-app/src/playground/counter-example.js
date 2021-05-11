// let count=0
// const addOne=()=>{
//     count=count+1
//     renderCounterApp()
// }
// const reset=()=>{
//     count=count-count
//     renderCounterApp()
// }
// const minusOne=()=>{
//     count=count-1
//     renderCounterApp()
    
// }

// const appRoot=document.getElementById('app');

// const renderCounterApp=()=>{
//     const templateChange=(
//         <div>
//             <h1>Count:{count}</h1>
//             <button onClick={addOne} className="button">+1</button>
//             <button onClick={reset} className="button">Reset</button>
//             <button onClick={minusOne} className="button">-1</button>
//         </div>
//     )
//     ReactDOM.render(templateChange, appRoot);
// }
// renderCounterApp()
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOne=this.handleAddOne.bind(this)
        this.handleMinusOne=this.handleMinusOne.bind(this)
        this.handleReset=this.handleReset.bind(this)
        this.state={
            count:0
        }
    }
    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count+1
            }
        })
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count-1
            }
        })
    }
    handleReset(){
        this.setState(()=>{
            return {
                count:0
            }
        })
        // this.setState((prevState)=>{
        //     return {
        //         count:prevState.count+1
        //     }
        // })
    }
    render(){
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter/>,document.getElementById('app'))