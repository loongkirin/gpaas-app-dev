export type FieldDescribe = {
  fieldApiName: string,
  fieldType: string,
  renderType: string,
  required: boolean ,
  readonly: boolean,
  label: string,
  placeHolder?: string,
  helpText?: string,
  minLength?: number,
  maxLength?: number,
  defaultValue?: string|number|Date|null|undefined,
}

export type Bill = {
  fields: FieldDescribe[],
  name: string,

}