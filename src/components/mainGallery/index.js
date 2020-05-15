import React, {useState} from "react";
import Card from "./card";
import Masonry from 'react-masonry-component';
import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';
// import ImageGallery from 'react-image-gallery';


const masonryOptions = {
    itemSelector: '.card',
    columnWidth: '.card',
    // percentPosition: true,
    gutter: 15,
    // transitionDuration: '.3s',
    // stagger: 15,
}

const imagesLoadedOptions = {};

const CardList = (cardData) => {
    let data = cardData.props;
    const list = data.map((item, index) =>
        <Card props={item} key={item.id}/>
    );

    // const list = data;
    // console.log(list);

    return (
        list
    )
}

const MainGallery = (data) => {

    const cardData = data.props;
      
    return (
        <div className="main-gallery">
            <Masonry 
                className="main-gallery-masonry"
                options={masonryOptions}
                imagesLoadedOptions={imagesLoadedOptions}
                >
                <CardList props={cardData}/>
            </Masonry>
        </div>
    );
}

export default MainGallery;