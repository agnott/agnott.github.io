<template>
  <div class="container">
    <div class="content-container">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from './components/shared/SiteHeader.vue';

export default {
  name: 'app'
}
</script>

<style lang="less">
@import './common/styles/config.less';
@import './common/styles/animations.less';
@import './common/styles/variables.less';
@import './common/styles/mixins.less';

.container {
  .color-white();

  position: absolute;
  top: 0px; left: 0px;
  height: 100%; width: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
}

.content-container {
  position: relative;
  flex-grow: 1;
  overflow: hidden;
}

.content {
  .color-white();
  .color-gradient-white();
  position: absolute;
  top: 0px; left: 0px;
  height: 100%; width: 100%;
  padding: 10px;
  overflow: auto;
}

</style>
