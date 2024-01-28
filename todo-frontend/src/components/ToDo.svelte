<script>
	import AddPanel from './AddPanel.svelte';
	import ListElement from './ListElement.svelte';

	let items = [];
	let lastId = 1;

	async function getData() {
		const data = await fetch('http://localhost:3000/task');
		return data.data;
	}

  async function updateTodoList() {
    items = await getData()
    console.log("update");
  }

	async function postData(data) {
		return await fetch('http://localhost:3000/task', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
	}
	async function changeData(newData) {
		return await fetch('http://localhost:3000/task', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newData)
		});
	}

	async function deleteData(id) {
		return await fetch(`http://localhost:3000/task/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	function createTask(event) {
		const item = {
			id: lastId++,
			task_text: event.detail.task_text,
			checked: false
		};
		const data = {
			task_text: item.task_text,
			checked: item.checked
		};
		postData(data);
		items.push(item);
		items = items;
		console.log(items);
	}

	function changeTask(event) {
		const item = items.find((i) => i.id === event.detail.id);
		item.checked = !item.checked;
		items = items;
		const newData = {
			id: event.detail.id,
			checked: item.checked
		};
		console.log(newData);
		changeData(newData);
	}

	function deleteTask(event) {
		const index = items.findIndex((i) => i.id === event.detail.id);
		if (index !== -1) {
			items.splice(index, 1);
			for (let i = index; i < items.length; i++) {
				items[i].id = i + 1;
			}
		}

		items = items;
		deleteData(event.detail.id);
	}
</script>

<div class="todo">
	<AddPanel on:add={createTask} />

	<div class="task">
		<ul class="task__list">
			{#each items as item}
				<ListElement
					task_text={item.task_text}
					id={item.id}
					checked={item.checked}
					on:change={changeTask}
					on:remove={deleteTask}
				/>
			{/each}
		</ul>
	</div>
</div>

<style>
	.todo {
		background-color: #e6e6e6;
		border: #e6e6e6 solid 1px;
		padding-left: 60px;
		padding-top: 44px;
		padding-right: 60px;
		padding-bottom: 44px;
		border-radius: 15px;
	}
	.task {
		width: 525px;
		height: 621px;
		border: none;
		border-radius: 15px;
		background-color: white;
		margin-top: 22px;
	}
	.task__list {
		display: flex;
		flex-direction: column;
		list-style-type: none;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding: 12px;
	}
</style>
