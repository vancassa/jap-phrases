<template>
  <div>
    <h1>New Word</h1>
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
  name: 'new-word',
  components: {
  },
  data(){
    return {
      errorsPresent: false,
      word: {
          english: '',
          japanese: ''
      }
    };
  },
  methods: {
    onSubmit: async function() {
      if (this.word.english === '' || this.word.japanese === '') {
        this.errorsPresent = true;
      } else {
        const res = await api.createWord(this.word);
        this.flash('Word created', 'success');
        // Clear form
        this.word.japanese = '';
        this.word.english = '';
        this.$refs.firstInput.focus();
      }
    }
  }
};
</script>
<style scoped>
.error {
  color: red;
}
</style>