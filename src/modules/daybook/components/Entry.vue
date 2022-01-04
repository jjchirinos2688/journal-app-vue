<template>
  <router-link
    :to="{name: 'entry-selected', params:{id: item}}" class="list-group-item list-group-item-action" aria-current="true"
  >
    <h5 class="mb-1">List group item heading</h5>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
    <div class="d-flex w-100 justify-content-end">
      <small>3 days ago</small>
    </div>
  </router-link>
</template>

<script>
export default {
    name:'EntryComponent',
    props: {
        item: {
            type: Number,
            required: true
        }
    },
    methods:{

     
    }

};
</script>

<style>
</style>