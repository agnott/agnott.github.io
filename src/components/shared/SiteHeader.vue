<template>
  <header>
    <div class="logo">

    </div>
    <div class="links">
      <div class="link" v-for="link in links">
        {{ link.text }}
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'site-header',
  data() {
    console.log(this.$router.currentRoute);
    return {
      links: [
        { text: 'About', link: '' },
        { text: 'About', link: '' },
        { text: 'About', link: '' },
        { text: 'About', link: '' },
        { text: 'About', link: '' },
        { text: 'About', link: '' },
      ]
    };
  }
}
</script>

<style lang="less">
@import '../../common/styles/variables.less';
@import '../../common/styles/mixins.less';

header {
  .color-dark-gray();
  .transition(all 0.25s ease-in-out);

  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  .links {
    position: relative;

    .link {
      .transform(translate3d(0px, 0%, 0px));
      position: relative;
      height: 100%;

      display: inline-block;
      padding: 5px 10px;
      vertical-align: middle;

      &::after {
        .transition(all 0.25s ease-in-out);
        .color-primary();

        content: "";
        position: absolute;
        top: 100%; left: 0px;
        width: 100%; height: 100%;
      }

      &:hover::after {
        .transform(translate3d(0px, -100%, 0px));
      }
    }
  }

  &:hover .link {
    .transform(translate3d(0px, 0%, 0px));
  }

}

</style>
