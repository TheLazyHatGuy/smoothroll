<template>
  <div>
    <player :streamData="media.stream_data" />

    <h3 class="text-light"><router-link :to="'/series/' + media.series_id" class="text-reset">{{media.series_name}}</router-link></h3>
    <h4 class="text-light">{{'Episode ' + media.episode_number + ' - ' + media.name}}</h4>
    <p class="text-light">{{media.description}}</p>
  </div>
</template>

<script>
  import Player from 'modules/media/components/Player';

  export default {
    name: 'media',
    created() {
      this.$store.dispatch('getMedia', this.$route.params.id);
    },
    computed: {
      media() {
        return this.$store.state.media.currentMedia || {};
      }
    },
    components: {
      Player
    }
  }
</script>
