declare var Object: any;
import { Injectable, Inject } from '@angular/core';
import { STORAGE_TOKEN, StorageType } from '@/storage';
import { SDKToken } from '../../models/BaseModels';

@Injectable()
export class LoopBackAuth {
  private token: SDKToken = new SDKToken();

  protected prefix = '$LoopBackSDK$';

  constructor(@Inject(STORAGE_TOKEN) protected storage: StorageType) {
    this.token.id = this.load('id');
    this.token.user = this.load('user');
    this.token.userId = this.load('userId');
    this.token.created = this.load('created');
    this.token.ttl = this.load('ttl');
    this.token.rememberMe = this.load('rememberMe');
  }

  public setRememberMe(value: boolean): void {
    this.token.rememberMe = value;
  }

  public setUser(user: any) {
    this.token.user = user;
    this.save();
  }

  public setToken(token: SDKToken): void {
    this.token = Object.assign({}, this.token, token);
    this.save();
  }

  public getToken(): SDKToken {
    return <SDKToken>this.token;
  }

  public getAccessTokenId(): string {
    return this.token.id;
  }

  public getCurrentUserId(): any {
    return this.token.userId;
  }

  public getCurrentUserData(): any {
    return typeof this.token.user === 'string'
      ? JSON.parse(this.token.user)
      : this.token.user;
  }

  public save(): boolean {
    const today = new Date();
    const expires = new Date(today.getTime() + this.token.ttl * 1000);
    this.persist('id', this.token.id, expires);
    this.persist('user', this.token.user, expires);
    this.persist('userId', this.token.userId, expires);
    this.persist('created', this.token.created, expires);
    this.persist('ttl', this.token.ttl, expires);
    this.persist('rememberMe', this.token.rememberMe, expires);
    return true;
  }

  protected load(prop: string): any {
    return this.storage.get(`${this.prefix}${prop}`);
  }

  public clear(): void {
    Object.keys(this.token).forEach((prop: string) =>
      this.storage.remove(`${this.prefix}${prop}`)
    );
    this.token = new SDKToken();
  }

  protected persist(prop: string, value: any, expires?: Date): void {
    try {
      this.storage.set(
        `${this.prefix}${prop}`,
        typeof value === 'object' ? JSON.stringify(value) : value,
        this.token.rememberMe ? expires : null
      );
    } catch (err) {
      console.error('Cannot access local/session storage:', err);
    }
  }
}
