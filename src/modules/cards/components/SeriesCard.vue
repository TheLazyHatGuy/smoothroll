<template>
  <div class="card bg-dark text-light">
    <router-link :to="'/series/' + series.series_id" class="text-reset">
      <img class="card-img-top" :src="series.portrait_image.thumb_url" alt="Series Thumbnail" />
    </router-link>
    <div class="mx-2 my-1 text-truncate">
      <span><router-link :to="'/series/' + series.series_id" class="text-reset">{{series.name}}</router-link></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'series-card',
    props: {
      series: Object
    }
  }
</script>
