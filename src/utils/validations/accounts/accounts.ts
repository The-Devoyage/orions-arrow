import * as Yup from "yup";
import { Shape } from "../../../types";
import {
  LoginInput as ILoginInput,
  RegisterInput as IRegisterInput,
  ResetCodeInput as IResetCodeInput,
  ResetPasswordInput as IResetPasswordInput,
  VerifyEmailInput as IVerifyEmailInput,
} from "../../../types/generated";

export const LoginInput = Yup.object().shape<Shape<ILoginInput>>({
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Email is required."),
  password: Yup.string().required("Password is required."),
});

export const RegisterInput = Yup.object().shape<Shape<IRegisterInput>>({
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Email is required."),
  password: Yup.string().min(8, "Must be at least 8 characters.").optional(),
});

export const ResetCodeInput = Yup.object().shape<Shape<IResetCodeInput>>({
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Email is required."),
});

export const ResetPasswordInput = Yup.object().shape<
  Shape<IResetPasswordInput>
>({
  code: Yup.string().required("Activation code is required."),
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Email is required."),
  password: Yup.string()
    .min(8, "Must be at least 8 characters.")
    .required("Password is required."),
});

export const VerifyEmailInput = Yup.object().shape<Shape<IVerifyEmailInput>>({
  code: Yup.string().required("Activation code is required."),
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Email is required."),
});
