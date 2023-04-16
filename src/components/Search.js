import React, { useState } from 'react'

const Search = ({onSubmit}) => {


    const [image, setImage] = useState('');

    const handleChange = (e) => {
        setImage(e.target.value);
    }

    const handleUp = (e) => {
        if(e.keyCode === 13){
            onSubmit(image);
        }
    }


    return (
        <div>
            <input type='text' placeholder="all" className='searchForm' value={image} onChange={handleChange} onKeyUp={handleUp}/>

            <p>{image}</p>
        </div>
    )
}

export default Search;


