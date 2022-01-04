<template>
    <div class="list-group mt-4 h-100 overflow-scroll px-2">
        <entry v-for="item in 10" :key="item" :item="item" />    
    </div>

</template>

<script>
import Entry from './Entry.vue'
export default {
  components: { Entry },
    name: 'EntryListComponent'

}
</script>

<style>

</style>