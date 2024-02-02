/// <reference types="react" />
export declare const Widgets: {
    TextWidget: import("react").ComponentType<import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>>;
    EmailWidget: (props: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => JSX.Element;
    URLWidget: (props: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => JSX.Element;
    TextareaWidget: (props: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => JSX.Element;
    CheckboxWidget: ({ value, disabled, readonly, label, onChange, schema, }: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => JSX.Element;
    CheckboxesWidget: ({ disabled, options, value, readonly, onChange, }: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => JSX.Element;
    PasswordWidget: (props: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => JSX.Element;
    RadioWidget: ({ options, value, disabled, readonly, onChange, rawErrors, }: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => JSX.Element;
    SelectWidget: ({ options, value, disabled, readonly, onChange, rawErrors, }: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => JSX.Element;
    RangeWidget: ({ value, readonly, disabled, schema, onChange, }: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => JSX.Element;
};
