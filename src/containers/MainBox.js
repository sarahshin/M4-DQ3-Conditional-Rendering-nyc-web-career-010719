import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: "",
    }
  }

 renderProfile = () => {
    this.setState({active: "profile"})
  }

  renderPhotos = () => {
    this.setState({active: "photos"})
  }

  renderCocktails = () => {
    this.setState({active: "cocktails"})
  }

  renderPokemon = () => {
    this.setState({active: "pokemon"})
  }

  render() {

    let detailsToDisplay = "cool"
    if (this.state.active == "profile") {detailsToDisplay = <Profile />}
    else if (this.state.active == "photos") {detailsToDisplay = <Photos />}
    else if (this.state.active == "cocktails") {detailsToDisplay = <Cocktails />}
    else if (this.state.active == "pokemon") {detailsToDisplay = <Pokemon />}

    return (
      <div>
        <MenuBar
        renderProfile={this.renderProfile}
        renderPhotos={this.renderPhotos}
        renderCocktails={this.renderCocktails}
        renderPokemon={this.renderPokemon}
        />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
