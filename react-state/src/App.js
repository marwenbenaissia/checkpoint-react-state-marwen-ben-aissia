import './App.css';
import ShowProfiles from './Profil/Showprofiles';
import React,{ Component } from "react";

const cardWrapper = { height: 900,width:'100%',backgroundColor: '#091214',display:'flex'}
const card = {borderRadius: '10px', position: 'absolute',top:'10%',left:'20%', width: '750px',maxWidth:'50em',border: '1px solid rgb(97, 245, 245)', margin: 'auto',color: '#fff',padding: '1em',backgroundColor: '#0A2129',boxShadow: '0px 0px 3px 1px #12a0a0, inset 0px 0px 3px 1px #12a0a0'}
const btn = {cursor: 'grab', backgroundColor: '#12a0a0',borderRadius: '9px',textShadow: '0px 0px 2px #3112a0', height: '60px', padding: '10px',width: '300px',fontFamily: 'Orbitron',letterSpacing: '1px', color: '#5a186e', fontSize: '30px'}
const states = {textAlign: 'center', marginLeft:'auto', marginRight:'auto'}

class App extends Component{
  constructor(props) {
    super(props);
     this.state = {} ;
  }
  showProfil = () =>{ this.setState({show: !this.state.show})};
  render() {
  return (
    <div>
              <div style={cardWrapper}>
               
               <div style={card}>
                 <div>
                     <div style = {states}><button style= {btn} onClick={this.showProfil}>{this.state.show ? 'Cacher le profile' : ' Afficher le profile' }</button></div> 
                     {this.state.show ?<ShowProfiles/> :null}

                 </div>
      </div>
    </div>
    </div>

  );
}
}
export default App;
