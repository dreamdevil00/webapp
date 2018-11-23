import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor() {}

  log(...args) {
    console.log(...args);
  }
  error(...args) {
    console.error(...args);
  }

  warn(...args) {
    console.warn(...args);
  }
}
