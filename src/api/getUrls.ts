import { ref } from 'vue'

type Urls = Array<{
  id: number
  name: string
  description: string
  slug: string
  image_url: string
  icon_url: string
}>

export function getAllUrls(url: string) {
  const data = ref<Urls>([])
  const error = ref(null)

  fetch(url)
    .then((res) => res.json())
    .then((response) => (data.value = response))
    .catch((err) => (error.value = err))

  return { data, error }
}
