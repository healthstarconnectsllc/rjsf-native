import { WidgetProps } from '@rjsf/utils';
import TextWidget from './TextWidget';
import React from 'react';

const EmailWidget = (props: WidgetProps) => (
  <TextWidget { ...props } textContentType={ 'emailAddress' }/>
);

export default EmailWidget;
