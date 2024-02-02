import React from 'react';
import { TextInputIOSProps } from 'react-native';
import { WidgetProps } from '@rjsf/utils';
declare type TextWidgetProps = WidgetProps & {
    multiline?: boolean;
    secureEntry?: boolean;
    textContentType?: TextInputIOSProps['textContentType'];
};
declare const TextWidget: ({ id, readonly, disabled, label, value, onChange, onBlur, onFocus, autofocus, options, multiline, secureEntry, schema, textContentType, rawErrors, }: TextWidgetProps) => React.JSX.Element;
export default TextWidget;
