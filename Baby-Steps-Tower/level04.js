class Player {
    constructor() {
      this.health = 20;
      this.currentHealth = 20;
    }
  
    fullHealth(warrior) {
      return warrior.health() === this.health;
    }
  
    takingDamage(warrior) {
      return warrior.health() < this.currentHealth;
    }
  
    walkOrRest(warrior) {
      return this.fullHealth(warrior) || this.takingDamage(warrior)
        ? warrior.walk()
        : warrior.rest();
    }
  
    playTurn(warrior) {
      warrior.feel().isEmpty()
        ? this.walkOrRest(warrior)
        : warrior.attack();
      
      this.currentHealth = warrior.health();
    }
  }