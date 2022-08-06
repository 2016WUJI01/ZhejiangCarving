<template>
  <div id="header">
    <div class="container">
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
    <hr id="hr" />
    <div>Home</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "~/assets/style/common.less";
#header {
  background-color: #d8d2c3;
}

#container {
  .header-left {
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
  }
}

#hr {
  margin: 0 10px;
}
</style>
