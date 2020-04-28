import { FormControl } from '@angular/forms';

export class ImageValidator {
  static imageSizeValidator(maxSize: number) {
    return function (input: FormControl) {
      if (input.value) {
        return input.value.size > maxSize ? { maxSize: true } : null;
      }
      return null;
    };
  }

  static imageExtensionValidator(whiteListImageExtension: Array<string>) {
    return function (input: FormControl) {
      if (input.value) {
        return whiteListImageExtension.includes(input.value.type) ? null : { extension: true };
      }
      return null;
    };
  }
} 