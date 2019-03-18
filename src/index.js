/**
 * Created by Administrator on 2019/3/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './helloworld';

const hwary = 'helloWorld,by props'
ReactDOM.render(
	<HelloWorld hwary={hwary} />,
	document.getElementById('root')
)