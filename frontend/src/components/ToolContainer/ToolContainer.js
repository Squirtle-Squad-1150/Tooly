import React from 'react';
import ToolCard from '../ToolCard/ToolCard';
// import { Grid, Container } from '@mui/material';
import tools from './tools.json';

function ToolContainer(props) {
	return (
		<div>
			<ToolCard tools={tools} />
		</div>
	);
}

export default ToolContainer;
