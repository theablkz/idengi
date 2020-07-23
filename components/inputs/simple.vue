<template>
  <div class="field" :class="{'field_error': inputData.error}">
    <input
      class="field__input"
      :type="inputData.input_type"
      :name="inputData.titleId"
      :id="inputData.id"
      :placeholder="inputData.placeholder"
      v-model="inputData.value"
      @input="setValue"
      @focusout="() => inputData.warning = false"
      :disabled="disabled"
    />
    <label class="field__label" :for="inputData.id">{{inputData.title}}</label>
    <div v-if="inputData.warning" class="field__warning">
      <p>{{inputData.typing.warning}}</p>
    </div>
    <div v-if="inputData.error" class="field__error">
      <p>{{inputData.errorText}}</p>
    </div>
  </div>
</template>

<script>
import Regular from "~/form-controller/regular";

export default {
  name: "simple",
  data: () => ({
    value: ""
  }),
  props: {
    inputData: {
      required: true
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    setValue(e){
      this.inputData.error = false
      if (e.target.value.length > this.inputData.typing.max) {
        this.inputData.value = this.inputData.defaultValue;
        return 0;
      }
      if (
        Regular[this.inputData.typing.regex].test(e.target.value) ||
        e.target.value.length === 0
      ) {
        this.inputData.defaultValue = e.target.value;
        this.inputData.warning = false
        this.$emit('setValue', this.inputData)
      } else {
        this.inputData.value = this.inputData.defaultValue;
        this.inputData.warning = true
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "~/assets/style/_mixins/_values.scss";




</style>
