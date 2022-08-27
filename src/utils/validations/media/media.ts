import * as Yup from "yup";
import { Utils } from "../../..";
import { Shape } from "../../../types";
import {
  CreateMediaInput as ICreateMediaInput,
  DeleteMediaInput as IDeleteMediaInput,
  MediaFieldFiltersInput,
  MediaPayloadInput as IMediaPayloadInput,
} from "../../../types/generated";

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
    _id: Yup.array().of(Utils.Validations.Common.StringFieldFilter),
    created_by: Yup.array().of(Utils.Validations.Common.StringFieldFilter),
    createdAt: Yup.array().of(Utils.Validations.Common.StringFieldFilter),
    mimetype: Yup.array().of(Utils.Validations.Common.StringFieldFilter),
    path: Yup.array().of(Utils.Validations.Common.StringFieldFilter),
    title: Yup.array().of(Utils.Validations.Common.StringFieldFilter),
    updatedAt: Yup.array().of(Utils.Validations.Common.StringFieldFilter),
  }),
});
