import { defineAsyncComponent } from 'vue';
<template>
  <div class="d-flex mt-2 justify-content-between align-items-center">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Titulo de la actividad {{id}}</div>
    </div>
    <div class="me-2">
        <button class="btn btn-sm btn-danger me-2"><i class="fas fa-trash"></i></button>
        <button class="btn btn-sm btn-primary me-2"><i class="fas fa-upload"></i></button>
    </div>
  </div>
  <hr>

  <div class="d-flex flex-column">
    <!-- textarea -->
    <div class="form-floating m-2">
        <textarea class="form-control border-0" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2">Asunto</label>
    </div>

    <!-- img -->
    <div class="m-2 text-center">
        <img src="@/assets/logo.png" class="img-fluid w-50 shadow p-3 bg-body rounded" alt="...">
    </div>
  </div>
  <add-button icon="fa-save" />  
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
    inheritAttrs: false,
    props: [ 'id' ],
    components: {

        AddButton: defineAsyncComponent( () => import('../components/AddButton.vue'))

    }

}
</script>

<style>

</style>