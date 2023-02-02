<template>
	<div id="app">
		<Dashboard />
	</div>
</template>

<script>
import Dashboard from './pages/Dashboard.vue'

export default {
	name: 'App',
	components: {
		Dashboard
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}
html {
	height: auto;
	min-height: 100%;
	background: rgb(34,193,195);
	background: linear-gradient(0deg, rgba(34,193,195,0.3225665266106442) 0%, rgba(45,192,253,0.020045518207282953) 100%);
}
</style>
