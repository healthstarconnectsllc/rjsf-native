import { FunctionComponent } from 'react';
import { ArrayFieldTemplateProps, ErrorListProps, Field, FieldTemplateProps, ObjectFieldTemplateProps, Widget } from '@rjsf/utils';
import FieldTemplate from './fields/FieldTemplate';
import ObjectFieldTemplate from './fields/ObjectFieldTemplate';
import ArrayFieldTemplate from './fields/ArrayFieldTemplate';
import ErrorList from './ErrorList';
import { MockHTMLForm } from './MockHTMLForm';
declare type ThemePropsv2 = {
    widgets: {
        [name: string]: Widget;
    };
    fields: {
        [name: string]: Field;
    };
    FieldTemplate: FunctionComponent<FieldTemplateProps>;
    ObjectFieldTemplate: FunctionComponent<ObjectFieldTemplateProps>;
    ErrorList: FunctionComponent<ErrorListProps>;
    ArrayFieldTemplate: FunctionComponent<ArrayFieldTemplateProps>;
    tagName: any;
};
declare const Theme: ThemePropsv2;
export { Theme, FieldTemplate, ObjectFieldTemplate, ArrayFieldTemplate, ErrorList, MockHTMLForm, };
