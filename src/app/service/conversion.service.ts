import { Injectable } from '@angular/core';

@Injectable()
export class ConversionService {
  public _compareValidator: Array<{ id: string; name: string }> = [];

  constructor() {}

  public convertEnumToKeyValuePairObject(inputEnum: any): any {
    for (var n in inputEnum) {
      this._compareValidator.push({ id: <string>inputEnum[n], name: n });
    }
    return this._compareValidator;
  }
}
