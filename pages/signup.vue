<template lang="pug">
  el-row(type="flex" justify="center" align="middle")
    el-col(:span="6")

      el-card.box-card
        el-form(label-position="top" label-width="100px")
          el-form-item(
            label='Email'
            prop='email'
            :rules="[\
              { required: true, message: 'Please input email address', trigger: 'blur' },\
              { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }\
            ]"
          )
            el-input(v-model='dynamicValidateForm.email')
          el-form-item(
            label='Password'
            prop='password'
            :rules="[\
              { required: true, message: 'Please input password', trigger: 'blur' },\
            ]"
          )
            el-input(v-model='dynamicValidateForm.password')
          el-form-item
            el-button(type="primary" @click="onSubmit" style="width: 100%") Create

</template>

<script>
  export default {
    layout: 'auth',
    data() {
      return {
        dynamicValidateForm: {
          email: '',
          password: '',
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