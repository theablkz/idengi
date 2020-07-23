<template>
  <div class="field" :class="{ field_error: inputData.error }">
    <the-mask
      class="field__input input-to-uppercase"
      :type="inputData.input_type"
      :name="inputData.titleId"
      :id="inputData.id"
      :placeholder="inputData.placeholder"
      v-model="inputData.value"
      @focusout="() => inputData.warning = false"
      :mask="inputData.typing.regex"
      :masked="true"
      @input="typingInput"
    />
    <label class="field__label" :for="inputData.id">{{$t(`forms.${inputData.title}`)}}</label>
    <img v-if="bankIcon" class="field__bank-logo" :src="bankIcon" alt="">
    <div v-if="inputData.warning" class="field__warning">
      <p>{{ $t(`warning.${inputData.typing.warning}`) }}</p>
    </div>
    <div v-if="inputData.error" class="field__error">
      <p>{{$t(`formError.${inputData.errorText}`)}}</p>
    </div>

  </div>
</template>

<script>
  const iban = require('silk-way-validate/modules/banksBic.json')
  import {TheMask} from "vue-the-mask";

  export default {
    name: "iban",
    components: {
      TheMask
    },
    data: () => ({
      bankIcon: null
    }),
    props: {
      inputData: {
        required: true
      }
    },
    methods: {
      typingInput() {
        this.setBankIcon()
        //
        this.inputData.error = false
      },
      setBankIcon() {
        let ibanreplace = this.inputData.value.replace(/\s/g, '')
        this.bankIcon = null
        if (ibanreplace.length !== 20) {
          return
        }

        let bank = iban.find(item => item.code === ibanreplace.slice(4, 7))
        if (bank) {
          this.bankIcon = require(`silk-way-validate/banks/${iban.find(item => item.code === ibanreplace.slice(4, 7)).bic}.svg`)
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~/assets/style/_mixins/_values.scss";

</style>
