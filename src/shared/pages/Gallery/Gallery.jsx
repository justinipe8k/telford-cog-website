import React from "react";
import Page from "../../components/Page/Page";
import PageBanner from "../../components/Page/Components/PageBanner/PageBanner";
import PageTitle from "../../components/Page/Components/PageTitle/PageTitle";
import { Image } from 'semantic-ui-react'
import image1 from "../../images/photos/gallery/image1.jpg";
import image2 from "../../images/photos/gallery/image2.jpg";
import image3 from "../../images/photos/gallery/image3.jpg";
import image4 from "../../images/photos/gallery/image4.JPG";
import './Gallery.css';

const Leadership = function (props) {
    return (
        <Page name="leadership">
            <PageBanner>
                <PageTitle title="Gallery" />
            </PageBanner>
            <div className='galleryFlex'>
                <div className='galleryFlexItem'> <Image src={image1} size='large' rounded /></div>
                <div className='galleryFlexItem'>    <Image src={image2} size='large' rounded /></div>
                <div className='galleryFlexItem'> <Image src={image3} size='large' rounded /></div>
                <div className='galleryFlexItem'> <Image src={image4} size='large' rounded /></div>
            </div>
        </Page>
    );
};

export default Leadership;
