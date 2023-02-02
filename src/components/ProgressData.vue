<template>
    <div>
        <p class="mb-5 mt-5">Ниже представлен уровень (прогресс до следующего):</p>
        <b-progress 
            :value="25" 
            size="is-medium"
            type="is-danger"
            show-value
            >
            25% / 100% <span style="color: red">(недостаточно выполнено)</span>
        </b-progress>
        <b-progress format="percent" :max="100" size="is-medium">
            <template #bar>
                <b-progress-bar :value="30" show-value>30% (выполнено)</b-progress-bar>
                <b-progress-bar :value="20" type="is-primary" show-value>20% (в работе)</b-progress-bar>
                <b-progress-bar :value="50" type="is-warning" show-value>50% (на проверке)</b-progress-bar>
            </template>
        </b-progress>
        <b-progress 
            :value="100"
            type="is-success"
            size="is-medium" 
            show-value
        >
            100% (выполнено)
        </b-progress>
    </div>
</template>

<script>
export default {
    name: 'ProgressData',
    props: {},
    data() {
        return {
            isStriped: true,
            isHoverable: true
        }
    }
}
</script>