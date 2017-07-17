<template>
    <div class="header-v6 header-classic-dark header-sticky">
        <div class="navbar mega-menu" role="navigation">
            <div class="container">
                <div class="menu-container">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Navbar Brand -->
                    <div class="navbar-brand">
                        <a href="/">
                            <h2>CONNECTMGM</h2>
                        </a>
                    </div>
                    <!-- ENd Navbar Brand -->

                    <!-- Header Inner Right -->
                    <div class="header-inner-right">

                    </div>
                    <!-- End Header Inner Right -->
                </div>
                <div class="collapse navbar-collapse navbar-responsive-collapse">
                    <div class="menu-container">
                        <ul class="nav navbar-nav">
                            <li><a href="/jobs">Jobs</a></li>
                            <li><a href="/talent">Talent</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {};
      },
      created() {
        if (jQuery(window).scrollTop() > 100) {
          jQuery('.header-fixed .header-sticky').addClass('header-fixed-shrink');
        }
        jQuery(window).scroll(function() {
          if (jQuery(window).scrollTop() > 100) {
            jQuery('.header-fixed .header-sticky').addClass('header-fixed-shrink');
          } else {
            jQuery('.header-fixed .header-sticky').removeClass('header-fixed-shrink');
          }
        });
      }
    }
</script>

<style lang="scss" src="./page-header.scss"></style>

