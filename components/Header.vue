<template>
  <div class="header">
    <div class="container">
      <div class="top">
        <div class="top-left">
          <div class="title">The Art of Carving</div>
          <div class="sub-title">
            in Zhejiang Overseas Interactive Exhibition
          </div>
        </div>
        <div class="top-right">
          <div class="top-right-item">
            <img src="~/assets/images/icon_search.png" class="header-icon" />
            Search
          </div>
          <div class="top-right-item">
            <img src="~/assets/images/icon_donate.png" class="header-icon" />
            Donate
          </div>
          <div class="top-right-item">Sign in</div>
        </div>
      </div>
      <hr class="hr" />
      <div class="bottom">
        <div class="bottom-left">
          <div class="bottom-left-item">Home</div>
          <div class="bottom-left-item">>></div>
          <div class="bottom-left-item">Carving Bone Inlay Wood Carving</div>
        </div>
        <div class="bottom-right">
          <div class="bottom-right-item">Visit</div>
          <div class="bottom-right-item">Craft and Collectibles</div>
          <div class="bottom-right-item">Artists</div>
          <div class="bottom-right-item">Support us</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
@import '~/assets/style/common.less';
.header {
  background-color: #d8d2c3;
  height: 179px;
}

.top {
  height: 100px;
  padding-top: 30px;
  .top-left {
    .float-left;

    .title {
      font-weight: 800;
      font-size: 55px;
      line-height: 55px;
      .font-BigShouldersDisplay;
    }

    .sub-title {
      font-size: 18px;
      font-weight: 500;
      line-height: 18px;
      .font-RobotoSlab;
    }
  }

  .top-right {
    .float-right;
    .flex__inlineCenter;

    .top-right-item {
      .flex__inlineCenter;

      margin-left: 10px;
      height: 40px;
      width: 100px;

      .header-icon {
        height: 38px;
        width: 38px;
      }
    }
  }
}

.hr {
  margin: 0 0 10px 10px;
}

.bottom {
  .bottom-left {
    .float-left;
    .flex__inline;
  }
  .bottom-right {
    .float-right;
    .flex__inline;
  }
}
</style>
