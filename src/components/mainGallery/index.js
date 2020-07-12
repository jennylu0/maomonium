import React, {useState, useEffect} from "react";
import Card from "./card";
import Filter from "./filter";
import Masonry from 'react-masonry-component';
import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';
// import ImageGallery from 'react-image-gallery';


//filtering feature
//make filters component w/ filter container & items 
//from galleryData, pull all categories and stuff into array of categories
//render array

//add state to cards and toggle on filter
// *fun thot* make filter icons gradient colors for however many filters




const MainGallery = (data) => {
    const cardData = data.props;
    // console.log("CARDDATA", cardData);

    let comboData = cardData.items.map((item) => {
        let result = cardData.categories.find((cat) => {
            return cat.id === item.category;
        })
        return {
            ...item,
            color: result.color
        }
    });

    const [activeFilter, setFilter] = useState(null);

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
        let data = comboData;
        console.log("DATAAAA", data);
    
        const list = data.map((item, index) =>
            <Card props={item} key={index} filter={cardData.filter}/>
        );

        return (
            list
        )
    }

    const FilterList = (props) => {
        let data = props.props;
        let callbackFunc = props.filterCallback;

        const list = data.map((item, index) =>
            <Filter props={item} key={index} callback={callbackFunc}/>
        );

        const allBtn = [<Filter props={allLabel} callback={callbackFunc} key="-1"/>];
        // console.log(list);
        return (
            [...allBtn, ...list]
        )
    }

    const filterHandler = (filter) => {
        // console.log(filter);
        setFilter(filter);
    }

    const allLabel = {
        icon: 'https://placehold.it/30x30',
        name: 'All',
        id: 'all'
    }
      
    return (
        <div className="main-gallery">
            <div className="filter-wrapper">
                <div className="filter-inner">
                    <FilterList props={cardData.categories} filterCallback={filterHandler}/>
                </div>
            </div>
            <Masonry 
                className="main-gallery-masonry"
                options={masonryOptions}
                imagesLoadedOptions={imagesLoadedOptions} filter={activeFilter}
                >
                <CardList props={cardData.items} filter={activeFilter}/>
            </Masonry>
        </div>
    );
}

export default MainGallery;