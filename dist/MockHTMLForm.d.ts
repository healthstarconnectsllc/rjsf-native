import React, { Component } from 'react';
declare class Event {
    preventDefault(): void;
}
export declare class MockHTMLForm extends Component {
    render(): React.JSX.Element;
    dispatchEvent(e: Event): void;
}
export {};
