<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import {useAuthStore} from '~/store/auth.store';
import {ref} from "vue";

const authStore = useAuthStore();
const loginSchema = toTypedSchema(z.object({
  email: z.string()
      .email({ message: 'Введите действительный адрес электронной почты.' }),
  password: z.string()
      .min(8, { message: 'Пароль должен содержать не менее 8 символов.' })
      .max(50, { message: 'Пароль не должен превышать 50 символов.' }),
}));
const {isFieldDirty, handleSubmit } = useForm({
  validationSchema: loginSchema,
});
const login = handleSubmit((values) => {
  authStore.login(loginFormData.value);
})
const loginFormData = ref({
  email: '',
  password: '',
});
</script>

<template>
  <form @submit="login">
    <UiFormField v-slot="{ componentField }"
                 :validate-on-blur="!isFieldDirty"
                 name="email">
      <UiFormItem>
        <UiFormLabel>Email</UiFormLabel>
        <UiFormControl>
          <UiInput type="text"
                   v-model="loginFormData.email"
                   placeholder="example@gmail.com"
                   v-bind="componentField"/>
        </UiFormControl>
        <UiFormMessage/>
      </UiFormItem>
    </UiFormField>
    <UiFormField v-slot="{ componentField }"
                 :validate-on-blur="!isFieldDirty"
                 name="password">
      <UiFormItem>
        <UiFormLabel>Пароль</UiFormLabel>
        <UiFormControl>
          {{loginFormData.password}}
          <UiInput type="password"
                   v-model="loginFormData.password"
                   placeholder="*******"
                   v-bind="componentField"/>
        </UiFormControl>
        <UiFormMessage/>
      </UiFormItem>
    </UiFormField>
    <UiButton
        type="submit"
        variant="primary"
        size="lg">
      Войти
    </UiButton>
  </form>
</template>
