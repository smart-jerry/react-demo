/**
 * Created by Administrator on 2019/3/18.
 */
import React from 'react';

class HelloWorld extends React.Component {
	constructor(props) {
		super(props);
		console.log(props,'111111=============props');
		this.message = props.hwary;
		this.state ={
			demoAry:['111','222','3333']
		}
		
	}
	componentWillMount(){
	
	}
	componentDidMount(){
	
	}
	myClick(index,value){
		alert(index+'==='+value);
	}
	addItem(){
		console.log(22222);
		var input = this.refs.myInput;
		var inputValue = input.value;
//		console.log(inputValue);
		this.setState({
			demoAry:this.state.demoAry.concat(inputValue)
		});
		input.value = ''
	}
	render() {
		return (
			<div>
				<h1>{this.message}</h1>
				<div>
					<input type="text" ref="myInput" />
					<button onClick={this.addItem.bind(this)}>Add</button>
				</div>
				<ul>
					{
						this.state.demoAry.map((item,index)=>
							<li onClick={this.myClick.bind(this,index,item)}>{item}</li>
						)
					}
				</ul>
			</div>
		);
	}
}

export default HelloWorld;