<template>
  <div class="viewProcess">
    <div class="viewProcess-header">
      <div class="viewProcess-header-left w-300px">View previous process</div>
      <div class="viewProcess-header-right w-300px">View next process</div>
    </div>
    <div class="viewProcess-main">
      <img
        src="~/assets/images/页尾/页尾分块1.png"
        class="viewProcess-main-item"
      />
      <img
        src="~/assets/images/页尾/页尾分块2.png"
        class="viewProcess-main-item"
      />
      <img
        src="~/assets/images/页尾/页尾分块3.png"
        class="viewProcess-main-item"
      />
      <img
        src="~/assets/images/页尾/页尾分块4.png"
        class="viewProcess-main-item"
      />
    </div>
  </div>
</template>

<style lang="less">
@import '~/assets/style/common.less';
.viewProcess {
  .container;
  margin-top: 125px;
  margin-bottom: 125px;

  .viewProcess-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .font-RobotoSlab;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #454033;
    .viewProcess-header-left {
      text-align: left;
    }
    .viewProcess-header-right {
      text-align: right;
    }
  }

  .viewProcess-main {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .viewProcess-main-item {
      width: 24%;
    }
  }
}
</style>
