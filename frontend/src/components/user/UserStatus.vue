<template>
    <div class="status">
        <h3>Status</h3>
        <p>Current status: {{ userStore.user.status }}</p>
        <p>Time of entering: {{ userStore.user.timeOfEntering }}</p>
        <p>Time of leaving: {{ userStore.user.timeOfLeaving }}</p>
        <p>Time of using: {{ userStore.user.timeOfUsing }}</p>
    </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/src/stores/UserStore.ts';
import { onMounted} from "vue";

const userStore = useUserStore();

onMounted(async () => {
    await userStore.getUser();
});
</script>
<style scoped lang="scss">
    .status {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .status__current {
        color: #4CAF50;
    }
</style>