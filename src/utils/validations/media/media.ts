import * as Yup from "yup";
import { Shape } from "../../../types";
import {
  CreateMediaInput as ICreateMediaInput,
  DeleteMediaInput as IDeleteMediaInput,
  MediaFieldFiltersInput,
  MediaPayloadInput as IMediaPayloadInput,
} from "../../../types/generated";
import { StringFieldFilter } from "../common";

export const MediaPayloadInput = Yup.object().shape<Shape<IMediaPayloadInput>>({
  file: Yup.mixed().required("Please choose at least one file."),
  title: Yup.string()
    .min(3, "Please provide a longer title.")
    .required("Please provide a title for this asset."),
});

export const CreateMediaInput = Yup.object().shape<Shape<ICreateMediaInput>>({
  payload: Yup.array().of(MediaPayloadInput),
});

export const DeleteMediaInput = Yup.object().shape<Shape<IDeleteMediaInput>>({
  query: Yup.object().shape<Shape<MediaFieldFiltersInput>>({
    _id: Yup.array().of(StringFieldFilter),
    created_by: Yup.array().of(StringFieldFilter),
    createdAt: Yup.array().of(StringFieldFilter),
    mimetype: Yup.array().of(StringFieldFilter),
    path: Yup.array().of(StringFieldFilter),
    title: Yup.array().of(StringFieldFilter),
    updatedAt: Yup.array().of(StringFieldFilter),
  }),
});
