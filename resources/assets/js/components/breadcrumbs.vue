<template>
    <div class="breadcrumbs">
        <div class="container">
            <h1 class="pull-left"><slot></slot></h1>
            <ul class="pull-right breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li class="active">Jobs</li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    props: [
      'name',
      'crumbs'
    ],
    data() {
      return {};
    }
  }
</script>

<style lang="scss">
    .breadcrumbs {
        margin-top: 100px;
    }
</style>