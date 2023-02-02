/** @format */
import './name_app.css';
import React from 'react';

const appNames = ['NUCKY', 'LUMBER'];
const appNamesLength = appNames.length;
const randomChoose = Math.floor(Math.random() * appNamesLength);
const nameShown = appNames[randomChoose];

function NameApp() {
	return <h1 className='heading'>{nameShown}</h1>;
}
export default NameApp;

