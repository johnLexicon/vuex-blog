import { ref, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';

class PostValidation {
  title = ref('');
  body = ref('');

  get rules() {
    return {
      title: { required, minLength: minLength(2) },
      body: { required, minLength: minLength(10) }
    };
  }

  toModel() {
    return useVuelidate(this.rules, this);
  }
}

export default reactive(new PostValidation());
