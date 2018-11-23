export class LoopBackConfig {
  private static path = '//0.0.0.0:3000';
  private static version: string | number = 'api/v1';
  private static authPrefix = '';

  static setApiVersion(version: string = 'api'): void {
    LoopBackConfig.version = version;
  }

  static getVersion(): string | number {
    return LoopBackConfig.version;
  }

  static setBaseUrl(url: string = '/'): void {
    LoopBackConfig.path = url;
  }

  static getBaseUrl(): string {
    return LoopBackConfig.path;
  }

  static setAuthPrefix(prefix: string = ''): void {
    LoopBackConfig.authPrefix = prefix;
  }

  static getAuthPrefix(): string {
    return LoopBackConfig.authPrefix;
  }
}
