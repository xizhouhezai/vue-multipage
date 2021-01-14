<template>
  <div class="firework" ref="firework">
    <canvas id="canvas" @mousedown="mouseDownHandler" :width="width" :height="height" ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  data () {
    return {
      context: null,
      width: 0,
      height: 0,
      radius: 0,
      rid: null,
      particles: [] // 存放绘制球的数据
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.width = this.$refs.firework.offsetWidth
      this.height = this.$refs.firework.offsetHeight
      this.context = this.$refs.canvas.getContext('2d')
      this.clearCanvas()
    },
    clearCanvas () {
      if (this.context) {
        // window.console.log(this.$refs.firework.offsetWidth, this.$refs.firework.offsetHeight, this.context)
        this.context.fillStyle = 'rgba(0, 0, 0, 1)'
        this.context.fillRect(0, 0, this.$refs.firework.offsetWidth, this.$refs.firework.offsetHeight)
      }
    },
    mouseDownHandler (e) {
      // window.console.log(e)
      const x = e.clientX
      const y = e.clientY

      this.radius = 0

      this.fire(x, y)
    },
    drawFireworks () {
      this.clearCanvas()

      // const count = 10 //烟花粒子数量
      // const radius = 10 // 烟花环绕半径

      for(var i = 0 ; i < this.particles.length; i++){
        var p = this.particles[i]

        p.vx = p.sx + Math.cos(p.radians) * p.radius
        p.vy = p.sy + Math.sin(p.radians) * p.radius

        p.radius += 1 + p.speed // 重置一次修改每个球的位置
        p.alpha -= 0.005

        this.context.beginPath()
        this.context.arc(p.vx, p.vy, p.size, 0, Math.PI * 2, false)
        this.context.closePath();

        this.context.fillStyle = 'hsla(' + p.hue + ', 100%, ' + p.brightness + '%, ' + p.alpha + ')'
        this.context.fill()
      }
    },
    createFireworks (sx, sy) {
      this.particles = []

      let hue = Math.floor(Math.random() * 51) + 150 // 控制球的颜色范围
      let hueVariance = 30
      let count = 100

      for(let i = 0; i < count; i++){
        let p = {}

        let angle = Math.floor(Math.random() * 360)
        p.radians = angle * Math.PI / 180
        p.radius = 0

        p.sx = sx
        p.sy = sy

        p.speed = (Math.random() * 5) + .4

        p.size = Math.floor(Math.random() * 3) + 1

        p.hue = Math.floor(Math.random() * ((hue + hueVariance) - (hue - hueVariance))) + (hue - hueVariance)
        p.brightness = Math.floor(Math.random() * 31) + 50
        p.alpha = (Math.floor(Math.random() * 61) + 40) / 100

        this.particles.push(p);
      }
    },
    fire (x, y) {
      this.createFireworks(x, y)
      let me = this
      function tick() {
        me.context.globalCompositeOperation = 'destination-out'
        me.context.fillStyle = 'rgba(0, 0, 0, ' + 10 / 100 + ')'
        me.context.fillRect(0, 0, me.$refs.firework.offsetWidth, me.$refs.firework.offsetHeight)
        me.context.globalCompositeOperation = 'lighter'

        me.drawFireworks()
        // me.radius++
        me.rid = requestAnimationFrame(tick)
      }
      cancelAnimationFrame(this.rid)
      tick()
    }
  },
}
</script>

<style lang="less">
.firework {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: #000;

  #canvas {
    background-color: #000;
  }
}
</style>
