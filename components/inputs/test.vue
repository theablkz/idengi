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
    />
    <label class="field__label" :for="inputData.id">{{$t(`forms.${inputData.title}`)}}</label>
    <div v-if="inputData.warning" class="field__warning">
      <p>{{$t(`warning.${inputData.typing.warning}`)}}</p>
    </div>
    <div v-if="inputData.error" class="field__warning">
      <p>{{$t(`formError.${inputData.errorText}`)}}</p>
    </div>
  </div>
</template>

<script>
  import Regular from "../../form-controller/regular";

  export default {
    name: "simple",
    data: () => ({
      value: ""
    }),
    props: {
      inputData: {
        required: true
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
  .field {
    position: relative;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 2.4rem 0;

    &__label {
      background-color: inherit;
      position: absolute;
      margin: auto auto auto 0.8rem;
      top: 0;
      bottom: 100%;
      left: 0;
      width: max-content;
      height: max-content;
      transition: all 0.2s;
      touch-action: manipulation;
      padding: 0 0.8rem;
      font-size: 1.2rem;
      line-height: 1;
      &:hover{
        cursor: text;
      }
    }
    &__input{
      transition: all 0.2s;
      touch-action: manipulation;
    }

    &__input::-webkit-input-placeholder {
      opacity: 0;
    }

    &__input:placeholder-shown + .field__label {
      bottom: 0;
      font-size: 1.6rem;
    }
    &__input:focus::-webkit-input-placeholder {
      opacity: 1;
    }
    &__input:focus{
      border: 1px solid $active-input;
    }
    &__input:focus + .field__label {
      bottom: 100%;
      font-size: 1.2rem;
      color: $active-input;
    }

    &_error{
      animation: shakeAnimation .3s 1;

      .field__input{
        border: 1px solid $error-color;
      }
      .field__label{
        color: $error-color
      }
    }
    &__warning{
      background: #FFFFFF;
      box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.09);
      position: absolute;
      top: 100%;
      padding: .4rem 1rem;
      border-radius: 4px;
      right: .8rem;
      margin-top: .4rem;
      z-index: 2;
      p{
        font-size: 1.2rem;
        color: $orange-color;
      }
    }
  }



</style>
