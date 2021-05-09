import React, { Component } from "react";
import Forfait from "./forfaits";
import Modal from './modal';
import '../component/offres.css'


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

render() {
    return (
      <main className='modaloffre'>
        <h1>Regardez des milliers d'émissions et de films, avec des forfaits à partir de 5,99 $ / mois</h1>
        <Modal show={this.state.show} handleClose={this.hideModal} >
            <h1>Select Your Plan</h1>
          <p>No hidden fees, equipment rentals, or installation appointments.</p>
          <div className='forfaitgrid'><Forfait n={2}/><Forfait n={4}/><Forfait n={3}/></div>
        </Modal>
        <button type="button" onClick={this.showModal}>
           START YOUR FREE TRIAL &#10003;
        </button>
      </main>
    );
  }
}

export default Dashboard