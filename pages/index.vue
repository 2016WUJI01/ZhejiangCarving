<template>
  <div>
    <div>{{ test }}:{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      test: "test1",
      message: "message",
    };
  },
};
</script>
