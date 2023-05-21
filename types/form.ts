export type FormName =
  | "form-input"
  | "form-radio"
  | "form-checkbox"
  | "form-select"
  | "form-textarea";

export type FormData = {
  value: string | number;
  placeholder?: string;
};

export type FormParts = {
  titleLabel: string;
  formName: FormName;
  formData: FormData;
};
