import { ref } from 'vue'

type Items = Array<{
  id: number
  name: string
  description: string
}>

export function useFetch(url: string) {
  const data = ref<Items>([])
  const error = ref(null)

  fetch(url)
    .then((res) => res.json())
    .then((response) => (data.value = response))
    .catch((err) => (error.value = err))

  return { data, error }
}
