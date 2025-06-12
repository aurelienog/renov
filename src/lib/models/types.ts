import { ComponentPropsWithoutRef } from "react";

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};


export type ErrorResponse = {
  message: string;
  response: {
    data: {
      errors: Record<string, string>;
    };
  };
};

export type ButtonProps = ComponentPropsWithoutRef<'button'>