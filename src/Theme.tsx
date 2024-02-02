import { FunctionComponent } from 'react';
import { ArrayFieldTemplateProps, ErrorListProps, Field, FieldTemplateProps, ObjectFieldTemplateProps, Widget } from '@rjsf/utils'
import FieldTemplate from './fields/FieldTemplate';
import ObjectFieldTemplate from './fields/ObjectFieldTemplate';
import ArrayFieldTemplate from './fields/ArrayFieldTemplate';
import ErrorList from './ErrorList';
import { MockHTMLForm } from './MockHTMLForm';
import { Widgets } from './widgets/Widgets';
import { Fields } from './fields/Fields'; 


type ThemePropsv2 = {
  widgets: {[name: string] : Widget},
  fields: {[name:string]: Field}
  FieldTemplate: FunctionComponent<FieldTemplateProps>
  ObjectFieldTemplate: FunctionComponent<ObjectFieldTemplateProps>
ErrorList: FunctionComponent<ErrorListProps>
ArrayFieldTemplate: FunctionComponent<ArrayFieldTemplateProps>
tagName: any
}

const Theme: ThemePropsv2 = {
  widgets:  Widgets,
   fields: Fields,
  FieldTemplate,
  ObjectFieldTemplate,
  ArrayFieldTemplate,
  ErrorList,
  tagName: MockHTMLForm,
};

export {
  Theme,
  FieldTemplate,
  ObjectFieldTemplate,
  ArrayFieldTemplate,
  ErrorList,
  MockHTMLForm,
};
