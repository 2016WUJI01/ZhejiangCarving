<template>
  <div>
    <div class="homePage-banner">
      <img src="~/assets/images/Homepage/1.png" />
      <div class="homePage-banner-textArea">
        <div>Welcome to Zhejiang Wood Carving</div>
        <div>
          Discover the beauty of Ningbo's heritage and experience the essence of
          wood carving culture.
        </div>
        <div>Plan your visit</div>
      </div>
    </div>
    <div class="container">
      <div class="homePage-introduction">
        <div class="float-left w-600px homePage-introduction-left">
          Discover the cultural charm of Zhejiang carving art
        </div>
        <div class="float-right">
          <div>Feel free to visit and browse</div>
          <div>
            <div>Time: 00:00~24:00</div>
            <div>Crowd: All people</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div>Carving Art Categories</div>
        <div></div>
      </div>
      <div>
        <div>DongYang Wood Carving</div>
        <hr />
        <div></div>
      </div>
      <div>
        <div>Gold Lacquer Painted Wood Carving</div>
        <hr />
        <div></div>
      </div>
      <div>
        <div>Bone Inlay Wood Carving</div>
        <hr />
        <div></div>
      </div>
      <div>
        <div>Mud Gold Lacquerware</div>
        <hr />
        <div></div>
      </div>
      <div>
        <div>Qingtian sculpture</div>
        <hr />
        <div></div>
      </div>
      <div>
        <div>Introduction of the artist</div>
        <div>艺术家</div>
        <div>文字框</div>
      </div>
      <div>
        <div>Crafting process demonstration</div>
        <div>
          <img src="~/assets/images/Homepage/9.1.png" />
          <img src="~/assets/images/Homepage/9.2.png" />
          <img src="~/assets/images/Homepage/9.3.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import '~/assets/style/common.less';

.homePage-banner {
  width: 100%;

  img {
    width: 100%;
  }

  .homePage-banner-textArea {
    background: rgba(#5c4e41, 0.85);
    width: 25%;
    height: 18%;
  }
}

.homePage-introduction {
  .homePage-introduction-left {
    font-family: 'Big Shoulders Display';
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    letter-spacing: -0.02em;
    color: #454033;
  }
}
</style>
