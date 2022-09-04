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
        <div class="homePage-introduction-left w-600px">
          Discover the cultural charm of Zhejiang carving art
        </div>
        <div class="homePage-introduction-right">
          <div class="homePage-introduction-right-title w-500px">
            Feel free to visit and browse
          </div>
          <br />
          <div class="homePage-introduction-right-text">
            <div>Time: 00:00~24:00</div>
            <div>Crowd: All people</div>
          </div>
        </div>
      </div>
      <div class="homePage-row">
        <div class="homePage-row-title">Carving Art Categories</div>
        <div></div>
      </div>
      <div class="homePage-row">
        <div class="homePage-row-title">DongYang Wood Carving</div>
        <hr />
        <div></div>
      </div>
      <div class="homePage-row">
        <div class="homePage-row-title">Gold Lacquer Painted Wood Carving</div>
        <hr />
        <div></div>
      </div>
      <div class="homePage-row">
        <div class="homePage-row-title">Bone Inlay Wood Carving</div>
        <hr />
        <div></div>
      </div>
      <div class="homePage-row">
        <div class="homePage-row-title">Mud Gold Lacquerware</div>
        <hr />
        <div></div>
      </div>
      <div class="homePage-row">
        <div class="homePage-row-title">Qingtian sculpture</div>
        <hr />
        <div></div>
      </div>
      <div class="homePage-row">
        <div class="homePage-row-title">Introduction of the artist</div>
        <div class="homePage-row-artist">
          <div class="homePage-row-artist-item">
            <img
              src="~/assets/images/Homepage/8.1.png"
              class="homePage-row-artist-item-avatar"
            />
            <div class="homePage-row-artist-item-name">Chen Gai Hong</div>
          </div>
          <div class="homePage-row-artist-item">
            <img
              src="~/assets/images/Homepage/8.2.png"
              class="homePage-row-artist-item-avatar"
            />
            <div class="homePage-row-artist-item-name">Li Xiaodong</div>
          </div>
          <div class="homePage-row-artist-item">
            <img
              src="~/assets/images/Homepage/8.3.png"
              class="homePage-row-artist-item-avatar"
            />
            <div class="homePage-row-artist-item-name">Wong Choi Leung</div>
          </div>
          <div class="homePage-row-artist-item">
            <img
              src="~/assets/images/Homepage/8.4.png"
              class="homePage-row-artist-item-avatar"
            />
            <div class="homePage-row-artist-item-name">Chen Mingwei</div>
          </div>
        </div>
      </div>
      <div>Sign up to our newsletters</div>
      <div class="homePage-row">
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
  width: 100%;
  border: 1px solid #cfc19a;
  display: inline-block;
  margin-bottom: 130px;
  .homePage-introduction-left {
    .float-left;
    .font-BigShouldersDisplay;
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    letter-spacing: -0.02em;
    color: #454033;
  }
  .homePage-introduction-right {
    .float-right;
    .font-RobotoSlab;
    font-size: 24px;
    line-height: 32px;
    text-align: right;

    .homePage-introduction-right-title {
      font-weight: 700;
    }
    .homePage-introduction-right-text {
      font-weight: 400;
    }
  }
}

.homePage-row {
  .homePage-row-title {
    .font-BigShouldersDisplay;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 57px;
    color: #454033;
  }
  .homePage-row-artist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    .homePage-row-artist-item {
      width: 24%;
      display: flex;
      flex-direction: column;
      place-content: center;
      place-items: center;
      .homePage-row-artist-item-avatar {
        width: 100%;
        border-radius: 50%;
        margin-bottom: 50px;
      }
      .homePage-row-artist-item-name {
        .font-RobotoSlab;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;

        color: #454033;
      }
    }
  }
}
</style>
