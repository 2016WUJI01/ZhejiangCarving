<template>
  <div class="footer">
    <div class="container top">
      <div class="footer-top">
        <div class="left">
          <div class="title">Visit</div>
          <p>Bone Inlay Wood Carving</p>
          <p>DongYang Wood CarvingVisit</p>
          <p>Mud Gold acquerware</p>
          <p>Gold Lacquer Painted Wood Carving</p>
          <p>Qingtian Stone Sculpture</p>
        </div>
        <div class="mid">
          <div class="title">Resources</div>
          <p>Collection Donation</p>
          <p>Masterpieces by Famous Artists</p>
          <p>Circulating Collection</p>
          <p>Lost and Found</p>
        </div>
        <div class="right">
          <div class="title">Our work</div>
          <p>Contact us</p>
          <p>Retrive your password</p>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="left">
          <div class="title">Commercial</div>
          <p>Launch</p>
          <p>Offline Collection Festival</p>
        </div>
        <div class="mid">
          <div class="title">Research</div>
          <p>Expert interpretation</p>
          <p>Visit Notes Report</p>
          <p>Lecture Forum</p>
        </div>
      </div>
    </div>
    <hr class="hr" />
    <div class="container bottom">
      <div>PRIVACY POLICY</div>
      <div>COOKIES</div>
      <div>ACCESSIBILITY STATEMENT</div>
      <div>TERM OF USE</div>
      <div>@2022浙江雕刻艺术</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
@import '~/assets/style/common.less';
.footer {
  background-color: #d8d2c3;
  height: 179px;
}

.top {
  height: 132px;
  padding-top: 30px;
  .footer-top {
    float: left;
    .left {
      .title {
        font-weight: 700;
        font-size: 55px;
        font-family: Big Shoulders Display;
        line-height: 43.09px;
      }
      p {
        font-size: 18px;
        font-weight: 400;
        font-family: Roboto Slab;
        line-height: 27px;
      }
    }
    .mid {
      .title {
        font-weight: 800;
        font-size: 55px;
        font-family: Big Shoulders Display;
        line-height: 55px;
      }
      p {
        font-size: 16px;
        font-weight: 500;
        font-family: Roboto Slab;
        line-height: 16px;
      }
    }
    .right {
      .title {
        font-weight: 800;
        font-size: 55px;
        font-family: Big Shoulders Display;
        line-height: 55px;
      }
      p {
        font-size: 16px;
        font-weight: 500;
        font-family: Roboto Slab;
        line-height: 16px;
      }
    }
  }
  .footer-bottom {
    float: right;
  }
}

.hr {
  margin: 0 10px;
}

.bottom {
}
</style>
