/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { House } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function HouseCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    thumbnail: "",
    thumbnailAlt: "",
    beds: "",
    rate: "",
    rating: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [thumbnail, setThumbnail] = React.useState(initialValues.thumbnail);
  const [thumbnailAlt, setThumbnailAlt] = React.useState(
    initialValues.thumbnailAlt
  );
  const [beds, setBeds] = React.useState(initialValues.beds);
  const [rate, setRate] = React.useState(initialValues.rate);
  const [rating, setRating] = React.useState(initialValues.rating);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setThumbnail(initialValues.thumbnail);
    setThumbnailAlt(initialValues.thumbnailAlt);
    setBeds(initialValues.beds);
    setRate(initialValues.rate);
    setRating(initialValues.rating);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    thumbnail: [{ type: "Required" }],
    thumbnailAlt: [{ type: "Required" }],
    beds: [{ type: "Required" }],
    rate: [{ type: "Required" }],
    rating: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          thumbnail,
          thumbnailAlt,
          beds,
          rate,
          rating,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new House(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "HouseCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              thumbnail,
              thumbnailAlt,
              beds,
              rate,
              rating,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Thumbnail"
        isRequired={true}
        isReadOnly={false}
        value={thumbnail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              thumbnail: value,
              thumbnailAlt,
              beds,
              rate,
              rating,
            };
            const result = onChange(modelFields);
            value = result?.thumbnail ?? value;
          }
          if (errors.thumbnail?.hasError) {
            runValidationTasks("thumbnail", value);
          }
          setThumbnail(value);
        }}
        onBlur={() => runValidationTasks("thumbnail", thumbnail)}
        errorMessage={errors.thumbnail?.errorMessage}
        hasError={errors.thumbnail?.hasError}
        {...getOverrideProps(overrides, "thumbnail")}
      ></TextField>
      <TextField
        label="Thumbnail alt"
        isRequired={true}
        isReadOnly={false}
        value={thumbnailAlt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              thumbnail,
              thumbnailAlt: value,
              beds,
              rate,
              rating,
            };
            const result = onChange(modelFields);
            value = result?.thumbnailAlt ?? value;
          }
          if (errors.thumbnailAlt?.hasError) {
            runValidationTasks("thumbnailAlt", value);
          }
          setThumbnailAlt(value);
        }}
        onBlur={() => runValidationTasks("thumbnailAlt", thumbnailAlt)}
        errorMessage={errors.thumbnailAlt?.errorMessage}
        hasError={errors.thumbnailAlt?.hasError}
        {...getOverrideProps(overrides, "thumbnailAlt")}
      ></TextField>
      <TextField
        label="Beds"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={beds}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              thumbnail,
              thumbnailAlt,
              beds: value,
              rate,
              rating,
            };
            const result = onChange(modelFields);
            value = result?.beds ?? value;
          }
          if (errors.beds?.hasError) {
            runValidationTasks("beds", value);
          }
          setBeds(value);
        }}
        onBlur={() => runValidationTasks("beds", beds)}
        errorMessage={errors.beds?.errorMessage}
        hasError={errors.beds?.hasError}
        {...getOverrideProps(overrides, "beds")}
      ></TextField>
      <TextField
        label="Rate"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={rate}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              thumbnail,
              thumbnailAlt,
              beds,
              rate: value,
              rating,
            };
            const result = onChange(modelFields);
            value = result?.rate ?? value;
          }
          if (errors.rate?.hasError) {
            runValidationTasks("rate", value);
          }
          setRate(value);
        }}
        onBlur={() => runValidationTasks("rate", rate)}
        errorMessage={errors.rate?.errorMessage}
        hasError={errors.rate?.hasError}
        {...getOverrideProps(overrides, "rate")}
      ></TextField>
      <TextField
        label="Rating"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={rating}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              thumbnail,
              thumbnailAlt,
              beds,
              rate,
              rating: value,
            };
            const result = onChange(modelFields);
            value = result?.rating ?? value;
          }
          if (errors.rating?.hasError) {
            runValidationTasks("rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("rating", rating)}
        errorMessage={errors.rating?.errorMessage}
        hasError={errors.rating?.hasError}
        {...getOverrideProps(overrides, "rating")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
