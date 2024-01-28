<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let task_text = 'text';
	export let checked = false;
	export let id = 0;

	function changeTask() {
		dispatch('change', { id });
	}

	function deleteTask() {
		dispatch('remove', { id });
	}
</script>

<li class="list__element" class:list__element-submit={checked}>
	<input type="checkbox" class="checkbox" {checked} on:change={changeTask} />
	<span class="text-item"> {task_text}</span>
	<button class="button__delete-item" on:click={deleteTask}></button>
</li>
<style>
	.list__element {
		width: 474px;
		height: 85px;
		border-radius: 10px;
		background-color: #ffebeb;
		border: none;
		margin-top: 12px;
		display: flex;
		font-size: 18px;
		position: relative;
	}
	.list__element-submit {
		background-color: #ebffed;
		height: 85px;
		width: 474px;
		border-radius: 10px;
		margin-top: 12px;
		display: flex;
		font-size: 18px;
		position: relative;
	}
	.checkbox {
		height: 25px;
		width: 25px;
		margin-left: 20px;
		margin-top: 30px;
		border: 1px solid #000000;
	}
	.text-item {
		display: flex;
		text-decoration: none;
		white-space: nowrap;
		font-size: 22px;
		margin-left: 17px;
		align-items: center;
		max-width: 350px;
		width: 100%;
	}
	.button__delete-item {
		width: 29px;
		height: 32px;
		margin-left: 10px;
		margin-top: 26px;
		background-image: url(../Vector.png);
		border: none;
	}
</style>
