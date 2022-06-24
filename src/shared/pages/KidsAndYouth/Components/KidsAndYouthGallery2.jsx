import React from "react";
import ReactDOM from 'react-dom';
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
const imgUrls = [
  image1,
  image2,
  "https://source.unsplash.com/5KvPQc1Uklk/800x600",
  "https://source.unsplash.com/GtYFwFrFbMA/800x600",
  "https://source.unsplash.com/Igct8iZucFI/800x600",
  "https://source.unsplash.com/M01DfkOqz7I/800x600",
  "https://source.unsplash.com/MoI_cHNcSK8/800x600",
  "https://source.unsplash.com/M0WbGFRTXqU/800x600",
  "https://source.unsplash.com/s48nn4NtlZ4/800x600",
  "https://source.unsplash.com/E4944K_4SvI/800x600",
  "https://source.unsplash.com/F5Dxy9i8bxc/800x600",
  "https://source.unsplash.com/iPum7Ket2jo/800x600",
];

class KidsAndYouthGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, index) {
    return (
      <div onClick={(e) => this.openModal(e, index)}>
        <img src={src} key={src} />
      </div>
    );
  }
  openModal(e, index) {
    this.setState({ currentIndex: index });
  }
  closeModal(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  }
  findPrev(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  }
  findNext(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
    }));
  }
  render() {
    return (
      <div className="gallery-container">
        <div className="gallery-grid">
          {imgUrls.map(this.renderImageContent)}
        </div>
        <GalleryModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          hasPrev={this.state.currentIndex > 0}
          hasNext={this.state.currentIndex + 1 < imgUrls.length}
          src={imgUrls[this.state.currentIndex]}
        />
      </div>
    );
  }
}

class GalleryModal extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.body.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === 27) this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev) this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext) this.props.findNext();
  }
  render() {
    const { closeModal, hasNext, hasPrev, findNext, findPrev, src } =
      this.props;
    if (!src) {
      console.log("whut");
      return null;
    }
    return (
      <div>
        <div className="modal-overlay" onClick={closeModal}></div>
        {(!!src)?
        <div isOpen={!!src} className="modal">
          <div className="modal-body">
            <a
              href="#"
              className="modal-close"
              onClick={closeModal}
              onKeyDown={this.handleKeyDown}
            >
              &times;
            </a>
            {hasPrev && (
              <a
                href="#"
                className="modal-prev"
                onClick={findPrev}
                onKeyDown={this.handleKeyDown}
              >
                &lsaquo;
              </a>
            )}
            {hasNext && (
              <a
                href="#"
                className="modal-next"
                onClick={findNext}
                onKeyDown={this.handleKeyDown}
              >
                &rsaquo;
              </a>
            )}
            <img src={src} />
          </div>
        </div>
        :
        <></>
        }
      </div>
    );
  }
}

export default KidsAndYouthGallery;
