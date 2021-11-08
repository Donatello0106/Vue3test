import useTaskController from '@/controllers/useTaskController'
import { toNumber } from '@vue/shared'
import { useRouter } from 'vue-router'

export default function addTask() {
  const taskManage = useTaskController()
  const router = useRouter()

  const task = {
    title: '',
    description: '',
    budgetNum: '',
    budget: {
      value: '',
      currency: 'USD',
    },
    platforms: ['INSTAGRAM'],
    filesIds: [''],
  }

  const clear = () => {
    task.title = ''
    task.description = ''
  }

  // const validate = (task: TaskToAdd) => {
  //     return task;
  // }

  const addTask = () => {
    console.log(task)
    task.budget.value = toNumber(task.budgetNum)
    // if (validate(task)) {
    taskManage
      .addTask(task)
      .then(() => {
        router.push({ name: 'Dashboard' })
      })
      .catch(() => {
        clear()
      })
    // }
  }

  return {
    task,
    addTask,
    clear,
  }
}
