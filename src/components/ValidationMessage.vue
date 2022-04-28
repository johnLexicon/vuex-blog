<template>
  <div class="text-danger" v-if="model.$invalid">
    <ul class="list-unstyled">
      <li v-for="err in model.$errors" :key="err">{{ err.$message }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ValidationMessage",
  props: {
    model: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>