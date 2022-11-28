export class Exception {
  code = 400;
  message = "";

  constructor({ code, message }: { code?: number; message: string }) {
    this.message = message;
    code ? (this.code = code) : null;
  }
}
