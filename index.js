// Write your classes here
class Tree {
    constructor( species ) {
      this.species = species
    }
  
    static definition() {
      return 'A tree is a perennial plant with an elongated stem, or trunk, supporting > branches and leaves.'
    }
  
  }
  
  class Decidous extends Tree {
    constructor (species, name){
      super(species)
      this.name = name
    }

    static definition() {
      return `${super.definition()} Decidous trees shed thier leaves annualy.`
    }
  }

  class Evergreen extends Tree {
    constructor(species, name) {
      super (species, name)
      this.name = name
    }
    
    static deifnintion() {
      return  `${super.definition()} Evergreen keep thier leaves all year round.`
    }

  }