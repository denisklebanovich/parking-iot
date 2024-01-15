<template>
    <!--history of all usages of parking by all users-->
    <div class="history">
        <h3>History</h3>
        <!--table of all usages from the last one to the first-->
        <table>
            <tr>
                <th>Username</th>
                <th>RFID</th>
                <th>Time of entering</th>
                <th>Time of leaving</th>
                <th>Time in the parking</th>
            </tr>
            <tr>
                <td>John</td>
                <td>123456789</td>
                <td>14.01.2024 09:00</td>
                <td>14.01.2024 18:00</td>
                <td>9 hours</td>
            </tr>
            <tr>
                <td>John</td>
                <td>123456789</td>
                <td>14.01.2024 09:00</td>
                <td>14.01.2024 18:00</td>
                <td>9 hours</td>
            </tr>
        </table>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
    .history {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    table {
        border-collapse: collapse;
        width: 100%;
    }
    th, td {
        text-align: left;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    th {
        background-color: #4CAF50;
        color: white;
    }
</style>