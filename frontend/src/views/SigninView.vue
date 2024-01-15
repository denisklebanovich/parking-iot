<template>
  <div class="signin-form">
    <h1>Sign in</h1>
    <div class="form">
      <NWInput v-model="username" :error="!!usernameError" @focusout="validateUsername">
        <template #label>
          Login
        </template>
        <template #helper v-if="usernameError">
          {{ usernameError }}
        </template>
      </NWInput>
      <NWInput v-model="password" type="password" :error="!!passwordError" @focusout="validatePassword">
        <template #label>
          Password
        </template>
        <template #helper v-if="passwordError">
          {{ passwordError }}
        </template>
      </NWInput>
      <NWButton @click="signin">Sign in</NWButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject, type Ref, ref } from "vue";
import NWInput from "@/components/core/input/NWInput.vue";
import NWButton from "@/components/core/button/NWButton.vue";
import { useUserStore } from "@/stores/UserStore";
import NWToast from "@/components/core/toast/NWToast.vue";
import router from "@/router";
import { displayErrorMessage } from "@/utils/ErrorHandler";
import type { User } from "@/model/User";

const username = ref("");
const password = ref("");

const userStore = useUserStore();

const toastRef = inject<Ref<typeof NWToast>>("toastRef");

const usernameError = ref<undefined | string>();
const passwordError = ref<undefined | string>();

const validateUsername = () => {
  usernameError.value = undefined;
  if (!username.value || username.value.length < 5) {
    usernameError.value = "Username must be at least 5 characters";
  }
};

const validatePassword = () => {
  passwordError.value = undefined;
  if (!password.value || password.value.length < 5) {
    passwordError.value = "Password must be at least 5 characters";
  }
};

const validateForm = () => {
  validateUsername();
  validatePassword();
};
const signin = async () => {
  validateForm();

  if (usernameError.value || passwordError.value) {
    return;
  }

  try {
    const user = await userStore.signin({
      username: username.value,
      password: password.value
    });

    userStore.setUser(user as User);

    // Login as user or admin
    if (user.role === "user") {
      router.push("/user");
    } else {
      router.push("/admin");
    }
  } catch (e) {
    displayErrorMessage(e, toastRef);
  }
};
</script>
<style scoped lang="scss">
.signin-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.signup-button {
  color: #35f560;
  text-decoration: none;
  margin-left: 0.25rem;
}
</style>