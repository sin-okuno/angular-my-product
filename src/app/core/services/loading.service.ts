import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _isLoading: boolean;
  constructor() {
    this._isLoading = false;
  }

  public SetIsLoading = (val: boolean) => {
    this._isLoading = val;
  };

  public IsLoading = () => {
    return this._isLoading;
  };
}
