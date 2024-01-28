<script>
	import ToDo from '../components/ToDo.svelte';
</script>

<div class="wrapper">
	<ToDo />
</div>

<style>
	:global(body) {
		margin: 0;
	}
	.wrapper {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 80px;
		padding-bottom: 80px;
	}
</style>
