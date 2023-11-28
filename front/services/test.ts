import useConsul from "~/composables/useConsul"

export default class Test {
  #paths: {[key:string]: string}
  

  constructor() {
    this.#paths = {
      test: 'internal/ui/services'
    }
  }

  createUrl(url: string): void {
    console.log(this.#paths[url])

  }

  async callComposable() {
    const path = ref(`${import.meta.env.VITE_CONSUL_URL}/v1/internal/ui/services?dc=dc1`)
    const data = await useConsul(path)
    console.log('data from test service class', data)
    return data
  }
}