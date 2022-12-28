import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PlanetItem = props => {
  const {planetsList} = props
  // const {description, imageUrl, name} = planetItem

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div testid="planets" className="slider-container">
      <h1 className="planets-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <div className="planet-item-container">
            <img
              className="planet-image"
              src={eachItem.imageUrl}
              alt={`planet ${eachItem.name}`}
            />
            <h1 className="planet-name">{eachItem.name}</h1>
            <p className="planet-description">{eachItem.description}</p>
          </div>
        ))}
      </Slider>
    </div>

    /* <div className="planet-item-container">
      <img className="planet-image" src={imageUrl} alt={name} />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div> */
  )
}

export default PlanetItem
