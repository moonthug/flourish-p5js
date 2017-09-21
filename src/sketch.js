import { ParticleSystem } from './particlesystem'

export const sketch = (flourishState) => {
  return (p) => {
    let state = flourishState;
    let particleSystem = null;

    p.setup = () => {
      p.createCanvas(600, 400);
      particleSystem = new ParticleSystem(p, p.createVector(600 / 2, 50), state);
    };

    p.draw = () => {
      p.background(50);
      particleSystem.addParticle();
      particleSystem.run();
    };
  }
};