import data from '../../data/items.json'

export function getSpecificProduct(url: string):
  | {
      id: number
      name: string
      description: string
      price: number
      category: string
      stock: number
      image_url: string
      url: string
    }
  | undefined {
  return data.find((product) => product.url === url)
}
