import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

function ToolCardDetail() {

    const { _id } = useParams();

    const [tool, setTool] = useState(null)

    function getTool(_id) {
        const url = `https://cryptic-dusk-16798.herokuapp.com/listing/${_id}`; 
			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					console.log(res);
					setTool(res);
				})
				.catch(console.error);
	}

    useEffect(() => {
            // This code to run when component mounts
            getTool(_id);
            console.log(_id)
        }, [_id]);

	if (!tool) {
		return <p>Loading tool information ...</p>;
	}
    
    return (
			<div>
                <h1>WORK MFKER</h1>
                <p>{tool._id}</p>
                <p>{tool.title}</p>
                <p>{tool.description}</p>

			</div>
		);
}

export default ToolCardDetail;