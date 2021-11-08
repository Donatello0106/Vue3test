<template>
  <main class="task-create">
    <h1 class="page-title">Task Create view</h1>
    <form class="login-form" @submit.prevent="addTask">
      <label class="label">
        Title:
        <input v-model="task.title" class="text-input" type="text" />
      </label>

      <label class="label">
        Description:
        <input v-model="task.description" class="text-input" type="text" />
      </label>

      <label class="label">
        Budget:
        <input v-model="task.budgetNum" class="text-input" type="text" />
      </label>

      <!-- <label class="label">
        Platform:
        <select class="text-input" v-model="task.platform">
          <option>Instagram</option>
        </select>
      </label> -->

      <button class="button">Add Task</button>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTask from '@/components/task/task'

export default defineComponent({
  name: 'TaskCreate',
  setup() {
    const { task, addTask } = useTask()

    return {
      task,
      addTask,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/TaskCreate';
</style>

