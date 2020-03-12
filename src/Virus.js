import React from 'react';
import VirusForm from './VirusForm'

export default class Virus extends React.Component {
  state = {
    virus: [
      {id: 1, name:"Covid-19", body:"Scary text here"},
      {id: 2, name:"Ebola", body:"Spooky Stuff"},
      {id: 3, name:"Spanish Flu", body:"Yer Gonna Die"}
      ]};



  render(){
    return(
      <div>
        <VirusForm />
      </div>
    )
  }
}