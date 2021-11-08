import api from '@/services/api'
import useUserStore from '@/store/user'
import { UserResponseWithJWT, UserToLogin } from '@/types/user.model'
import useAuthStore from '@/store/auth'
import useResetStore from '@/store/reset'

const { setMyProfile } = useUserStore()
const auth = useAuthStore()
const reset = useResetStore()

const login = async (user: UserToLogin) => {
  return await api.post<UserResponseWithJWT>('users/auth', user).then((response) => {
    auth.isAuthenticated.value = true
    // localStorage.setItem('userData', JSON.stringify(response.data.user))
    setMyProfile(response.data.user)
    return response
  })
}

const logout = async () => {
  return await api.post<Record<string, never>>('users/auth/logout').finally(() => {
    reset.reset()
  })
}

export default function useUserAuthentificationController() {
  return {
    login,
    logout,
  }
}
