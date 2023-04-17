import React from 'react'
import './Search.css';

const ImageLists = ({ result }) => {

    console.log('data', result.results);


    return (
        <div className='res-count-container'>
            {(result.results) && (
                <div className='image-list'>
                    {
                        result.results.map((image) => {
                            return (
                                <div className='image-card' key={image.id}>
                                    <img src={image.urls.full} alt={image.alt_description} />
                                </div>
                            )
                        })}
                </div>
            )}

        </div>
    )
}

export default ImageLists;



