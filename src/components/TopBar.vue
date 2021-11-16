<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Logo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{ $t('Home') }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{ $t('About me') }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{ $t('Blog') }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{ $t('Contacts') }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>

export default {
  components: {
    
  },
};
</script>

<style>
.container-fluid {
    padding: 0;
}
</style>
