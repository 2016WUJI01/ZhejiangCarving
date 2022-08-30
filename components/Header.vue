<template>
  <div class="header">
    <div class="container">
      <div class="header-top">
        <div class="header-top-left">
          <div class="header-title">The Art of Carving</div>
          <div class="sub-header-title">
            in Zhejiang Overseas Interactive Exhibition
          </div>
        </div>
        <div class="header-top-right">
          <div class="header-top-right-item">
            <img src="~/assets/images/icon_search.png" class="header-icon" />
            <NuxtLink to="/SearchPage">Search</NuxtLink>
          </div>
          <div class="header-top-right-item">
            <img src="~/assets/images/icon_donate.png" class="header-icon" />
            <NuxtLink to="/Donate">Donate</NuxtLink>
          </div>
          <div class="header-top-right-item">
            <NuxtLink to="/">Sign in</NuxtLink>
          </div>
        </div>
      </div>
      <hr class="hr" />
      <div class="header-bottom">
        <div class="header-bottom-left">
          <div>Home</div>
          <div>>></div>
          <div>Carving Bone Inlay Wood Carving</div>
        </div>
        <div class="header-bottom-right">
          <div>Visit</div>
          <div>
            <NuxtLink to="/Craft">Craft and Collectibles</NuxtLink>
          </div>
          <div>            
            <NuxtLink to="/Artists">Artists</NuxtLink>
          </div>
          <div>Support us</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import '~/assets/style/common.less';
.header {
  background-color: #d8d2c3;
  height: 179px;
}

.header-top {
  height: 100px;
  padding-top: 30px;
  .header-top-left {
    .float-left;

    .header-title {
      font-weight: 800;
      font-size: 55px;
      line-height: 55px;
      .font-BigShouldersDisplay;
    }

    .sub-header-title {
      font-size: 18px;
      font-weight: 500;
      line-height: 18px;
      .font-RobotoSlab;
    }
  }

  .header-top-right {
    .float-right;
    .flex__inlineCenter;

    .header-top-right-item {
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
.header-bottom {
  .header-bottom-left {
    .float-left;
    .flex__inline;
    height: auto;
  }
  .header-bottom-right {
    .float-right;
    .flex__inline;
  }
}
</style>
