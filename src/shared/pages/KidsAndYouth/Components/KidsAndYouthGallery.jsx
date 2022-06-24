import React from "react";
import Gallery from "react-grid-gallery";
import { render } from "react-dom";
import "../KidsAndYouth.css";
import image1 from "../../../images/photos/KidsAndYouth/image1.JPG";
import image2 from "../../../images/photos/KidsAndYouth/image2.JPG";
import image3 from "../../../images/photos/KidsAndYouth/image3.JPG";
import image4 from "../../../images/photos/KidsAndYouth/image4.JPG";
import image5 from "../../../images/photos/KidsAndYouth/image5.JPG";
import image6 from "../../../images/photos/KidsAndYouth/image6.JPG";
import image7 from "../../../images/photos/KidsAndYouth/image7.JPG";
import image8 from "../../../images/photos/KidsAndYouth/image8.JPG";
import image9 from "../../../images/photos/KidsAndYouth/image9.JPG";
import image10 from "../../../images/photos/KidsAndYouth/image10.JPG";
import image11 from "../../../images/photos/KidsAndYouth/image11.JPG";
import image12 from "../../../images/photos/KidsAndYouth/image12.JPG";
import image13 from "../../../images/photos/KidsAndYouth/image13.JPG";
import image14 from "../../../images/photos/KidsAndYouth/image14.JPG";
import image15 from "../../../images/photos/KidsAndYouth/image15.JPG";
import image16 from "../../../images/photos/KidsAndYouth/image16.JPG";
import image17 from "../../../images/photos/KidsAndYouth/image17.JPG";
import image18 from "../../../images/photos/KidsAndYouth/image18.JPG";
import image19 from "../../../images/photos/KidsAndYouth/image19.JPG";
import image20 from "../../../images/photos/KidsAndYouth/image20.JPG";
import image21 from "../../../images/photos/KidsAndYouth/image21.JPG";
import image22 from "../../../images/photos/KidsAndYouth/image22.JPG";
import image23 from "../../../images/photos/KidsAndYouth/image23.JPG";
import image24 from "../../../images/photos/KidsAndYouth/image24.JPG";

//const newWidth = window.innerWidth / 10;
let rowheight;
if (window.innerWidth <= 600) rowheight = "400px";
else rowheight = "200px";
const IMAGES = [
  {
    src: image1,
    thumbnail: image1,
    caption: "",
  },
  {
    src: image2,
    thumbnail: image2,
    caption: "",
  },
  {
    src: image3,
    thumbnail: image3,
    caption: "",
  },
  {
    src: image4,
    thumbnail: image4,
    caption: "",
  },
  {
    src: image5,
    thumbnail: image5,
    caption: "",
  },
  { src: image6, thumbnail: image6, caption: "" },
  { src: image7, thumbnail: image7, caption: "" },
  { src: image8, thumbnail: image8, caption: "" },
  { src: image9, thumbnail: image9, caption: "" },
  { src: image10, thumbnail: image10, caption: "" },
  { src: image11, thumbnail: image11, caption: "" },
  { src: image12, thumbnail: image12, caption: "" },
  { src: image13, thumbnail: image13, caption: "" },
  { src: image14, thumbnail: image14, caption: "" },
  { src: image15, thumbnail: image15, caption: "" },
  { src: image16, thumbnail: image16, caption: "" },
  { src: image17, thumbnail: image17, caption: "" },
  { src: image18, thumbnail: image18, caption: "" },
  { src: image19, thumbnail: image19, caption: "" },
  { src: image20, thumbnail: image20, caption: "" },
  { src: image21, thumbnail: image21, caption: "" },
  { src: image22, thumbnail: image22, caption: "" },
  { src: image23, thumbnail: image23, caption: "" },
  { src: image24, thumbnail: image24, caption: "" },
];

const KidsAndYouthGallery = () => {
  return (
    <div className="KidsAndYouthGallery-parent">
      <Gallery
        images={IMAGES}
        enableImageSelection={false}
        rowHeight={rowheight}
      />
    </div>
  );
};

export default KidsAndYouthGallery;
