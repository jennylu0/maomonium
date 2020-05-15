import React, {useState} from "react";
import Card from "./card";
import Masonry from 'react-masonry-component';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ImageGallery from 'react-image-gallery';


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

    const [open, setOpen] = useState(false);

    const onOpenModal = () => {
        console.log("clicked");
        setOpen(true);
      };
     
    const onCloseModal = () => {
        setOpen(false);
    };

    const images = [
        {
          original: 'https://placehold.it/500x300',
          thumbnail: 'https://placehold.it/500x300',
        },
        {
            original: 'https://placehold.it/500x300',
            thumbnail: 'https://placehold.it/500x300',
        },
        {
            original: 'https://placehold.it/500x300',
            thumbnail: 'https://placehold.it/500x300',
        },
      ];

    // const CardList = cardData.map((item, index) => 
    //   <Card/>
    // );

      
    return (
        <div className="main-gallery">
            <Masonry 
                className="main-gallery-masonry"
                options={masonryOptions}
                imagesLoadedOptions={imagesLoadedOptions}
                >
                {/* <Card onClick={onOpenModal}/> */}
                <CardList props={cardData}/>
                
                <Modal open={open} onClose={onCloseModal} closeOnOverlayClick center>
                <h2>Simple centered modal</h2>
                    <ImageGallery items={images} thumbnailPosition="left" showPlayButton={false}/>
                </Modal>


                {/* <Card/>
                <Card/>
                <Card/>
                <Card/> */}
            </Masonry>
        </div>
    );
}

export default MainGallery;