import pkg from 'pg';
const { Client } = pkg;

export const client = new Client({
  user: 'postgres', // Пользователь базы данных
  host: 'localhost', // Хост базы данных (обычно localhost)
  database: 'fullstack_db', // Название базы данных, которую мы создали
  password: 'admin', // Пароль пользователя postgres
  port: 5432, // Порт PostgreSQL (по умолчанию 5432)
})
await client.connect()

export async function getTodos() {
  return client.query('SELECT * FROM post')
}

export async function createTask(task_text, checked) { 
  return client.query(`INSERT INTO post (task_text, checked) values ($1, $2) RETURNING *`, [task_text, checked])
}

export async function changeTask(id, checked) {
  return client.query("UPDATE post SET checked = $1 WHERE id = $2", [checked,id])
}

export async function deleteTask(id) {
  return client.query("DELETE FROM post WHERE id = $1", [id])
}