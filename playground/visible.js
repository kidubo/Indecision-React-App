class Vissibility extends React.Component {
    constructor(props){
        super(props);
        this.toggleVissibility = this.toggleVissibility.bind(this)
        this.state = {
                Vissibility: false
        };
    };

    toggleVissibility(){
        this.setState((prevState)=> {
            return {
                Vissibility: !prevState.Vissibility
            };
        })
    }
    render(){
        return(
            <div>
                <h1>Vissibility Toggle</h1>
                <button onClick={this.toggleVissibility}>{this.state.Vissibility ? "Hide details" : "Show Details"}</button>
                {this.state.Vissibility && 
                    (
                        <div>
                            <p>These are some details</p>
                        </div>
                      )
                }
            </div>
        );
    }
}

ReactDOM.render(<Vissibility /> , document.getElementById('app'))













// let visibility = false;
// const toggleVisibility = () => {
//     visibility = !visibility
//     renderDetails()
// }

// const rooApp = document.getElementById('app');

// const renderDetails = () => {
//     const templateThree = (
//     <div>
//       <h1>Vissibility Toggle</h1>
//       <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
//       {visibility && (
//           <div>
//                 <p> This are some details!</p>
//           </div>
//       )}
//     </div>
// );
// ReactDOM.render(templateThree, rooApp);

// }

// renderDetails();



