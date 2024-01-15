<template>
    <div class="status">
        <h3>Free parking spaces</h3>
        <p>Number of free parking spaces: {{ parkingStore.parking.freeParkingSpaces }}</p>
    </div>
</template>
<script setup lang="ts">
import { useParkingStore } from '@/stores/ParkingStore';
import { onMounted} from "vue";

const parkingStore = useParkingStore();

onMounted(async () => {
    await parkingStore.getParking();
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