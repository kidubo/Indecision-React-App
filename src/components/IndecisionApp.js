import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionalModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
            options: [],
            selectedOption: undefined
        };

    handleRemoveAll = () => {
        this.setState(()=>{
            return {
                options: []
            };
        });
    };

    handleCloseModal = () => {
        this.setState(()=>{
            return{
                selectedOption : undefined
            }
        })
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=>{
            return {
                options : prevState.options.filter((option)=> {
                    return optionToRemove !== option
                })
            }
        })
    };

    handlePick = () => {
        const randomNum =Math.floor(Math.random()* this.state.options.length)
        const option = this.state.options[randomNum];
        this.setState(()=>{
            return {
                selectedOption: option
            }
        })
    };

    handleAddOption = (option) => {

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
    };
   
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
    };

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){

            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount(){
        console.log('componentwillunmount!')
    }

    render(){
        const subtitle = "Put your life in the hand of computer"

        return(
            <div>
            <Header  subtitle={subtitle}/>
            
            <div className = "container">
            <Action 
            hasOptions = {this.state.options.length > 0}
            handlePick={this.handlePick}
            />

            <div className = "widget">
            <Options 
            options={this.state.options}
            handleRemoveAll = {this.handleRemoveAll}
            handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOption 
            handleAddOption ={this.handleAddOption} 
            />
            </div>
            <OptionalModal
            selectedOption ={this.state.selectedOption}
            handleCloseModal ={this.handleCloseModal}
            />            
            </div>

            </div>
        );
    }
    
}



IndecisionApp.defaultProps = {
    options: []
}