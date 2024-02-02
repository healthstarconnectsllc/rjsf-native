import FieldTemplate from "./fields/FieldTemplate";
import ObjectFieldTemplate from "./fields/ObjectFieldTemplate";
import ArrayFieldTemplate from "./fields/ArrayFieldTemplate";
import ErrorList from "./ErrorList";
import { MockHTMLForm } from "./MockHTMLForm";
import { Widgets } from "./widgets/Widgets";
import { Fields } from "./fields/Fields";
import { ThemeProps } from "@rjsf/core";

const Theme: ThemeProps = {
  widgets: Widgets,
  fields: Fields,
  templates: {
    FieldTemplate,
    ObjectFieldTemplate,
    ArrayFieldTemplate,
    ErrorListTemplate: ErrorList,
  },
};

export {
  Theme,
  FieldTemplate,
  ObjectFieldTemplate,
  ArrayFieldTemplate,
  ErrorList,
  MockHTMLForm,
};
