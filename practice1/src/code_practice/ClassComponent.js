import React from 'react';

class Computers extends React.Component {
	constructor(){
		super();
		this.add = this.add.bind(this);
		this.remove = this.remove.bind(this);
		this.state = {
			cant: 0,
		};
	};

	add() {
		this.setState({cant: this.state.cant + 1})
	}

	remove() {
		this.setState({cant: this.state.cant - 1})
	}

	render() {
		return (
			<div>
				<hr/>
				<h3>Title: {this.props.name} </h3>
				<h4>Description: {this.props.description} </h4>
				<p>Price: {this.props.price} </p> 
				<p>Cantidad: {this.state.cant}</p>
				<button onClick = {this.add}> + </button>
				<button onClick = {this.remove}> - </button>
				<hr/>
			</div>
		);	
	}
}

const ClassComponent = () => {
	return (
		<div>
			<Computers name = {'PC GAMER'} description = {'The best pc for play games'} price = {500}/>
			<Computers name = {'PC OFFICE'} description = {'The best for work'} price = {300}/>
			<Computers name = {'PC HOUSE'} description = {'Ideal for entertainment'} price = {150}/>		
		</div>
	);
}

export default ClassComponent