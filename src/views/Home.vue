<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <button @click="goToDayBook" class="btn btn-primary btn-sm" >DayBook</button>

  </div>
</template>
<script>


export default {
  methods:{

    goToDayBook(){
      console.log('Clickeado');
      this.$router.push({name: 'no-entry-selected'})
    }
  }

}
</script>


