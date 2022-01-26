import React from 'react';
import ToolCard from '../ToolCard/ToolCard';
import toolContainer from './toolContainer.css';
import tools from './tools.json';

function ToolContainer(props) {
	return (
		<div className='toolContainer'>
			<ToolCard tools={tools} />
		</div>
	);
}

export default ToolContainer;
