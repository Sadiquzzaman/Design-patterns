/*

The State pattern is like having different modes for an object, and it can switch between these modes based on its internal state. 
It allows an object to change its behavior when its internal state changes, without altering its structure. 
Think of a traffic light that transitions from red to green to yellow based on its current state.

*/

class TrafficLight {
  private state: TrafficLightState;

  constructor() {
    this.state = new RedLight(this);
  }

  setState(state: TrafficLightState) {
    this.state = state;
  }

  change() {
    this.state.change();
  }
}

interface TrafficLightState {
  change(): void;
}

class RedLight implements TrafficLightState {
  constructor(private context: TrafficLight) {}

  change() {
    console.log("Red Light -> Go to Green");
    this.context.setState(new GreenLight(this.context));
  }
}

class GreenLight implements TrafficLightState {
  constructor(private context: TrafficLight) {}

  change() {
    console.log("Green Light -> Go to Yellow");
    this.context.setState(new YellowLight(this.context));
  }
}

class YellowLight implements TrafficLightState {
  constructor(private context: TrafficLight) {}

  change() {
    console.log("Yellow Light -> Go to Red");
    this.context.setState(new RedLight(this.context));
  }
}

const trafficLight = new TrafficLight();

trafficLight.change();
trafficLight.change();
trafficLight.change();
