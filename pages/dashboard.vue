<template lang="pug">
  el-row(type="flex" justify="center" align="middle")
    el-col(:span="12")

      el-steps(direction='vertical' :active='0')
        el-step(:title="$t('account_verification.steps[0].title')" style="flex-basis: 110px")
          div(slot='description')
            el-form(:model="verifyForm" :rules="rules" v-loading="loading" ref="verifyForm" :inline='true')
              el-form-item(prop='email')
                el-input(v-model='verifyForm.email')
              el-form-item
                el-button(type='primary', @click="submitForm('verifyForm')") {{ $t('account_verification.submit') }}

        el-step(
          :title="$t('account_verification.steps[1].title')" 
          :description="$t('account_verification.steps[1].description')" 
          style="flex-basis: 100px"
        )
        el-step(:title="$t('account_verification.steps[2].title')")
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        verifyForm: {
          email: ''
        },
        rules: {
          email: [
            { required: true, message: this.$t('validators.email.require'), trigger: 'blur' },
            { type: 'email', message: this.$t('validators.email.correct'), trigger: 'blur,change' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading=true
            setTimeout(() => {
              this.loading=false
              alert('submit!');
            }, 2000)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>