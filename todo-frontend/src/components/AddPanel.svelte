<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let input = '';

	function createTask() {
		if (input.length) {
			dispatch('add', { task_text: input });
		} else {
			alert('Поле ввода пустое!');
		}
		input = '';
	}
</script>

<div class="add">
	<input class="input" type="text" placeholder="Название задачи" bind:value={input} />
	<button class="button__add-task" on:click={createTask}>Добавить</button>
</div>

<style>
	.add {
		display: flex;
	}
	.input {
		background-color: white;
		border-radius: 10px 0px 0px 10px;
		width: 359px;
		height: 66px;
		border: none;
		outline: none;
		font-size: 26px;
		padding-left: 14px;
	}
	.button__add-task {
		width: 160px;
		/*height: 67px;*/
		font-size: 18px;
		line-height: 21.78px;
		text-align: center;
		background-color: #fbcc28;
		border-radius: 0px 10px 10px 0px;
		border: none;
	}
	.button__add-task:hover {
		cursor: pointer;
	}
</style>
