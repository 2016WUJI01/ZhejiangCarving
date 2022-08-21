<template>
  <div class="footer">
    <div class="container top">
      <div class="footer-top">
        <div class="content left">
          <div class="title">Visit</div>
          <p>Bone Inlay Wood Carving</p>
          <p>DongYang Wood CarvingVisit</p>
          <p>Mud Gold acquerware</p>
          <p>Gold Lacquer Painted Wood Carving</p>
          <p>Qingtian Stone Sculpture</p>
        </div>
        <div class="content mid">
          <div class="title">Resources</div>
          <p>Collection Donation</p>
          <p>Masterpieces by Famous Artists</p>
          <p>Circulating Collection</p>
          <p>Lost and Found</p>
        </div>
        <div class="content right">
          <div class="title">Our work</div>
          <p>Contact us</p>
          <p>Retrive your password</p>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="content left">
          <div class="title">Commercial</div>
          <p>Launch</p>
          <p>Offline Collection Festival</p>
        </div>
        <div class="content mid">
          <div class="title">Research</div>
          <p>Expert interpretation</p>
          <p>Visit Notes Report</p>
          <p>Lecture Forum</p>
        </div>
      </div>
    </div>
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
  height: 576px;
  position: relative;
}

.top {
  position: absolute;
  // left: 9.25%;
  // right: 19.53%;
  // top: 9.55%;
  // bottom: 30.73%;
  .footer-top {
    height: 290px;
    .content {
      width: 400px;
      display: block;
      float: left;
      top: 55px;
      margin-right: 126px;
      .title {
        font-weight: 700;
        font-size: 36px;
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
  }
  .footer-bottom {
    height: 206px;
    .content {
      width: 400px;
      display: block;
      float: left;
      margin-right: 126px;
      .title {
        font-weight: 700;
        font-size: 36px;
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
  }
}

.hr {
  margin: 0 10px;
}

.bottom {
  width: 100%;
  height: 80px;
  margin-left: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
