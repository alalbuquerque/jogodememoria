import Cards from './tarot.json';

const Api = {
    cards: Cards,
    all: function() { return this.cards},
    get: function(id) {
        const isCard = p => p.id === id    	
        return this.cards.find(isCard)
    }
  }

export default Api

