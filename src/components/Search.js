import React, { useState } from 'react'

const Search = ({ onSubmit }) => {


    const [image, setImage] = useState('');

    const handleChange = (e) => {
        setImage(e.target.value);
    }

    const handleUp = (e) => {
        console.log("e", e.target.value);
        if (e.keyCode) {
            onSubmit(image);
        }
    }

    return (
        <div className='searchTop'>
            <span>Image Search By Unsplash</span>
            <input type='text' placeholder="Serach..." className='searchForm' value={image} onChange={handleChange} onKeyUp={handleUp} />
        </div>
    )
}

export default Search;


