<template>
  <div class="field">
    <input type="radio" :value="inputData.id" @change="$emit('addAnswer', inputData)" :id="inputData.id" :name="inputData.name">
    <label :for="inputData.id">{{ inputData.text }}</label>
  </div>
</template>

<script>
    export default {
        name: "radio",
      props: {
        inputData: {
          required: true
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
  }
</style>
