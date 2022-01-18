import React from 'react'
import ImageCard from './ImageCard'
import '../styles/ImageList.css'


const ImageList = (props) => {

    const images = props.images.map((image) => {
        return <ImageCard
            // we need a key prop on the root element when rendering a list
            key={image.id}
            img={image}
        />
    })

    return (
        <div className='image-list'>{images}</div>
    )

}

export default ImageList
