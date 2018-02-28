module.exports =  class MowerHandler {
  constructor(mower) {
    this.mower = mower
  }

  operate(commands) {
    commands.forEach(function(c) {
      switch(c) {
        case 'L':
          this.mower.turnLeft();
          break;
        case 'R':
          this.mower.turnRight();
          break;
        case 'F':
          this.mower.move();
          break;
      }
    }.bind(this))
  }
};