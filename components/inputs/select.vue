<template>
  <div class="field" :class="{ field_error: inputData.error }">
    <select
      class="field__select"
      v-model="inputData.value"
      @change="setValue"
      :id="inputData.id"
      :disabled="disabled"
    >
      <option selected disabled value="">{{
        $t(`forms.${inputData.title}`)
      }}</option>
      <option
        v-for="select in $t(`forms.${inputData.selects}`)"
        :value="select.id"
        >{{ select.value }}</option
      >
    </select>
    <div v-if="inputData.warning" class="field__warning">
      <p>{{ $t(`warning.${inputData.typing.warning}`) }}</p>
    </div>
    <div v-if="inputData.error" class="field__error">
      <p>{{ $t(`formError.${inputData.errorText}`) }}</p>
    </div>
  </div>
</template>

<script>
import Regular from "../../form-controller/regular";

export default {
  name: "select-component",
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
    setValue(e) {
      this.inputData.error = false;
      if (e.target.value.length > this.inputData.typing.max) {
        this.inputData.value = this.inputData.defaultValue;
        return 0;
      }
      if (
        Regular[this.inputData.typing.regex].test(e.target.value) ||
        e.target.value.length === 0
      ) {
        this.inputData.defaultValue = e.target.value;
        this.inputData.warning = false;
        this.$emit("setValue", this.inputData);
      } else {
        this.inputData.value = this.inputData.defaultValue;
        this.inputData.warning = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/style/_mixins/_values.scss";
</style>
