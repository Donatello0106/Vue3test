import { computed, Ref, ref } from 'vue'
import api from '@/services/api'
import { UserPublicInfo } from '@/types/user.model'

const { setMyProfile } = useUserStore()
const myProfile: Ref<UserPublicInfo | null> = ref(null)

const getMyProfileRequest = async () => {
  return await api.get<UserPublicInfo>('users/me').then((response) => {
    setMyProfile(response.data)
    return response.data
  })
}
getMyProfileRequest()
export default function useUserStore() {
  const getMyProfile = computed(() => myProfile.value)
  const setMyProfile = (data: UserPublicInfo | null) => {
    myProfile.value = data
  }
  const reset = () => {
    setMyProfile(null)
  }

  return {
    getMyProfile,
    setMyProfile,
    reset,
  }
}
