<!--form for admin to add new users-->

<template>
    <div class="container">
        <h3>Add new user</h3>
        <form @submit.prevent="addUser">
            <label for="name">Name:</label>
            <input type="text" id="name" required>
            <label for="surname">Surname:</label>
            <input type="text" id="surname" required>
            <label for="username">Username:</label>
            <input type="text" id="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" required>
            <label for="rfid">RFID:</label>
            <input type="text" id="rfid" required>
            <label for="licensePlate">License plate:</label>
            <input type="text" id="licensePlate" required>
            <button type="submit">Add user</button>
        </form>
    </div>
</template>
<script setup lang="ts">
//addUser
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const name = ref('')
const surname = ref('')
const username = ref('')
const password = ref('')
const rfid = ref('')
const licensePlate = ref('')
const addUser = () => {
    //add user to database (backend)
    const user = {
        name: name.value,
        surname: surname.value,
        username: username.value,
        password: password.value,
        rfid: rfid.value,
        licensePlate: licensePlate.value
    }
    //print user to console
    console.log(user)
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
</style>