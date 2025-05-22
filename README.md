# [react-json-schema-form](https://github.com/rjsf-team/react-jsonschema-form) themed for react-native

## Getting Started

- You will need to create a github classic token with repo:status and read:packages permissions in Github
- You can login to our github package registry with the following command. When it prompts you for a username use your github username, and the token as the password

```bash
npm login --scope=@healthstarconnectsllc --auth-type=legacy --registry=https://npm.pkg.github.com
```

- Add an .npmrc file to your project with the following contents
```
@healthstarconnectsllc:registry=https://npm.pkg.github.com
```
```bash
yarn add @rjsf/core @healthstarconnectsllc/rjsf-native

# This package also depends on `@react-native-community/slider`
yarn add @react-native-community/slider
```

## Usage
```typescript
import ReactNativeForm from '@healthstarconnectsllc/rjsf-native';

const App = () => {
  const form = useRef(null);
  return (
    <ReactNativeForm
      ref={form}
      onError={e => {
        console.log(e);
        Alert.alert('Please check your form');
      }}
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={form => console.log(form.formData)}>
      <Button
        title="Submit"
        onPress={() => {
          form.current?.submit();
        }}
      />
    </ReactNativeForm>
  );
};
```

We also provide a Context as a form of overriding defaults and theming

```typescript
import ReactNativeForm, {defaultProps, FormContext} from '@healthstarconnectsllc/rjsf-native';

const App = () => {
  const form = useRef(null)
  return (
    <FormContext value={{...defaultProps, requiredTitle: '*'}}>
        <ReactNativeForm .../>
    </FormContext>
  )
}
```

### Form Context Props
```typescript
{
  theme: {
    primaryColor: string; // Your main theme color. Used for e.g. buttons
    highlightColor: string; // Used for focused inputs, checked checkboxes, slider...
    borderColor: string; // Color of textinput borders
    textColor: string;
    placeholderTextColor: string;
    errorColor: string;
    [propName: string]: any;
  };
  requiredTitle: string;
  arrayAddTitle: string;
  radioLabelMapping?: (label: string) => string;
  [propName: string]: any;
}
```

## Development
1. Run ```npm start``` in root folder to run the dev server
2. ```cd example && npm run android``` to start the example app

![](./docs/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-01-03%20at%2011.45.00.png) | ![](./docs/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-01-03%20at%2011.45.04.png)
:-------------------------:|:-------------------------:

## Publishing

1. You must have the GitHub CLI installed
2. Run `gh release --repo healthstarconnectsllc/rjsf-native create v1.0.2` to create a release/tag and trigger the publish workflow

