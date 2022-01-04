<template>
  <button class="btn btn-primary btn-circle ms-auto">
    <i class="fas fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
  name:'AddButton',
  props:{
    icon:{
      type:String,
      default: 'fa-plus'
    }
  }

}
</script>

<style lang="scss" scoped>

    .btn-circle {
            width: 50px;
            height: 50px;
            padding: 7px 10px;
            border-radius: 25px;
            font-size: 10px;
            text-align: center;
            position: fixed;
            right: 20px;
            bottom: 20px;
        }
</style>