<script setup lang="ts">
import {useForm} from 'vee-validate';
import {toTypedSchema} from '@vee-validate/zod';
import * as z from 'zod';
import {useAuthStore} from '~/store/auth.store';
import {ref} from "vue";

const authStore = useAuthStore();
const registerSchema = toTypedSchema(z.object({
  name: z.string().max(15, { message: 'Имя не должно превышать 15 символов.' }).optional(),
  email: z.string()
      .email({ message: 'Введите действительный адрес электронной почты.' }),
  password: z.string()
      .min(8, { message: 'Пароль должен содержать не менее 8 символов.' })
      .max(50, { message: 'Пароль не должен превышать 50 символов.' })
      .refine(value => /[A-Za-z]/.test(value), {
        message: 'Пароль должен содержать хотя бы одну латинскую букву.',
      })
      .refine(value => /\d/.test(value), {
        message: 'Пароль должен содержать хотя бы одну цифру.',
      }),
  confirmPassword: z.string(),
  terms: z.boolean()
      .refine(val => val === true, {
        message: 'Необходимо принять условия и положения.',
      })
}).refine((values) => values.password === values.confirmPassword, {
  message: "Пароли не совпадают",
  path: ["confirmPassword"],
}));

const {isFieldDirty, handleSubmit} = useForm({
  validationSchema: registerSchema,
});
const register = handleSubmit((values) => {
  authStore.register(registerFormData.value);
})
const registerFormData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
});
</script>

<template>
  <form @submit="register">
    <UiFormField v-slot="{ componentField }"
                 name="name"
                 :validate-on-blur="!isFieldDirty">
      <UiFormItem>
        <UiFormLabel>Имя</UiFormLabel>
        <UiFormControl>
          <UiInput type="text"
                   v-model="registerFormData.name"
                   placeholder=""
                   v-bind="componentField"/>
        </UiFormControl>
        <UiFormMessage/>
      </UiFormItem>
    </UiFormField>
    <UiFormField v-slot="{ componentField }"
                 name="email"
                 :validate-on-blur="!isFieldDirty">
      <UiFormItem>
        <UiFormLabel>Email*</UiFormLabel>
        <UiFormControl>
          <UiInput type="text"
                   v-model="registerFormData.email"
                   placeholder="example@gmail.com"
                   v-bind="componentField"/>
        </UiFormControl>
        <UiFormMessage/>
      </UiFormItem>
    </UiFormField>
    <UiFormField v-slot="{ componentField }"
                 name="password"
                 :validate-on-blur="!isFieldDirty">
      <UiFormItem>
        <UiFormLabel>Пароль*</UiFormLabel>
        <UiFormControl>
          <UiInput type="password"
                   v-model="registerFormData.password"
                   placeholder="*******"
                   v-bind="componentField"/>
        </UiFormControl>
        <UiFormMessage/>
      </UiFormItem>
    </UiFormField>
    <UiFormField v-slot="{ componentField }"
                 name="confirmPassword"
                 :validate-on-blur="!isFieldDirty">
      <UiFormItem>
        <UiFormLabel>Подтвердите пароль*</UiFormLabel>
        <UiFormControl>
          <UiInput type="password"
                   v-model="registerFormData.confirmPassword"
                   placeholder="*******"
                   v-bind="componentField"/>
        </UiFormControl>
        <UiFormMessage/>
      </UiFormItem>
    </UiFormField>
    <UiFormField v-slot="{ value, handleChange }"
                 type="checkbox"
                 name="terms">
      <UiFormItem class="flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4 shadow">
        <UiFormControl>
          <UiCheckbox :checked="value"
                      @update:checked="handleChange"/>
        </UiFormControl>
        <div class="space-y-1 leading-none">
          <UiFormLabel>Примите условия и положения</UiFormLabel>
          <UiFormDescription>
            Вы соглашаетесь с нашими
            <NuxtLink class="text-foreground" to="/">Условиями предоставления услуг и Политикой конфиденциальности</NuxtLink>
            .
          </UiFormDescription>
          <UiFormMessage/>
        </div>
      </UiFormItem>
    </UiFormField>
    <p class="text-sm text-muted mb-2">* - обязательные поля</p>
    <UiButton
        type="submit"
        variant="primary"
        size="lg">
      Зарегистрироваться
    </UiButton>
  </form>
</template>

<style scoped>

</style>