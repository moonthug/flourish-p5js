
// A simple Particle class
export class Particle {
  constructor(p, position, state) {
    this.p = p;
    this.acceleration = this.p.createVector(0, 0.05);
    this.velocity = this.p.createVector(this.p.random(-1, 1), this.p.random(-1, 0));
    this.position = position.copy();
    this.lifespan = state.lifespan;
    this.color = this.p.color(state.color);
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;

    this.color = this.p.color(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.lifespan);
  }

  display() {
    this.p.noStroke();
    this.p.fill(this.color);
    this.p.ellipse(this.position.x, this.position.y, 12, 12);
  }

  isDead() {
    return this.lifespan < 0;
  }
}

export class ParticleSystem {
  constructor(p, position, state) {
    this.p = p;
    this.origin = position.copy();
    this.particles = [];
    this.state = state;
  }

  addParticle() {
    this.particles.push(new Particle(this.p, this.origin, this.state));
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}