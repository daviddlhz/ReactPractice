import React from 'react';
import ReactDOM from 'react-dom'; 

const CardCars = (props) => {
    return (
        <div>
            <hr/>
            <h3>Name : {props.name}</h3>
            <p>Description : {props.description}</p>
            <hr/>
        </div>
    );
};

const App = () => {
    <CardCars name = {'Mazda CX9'} description = {'Good Card'}/>;
    <CardCars name = {'Subaru'} description = {'The best car in the year'}/>;
    <CardCars name = {'Sedan'} description = {'Its not that good'}/>;
};


ReactDOM.render(<App />, document.querySelector('#root'));