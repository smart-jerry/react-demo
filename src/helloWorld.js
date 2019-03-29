/**
 * Created by Administrator on 2019/3/29.
 */
import React from 'react';
import './helloWorld.css'
class Welcome extends React.Component {
	constructor (props){
		super(props)
		this.state = {demoFor: [{id:1,"name":'aaa',isComplate:false},{id:2,"name":'bb'},{id:3,"name":'ccc'},{id:4,"name":'ddd'},{id:5,"name":'eee'}]};
	}
	componentWillMount(){
//		this.demoFor=[{id:1,"name":'aaa'},{id:2,"name":'bb'},{id:3,"name":'ccc'},{id:4,"name":'ddd'},{id:5,"name":'eee'}]
	}
	add(){
		let input = this.refs.myInput;
		const val = input.value;
		console.log(val,'==val。。。。。。。。。。');
		const leng = this.state.demoFor.length+1;
		this.setState({
			demoFor:[
				...this.state.demoFor,
				{
					id:leng,
					"name":val
				}
			]
		})
		console.log(this.state.demoFor)
//		this.demoFor.push({id:7,"name":val});
	}
	del(id){
		const newFor = [...this.state.demoFor];
		newFor.splice(newFor.findIndex(item => item.id === id),1);
		this.setState({
			demoFor:newFor
		})
		
		console.log(this.state.demoFor)
	}
	done(id){
		this.setState({
			demoFor:this.state.demoFor.map((item)=>
				(item.id === id)?{...item,isComplate: !item.isComplate}:item
			)
		})
		console.log(this.state.demoFor,'===========newFor')
	}
	render() {
		let tempStyle = {'text-decoration':'line-through'};
		return (
			<div>
				<h1>{this.props.demos}</h1>
				<div>
					<input type="text" ref="myInput" />
					<input type="button" value="添加" onClick={this.add.bind(this)} />
				</div>
				<ul>
					{
						this.state.demoFor.map((item)=>
							<li>
								<span className={(!item.isComplate) ? "" : "line"}>{item.id}-{item.name}</span>
								<input type="button" onClick={this.del.bind(this,item.id)} value="delete" />
								<input type="button" onClick={this.done.bind(this,item.id)} value="完成" />
							</li>
						)
					}
				</ul>
			</div>
		);
	}
}

export default Welcome;