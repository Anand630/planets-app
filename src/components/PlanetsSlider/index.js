import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props
  console.log(planetsList)

  return (
    <div className="home-container">
      <PlanetItem planetsList={planetsList} />
    </div>
  )
}

export default PlanetSlider
