<template>
  <div>
    <div class="field" :class="{ field_error: inputData.form.error }">
      <select
        v-model="inputData.form.value"
        @change="inputData.pushValue"
        :id="inputData.form.id"
        class="field__input"
      >
        <option selected disabled value="">{{
          $t(`forms.${inputData.form.title}`)
          }}</option>
        <option
          v-for="select in inputData.form.documentSelects"
          :value="select.id"
        >{{ $t(`forms.documentSelects.${select.id}`) }}</option
        >
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "document-component",
  data: () => ({
    value: ""
  }),
  props: {
    inputData: {
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/style/_mixins/_values.scss";
</style>
