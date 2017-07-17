<template>
    <div class="col-md-2 hidden-xs">
        <div class="row">
            <div class="col-md-12 col-sm-4">
                <fieldset>
                    <section>
                        <h3>Job Type</h3>
                        <ul class="list-unstyled">
                        <li class="col" v-for="type in getJobTypes()">
                            <label class="checkbox">
                                <input type="checkbox" name="">
                                <i></i>
                                {{ type }}
                            </label>
                        </li>
                        </ul>
                    </section>
                </fieldset>
                <hr>
            </div>

            <div class="col-md-12 col-sm-4">
                <h3>Tutorials</h3>
                <ul class="list-unstyled">
                    <li><a href="#">Basic Concepts</a></li>
                    <li><a href="#">‎Building your first web page</a></li>
                    <li><a href="#">‎Advanced HTML</a></li>
                </ul>
                <hr>
            </div>

            <div class="col-md-12 col-sm-4">
                <h3>Trending topics</h3>
                <ul class="list-unstyled">
                    <li><a href="#">Bootstrap</a></li>
                    <li><a href="#">Wrapbootstrap</a></li>
                    <li><a href="#">Codrops</a></li>
                </ul>
                <hr>
            </div>

            <div class="col-md-12 col-sm-4">
                <h3>Search history</h3>
                <ul class="list-unstyled">
                    <li><a href="#">Web design articles</a></li>
                    <li><a href="#">Tutorials for web design</a></li>
                </ul>
                <a class="see-all" href="#">See all</a>
                <hr>
            </div>
        </div>
    </div><!--/col-md-2-->
</template>

<script>
    export default {
      data() {
        return {}
      },
      methods: {
        getJobTypes() {
          return [
            'Programmer',
            'Designer',
            'Photographer',
            'Artisan'
          ];
        }
      }
    }
</script>

<style lang="scss" scoped>
    fieldset {
        ul {
            margin-left: 20px;

            label {
                font-weight: normal;
                margin-top: 0;
                margin-bottom: 0;
            }
        }
    }

    hr {
        margin: 0;
    }
</style>