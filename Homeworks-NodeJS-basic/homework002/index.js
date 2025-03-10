import { EventEmitter } from 'events';

class Counter extends EventEmitter {
  constructor(min = -2, max = 2) {
    super();
    this.count = 0;
    this.min = min;
    this.max = max;
    this.increaseCount = 0;
    this.decreaseCount = 0;
    this.resetCount = 0;
  }

  increase() {
    if (this.count < this.max) {
      this.count++;
      this.increaseCount++;
      this.emit('increase', this.count);

      if (this.count === 0) {
        this.emit('zero');
      }
      if (this.count > 0) {
        this.emit('positive');
      }

      if (this.count === this.max) {
        this.emit('maxReached');
      }
    }
  }

  decrease() {
    if (this.count > this.min) {
      this.count--;
      this.decreaseCount++;
      this.emit('decrease', this.count);

      if (this.count === 0) {
        this.emit('zero');
      }
      if (this.count < 0) {
        this.emit('negative');
      }

      if (this.count === this.min) {
        this.emit('minReached');
      }
    }
  }

  reset() {
    this.count = 0;
    this.resetCount++;
    this.emit('reset');

    this.emit('zero'); // When reset, it should emit zero event
  }

  stats() {
    this.emit('stats', {
      increased: this.increaseCount,
      decreased: this.decreaseCount,
      reset: this.resetCount,
    });
  }
}

// Example usage
const counter = new Counter();

// Basic event listeners
counter.on('increase', num => console.log(`Number increased to: ${num}`));
counter.on('decrease', num => console.log(`Number decreased to: ${num}`));
counter.on('zero', () => console.log('Counter is zero!'));
counter.on('positive', () => console.log('Counter is positive!'));
counter.on('negative', () => console.log('Counter is negative!'));
counter.on('maxReached', () => console.log('Maximum limit reached!'));
counter.on('minReached', () => console.log('Minimum limit reached!'));
counter.on('reset', () => console.log('Counter has been reset!'));
counter.on('stats', stats => console.log(`Stats: Increased: ${stats.increased}, Decreased: ${stats.decreased}, Reset: ${stats.reset}`));

// Using the counter
counter.increase(); // "Number increased to: 1"
counter.increase(); // "Number increased to: 2"
counter.increase();
counter.decrease(); // "Number decreased to: 1"
counter.decrease(); // "Number decreased to: 0"
counter.decrease(); // "Number decreased to: -1", "Counter is negative!", "Minimum limit reached!"
counter.reset(); // "Counter has been reset!", "Counter is zero!"
counter.increase(); // "Number increased to: 1"
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
counter.increase();
counter.stats(); // "Stats: Increased: 3, Decreased: 2, Reset: 1"
