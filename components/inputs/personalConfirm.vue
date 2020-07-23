<template>
  <div class="personal-confirm" :class="{'field_error': inputData.error}">
    <input
      class="personal-confirm__input"
      :type="inputData.input_type"
      :name="inputData.titleId"
      :id="inputData.id"
      v-model="inputData.value"
      @input="setValue"
      @focusout="() => inputData.warning = false"
      :disabled="disabled"
    />
    <label class="personal-confirm__label" :for="inputData.id">
      <personal-confirm-check-box-icon :value="inputData.value" />
      <p class="personal-confirm__title">{{$t(`forms.${inputData.title}`)}}</p>
    </label>
    <div v-if="inputData.warning" class="field__warning">
      <p>{{$t(`warning.${inputData.typing.warning}`)}}</p>
    </div>
    <div v-if="inputData.error" class="field__error">
      <p>{{$t(`formError.${inputData.errorText}`)}}</p>
    </div>
  </div>
</template>
<!--class="field" :class="{'field_error': inputData.error}"-->
<script>
  import Regular from "../../form-controller/regular";
  import PersonalConfirmCheckBoxIcon from '~/components/icons/checkBox'
  export default {
    name: "personalConfirm",
    components: {
      PersonalConfirmCheckBoxIcon
    },
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

.personal-confirm{

  position: relative;
  margin: 2.4rem 0 3.6rem 0;
  &__input{
    display: none;
  }
  &__label{
    display: grid;
    grid-template-columns: 1.6rem 1fr;
    gap: 1rem;

  }
  &__title{
    font-size: 1.2rem;
  }

}


</style>
