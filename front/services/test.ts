import useConsul from "~/composables/useConsul"
import { useTest } from "#imports"

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


  async callWithTestComposable() {
    console.log('in callWithTestComposable function')
    // const transform = (response: unknown) => {
    //   console.log('response from transform function in useTest Composable', response)
    // }
    await useTest(this.#paths['test'])
  }
}