<template>
<ParkingHistory></ParkingHistory>
<AdminAddUser></AdminAddUser>
</template>
<script setup lang="ts">
import AdminAddUser from '@/components/admin/AdminAddUser.vue'
import ParkingHistory from '@/components/admin/ParkingHistory.vue'
import { useUserStore } from '@/stores/UserStore'
import { onMounted } from 'vue'

const userStore = useUserStore();

onMounted(async () => {
  await userStore.getUser();
});
</script>
<style scoped lang="scss">
.container {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>