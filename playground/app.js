class IndecisionApp extends React.Component {
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: props.options
        };
    }

    componentDidMount(){
        try {
                const json = localStorage.getItem('options')
                const options =JSON.parse(json)

            if(options){
                this.setState(()=>{
                return {
                    options : options
                }
            });
        }
        } catch (e) {
            
        };
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){

            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount(){
        console.log('componentwillunmount!')
    }


    handleRemoveAll(){
        this.setState(()=>{
            return {
                options: []
            };
        });
    };

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>{
            return {
                options : prevState.options.filter((option)=> {
                    return optionToRemove !== option
                })
            }
        })
    }

    handlePick(){
        const randomNum =Math.floor(Math.random()* this.state.options.length)
        const option = this.state.options[randomNum];
        alert(option);
    };

    handleAddOption(option){

        if(!option){
            return "Enter valid value to add item"
        }else if(this.state.options.indexOf(option) > -1){
            return "This option is already exists"
        }

        this.setState((prevState)=>{
            return {
                options : prevState.options.concat(option)
            }
        });
    }

    render(){
        const subtitle = "Put your life in the hand of computer"

        return(
            <div>
            <Header  subtitle={subtitle}/>
            <Action 
            hasOptions = {this.state.options.length > 0}
            handlePick={this.handlePick}
            />
            <Options 
            options={this.state.options}
            handleRemoveAll = {this.handleRemoveAll}
            handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOption 
            handleAddOption ={this.handleAddOption} 
            />
            </div>
        );
    }
    
}



IndecisionApp.defaultProps = {
    options: []
}





//stateless function component

const Header = (props) => {
    return (
            <div>   
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2> }
            </div>
        );
}

Header.defaultProps = {
    title : "Indecision"
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div>   
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props)=> {
    return(
            <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            > 
            What Should I Do? 
            </button>
            </div>
        );
}

// class Action extends React.Component {
//     render(){
//         return(
//             <div>
//             <button 
//             onClick={this.props.handlePick}
//             disabled={!this.props.hasOptions}
//             > 
//             What Should I Do? 
//             </button>
//             </div>
//         );
//     }
// }


const Options = (props) => {
    return (
            <div>
            <button 
            onClick={props.handleRemoveAll}
            >
             Remove all
            </button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {props.options.map((option)=> {
                return (
                    <Option  
                    key={option} 
                    optionText={option}
                    handleDeleteOption = {props.handleDeleteOption}
                    /> 
                );
            })}
            </div>
        );
}

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//             <button onClick={this.props.handleRemoveAll}>
//              Remove all
//             </button>
//             {this.props.options.map((option)=> {
//                 return (
//                     <Option  key={option} optionText={option}/> 
//                 );
//             })}
//             </div>
//         );
//     }
// }


const Option = (props) => {
    return (
            <div>
             {props.optionText}
             <button 
              onClick ={(e)=>{
                props.handleDeleteOption(props.optionText)
              }}
             >
              Remove
             </button>
            </div>
        );
}


// class Option extends React.Component {
//     render(){
//         return (
//             <div>
//              {this.props.optionText}
//             </div>
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error : undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = ""
        const error = this.props.handleAddOption(option)

        this.setState(()=>{
            return {
                error: error
            }
        })

        if(!error){
            e.target.elements.option.value = ""
        };
    }

    render(){
        return(
            <div>
             {this.state.error && <p>{this.state.error}</p>}
             <form onSubmit={this.handleAddOption}>
             <input type="text" name="option"/>
             <button> Add option</button>
             </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))