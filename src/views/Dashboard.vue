<template>
  <main class="dashboard">
    <h1 class="page-title">Dashboard view</h1>

    <h2 style="text-align: center">My Profile</h2>

    <div>
      <h4>marketer: {{ getMyProfile.marketer.firstName + getMyProfile.marketer.lastName }}</h4>
      <h4>influencer: {{ getMyProfile.influencer.firstName + getMyProfile.influencer.lastName }}</h4>
    </div>

    <hr />
    <table class="table">
      <thead>
        <th>title</th>
        <th>description</th>
        <th>budget</th>
        <th>proposalCount</th>
        <th>platforms</th>
        <th>addedTime</th>
      </thead>
      <tbody>
        <tr v-for="item in getMyTasks.value.tasks" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.budget.value }}</td>
          <td>{{ item.proposalCount }}</td>
          <td>{{ item.platforms }}</td>
          <td>{{ item.addedTime }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script lang="ts">
import useTaskController from '@/controllers/useTaskController'
import useUserStore from '@/store/user'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    const { getMyProfile } = useUserStore()
    const { getMyTasks } = useTaskController()
    console.log(getMyProfile.value?.marketer.firstName)
    return {
      getMyProfile,
      getMyTasks,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/Dashboard';
</style>
