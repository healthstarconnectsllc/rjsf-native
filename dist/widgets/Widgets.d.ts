/// <reference types="react" />
export declare const Widgets: {
    TextWidget: ({ id, readonly, disabled, label, value, onChange, onBlur, onFocus, autofocus, options, multiline, secureEntry, schema, textContentType, rawErrors, }: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any> & {
        multiline?: boolean | undefined;
        secureEntry?: boolean | undefined;
        textContentType?: "none" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "emailAddress" | "familyName" | "fullStreetAddress" | "givenName" | "jobTitle" | "location" | "middleName" | "name" | "namePrefix" | "nameSuffix" | "nickname" | "organizationName" | "postalCode" | "streetAddressLine1" | "streetAddressLine2" | "sublocality" | "telephoneNumber" | "username" | "password" | "newPassword" | "oneTimeCode" | undefined;
    }) => import("react").JSX.Element;
    EmailWidget: (props: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => import("react").JSX.Element;
    URLWidget: (props: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => import("react").JSX.Element;
    TextareaWidget: (props: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => import("react").JSX.Element;
    CheckboxWidget: ({ value, disabled, readonly, label, onChange, schema, }: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => import("react").JSX.Element;
    CheckboxesWidget: ({ disabled, options, value, readonly, onChange, }: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => import("react").JSX.Element;
    PasswordWidget: (props: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => import("react").JSX.Element;
    RadioWidget: ({ options, value, disabled, readonly, onChange, rawErrors, }: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => import("react").JSX.Element;
    SelectWidget: ({ options, value, disabled, readonly, onChange, rawErrors, }: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => import("react").JSX.Element;
    RangeWidget: ({ value, readonly, disabled, schema, onChange, }: import("@rjsf/utils").WidgetProps<any, import("@rjsf/utils").RJSFSchema, any>) => import("react").JSX.Element;
};
