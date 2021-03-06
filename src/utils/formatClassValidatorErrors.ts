import { ValidationError } from 'class-validator';

interface FormatterOutput {
  [key: string]: string[];
}

/**
 * Formats class-validator's errors output to `{ [field: string]: string[] }`
 *
 * @param errors Array of errors generated by class-validator
 */
export const formatClassValidatorErrors = (
  errors: ValidationError[],
): FormatterOutput => {
  const errorObject = {};

  errors.forEach((error) => {
    const errorMessages = [];

    for (const [key, value] of Object.entries(error.constraints)) {
      errorMessages.push(value);
    }

    errorObject[error.property] = errorMessages;
  });

  return errorObject;
};
