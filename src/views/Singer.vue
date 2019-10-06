<template>
    <div>
        <div style="margin: 100px"></div>
        <singer-rank-table></singer-rank-table>
        <div style="margin: 100px"></div>
    </div>
</template>

<script>
    import SingerRankTable from '@/components/tables/singer-rank-table'
    export default {
        name: "Singer",
        components: {
            'singer-rank-table': SingerRankTable
        }
    }
</script>

<style scoped>

</style>