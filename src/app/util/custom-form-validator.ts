export class CustomFormValidator {

  static matchPassword(group): any {
    const password = group.controls.password;
    const confirm = group.controls.repeatPassword;
    if (password.pristine || confirm.pristine) {

      return null;
    }
    group.markAsTouched();
    if (password.value === confirm.value) {

      return null;
    } else {

      group.controls.repeatPassword.setErrors({matchPassword: true});
    }
  }
}
