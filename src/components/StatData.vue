<template>
    <section class="section pt-3">
        <div class="columns box">
            <div class="column">
                <b-tabs v-model="activeTab" @input="activeTab == 0 ? false : getTable()">	
                    <b-tab-item label="Статистика">
                        <ProgressData/>
                        <vue-circle
                            :progress="50"
                            :size="100"
                            :reverse="false"
                            line-cap="round"
                            :fill="fill"
                            empty-fill="rgba(0, 0, 0, .1)"
                            :animation-start-value="0.0"
                            :start-angle="0"
                            insert-mode="append"
                            :thickness="5"
                            :show-percent="true">
                            <p>Slot!</p>
                        </vue-circle>
                    </b-tab-item>

                    <b-tab-item label="Просмотренные задачи">
                        <DataTable :items="tableItems.items" :columns="tableItems.columns"/>
                    </b-tab-item>

                    <b-tab-item label="Решёные задачи">
                        <DataTable :items="tableItems.items" :columns="tableItems.columns"/>
                    </b-tab-item>

                    <b-tab-item label="Сохраненные в избранное">
                        <DataTable :items="tableItems.items" :columns="tableItems.columns"/>
                    </b-tab-item>
                </b-tabs>
            </div>
        </div>
    </section>
</template>

<script>
import DataTable from './DataTable.vue'
import ProgressData from './ProgressData.vue'
import VueCircle from 'vue2-circle-progress'

export default {
    name: 'StatData',
    components: {DataTable, ProgressData, VueCircle},
    props: {},
    data() {
        return {
            activeTab: 0,
            tableItems: [],
            fill : { gradient: ["red", "green", "blue"] }
        }
    },
    methods: {
        getTable() {
            return this.$http({
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                url: `/mocks/table${this.activeTab}.json`,
            }).then(res => {
                this.tableItems = res.data.data
            })
        }
    }
}
</script>