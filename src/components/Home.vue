<template>
  <div class="home-container">
    <animated-background/>
  </div>
</template>

<script>
import AnimatedBackground from './shared/AnimatedBackground.vue';

export default {
  name: 'home',
  components: {
    AnimatedBackground
  }
}
</script>

<style lang="less" scoped>
@import '../common/styles/variables.less';
@import '../common/styles/mixins.less';

.home-container {
  position: absolute;
  top: 0px; left: 0px;
  height: 100%; width: 100%;
  overflow: hidden;
}
</style>
