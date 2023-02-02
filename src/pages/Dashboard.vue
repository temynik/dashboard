<template>
	<div class="container is-fluid">
		<section class="section pt-0 pb-0">
			<h1 class="title is-2">Дашборд ученика <span class="rate">
				<b-rate v-model="rate" :max="maxs" :show-score="score"></b-rate>
				</span>
			</h1>
		</section>
		<UserData/>
		<StatData/>
	</div>
</template>

<script>
import UserData from '../components/UserData.vue'
import StatData from '../components/StatData.vue'

export default {
	name: 'DashBoard',
	components: {UserData, StatData},
	props: {},
	data() {
		return {
			rate: 4.1,
			maxs: 5,
			score: true,
		}
	}
}
</script>


<style lang="scss" scoped>
	h1 {
		display: flex;
		align-items: flex-start;
		.rate {
			margin-left: 5px;
			margin-top: -5px;
		}
	}
</style>