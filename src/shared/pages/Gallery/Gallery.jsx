import React from "react";
import Page from "../../components/Page/Page";
import PageBanner from "../../components/Page/Components/PageBanner/PageBanner";
import PageTitle from "../../components/Page/Components/PageTitle/PageTitle";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import image1 from "../../images/photos/gallery/image1.jpg";
import image2 from "../../images/photos/gallery/image2.jpg";
import image3 from "../../images/photos/gallery/image3.jpg";


const GalleryNew = function (props) {
  
    const images = [
        {
          original: image1,
          thumbnail:  image1,
        },
        {
          original:  image2,
          thumbnail:  image2,
        },
        {
          original:  image3,
          thumbnail:  image3,
        },
      ];
  return (
    <Page name="gallery">
      <PageBanner>
        <PageTitle title="Gallery" />
      </PageBanner>
      <ImageGallery items={images} autoPlay/>;
    </Page>
  );
};

export default GalleryNew;
