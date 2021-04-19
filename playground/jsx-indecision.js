console.log('App.js is running');

//JSX -Javascrip XML
//if statement
//ternary operator
//logical and operator

const app ={
    title:"Indecision App",
    subtitle: " Put your life in the hands of computer ",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    console.log('form submitted'); 
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = "";
        renderAddOptions();
    };
};

const removeAll = () => {
    // app.options.length = 0
    app.options =[];
    renderAddOptions();
}

const onToDo = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot =document.getElementById('app');

// const numbers = [28, 8, 9, 7]

const renderAddOptions = () => {
    const template = (
    <div>
        <h1>Indecision App</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled ={app.options.length === 0} onClick={onToDo}>What Should I do?</button>
        <button onClick={removeAll}>Remove All</button>
        {
            // numbers.map((number)=>{
            //     return <p key={number}>Number: {number}</p>
             // })
            // [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>, <p key="4">d</p>,] the static array now we going to create dynamic array based of the iput of the user
        }
        
        <ol>
            {app.options.map((option) => {
                    return <li key={option}>{option}</li>
            })}
    
        </ol>
        <form onSubmit={onFormSubmit}> 
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>
        
    
    </div>
    );

    ReactDOM.render(template, appRoot);
};

renderAddOptions();



// const user = {
//     name: 'Maximilian',
//     age: 24,
//     location:'Africa'
// }

// function getLocation(location) {
//     if(location){
//         return <p>Location: {location}</p> 
//     }else{
//         return undefined
//     }
// }

// var userName = 'Maximilian'
// var userAge = 1.3
// var userLocation = 'Africa'

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p> {user.age}</p> }
//         {getLocation(user.location)}
//     </div>
// );
