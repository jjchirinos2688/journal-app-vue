<template>
  <nav-bar />
  <div class="d-flex flex-row flex-wrap vh-full">
    
    <!-- Entry -->
    <div class="col-6 d-flex flex-column col h-100 border-end p-2">
        
        <!-- Search Entry -->
        <div class="d-flex mt-2">
            <input class="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search" >
            <button class="btn btn-sm btn-success" type="submit"><i class="fas fa-search"></i></button>
        </div>

        <!-- Entry List -->
        <entry-list />

    </div>

    <!-- Router View -->
    <div class="col">
        <router-view />      
    </div>

  </div>

  
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    NavBar: defineAsyncComponent(() =>
      import("@/modules/daybook/components/NavBar.vue")
    ),
   EntryList: defineAsyncComponent(() =>
      import("@/modules/daybook/components/EntryList.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>

.vh-full{

    height: calc(100vh - 110px);
}
</style>