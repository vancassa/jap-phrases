<template>
  <div>
    <h1>Edit Word</h1>
    <form action="#" @submit.prevent="onSubmit">
      <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="japan flag"></i> Japanese
        </div>
        <input type="text" ref="firstInput" placeholder="Enter word..." v-model="word.japanese" />
      </div>

      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="united kingdom flag"></i> English
        </div>
        <input type="text" placeholder="Enter word..." v-model="word.english" />
      </div>

      <button class="positive ui button">Submit</button>
    </form>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
  name: 'edit',
  components: {
  },
  data: function() {
    return {
      word: {}
    };
  },
  methods: {
    onSubmit: async function() {
      await api.updateWord(this.word);
      this.flash('Word updated sucessfully!', 'success');
      this.$router.push(`/words/${word._id}`);
    }
  },
  async mounted() {
    this.word = await api.getWord(this.$route.params.id);
  }
};
</script>
