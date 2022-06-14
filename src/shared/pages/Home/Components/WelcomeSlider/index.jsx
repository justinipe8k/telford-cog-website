import React from 'react';
import './WelcomeSlider.css';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import Slider1 from './Slider1';
import Slider2 from './Slider2';


const WelcomeSlider = (props) => {
    const onNext = () => {
        if (props.sliderItemNo == props.maxSlides) props.setSliderItemNo(1);
       else  props.setSliderItemNo(props.sliderItemNo + 1);
    }
    const onPrev = () => {
        if (props.sliderItemNo == 1) props.setSliderItemNo(props.maxSlides);
       else  props.setSliderItemNo(props.sliderItemNo - 1);
    }
    return (
        <div className='WelcomeSlider_ParentDiv'>
            <div className="SliderControls__button_left SliderControls__button" onClick={onPrev}>
                <ArrowIcon direction="left" scale="0.5" />
            </div>
            <div className="SliderControls__button_right SliderControls__button" onClick={onNext}>
                <ArrowIcon direction="right" scale="0.5" />
            </div>
            {(props.sliderItemNo==1)?<Slider1/>:<></>
            }
             {
            (props.sliderItemNo==2)?<Slider2/>:<></>
            }
        </div>
    )
}

export default WelcomeSlider;