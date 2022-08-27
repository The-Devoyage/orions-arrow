import {
  BooleanFieldFilter as IBooleanFieldFilter,
  DateFieldFilter as IDateFieldFilter,
  StringFieldFilter as IStringFieldFilter,
} from "../../../types/generated";
import * as Yup from "yup";
import { Shape } from "../../../types";

export const StringFieldFilter = Yup.object<Shape<IStringFieldFilter>>({
  string: Yup.string().required(),
  filterBy: Yup.string().required(),
  groups: Yup.array().of(Yup.string()),
  operator: Yup.string().required(),
}).required();

export const DateFieldFilter = Yup.object<Shape<IDateFieldFilter>>({
  date: Yup.date().required(),
  filterBy: Yup.string().required(),
  groups: Yup.array().of(Yup.string()),
  operator: Yup.string().required(),
}).required();

export const BooleanFieldFilter = Yup.object<Shape<IBooleanFieldFilter>>({
  bool: Yup.boolean().required(),
  filterBy: Yup.string().required(),
  groups: Yup.array().of(Yup.string()),
  operator: Yup.string().required(),
}).required();
