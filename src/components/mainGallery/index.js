import React, {useState, useEffect} from "react";
import Card from "./card";
import Filter from "./filter";
import Masonry from 'react-masonry-component';
import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';
// import ImageGallery from 'react-image-gallery';

// MASONRY
const masonryOptions = {
    itemSelector: '.card',
    columnWidth: '.card',
    gutter: 15,
    transitionDuration: '.3s',
    stagger: 15,
}

const imagesLoadedOptions = {};

// CARDS
const CardList = (cardData) => {
    let data = cardData.props;
    console.log(data);
   
    const list = data.map((item, index) =>
        <Card props={item} key={index}/>
    );

    return (
        list
    )
}

const FilterList = (filterData) => {
    let data = filterData.props;

    const list = data.map((item, index) =>
        <Filter props={item}/>
    );

    return (
        list
    )
}



//filtering feature
//make filters component w/ filter container & items 
//from galleryData, pull all categories and stuff into array of categories
//render array

//add state to cards and toggle on filter
// *fun thot* make filter icons gradient colors for however many filters




const MainGallery = (data) => {
    const cardData = data.props;
    console.log(cardData);
    // const [categories, getCategories] = useState([]);

    // console.log("cardData:", cardData);

    // function setCategories(cardData) {
    //     let catArray = [];
    //     cardData.forEach(item => {
    //         let categoryItem = item.category.toLowerCase();
    //         if (!(catArray.indexOf(categoryItem) > -1)) {
    //             catArray.push(categoryItem);
    //         } else {
    //             return;
    //         }
    //     })
    
    //     getCategories([...catArray]);

    //     console.log(catArray);
    //     console.log(categories);
    // }
    
    // useEffect(() => {
    //     setCategories(cardData);
    // }, []);

      
    return (
        <div className="main-gallery">
            <FilterList props={cardData.categories}/>
            <Masonry 
                className="main-gallery-masonry"
                options={masonryOptions}
                imagesLoadedOptions={imagesLoadedOptions}
                >
                <CardList props={cardData.items}/>
            </Masonry>
        </div>
    );
}

export default MainGallery;