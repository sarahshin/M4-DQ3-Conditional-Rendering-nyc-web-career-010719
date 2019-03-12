import React from 'react'

import {Profile, Photos, Cocktails, Pokemon} from './Pages'

import MainBox from '../containers/MainBox.js'

const MenuBar = (props) => {


  /*
  The 'a' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?
  */

  return (
    <div className="ui four item menu">
      <a className="item active" id="profile" onClick={props.renderProfile}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className="item" id="photo" onClick={props.renderPhotos}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className="item" id="cocktail" onClick={props.renderCocktails}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className="item" id="pokemon" onClick={props.renderPokemon}>
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
