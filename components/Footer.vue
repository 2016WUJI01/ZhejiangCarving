<template>
  <div class="footer">
    <div class="footer-top container">
      <div class="footer-top-item">
        <div>
          <div class="footer-title">Visit</div>
          <p>Bone Inlay Wood Carving</p>
          <p>DongYang Wood CarvingVisit</p>
          <p>Mud Gold acquerware</p>
          <p>Gold Lacquer Painted Wood Carving</p>
          <p>Qingtian Stone Sculpture</p>
        </div>
        <div>
          <div class="footer-title">Commercial</div>
          <p>Launch</p>
          <p>Offline Collection Festival</p>
        </div>
      </div>
      <div class="footer-top-item">
        <div>
          <div class="footer-title">Resources</div>
          <p>Collection Donation</p>
          <p>Masterpieces by Famous Artists</p>
          <p>Circulating Collection</p>
          <p>Lost and Found</p>
        </div>
        <div>
          <div class="footer-title">Research</div>
          <p>Expert interpretation</p>
          <p>Visit Notes Report</p>
          <p>Lecture Forum</p>
        </div>
      </div>
      <div class="footer-top-item">
        <div class="footer-title">Our work</div>
        <p>Contact us</p>
        <p>Retrive your password</p>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-left">
          <div>PRIVACY POLICY</div>
          <div>COOKIES</div>
          <div>ACCESSIBILITY STATEMENT</div>
          <div>TERM OF USE</div>
        </div>
        <div class="footer-bottom-right">
          <div>@2022浙江雕刻艺术</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import '~/assets/style/common.less';
.footer {
  background-color: #d8d2c3;
  display: block;
}
.footer-top {
  .flex__inline;
  padding: 56px 40px 0 0;

  .footer-top-item {
    width: 350px;

    .footer-title {
      font-weight: 700;
      font-size: 36px;
      line-height: 43.09px;
      .font-BigShouldersDisplay;
    }

    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 18px;
      .font-RobotoSlab
    }
  }
}

.footer-bottom {
  background: rgba(0, 0, 0, 0.1);
  height: 40px;
  justify-content: center;
  align-items: center;
  line-height: 40px;
  .footer-bottom-left {
    .float-left;
    .flex__inline;
  }
  .footer-bottom-right {
    .float-right;
    .flex__inline;
  }
}
</style>
