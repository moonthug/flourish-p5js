import { sketch } from './sketch'

export let data = {};
// If your template includes data tables, use this variable to access the data.
// Each of the 'datasets' in data.json file will be available as properties of the data.

export let state = {
  lifespan: 255,
  color: '#ffffff'
  // The current state of template. You can make some or all of the properties
  // of the state object available to the user as settings in settings.js.
};

let canvas;

export function update() {
  // The update function is called whenever the user changes a data table or settings
  // in the visualisation editor, or when changing slides in the story editor.

  // Tip: to make your template work nicely in the story editor, ensure that all user
  // interface controls such as buttons and sliders update the state and then call update.
}

export function draw() {
  // The draw function is called when the template first loads
  canvas = new p5(sketch(state));
}
