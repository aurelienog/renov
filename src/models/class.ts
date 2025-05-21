import { ContactFormData } from "./types";

export class ValidationError extends Error {
  response: {
    data: {
      errors: Partial<Record<keyof ContactFormData, string>>
    }
  };

  constructor(errors: Partial<Record<keyof ContactFormData, string>>) {
    super('Validation error');
    this.name = 'ValidationError';
    this.response = {
      data: { errors }
    };
  }
}