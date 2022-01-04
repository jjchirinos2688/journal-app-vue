<template>
    <div class="alert alert-light d-flex justify-content-center h-100" role="alert">
        <h3 class="align-self-center">Sin entrada seleccionada!</h3> 
    </div>
    <add-button icon="fa-plus" />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
    components: {

        AddButton: defineAsyncComponent( () => import("@/modules/daybook/components/AddButton.vue"))

    }

}
</script>

<style>

</style>