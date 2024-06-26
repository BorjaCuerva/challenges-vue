import { ref } from 'vue'

export type Items = Array<{
  id: number
  name: string
  description: string
  price: number
  image_url: string
  category: string
  stock: number
  url: string
}>

export function getAllItems(url: string) {
  const data = ref<Items>([])
  const error = ref(null)

  fetch(url)
    .then((res) => res.json())
    .then((response) => (data.value = response))
    .catch((err) => (error.value = err))

  return { data, error }
}
