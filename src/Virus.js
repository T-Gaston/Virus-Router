import React from 'react';

export default class Virus extends React.Component {
  state = {
    viruses: [
      {id: 1, name:"Covid-19", body:"Scary text here"},
      {id: 2, name:"Ebola", body:"Spooky Stuff"},
      {id: 3, name:"Spanish Flu", body:"Yer Gonna Die"}
      ]};

  renderViruses = () => {
    return this.state.viruses.map( virus => <Virus key={virus.id} {...virus} />)
  };

  render(){
    return(
      <div>
        { this.renderViruses() }
      </div>
    )
  }
}