import React from 'react';
import { WidgetProps } from '@rjsf/utils';
declare const CheckboxWidget: ({ value, disabled, readonly, label, onChange, schema, }: WidgetProps) => React.JSX.Element;
declare type CheckBoxProps = {
    disabled?: boolean;
    onChange: (selected: boolean) => void;
    selected: boolean;
    label: string;
};
export declare const CheckBoxComponent: ({ disabled, onChange, selected, label }: CheckBoxProps) => React.JSX.Element;
export default CheckboxWidget;
