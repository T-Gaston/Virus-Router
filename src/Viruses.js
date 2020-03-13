import React from 'react';
import VirusForm from './VirusForm';
import Virus from './Virus';
import { Container } from 'semantic-ui-css'

export default class Virus extends React.Component {
  state = {
    viruses: [
      {id: 1, name:"Covid-19", body:"Scary text here"},
      {id: 2, name:"Ebola", body:"Spooky Stuff"},
      {id: 3, name:"Spanish Flu", body:"Yer Gonna Die"}
      ]};


  getId() {
    return Math.floor(Math.random()*100000)
  }

  renderViruses(){
    return this.state.viruses.map( virus =>
    <>
      key={virus.id}
      {...virus}
    </>
    )
  }

  render(){
    return( 
    <div>
      <VirusForm />
    </div>
    )
  }
}