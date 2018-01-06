<template>
  <canvas id="animated-background" v-bind:width="width" v-bind:height="height"></canvas>
</template>

<script>
export default {
  name: 'animated-background',
  data: () => ({
    height: window.innerHeight,
    width: window.innerWidth,
    circles: []
  }),
  methods: {
    resize: function() {
      this.height = window.innerHeight;
      this.width = window.innerWidth;
    },
    bindListeners: function() {
      window.addEventListener('resize', this.resize);
    },
    random: function(min, max) {
      return Math.random() * (max - min) + min;
    }
  },
  mounted: function() {
    const canvas = document.getElementById('animated-background');
    const ctx = canvas.getContext('2d');

    const drawCircle = () => {
      if (Math.random() < 0.01) {
        const circle = new Path2D();
        const x = this.random(0, this.width);
        const y = this.random(0, this.height);

        circle.moveTo(x, y);
        circle.arc(
          x, y,
          this.random(25, 100),
          0, 2 * Math.PI
        );

        ctx.fill(circle);
      }

      window.requestAnimationFrame(drawCircle);
    };

    window.requestAnimationFrame(drawCircle);


    this.bindListeners();
  }
}
</script>

<style lang="less" scoped>

#animated-background {
  position: absolute;
  top: 0px; left: 0px;
  height: 100%; width: 100%;
}

</style>
