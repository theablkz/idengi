<template>
  <div class="field" :class="{ field_error: inputData.error }">
    <the-mask
      class="field__input"
      :type="inputData.input_type"
      :name="inputData.titleId"
      :id="inputData.id"
      :placeholder="inputData.placeholder"
      v-model="inputData.value"
      @focusout="() => inputData.warning = false"
      :mask="inputData.typing.regex"
      :masked="true"
      @input="removeError"
      :disabled="disabled"
    />
    <label class="field__label" :for="inputData.id">{{inputData.title}}</label>
    <div v-if="inputData.warning" class="field__warning">
      <p>{{ inputData.typing.warning}}</p>
    </div>
    <div v-if="inputData.error" class="field__error">
      <p>{{inputData.errorText}}</p>
    </div>
  </div>
</template>

<script>
import { TheMask } from "vue-the-mask";
export default {
  name: "phone",
  components: {
    TheMask
  },
  props: {
    inputData: {
      required: true
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    removeError(){
      this.inputData.error = false
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/style/_mixins/_values.scss';
</style>
