<template>
  <div className="not-found-container">
    <h4>This Page Isn't Available</h4>
    <h5>
      The link may be broken, or the page may have been removed. Check to see if the link you're trying to open is
      correct.
    </h5>
    <router-link to="/"><button class="btn btn-primary">Go to HomePage</button></router-link>
  </div>
</template>
<script>
export default {
  name: 'NotFound',
};
</script>
