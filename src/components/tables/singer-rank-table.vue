<template>
    <div style="width: 100%">
        <div v-loading="loading" class="center-box" style="width: 600px">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column label="排名" align="center">
                    <template slot-scope="scope">
                        {{ scope.$index+1 }}
                    </template>
                </el-table-column>
                <el-table-column label="歌手" align="center">
                    <template slot-scope="scope">
                        {{ scope.row.singer_name }}
                    </template>
                </el-table-column>
                <el-table-column label="歌曲数量" align="center">
                    <template slot-scope="scope">
                        {{ scope.row.song_cnt }}
                    </template>
                </el-table-column>
                <el-table-column label="评论总数" align="center">
                    <template slot-scope="scope">
                        {{ scope.row.comment_cnt }}
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "singer-rank-table",
        data () {
            return {
                loading: false,
                tableData: [{
                    singer_id: 31701030,
                    singer_name: 'Keadin Zhou',
                    song_cnt: 233,
                    comment_cnt: 31701030
                }]
            }
        },
        methods: {
            getData () {
                const that = this
                that.loading = true
                that.$http.get('http://10.66.2.161:5000/singer')
                    .then(data => {
                        that.tableData = data.data.data
                        that.loading = false
                    })
                    .catch(function (error) {
                        if (error.response) {
                            alert(error.response)
                        }
                    })
            }
        },
        created () {
            this.getData()
        }
    }
</script>

<style scoped>
    .center-box{
        position: relative;
        left: 50%;
        transform: translate(-50%,0);
    }
</style>