export abstract class AbstractSocket {
  connect(url: string, options?: any): any {}
  disconnect(): void {}
  isConnected(): boolean {
    return false;
  }
}
