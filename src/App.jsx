/** @format */
import './App.css'
import React from 'react';
import NameApp from './components/name_app/name_app';
import PageDescription from './components/description/pageDescription';
import NumberGeneratorBTN from './components/button/number_generator_btn';
import Footer from './components/footer/footer';
// /** _____END OF IMPORTS_____ */

function App() {
	return (
		<React.Fragment>
			<div className='main_container'>
				<div className='nameApp'><NameApp /></div>
				<div className='pageDescription'><PageDescription /></div>
				
				<div className='numberGeneratorBTN'><NumberGeneratorBTN /></div>
				<div className='footer'><Footer/></div>
			</div>
		</React.Fragment>
	);
}

export default App;

