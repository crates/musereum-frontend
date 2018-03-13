<template lang="pug">
  el-card.box-card
    el-form(:model="signupForm" :rules="rules" v-loading="loading" ref="signupForm" label-position="top" label-width="100px")
      el-form-item(:label="$t('form.email')" prop='email')
        el-input(v-model='signupForm.email')
      el-form-item(:label="$t('form.password')" prop='password')
        el-input(v-model='signupForm.password')
      el-button(type="primary" @click="submitForm('signupForm')" style="width: 100%") {{ $t('auth.create') }}

</template>

<script>
  export default {
    layout: 'auth',
    data() {
      return {
        loading: false,
        signupForm: {
          email: '',
          password: '',
        },
        rules: {
          email: [
            { required: true, message: this.$t('validators.email.require'), trigger: 'blur' },
            { type: 'email', message: this.$t('validators.email.correct'), trigger: 'blur,change' }
          ],
          password: [
            { required: true, message: this.$t('validators.password.require'), trigger: 'blur' },
            { min: 6, message: this.$t('validators.password.correct', { min: 6 }), trigger: 'blur,change' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const { email, password } = this.signupForm
            this.loading = true
            this.$store.dispatch('authenticate', { email, password }).then((result) => {
              this.$router.replace({ path: 'dashboard' })
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>