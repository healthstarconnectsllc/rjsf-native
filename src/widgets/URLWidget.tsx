import { WidgetProps } from '@rjsf/utils';
import TextWidget from './TextWidget';
import React from 'react';

const URLWidget = (props: WidgetProps) => (
  <TextWidget { ...props } textContentType={ 'URL' }/>
);

export default URLWidget;
