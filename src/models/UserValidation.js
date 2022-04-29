import { ref, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

class UserValidation {
  email = ref('');
  password = ref('');

  get rules() {
    return {
      email: { required, email },
      password: { required, minLength: minLength(8) }
    };
  }

  toModel() {
    return useVuelidate(this.rules, this);
  }
}

export default reactive(new UserValidation());
