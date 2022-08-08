<template>
  <div class="header">
    <div class="container top">
      <div class="header-left">
        <div class="title">The Art of Carving</div>
        <p>in Zhejiang Overseas Interactive Exhibition</p>
      </div>
      <div class="header-right">
        <div>Search</div>
        <div>Donate</div>
        <div>Sign in</div>
      </div>
    </div>
    <hr class="hr" />
    <div class="container bottom">
      <div>Home</div>
      <div>>></div>
      <div>Carving Bone Inlay Wood Carving</div>

      <div>Visit</div>
      <div>Craft and Collectibles</div>
      <div>Artists</div>
      <div>Support us</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "~/assets/style/common.less";
.header {
  background-color: #d8d2c3;
  height: 179px;
}

.top {
  height: 132px;
  padding-top: 30px;
  .header-left {
    float: left;
    .title {
      font-weight: 800;
      font-size: 55px;
      line-height: 55px;
    }

    .p {
      font-size: 16px;
      font-weight: 500;
      line-height: 16px;
    }
  }

  .header-right {
    float: right;
  }
}

.hr {
  margin: 0 10px;
}

.bottom {
}
</style>
