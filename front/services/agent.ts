class Agent {
  #paths: {[key:string]: string}

  constructor() {
    this.#paths = {
      hostInformation: '/agent/host',
      configuration: '/agent/self',
      
    }
  }

  async hostInformation() {
    const transform = (response: unknown) => {
      console.log('response from transform function in hostInformation() in agent.ts class', response)
      return response
      // return {
      //   memory: response['Memory'],
      //   cpu: response['CPU'],
      //   host: response['Host'],
      //   disk: response['Disk'],
      // }
    }
    // return await useHTTPRequest(this.#paths.hostInformation, 'GET', transform)
    return await useRequest(this.#paths.hostInformation, {
      method: 'GET', 
      transform: (response) => {
        transform(response)
      }
    })
  }

  async configuration() {
    const transform = (response: unknown) => {
      console.log('response from transform function in configuration() in agent.ts class', response)
      // return 'tfrtft'
      return response.hasOwnProperty('Config') ? response['Config'] : null
    }
    // return await useHTTPRequest(this.#paths.hostInformation, 'GET', transform)
    return await useRequest(this.#paths.configuration, {
      method: 'GET', 
      transform: (response) => transform(response)
    })
  }

  async configurationT2() {
    return await useRequest(this.#paths.configuration, {
      method: 'GET',
    })
  }

}

export default new Agent()