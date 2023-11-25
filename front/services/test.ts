export default class Test {
  private _paths: {
    test: 'internal/ui/services'
  }

  #createUrl(url: string): void {
    console.log(this._paths[url])
  }
}