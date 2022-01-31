import React from 'react';
import ToolCard from '../ToolCard/ToolCard';
import './toolContainer.css';
import { useContext } from 'react';
import { toolContext } from '../../toolContext';

function ToolContainer(props) {
	const { tools } = useContext(toolContext);

	return <div className='toolContainer'>{<ToolCard tools={tools} />}</div>;
}

export default ToolContainer;
