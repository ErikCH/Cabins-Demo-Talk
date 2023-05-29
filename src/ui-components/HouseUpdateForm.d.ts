/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { House } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HouseUpdateFormInputValues = {
    name?: string;
    thumbnail?: string;
    thumbnailAlt?: string;
    beds?: number;
    rate?: number;
    rating?: number;
};
export declare type HouseUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    thumbnail?: ValidationFunction<string>;
    thumbnailAlt?: ValidationFunction<string>;
    beds?: ValidationFunction<number>;
    rate?: ValidationFunction<number>;
    rating?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HouseUpdateFormOverridesProps = {
    HouseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnail?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnailAlt?: PrimitiveOverrideProps<TextFieldProps>;
    beds?: PrimitiveOverrideProps<TextFieldProps>;
    rate?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HouseUpdateFormProps = React.PropsWithChildren<{
    overrides?: HouseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    house?: House;
    onSubmit?: (fields: HouseUpdateFormInputValues) => HouseUpdateFormInputValues;
    onSuccess?: (fields: HouseUpdateFormInputValues) => void;
    onError?: (fields: HouseUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HouseUpdateFormInputValues) => HouseUpdateFormInputValues;
    onValidate?: HouseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HouseUpdateForm(props: HouseUpdateFormProps): React.ReactElement;
