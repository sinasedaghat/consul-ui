class Agent {
  #paths: {[key:string]: string}

  constructor() {
    this.#paths = {
      hostInformation: '/agent/host'
    }
  }

  async hostInformation() {
    // const transform = (response: unknown) => {
    //   console.log('response from transform function in createService() in test.ts class', response)
    //   return response
    //   // return {
    //   //   memory: response['Memory'],
    //   //   cpu: response['CPU'],
    //   //   host: response['Host'],
    //   //   disk: response['Disk'],
    //   // }
    // }
    // return await useHTTPRequest(this.#paths.hostInformation, 'GET', transform)
    return await useRequest(this.#paths.hostInformation, {
      method: 'GET', 
      // transform: (response) => {
      //   transform(response)
      // }
    })
  }

}

export default new Agent()