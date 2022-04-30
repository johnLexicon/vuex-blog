import { ref, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

class SignUpModel {
  name = ref('');
  email = ref('');
  password = ref('');
  confirmPassword = ref('');

  get rules() {
    return {
      name: { required, minLength: minLength(2) },
      email: { required, email },
      password: { required, minLength: minLength(8) },
      confirmPassword: { required }
    };
  }

  toModel() {
    return useVuelidate(this.rules, this);
  }
}

export default reactive(new SignUpModel());
