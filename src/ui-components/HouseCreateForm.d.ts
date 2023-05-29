/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HouseCreateFormInputValues = {
    name?: string;
    thumbnail?: string;
    thumbnailAlt?: string;
    beds?: number;
    rate?: number;
    rating?: number;
};
export declare type HouseCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    thumbnail?: ValidationFunction<string>;
    thumbnailAlt?: ValidationFunction<string>;
    beds?: ValidationFunction<number>;
    rate?: ValidationFunction<number>;
    rating?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HouseCreateFormOverridesProps = {
    HouseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnail?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnailAlt?: PrimitiveOverrideProps<TextFieldProps>;
    beds?: PrimitiveOverrideProps<TextFieldProps>;
    rate?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HouseCreateFormProps = React.PropsWithChildren<{
    overrides?: HouseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HouseCreateFormInputValues) => HouseCreateFormInputValues;
    onSuccess?: (fields: HouseCreateFormInputValues) => void;
    onError?: (fields: HouseCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HouseCreateFormInputValues) => HouseCreateFormInputValues;
    onValidate?: HouseCreateFormValidationValues;
} & React.CSSProperties>;
export default function HouseCreateForm(props: HouseCreateFormProps): React.ReactElement;
