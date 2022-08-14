export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  CountryCode: string;
  DateTime: Date;
  EmailAddress: string;
  JWT: any;
  ObjectID: string;
  PhoneNumber: string;
  PostalCode: string;
  Upload: any;
};

export type Account = {
  __typename?: 'Account';
  _id: Scalars['ObjectID'];
  activation?: Maybe<Activation>;
  createdAt: Scalars['DateTime'];
  email: Scalars['EmailAddress'];
  password?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  users: GetUsersResponse;
};


export type AccountUsersArgs = {
  getUsersInput: GetUsersInput;
};

export type AccountFieldFiltersInput = {
  _id?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  activation?: InputMaybe<GetAccountsActivationInput>;
  createdAt?: InputMaybe<Array<InputMaybe<DateFieldFilter>>>;
  email?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  updatedAt?: InputMaybe<Array<InputMaybe<DateFieldFilter>>>;
};

export type Activation = {
  __typename?: 'Activation';
  code?: Maybe<Scalars['String']>;
  limit: Scalars['DateTime'];
  verified: Scalars['Boolean'];
};

export type Address = {
  __typename?: 'Address';
  _id?: Maybe<Scalars['ObjectID']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['CountryCode']>;
  lineOne?: Maybe<Scalars['String']>;
  lineTwo?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['PostalCode']>;
};

export type AddressInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['CountryCode']>;
  lineOne?: InputMaybe<Scalars['String']>;
  lineTwo?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['PostalCode']>;
};

export enum ArrayFilterByEnum {
  In = 'IN',
  Nin = 'NIN'
}

/** Filter for documents which have a property that is a Boolean. */
export type BooleanFieldFilter = {
  bool: Scalars['Boolean'];
  filterBy: BooleanFilterByEnum;
  groups?: InputMaybe<Array<Scalars['String']>>;
  operator?: InputMaybe<OperatorFieldConfigEnum>;
};

/** Equal or Not Equal */
export enum BooleanFilterByEnum {
  Eq = 'EQ',
  Ne = 'NE'
}

