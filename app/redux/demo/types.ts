export interface DemoInitialStateType {
  name: string;
  value: number;
  requestValue: boolean;
}

export interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

export interface GetPayload {}

export interface CreatePayload {}

export interface CreateResponsePayload {}

export interface GetAllData {}
