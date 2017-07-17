<template>
    <div class="container s-results margin-bottom-50">
       <div class="row">
           <jobs-filter></jobs-filter>
           <jobs-display></jobs-display>
       </div>
    </div>
</template>

<script>
    import JobsFilter from './jobs-filter.vue'
    import JobsDisplay from './jobs-display.vue'
    export default {
      data() {
        return {

        }
      },
      components: {
        JobsFilter,
        JobsDisplay
      }
    }
</script>