export type Content = {
  __typename?: 'Content';
  _id: Scalars['ObjectID'];
  active: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  created_by: User;
  html: Scalars['String'];
  layout?: Maybe<Layout>;
  name: Scalars['String'];
  plainText: Scalars['String'];
  subject: Scalars['String'];
  trigger: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  variables?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentFieldFiltersInput = {
  _id?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  active?: InputMaybe<Array<InputMaybe<BooleanFieldFilter>>>;
  createdAt?: InputMaybe<Array<InputMaybe<DateFieldFilter>>>;
  created_by?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  html?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  name?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  plainText?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  subject?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  trigger?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  updatedAt?: InputMaybe<Array<InputMaybe<DateFieldFilter>>>;
};

export type ContentInput = {
  active: Scalars['Boolean'];
  html: Scalars['String'];
  layout?: InputMaybe<Scalars['ObjectID']>;
  name: Scalars['String'];
  plainText: Scalars['String'];
  subject: Scalars['String'];
  trigger: Scalars['String'];
  variables?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CreateContentInput = {
  payload: ContentInput;
};

export type CreateLayoutInput = {
  payload: LayoutInput;
};

export type CreateMediaInput = {
  payload: Array<MediaPayloadInput>;
};

export type CreateMediaResponse = {
  __typename?: 'CreateMediaResponse';
  errors: Array<UploadError>;
  media: Array<Media>;
};

export type CreatePaywallInput = {
  payload: PaywallInput;
};

export type CreatePaywallPurchaseInput = {
  payload: PaywallPurchaseInput;
};

export type CreateServiceInput = {
  payload: ServiceInput;
};

export type CreateUserInput = {
  payload: UserInput;
};

/** Filter for documents which have a property that is a Date. */
export type DateFieldFilter = {
  date: Scalars['DateTime'];
  filterBy: DateFilterByEnum;
  groups?: InputMaybe<Array<Scalars['String']>>;
  operator?: InputMaybe<OperatorFieldConfigEnum>;
};

export enum DateFilterByEnum {
  Eq = 'EQ',
  Gt = 'GT',
  Gte = 'GTE',
  Lt = 'LT',
  Lte = 'LTE',
  Ne = 'NE'
}

export type DeleteContentsInput = {
  query: ContentFieldFiltersInput;
};

export type DeleteLayoutsInput = {
  query: LayoutFieldFiltersInput;
};

export type DeleteMediaInput = {
  query: MediaFieldFiltersInput;
};

export type DeleteMediaResponse = {
  __typename?: 'DeleteMediaResponse';
  deletedCount: Scalars['Int'];
};

export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  deletedCount: Scalars['Int'];
};

export type DeleteUsersInput = {
  query: UserFieldFiltersInput;
};

export enum ExtensionEnum {
  Avif = 'AVIF',
  Bmp = 'BMP',
  Gif = 'GIF',
  Ico = 'ICO',
  Jpeg = 'JPEG',
  Jpg = 'JPG',
  Png = 'PNG',
  Svg = 'SVG',
  Tiff = 'TIFF',
  Webp = 'WEBP'
}

/** Global configuration details. */
export type FilterConfig = {
  history?: InputMaybe<HistoryFilterInput>;
  pagination?: InputMaybe<Pagination>;
};

export type GetAccountsActivationInput = {
  verified: Array<BooleanFieldFilter>;
};

export type GetAccountsInput = {
  config?: InputMaybe<FilterConfig>;
  query: AccountFieldFiltersInput;
};

export type GetAccountsResponse = {
  __typename?: 'GetAccountsResponse';
  data: Array<Account>;
  stats: Stats;
};

export type GetContentsInput = {
  config?: InputMaybe<FilterConfig>;
  query: ContentFieldFiltersInput;
};

export type GetContentsResponse = {
  __typename?: 'GetContentsResponse';
  data: Array<Content>;
  stats: Stats;
};

export type GetLayoutsInput = {
  config?: InputMaybe<FilterConfig>;
  query: LayoutFieldFiltersInput;
};

export type GetLayoutsResponse = {
  __typename?: 'GetLayoutsResponse';
  data: Array<Layout>;
  stats: Stats;
};

export type GetMediaInput = {
  config?: InputMaybe<FilterConfig>;
  query: MediaFieldFiltersInput;
  transform?: InputMaybe<TransformOptions>;
};

export type GetMediaResponse = {
  __typename?: 'GetMediaResponse';
  data: Array<Media>;
  stats: Stats;
};

export type GetPaywallPurchasesInput = {
  config?: InputMaybe<FilterConfig>;
  query: PaywallPurchaseFieldFiltersInput;
};

export type GetPaywallPurchasesResponse = {
  __typename?: 'GetPaywallPurchasesResponse';
  data: Array<PaywallPurchase>;
  stats: Stats;
};

export type GetPaywallsInput = {
  config?: InputMaybe<FilterConfig>;
  query: PaywallFieldFiltersInput;
};

export type GetPaywallsResponse = {
  __typename?: 'GetPaywallsResponse';
  data: Array<Paywall>;
  stats: Stats;
};

export type GetServicesInput = {
  config?: InputMaybe<FilterConfig>;
  query: ServiceFieldFiltersInput;
};

export type GetServicesResponse = {
  __typename?: 'GetServicesResponse';
  data: Array<Service>;
  stats: Stats;
};

export type GetUserByMembershipFilterInput = {
  _id?: InputMaybe<StringFieldFilter>;
  account?: InputMaybe<StringFieldFilter>;
  createdAt?: InputMaybe<DateFieldFilter>;
  default?: InputMaybe<BooleanFieldFilter>;
  role?: InputMaybe<Array<InputMaybe<IntFieldFilter>>>;
  status?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  updatedAt?: InputMaybe<DateFieldFilter>;
};

export type GetUsersInput = {
  config?: InputMaybe<FilterConfig>;
  query: UserFieldFiltersInput;
};

export type GetUsersResponse = {
  __typename?: 'GetUsersResponse';
  data: Array<User>;
  stats: Stats;
};

export enum GravityEnum {
  Ce = 'CE',
  Ea = 'EA',
  No = 'NO',
  Noea = 'NOEA',
  Nowe = 'NOWE',
  Sm = 'SM',
  So = 'SO',
  Soea = 'SOEA',
  Sowe = 'SOWE',
  We = 'WE'
}

export type HistoricStats = {
  __typename?: 'HistoricStats';
  _id?: Maybe<HistoricStatsId>;
  total?: Maybe<Scalars['Int']>;
};

export type HistoricStatsId = {
  __typename?: 'HistoricStatsId';
  DAY_OF_MONTH?: Maybe<Scalars['Int']>;
  DAY_OF_WEEK?: Maybe<Scalars['Int']>;
  DAY_OF_YEAR?: Maybe<Scalars['Int']>;
  HOUR?: Maybe<Scalars['Int']>;
  MILLISECONDS?: Maybe<Scalars['Int']>;
  MINUTES?: Maybe<Scalars['Int']>;
  MONTH?: Maybe<Scalars['Int']>;
  SECONDS?: Maybe<Scalars['Int']>;
  WEEK?: Maybe<Scalars['Int']>;
  YEAR?: Maybe<Scalars['Int']>;
};

export type HistoryFilterInput = {
  interval: Array<HistoryFilterIntervalEnum>;
};

export enum HistoryFilterIntervalEnum {
  DayOfMonth = 'DAY_OF_MONTH',
  DayOfWeek = 'DAY_OF_WEEK',
  DayOfYear = 'DAY_OF_YEAR',
  Hour = 'HOUR',
  Milliseconds = 'MILLISECONDS',
  Minutes = 'MINUTES',
  Month = 'MONTH',
  Seconds = 'SECONDS',
  Week = 'WEEK',
  Year = 'YEAR'
}

/** Filter for documents which have a property that is an Integer. */
export type IntFieldFilter = {
  filterBy: IntFilterByEnum;
  groups?: InputMaybe<Array<Scalars['String']>>;
  int: Scalars['Int'];
  operator?: InputMaybe<OperatorFieldConfigEnum>;
};

export enum IntFilterByEnum {
  Eq = 'EQ',
  Gt = 'GT',
  Gte = 'GTE',
  Lt = 'LT',
  Lte = 'LTE',
  Ne = 'NE'
}

export type InviteUserInput = {
  payload: UserInput;
  query: UserFieldFiltersInput;
};

export type Layout = {
  __typename?: 'Layout';
  _id: Scalars['ObjectID'];
  createdAt: Scalars['DateTime'];
  created_by: User;
  html: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type LayoutFieldFiltersInput = {
  _id?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  createdAt?: InputMaybe<Array<InputMaybe<DateFieldFilter>>>;
  created_by?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  html?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  name?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  updatedAt?: InputMaybe<Array<InputMaybe<DateFieldFilter>>>;
};

export type LayoutInput = {
  html: Scalars['String'];
  name: Scalars['String'];
};

export type Limit = {
  __typename?: 'Limit';
  name: Scalars['String'];
  scopes: Array<Scope>;
};

export type LocalMembershipInput = {
  about?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<AddressInput>;
  first_name?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ObjectID']>;
  last_name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['PhoneNumber']>;
};

export type LocalUserDetails = {
  __typename?: 'LocalUserDetails';
  about?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  first_name?: Maybe<Scalars['String']>;
  image?: Maybe<Media>;
  last_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['PhoneNumber']>;
};

export type LoginAccountResponse = {
  __typename?: 'LoginAccountResponse';
  account: Account;
  token: Scalars['JWT'];
};

export type LoginInput = {
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
};

export type LoginUserResponse = {
  __typename?: 'LoginUserResponse';
  token: Scalars['String'];
  user: User;
};

export type Media = {
  __typename?: 'Media';
  _id: Scalars['ObjectID'];
  createdAt: Scalars['DateTime'];
  created_by: User;
  mimetype: Scalars['String'];
  path: Scalars['String'];
  src: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type MediaFieldFiltersInput = {
  _id?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  createdAt?: InputMaybe<Array<InputMaybe<DateFieldFilter>>>;
  created_by?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  mimetype?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  path?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  title?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  updatedAt?: InputMaybe<Array<InputMaybe<DateFieldFilter>>>;
};

export type MediaPayloadInput = {
  file: Scalars['Upload'];
  title: Scalars['String'];
};

export type Membership = {
  __typename?: 'Membership';
  _id: Scalars['ObjectID'];
  account: Account;
  createdAt: Scalars['DateTime'];
  created_by: User;
  default: Scalars['Boolean'];
  local?: Maybe<LocalUserDetails>;
  role: Scalars['Int'];
  status?: Maybe<MembershipStatusEnum>;
  updatedAt: Scalars['DateTime'];
};

export type MembershipInput = {
  account: Scalars['ObjectID'];
  default?: InputMaybe<Scalars['Boolean']>;
  local?: InputMaybe<LocalMembershipInput>;
  role?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<MembershipStatusEnum>;
};

export enum MembershipStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  Revoked = 'REVOKED'
}

export type Mutation = {
  __typename?: 'Mutation';
  createContent: Content;
  createLayout: Layout;
  createMedia: CreateMediaResponse;
  createPaywall: Paywall;
  createPaywallPurchase: PaywallPurchase;
  createService: Service;
  createUser: User;
  deleteContents: DeleteResponse;
  deleteLayouts: DeleteResponse;
  deleteMedia: DeleteMediaResponse;
  deleteUsers: DeleteResponse;
  inviteUser: User;
  login: LoginAccountResponse;
  loginUser: LoginUserResponse;
  register: Account;
  resetActivationCode: Account;
  resetPassword: Account;
  switchUserMembership: LoginUserResponse;
  updateContent: Content;
  updateEmail: Account;
  updateLayout: Layout;
  updatePaywall: Paywall;
  updatePaywallPurchase: PaywallPurchase;
  updateService: Service;
  updateUser: User;
  verifyEmail: Account;
};


export type MutationCreateContentArgs = {
  createContentInput: CreateContentInput;
};


export type MutationCreateLayoutArgs = {
  createLayoutInput: CreateLayoutInput;
};


export type MutationCreateMediaArgs = {
  createMediaInput: CreateMediaInput;
};


export type MutationCreatePaywallArgs = {
  createPaywallInput: CreatePaywallInput;
};


export type MutationCreatePaywallPurchaseArgs = {
  createPaywallPurchaseInput: CreatePaywallPurchaseInput;
};


export type MutationCreateServiceArgs = {
  createServiceInput: CreateServiceInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteContentsArgs = {
  deleteContentsInput: DeleteContentsInput;
};


export type MutationDeleteLayoutsArgs = {
  deleteLayoutsInput: DeleteLayoutsInput;
};


export type MutationDeleteMediaArgs = {
  deleteMediaInput: DeleteMediaInput;
};


export type MutationDeleteUsersArgs = {
  deleteUsersInput: DeleteUsersInput;
};


export type MutationInviteUserArgs = {
  inviteUserInput: InviteUserInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationResetActivationCodeArgs = {
  resetCodeInput: ResetCodeInput;
};


export type MutationResetPasswordArgs = {
  resetInput: ResetPasswordInput;
};


export type MutationSwitchUserMembershipArgs = {
  switchUserMembershipInput: SwitchUserMembershipInput;
};


export type MutationUpdateContentArgs = {
  updateContentInput: UpdateContentInput;
};


export type MutationUpdateEmailArgs = {
  updateEmailInput: UpdateEmailInput;
};


export type MutationUpdateLayoutArgs = {
  updateLayoutInput: UpdateLayoutInput;
};


export type MutationUpdatePaywallArgs = {
  updatePaywallInput: UpdatePaywallInput;
};


export type MutationUpdatePaywallPurchaseArgs = {
  updatePaywallPurchaseInput: UpdatePaywallPurchaseInput;
};


export type MutationUpdateServiceArgs = {
  updateServiceInput: UpdateServiceInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationVerifyEmailArgs = {
  verifyEmailInput: VerifyEmailInput;
};

export enum OperatorFieldConfigEnum {
  And = 'AND',
  Or = 'OR'
}

export type Pagination = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  limit?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

export type Paywall = {
  __typename?: 'Paywall';
  _id: Scalars['ObjectID'];
  createdAt: Scalars['DateTime'];
  created_by: User;
  description: Scalars['String'];
  name: Scalars['String'];
  product_id: Scalars['ID'];
  status: PaywallStatusEnum;
  updatedAt: Scalars['DateTime'];
};

export type PaywallFieldFiltersInput = {
  _id?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  createdAt?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  created_by?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  name?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  productId?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  status?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  updatedAt?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
};

export type PaywallInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  product_id: Scalars['ID'];
  status?: InputMaybe<PaywallStatusEnum>;
};

export type PaywallLimitInput = {
  name: Scalars['String'];
  scopes: Array<ScopeInput>;
};

export type PaywallPurchase = {
  __typename?: 'PaywallPurchase';
  _id: Scalars['ObjectID'];
  account: Account;
  createdAt: Scalars['DateTime'];
  created_by: User;
  paywall: Paywall;
  status: PaywallPurchaseStatusEnum;
  updatedAt: Scalars['DateTime'];
};

export type PaywallPurchaseFieldFiltersInput = {
  _id?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  account?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  createdAt?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  created_by?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  paywall?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  status?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  updatedAt?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
};

export type PaywallPurchaseInput = {
  account?: InputMaybe<Scalars['ObjectID']>;
  paywall: Scalars['ObjectID'];
  status?: InputMaybe<PaywallPurchaseStatusEnum>;
};

export enum PaywallPurchaseStatusEnum {
  Active = 'ACTIVE',
  Created = 'CREATED',
  Inactive = 'INACTIVE'
}

export enum PaywallStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type Query = {
  __typename?: 'Query';
  getAccounts: GetAccountsResponse;
  getContents: GetContentsResponse;
  getLayouts: GetLayoutsResponse;
  getMedia: GetMediaResponse;
  getMyAccount: Account;
  getPaywallPurchases: GetPaywallPurchasesResponse;
  getPaywalls: GetPaywallsResponse;
  getServices: GetServicesResponse;
  getUsers: GetUsersResponse;
  isAuthenticated: Scalars['Boolean'];
  me: User;
};


export type QueryGetAccountsArgs = {
  getAccountsInput: GetAccountsInput;
};


export type QueryGetContentsArgs = {
  getContentsInput: GetContentsInput;
};


export type QueryGetLayoutsArgs = {
  getLayoutsInput: GetLayoutsInput;
};


export type QueryGetMediaArgs = {
  getMediaInput: GetMediaInput;
};


export type QueryGetPaywallPurchasesArgs = {
  getPaywallPurchasesInput: GetPaywallPurchasesInput;
};


export type QueryGetPaywallsArgs = {
  getPaywallsInput: GetPaywallsInput;
};


export type QueryGetServicesArgs = {
  getServicesInput: GetServicesInput;
};


export type QueryGetUsersArgs = {
  getUsersInput: GetUsersInput;
};

export type RegisterInput = {
  email: Scalars['EmailAddress'];
  password?: InputMaybe<Scalars['String']>;
};

export type ResetCodeInput = {
  email: Scalars['EmailAddress'];
};

export type ResetPasswordInput = {
  code: Scalars['String'];
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
};

export enum ResizingTypeEnum {
  Auto = 'AUTO',
  Fill = 'FILL',
  FillDown = 'FILL_DOWN',
  Fit = 'FIT',
  Force = 'FORCE'
}

export type Scope = {
  __typename?: 'Scope';
  paywall: Paywall;
  quantity: Scalars['Int'];
};

export type ScopeInput = {
  paywall: Scalars['ObjectID'];
  quantity: Scalars['Int'];
};

export type Service = {
  __typename?: 'Service';
  _id: Scalars['ObjectID'];
  createdAt: Scalars['DateTime'];
  created_by: User;
  limits: Array<Limit>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ServiceFieldFiltersInput = {
  _id?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  createdAt?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  created_by?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  name?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  updatedAt?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
};

export type ServiceInput = {
  limits: Array<PaywallLimitInput>;
  name: Scalars['String'];
};

export type Stats = {
  __typename?: 'Stats';
  cursor?: Maybe<Scalars['DateTime']>;
  history?: Maybe<Array<HistoricStats>>;
  page?: Maybe<Scalars['Int']>;
  remaining?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** Filter for documents which have a property that is an array of strings.. */
export type StringArrayFieldFilter = {
  arrayOptions: ArrayFilterByEnum;
  filterBy: StringFilterByEnum;
  groups?: InputMaybe<Array<Scalars['String']>>;
  operator?: InputMaybe<OperatorFieldConfigEnum>;
  string: Array<Scalars['String']>;
};

/** Filter for documents which have a property that is a string. Filter by REGEX, ObjectID, or Match. */
export type StringFieldFilter = {
  filterBy: StringFilterByEnum;
  groups?: InputMaybe<Array<Scalars['String']>>;
  operator?: InputMaybe<OperatorFieldConfigEnum>;
  string: Scalars['String'];
};

export enum StringFilterByEnum {
  Match = 'MATCH',
  Objectid = 'OBJECTID',
  Regex = 'REGEX'
}

export type SwitchUserMembershipInput = {
  membership_id: Scalars['ObjectID'];
};

export type TransformOptions = {
  extension?: InputMaybe<ExtensionEnum>;
  gravity?: InputMaybe<GravityEnum>;
  resize?: InputMaybe<TransformResizeInput>;
};

export type TransformResizeInput = {
  enlarge?: InputMaybe<Scalars['Boolean']>;
  extend?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  resizing_type?: InputMaybe<ResizingTypeEnum>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UpdateContentInput = {
  payload: ContentInput;
  query: ContentFieldFiltersInput;
};

export type UpdateEmailInput = {
  account: Scalars['ObjectID'];
  email: Scalars['EmailAddress'];
};

export type UpdateLayoutInput = {
  payload: LayoutInput;
  query: LayoutFieldFiltersInput;
};

export type UpdateMediaInput = {
  payload: MediaPayloadInput;
  query: MediaFieldFiltersInput;
};

export type UpdatePaywallInput = {
  payload: PaywallInput;
  query: PaywallFieldFiltersInput;
};

export type UpdatePaywallPurchaseInput = {
  payload: PaywallPurchaseInput;
  query: PaywallPurchaseFieldFiltersInput;
};

export type UpdateServiceInput = {
  payload: ServiceInput;
  query: ServiceFieldFiltersInput;
};

export type UpdateUserInput = {
  payload: UserInput;
  query: UserFieldFiltersInput;
};

export type UploadError = {
  __typename?: 'UploadError';
  error: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ObjectID'];
  about?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  createdAt: Scalars['DateTime'];
  created_by?: Maybe<User>;
  email: Scalars['EmailAddress'];
  first_name?: Maybe<Scalars['String']>;
  image?: Maybe<Media>;
  last_name?: Maybe<Scalars['String']>;
  memberships: Array<Membership>;
  phone?: Maybe<Scalars['PhoneNumber']>;
  updatedAt: Scalars['DateTime'];
};

export type UserFieldFiltersInput = {
  _id?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  createdAt?: InputMaybe<Array<InputMaybe<DateFieldFilter>>>;
  created_by?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  email?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  first_name?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  image?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  last_name?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  memberships?: InputMaybe<Array<InputMaybe<GetUserByMembershipFilterInput>>>;
  phone?: InputMaybe<Array<InputMaybe<StringFieldFilter>>>;
  updatedAt?: InputMaybe<Array<InputMaybe<DateFieldFilter>>>;
};

export type UserInput = {
  about?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<AddressInput>;
  email?: InputMaybe<Scalars['EmailAddress']>;
  first_name?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ObjectID']>;
  last_name?: InputMaybe<Scalars['String']>;
  memberships?: InputMaybe<MembershipInput>;
  phone?: InputMaybe<Scalars['PhoneNumber']>;
};

export type VerifyEmailInput = {
  code: Scalars['String'];
  email: Scalars['EmailAddress'];
};

export type VerifyEmailResponse = {
  __typename?: 'VerifyEmailResponse';
  message: Scalars['String'];
};
