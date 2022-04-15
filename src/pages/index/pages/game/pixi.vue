<template>
  <div class="pixi" ref="pixi"></div>
</template>

<script>
import * as PIXI from "pixi.js"

export default {
  data() {
    return {
      app: null
    }
  },
  mounted() {
    window.console.log(PIXI);
    this.init();
  },
  methods: {
    init() {
      this.app = new PIXI.Application({
        width: 800,         // default: 800
        height: 600,        // default: 600
        antialias: true,    // default: false
        transparent: false, // default: false
        backgroundColor: 0x1099bb,
        resolution: window.devicePixelRatio || 1
      });
      this.$nextTick(() => {
        window.console.log('this.$refs.pixi======>', this.$refs.pixi);
        this.$refs.pixi.appendChild(this.app.view);
        this.load();
      })
    },
    load() {
      const container = new PIXI.Container();
      this.app.stage.addChild(container);

      const img = require('./logo.png')

      const texture = PIXI.Texture.from(img);

      for (let i = 0; i < 25; i++) {
        const bunny = new PIXI.Sprite(texture);
        bunny.anchor.set(0.5);
        bunny.x = (i % 5) * 40;
        bunny.y = Math.floor(i / 5) * 40;
        container.addChild(bunny);
      }

      container.x = this.app.screen.width / 2;
      container.y = this.app.screen.height / 2;

      container.pivot.x = container.width / 2;
      container.pivot.y = container.height / 2;

      this.app.ticker.add((delta) => {
          // rotate the container!
          // use delta to create frame-independent transform
          container.rotation -= 0.01 * delta;
      });
    }
  },
}
</script>

<style lang="less">
</style>
