import React, { Component } from 'react'

class ImageCard extends Component {

    constructor(props) {
        super(props)
        this.state = { spans: 0 }
        // We create a ref so we can reach into the DOM and interact with an individual element
        // Here this will allow us to get the height of each picture
        this.imageRef = React.createRef()
    }

    // Gets height of each image to adjust grid using the clientHeight property
    // We need to add an event listener to get the right value for the clientHeight property
    // That value is not immediately available after the component mounted
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    // For configuration of the grid-row-end css property which takes a number of spans
    // and which we'll use to define the space to allocate to each picture depending on its height
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        // We divide by the value of grid-auto-rows in ImageList.css
        const spans = Math.ceil(height / 10);
        this.setState({ spans })
    }

    render() {

        const { description, urls } = this.props.img;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef}
                    src={urls.regular}
                    alt={description}
                />
            </div>
        )

    }

}

export default ImageCard
