<!--form for admin to add new users-->

<template>
    <div class="container">
        <h3>Add new user</h3>
        <form @submit.prevent="addUser">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required>
            <label for="surname">Surname:</label>
            <input type="text" id="surname" v-model="surname" required>
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
            <label for="rfid">RFID:</label>
            <input type="text" id="rfid" v-model="rfid" required>
            <label for="licensePlate">License plate:</label>
            <input type="text" id="licensePlate" v-model="licensePlate" required>
            <button type="submit">Add user</button>
    </div>
</template>
<script setup lang="ts">
//addUser
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const name = ref('')
const surname = ref('')
const username = ref('')
const password = ref('')
const rfid = ref('')
const licensePlate = ref('')
const addUser = () => {
    store.dispatch('addUser', {
        name: name.value,
        surname: surname.value,
        username: username.value,
        password: password.value,
        rfid: rfid.value,
        licensePlate: licensePlate.value
    })
    router.push('/admin')
}
</script>
<style scoped lang="scss">
    .container {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    label {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    input {
        margin-left: 10px;
    }
    button {
        margin-top: 10px;
        margin-bottom: 10px;
    }