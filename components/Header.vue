<template>
  <div class="header">
    <div class="container top">
      <div class="header-left">
        <div class="title font-BigShouldersStencilDisplay">
          The Art of Carving
        </div>
        <div class="sub-title font-RobotoSlab">
          in Zhejiang Overseas Interactive Exhibition
        </div>
      </div>
      <div class="header-right flex__container">
        <div class="header-right-item flex__container">
          <img src="~/assets/images/icon_search.png" class="header-icon" />
          Search
        </div>
        <div class="header-right-item flex__container">
          <img src="~/assets/images/icon_donate.png" class="header-icon" />
          Donate
        </div>
        <div class="header-right-item flex__container">Sign in</div>
      </div>
    </div>
    <hr class="hr" />
    <div class="container bottom flex__container">
      <div class="bottom-left flex__container float-left">
        <div class="bottom-left-item">Home</div>
        <div class="bottom-left-item">>></div>
        <div class="bottom-left-item">Carving Bone Inlay Wood Carving</div>
      </div>
      <div class="bottom-right flex__container float-right">
        <div class="bottom-right-item">Visit</div>
        <div class="bottom-right-item">Craft and Collectibles</div>
        <div class="bottom-right-item">Artists</div>
        <div class="bottom-right-item">Support us</div>
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
  .header-left {
    float: left;
    .title {
      font-weight: 800;
      font-size: 55px;
      line-height: 55px;
    }

    .sub-title {
      font-size: 18px;
      font-weight: 500;
      line-height: 18px;
    }
  }

  .header-right {
    float: right;

    .header-right-item {
      .header-icon {
        height: 38px;
        width: 38px;
      }

      margin-left: 10px;
      height: 40px;
      width: 100px;
    }
  }
}

.hr {
  margin: 0 0 10px 10px;
}

.bottom {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
