class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
        this.handlePick=this.handlePick.bind(this)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.state={
            options:[]
        }
    }
    handleDeleteOptions(){
        this.setState(()=>{
            return{
                options:[]
            }
        })
    }
    handleAddOption(option){
        if(!option){
            return "enter valid value"
        }else if(this.state.options.indexOf(option)>-1){
            return "this value already exists"
        }
        this.setState((prevState)=>{
            return{ 
                options:prevState.options.concat([option])
            }
        })
    }
    handlePick(){
        const random=Math.floor(Math.random()*this.state.options.length)
        const option=this.state.options[random]
        alert(option)
    }
    render(){
        const title="indecision App"
        const subTitle="Put your life in the hand of computer"
        
        
        return(
        <div>
        
            <Header title={title} subTitle={subTitle}/>
            <Action hasAction={this.state.options.length>0} handlePick={this.handlePick} />
            <Options options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption
            handleAddOption={this.handleAddOption}
             />
            
        </div>
        )
    }
}
class Header extends React.Component{
    render(){
        
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subTitle}</h2>
            </div>
            )

    }
    
}
class Action extends React.Component{
    
    render(){
        return(
            <div>
            <button onClick={this.props.handlePick}
            disabled={!this.props.hasAction}>What should i do?</button>
            </div>
        )
    }

}

class Options extends React.Component{
    
    
    render(){
        return(
            <div>
            <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
            <ol>
           
                {this.props.options.map((option)=><Option key={option} optionText={option}/>)}
            </ol>
            </div>
        )
    }

}
class Option extends React.Component{
    render(){
        return(
            <li key={this.props.optionText}>{this.props.optionText}</li>
        )
    }

}
class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.state={
            error:undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        const error=this.props.handleAddOption(option)
        this.setState(()=>{
            return{
                error:error
            }
        })
    }
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name='option'/> 
                <button>Submit</button>
                </form>
            </div>
        )
    }

}



ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))