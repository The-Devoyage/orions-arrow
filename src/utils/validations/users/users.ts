import * as Yup from "yup";
import { Shape } from "../../../types";
import {
  AddressInput as IAddressInput,
  CreateUserInput as ICreateUserInput,
  DeleteUsersInput as IDeleteUsersInput,
  GetUserByMembershipFilterInput,
  InviteUserInput as IInviteUserInput,
  LocalMembershipInput,
  MembershipInput as IMembershipInput,
  UpdateUserInput as IUpdateUserInput,
  UserFieldFiltersInput as IUserFieldFiltersInput,
  UserInput as IUserInput,
} from "../../../types/generated";
import { DateFieldFilter, PhoneRegex, StringFieldFilter } from "../common";

export const UserFieldFiltersInput = Yup.object().shape<
  Shape<IUserFieldFiltersInput>
>({
  _id: Yup.array().of(StringFieldFilter),
  created_by: Yup.array().of(StringFieldFilter),
  createdAt: Yup.array().of(DateFieldFilter),
  email: Yup.array().of(StringFieldFilter),
  first_name: Yup.array().of(StringFieldFilter),
  image: Yup.array().of(StringFieldFilter),
  last_name: Yup.array().of(StringFieldFilter),
  phone: Yup.array().of(StringFieldFilter),
  updatedAt: Yup.array().of(DateFieldFilter),
  memberships: Yup.array().of(
    Yup.object().shape<Shape<GetUserByMembershipFilterInput>>({
      _id: StringFieldFilter,
      account: StringFieldFilter,
      createdAt: StringFieldFilter,
      default: StringFieldFilter,
      role: StringFieldFilter,
      status: StringFieldFilter,
      updatedAt: DateFieldFilter,
    })
  ),
});

export const DeleteUserInput = Yup.object().shape<Shape<IDeleteUsersInput>>({
  query: UserFieldFiltersInput,
});

export const AddressInput = Yup.object().shape<Shape<IAddressInput>>(
  {
    lineOne: Yup.string().when(["lineTwo", "city", "country", "state", "zip"], {
      is: (
        lineTwo: string,
        city: string,
        country: string,
        state: string,
        zip: string
      ) => lineTwo || city || country || state || zip,
      then: Yup.string().required("Please enter address.").nullable(),
      otherwise: Yup.string()
        .min(3, "Please provide more.")
        .optional()
        .nullable(),
    }),
    lineTwo: Yup.string().nullable(),
    city: Yup.string().when(["lineOne", "lineTwo", "country", "state", "zip"], {
      is: (
        lineTwo: string,
        lineOne: string,
        country: string,
        state: string,
        zip: string
      ) => lineTwo || lineOne || country || state || zip,
      then: Yup.string()
        .min(3, "Please prvovide more.")
        .required("Please select city.")
        .nullable(),
      otherwise: Yup.string().optional().nullable(),
    }),
    country: Yup.string().when(["lineOne", "lineTwo", "city", "state", "zip"], {
      is: (
        lineTwo: string,
        lineOne: string,
        city: string,
        state: string,
        zip: string
      ) => lineTwo || lineOne || city || state || zip,
      then: Yup.string().required("Please select country.").nullable(),
      otherwise: Yup.string().optional().nullable(),
    }),
    state: Yup.string().when(["country"], {
      is: (country: string) => country === "US",
      then: Yup.string().required("Please select state.").nullable(),
      otherwise: Yup.string().optional().nullable(),
    }),
    zip: Yup.string().when(["lineOne", "lineTwo", "city", "country", "state"], {
      is: (
        lineTwo: string,
        lineOne: string,
        city: string,
        country: string,
        state: string
      ) => lineTwo || lineOne || city || country || state,
      then: Yup.string().required("Please enter zip."),
      otherwise: Yup.string().optional().nullable(),
    }),
  },
  [
    ["lineOne", "lineTwo"],
    ["lineOne", "city"],
    ["lineTwo", "city"],
    ["lineOne", "country"],
    ["lineTwo", "country"],
    ["city", "country"],
    ["lineOne", "state"],
    ["lineTwo", "state"],
    ["city", "state"],
    ["country", "state"],
    ["lineOne", "zip"],
    ["lineTwo", "zip"],
    ["city", "zip"],
    ["state", "country"],
    ["country", "zip"],
  ]
);

export const MembershipInput = Yup.object().shape<Shape<IMembershipInput>>({
  account: Yup.string().required("Please select membership account."),
  default: Yup.bool().optional(),
  role: Yup.string().optional(),
  status: Yup.string().optional(),
  local: Yup.object().shape<Shape<LocalMembershipInput>>({
    image: Yup.string().optional().nullable(),
    address: AddressInput.nullable(),
    phone: PhoneRegex.optional().nullable(),
    last_name: Yup.string().optional().nullable(),
    first_name: Yup.string().optional(),
    about: Yup.string()
      .min(10, "Please write a bit more.")
      .optional()
      .nullable(),
  }),
});

export const UserInput = Yup.object().shape<Shape<IUserInput>>({
  email: Yup.string().email("Please provide a valid email.").optional(),
  about: Yup.string().optional().nullable(),
  first_name: Yup.string().optional().nullable(),
  last_name: Yup.string().optional().nullable(),
  phone: PhoneRegex.optional().nullable(),
  address: AddressInput.nullable(),
  image: Yup.string().optional(),
  memberships: MembershipInput.notRequired().default(undefined),
});

export const CreateUserInput = Yup.object().shape<Shape<ICreateUserInput>>({
  payload: UserInput,
});

export const InviteUserInput = Yup.object().shape<Shape<IInviteUserInput>>({
  payload: UserInput,
  query: UserFieldFiltersInput,
});

export const UpdateUserInput = Yup.object().shape<Shape<IUpdateUserInput>>({
  query: UserFieldFiltersInput,
  payload: UserInput,
});
