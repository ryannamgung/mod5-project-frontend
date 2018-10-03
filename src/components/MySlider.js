import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../assets/css/index.css';
import '../assets/css/slider-animations.css';

const MySlider = (props) => {
  let imageSrcs = [{imagesrc: "http://www.pakium.pk/wp-content/uploads/2012/05/VJ-Syra-Yousuf-Model-for-Clothing-Line-1.jpg", title: 'Clothes R US',
		description:
		'Clothes R Us is a website designed by Ryan to consolidate the process of online shopping into a single website. Sponsored by reputable corporations such as RyanInc and The Ryan Foundry, Clothes R Us has become a staple of modern day shopping.'}, {imagesrc: "http://www.bringitonline.in/uploads/2/2/4/5/22456530/7q2a2125_orig.jpg", title: 'The Expansion',
  		description:
  		'As you explore the website you will notice poorly styled completely intentional design features coupled with the power of the redux framework.'}, {imagesrc: "https://spaceandlight.la/wp-content/uploads/2018/08/men-model-ecommerce-photography-studio-2.jpg", title: 'Et-cetera',
    		description: 'Feel free to use the nav bar to view the clothing you wish to purchase by both company as well as item type.'}, {imagesrc: "https://static.fashionbeans.com/wp-content/uploads/2017/11/become-a-male-model-header5.jpg", title: 'Et-cetera Et-cetera',
      		description: 'When you are ready to purchase a your goods, head over to the shopping cart at the top right corner of the page and proceed to checkout.'}]
  return(
    <div>
    <div className="wrapper">
    </div>
    <Slider className="slider-wrapper" autoplay={2000}>
    {imageSrcs.map((image, index) =>
      <div key={index}
					className="slider-content"
					style={{ background: `url('${image.imagesrc}') no-repeat center center` }}>
          <div className="inner">
          <h1>{image.title}</h1>
          <p>{image.description}</p>
          </div>
      </div>)}
    </Slider>
    </div>
  )
}

export default MySlider
