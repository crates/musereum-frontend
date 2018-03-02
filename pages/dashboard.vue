<template lang="pug">
  el-row(type="flex" justify="center" align="middle")
    el-col(:span="12")
      el-steps(direction='vertical' :active='0')
        el-step(title='Enter your email' style="flex-basis: 110px")
          div(slot='description')
            el-form.demo-dynamic(:model='dynamicValidateForm' ref='dynamicValidateForm' :inline='true')
              el-form-item(
                prop='email'
                :rules="[\
                  { required: true, message: 'Please input email address', trigger: 'blur' },\
                  { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }\
                ]"
              )
                el-input(v-model='dynamicValidateForm.email')
              el-form-item
                el-button(type='primary', @click="submitForm('dynamicValidateForm')") Submit

        el-step(title="Verification of email" description="Check the email for a verification link" style="flex-basis: 100px")
        el-step(title='Recieve your ETM')
</template>

<script>
  export default {
    data() {
      return {
        dynamicValidateForm: {
          email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>