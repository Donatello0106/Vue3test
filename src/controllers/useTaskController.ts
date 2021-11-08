import api from '@/services/api'
import { computed, Ref, ref } from 'vue'
import { TaskResponse, AddTask } from '@/types/task.model'

const { setMyTasks } = useTaskController()
const myTasks: Ref<TaskResponse | null> = ref(null)

const getMyTasksRequest = async () => {
  return await api.get<TaskResponse>('tasks/my?limit=5').then((response) => {
    setMyTasks(response.data)
    return response.data
  })
}
getMyTasksRequest()

export default function useTaskController() {
  const addTask = async (task: AddTask) => {
    return await api.post<TaskResponse>('tasks', task).then(() => {
      getMyTasksRequest()
    })
  }
  const setMyTasks = (data: TaskResponse | null) => {
    myTasks.value = data
  }
  const getMyTasks = computed(() => myTasks)

  return {
    addTask,
    setMyTasks,
    getMyTasks,
  }
}
