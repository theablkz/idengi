<template>
  <div>
    <div class="field">
      <input type="radio" :id="inputData.id" @change="$emit('addAnswer', inputData)" :name="inputData.name">
      <label :for="inputData.id">{{ inputData.text }}</label>
    </div>
    <textarea v-if="inputData.id === answer.id" :ref="inputData.id" v-focus v-model="inputData.value" class="field__area" rows="10" cols="45"
              name="text"/>
  </div>
</template>

<script>
  export default {
    name: "textArea",
    data: () => ({
      value: false
    }),
    props: {
      inputData: {
        required: true
      },
      answer: {
        type: Object,
        default: () => {}
      },
      disabled: {
        type: Boolean
      }
    },
  }
</script>

<style lang="scss" scoped>
  .field{
    background-color: white;
    display: grid;
    grid-template-columns: 1.6rem 1fr;
    align-items: center;
    border: none;
    text-align: left;
    gap: 1.6rem;
    &__area{
      width: 100%;
    }
  }
</style>
