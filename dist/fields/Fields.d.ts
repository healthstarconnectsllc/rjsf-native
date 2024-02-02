/// <reference types="react" />
export declare const Fields: {
    TitleField: ({ title, required, error, }: {
        title?: string | undefined;
        required?: boolean | undefined;
        error?: boolean | undefined;
    }) => import("react").JSX.Element;
    AnyOfField: ({ formData, options, registry, onChange, baseType, disabled, errorSchema, idPrefix, idSchema, onBlur, onFocus, uiSchema, schema, }: import("@rjsf/utils").FieldProps<any, import("@rjsf/utils").RJSFSchema, any>) => import("react").JSX.Element;
    OneOfField: ({ formData, options, registry, onChange, baseType, disabled, errorSchema, idPrefix, idSchema, onBlur, onFocus, uiSchema, schema, }: import("@rjsf/utils").FieldProps<any, import("@rjsf/utils").RJSFSchema, any>) => import("react").JSX.Element;
};
