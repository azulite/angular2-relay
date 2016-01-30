import Relay from 'generic-relay';
import { Component, Input } from 'angular2/core';
import connectRelay from '../connectRelay';

const StarWarsShipContainer = Relay.createGenericContainer('StarWarsShip', {
  fragments: {
    ship: () => Relay.QL`
       fragment on Ship {
         name
       }
    `,
  },
});

@Component({
  selector: 'star-wars-ship',
  template: `<div>{{ relayData.ship.name }}</div>`
})
@connectRelay()
class StarWarsShip {

  constructor() {
    this.relayData = {};

    const updateListener = (state) => {
      this.relayData = state.data;
    };
    this.container = new StarWarsShipContainer(updateListener);
  }

}

export { StarWarsShipContainer, StarWarsShip };
