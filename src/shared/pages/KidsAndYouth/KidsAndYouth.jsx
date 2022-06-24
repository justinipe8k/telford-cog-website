import React from "react";
import Page from "../../components/Page/Page";
import PageBanner from "../../components/Page/Components/PageBanner/PageBanner";
import PageTitle from "../../components/Page/Components/PageTitle/PageTitle";
import PhotoAlbum from "react-photo-album";
import image1 from "../../images/photos/KidsAndYouth/image1.JPG";
import image2 from "../../images/photos/KidsAndYouth/image2.JPG";
import image3 from "../../images/photos/KidsAndYouth/image3.JPG";
import image4 from "../../images/photos/KidsAndYouth/image4.JPG";
import image5 from "../../images/photos/KidsAndYouth/image5.JPG";
import image6 from "../../images/photos/KidsAndYouth/image6.JPG";
import image7 from "../../images/photos/KidsAndYouth/image7.JPG";
import image8 from "../../images/photos/KidsAndYouth/image8.JPG";
import image9 from "../../images/photos/KidsAndYouth/image9.JPG";
import image10 from "../../images/photos/KidsAndYouth/image10.JPG";
import image11 from "../../images/photos/KidsAndYouth/image11.JPG";
import image12 from "../../images/photos/KidsAndYouth/image12.JPG";
import image13 from "../../images/photos/KidsAndYouth/image13.JPG";
import image14 from "../../images/photos/KidsAndYouth/image14.JPG";
import image15 from "../../images/photos/KidsAndYouth/image15.JPG";
import image16 from "../../images/photos/KidsAndYouth/image16.JPG";
import image17 from "../../images/photos/KidsAndYouth/image17.JPG";
import image18 from "../../images/photos/KidsAndYouth/image18.JPG";
import image19 from "../../images/photos/KidsAndYouth/image19.JPG";
import KidsAndYouthGallery from "./Components/KidsAndYouthGallery";

const photos = [
  {
      src: image1,
      width: 800,
      height: 600
  },
  {
      src: image2,
      width: 1600,
      height: 900
  },
  {
      src: image3,
      width: 1600,
      height: 900
  },
  {
      src: image4,
      width: 1600,
      height: 900
  }
  ,
  {
      src: image5,
      width: 1600,
      height: 900
  }
  ,
  {
      src: image6,
      width: 1600,
      height: 900
  }
  ,
  {
      src: image7,
      width: 1600,
      height: 900
  }
  ,
  {
      src: image8,
      width: 1600,
      height: 900
  },,
  {
      src: image9,
      width: 1600,
      height: 900
  },
  {
      src: image10,
      width: 1600,
      height: 900
  },
  {
      src: image11,
      width: 1600,
      height: 900
  },
  {
      src: image12,
      width: 1600,
      height: 900
  },
  {
      src: image13,
      width: 1600,
      height: 900
  },
  {
      src: image14,
      width: 1600,
      height: 900
  },
  {
      src: image15,
      width: 1600,
      height: 900
  },
  {
      src: image16,
      width: 1600,
      height: 900
  },
  {
      src: image17,
      width: 1600,
      height: 900
  },
  {
      src: image18,
      width: 1600,
      height: 900
  },
  {
      src: image19,
      width: 1600,
      height: 900
  }
];

const KidsAndYouth = function (props) {
  return (
    <Page name="KidsAndYouth">
      <PageBanner>
        <PageTitle title="Kids and Youth" />
      </PageBanner>
      {/* <PhotoAlbum layout="masonry" photos={photos} /> */}
      <KidsAndYouthGallery/>
    </Page>
  );
};

export default KidsAndYouth;