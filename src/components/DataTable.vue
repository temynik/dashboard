<template>
    <b-table 
			:striped="isStriped"
            :hoverable="isHoverable" 
			:data="items" 
			:columns="columns">
	</b-table>
</template>

<script>
    export default {
		name: 'DataTable',
		props: {
			items: {
				type: Array,
				required: false
			},
			columns: {
				type: Array,
				required: false
			},
		},
		data() {
			return {
				isStriped: true,
                isHoverable: true
			}
		}
    }
</script>