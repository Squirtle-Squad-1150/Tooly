import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import addListing from './addListing.css';

const Form = () => {
    const navigate = useNavigate();
    
    const [newTool, setNewTool] = useState({
        tool: '',
        brand: '',
        model: '',
        category: '',
        condition: '',
        cordless: Boolean,
        available: Boolean,
        location: '',
        price: Number,
        description: '',
    });
    
    const url = 'https://cryptic-dusk-16798.herokuapp.com/listing';
    
    const handleChange = (event) => {
        setNewTool({ ...newTool, [event.target.id]: event.target.value });
    };

    const createNewTool = () => {
        axios.post(url, newTool)
        .then((res) => {
            console.log(res)
            navigate('/');
        });
    };
    
    const handleSubmit = (event) => {
        createNewTool();
    };

    return (
        <div>
            <h2>Add A New Listing</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    {/* Tool */}
                    <li>
                        <label htmlFor='tool'>Tool: </label>
                        <input
                            id='tool'
                            type='text'
                            value={newTool.tool}
                            onChange={handleChange}
                        />
                    </li>
                    {/* Brand */}
                    <li>
                        <label htmlFor='brand'>Brand: </label>
                        <input
                            id='brand'
                            type='text'
                            value={newTool.brand}
                            onChange={handleChange}
                        />
                    </li>
                    {/* Model */}
                    <li>
                        <label htmlFor='model'>Model: </label>
                        <input
                            id='model'
                            type='text'
                            value={newTool.model}
                            onChange={handleChange}
                        />
                    </li>
                    {/* Category */}
                    <li>
                        <label htmlFor='category'>Category: </label>
                        <input
                            id='category'
                            type='text'
                            value={newTool.category}
                            onChange={handleChange}
                        />
                    </li>
                    {/* Condition */}
                    <li>
                        <span>Condition: </span>
                        <label htmlFor='new'> New </label>
                        <input
                            id='new'
                            type='radio'
                            name='condition'
                            value='new'
                            checked={newTool.condition === 'new'}
                            onChange={handleChange}
                        />
                        <label htmlFor='used'> Used </label>
                        <input
                            id='used'
                            type='radio'
                            name='condition'
                            value='used'
                            checked={newTool.condition === 'used'}
                            onChange={handleChange}
                        />
                    </li>
                    {/* Cordless */}
                    <li>
                        <span>Cordless: </span>
                        <label htmlFor='yes'> Yes </label>
                        <input
                            id='yes'
                            type='radio'
                            name='cordless'
                            value='true'
                            checked={newTool.cordless === 'true'}
                            onChange={handleChange}
                        />
                        <label htmlFor='no'> No </label>
                        <input
                            id='no'
                            type='radio'
                            name='cordless'
                            value='false'
                            checked={newTool.cordless === 'false'}
                            onChange={handleChange}
                        />
                    </li>
                    {/* Available */}
                    <li>
                        <span>Available: </span>
                        <label htmlFor='available-yes'> Yes </label>
                        <input
                            id='available-yes'
                            type='radio'
                            name='available'
                            value='true'
                            checked={newTool.available === 'true'}
                            onChange={handleChange}
                        />
                        <label htmlFor='available-no'> No </label>
                        <input
                            id='available-no'
                            type='radio'
                            name='available'
                            value='false'
                            checked={newTool.available === 'false'}
                            onChange={handleChange}
                        />
                    </li>
                    {/* Location */}
                    <li>
                        <label htmlFor='location'>Location: </label>
                        <input
                            id='location'
                            type='text'
                            value={newTool.location}
                            onChange={handleChange}
                        />
                    </li>
                    {/* Price */}
                    <li>
                        <label htmlFor='price'>Price: $</label>
                        <input
                            id='price'
                            type='number'
                            min='1'
                            value={newTool.price}
                            onChange={handleChange}
                        />
                    </li>
                    {/* Description */}
                    <li>
                        <label htmlFor='description'>Description: </label>
                        <textarea
                            id='description'
                            cols='40'
                            rows='5'
                            value={newTool.description}
                            onChange={handleChange}></textarea>
                    </li>
                    {/* Submit Button */}
                    <li>
                        <button type='submit'>Submit</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default Form;