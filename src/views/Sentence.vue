<template>
    <div>
        <div style="margin: 100px"></div>
        <sentence-table :word="$route.params.word"></sentence-table>
        <div style="margin: 100px"></div>
    </div>
</template>

<script>
    import SentenceTable from '@/components/tables/sentence-table'
    export default {
        name: "Sentence",
        components: {
            'sentence-table': SentenceTable
        }
    }
</script>

<style scoped>

</style>