import React from 'react'
import './Search.css';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options
});

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
                                    <a href={image.urls.small_s3} data-fancybox="gallery" data-caption={image.alt_description}>
                                        <img src={image.urls.small_s3} alt={image.alt_description} />
                                    </a>
                                </div>
                            )
                        })}
                </div>
            )}
        </div>
    )
}

export default ImageLists;



