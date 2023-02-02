<template>
	<div class="container is-fluid">	
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
}
</script>


<style scoped>

</style>