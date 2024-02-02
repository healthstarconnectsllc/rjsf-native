import React from "react";
import { StyleSheet, Text, View } from "react-native";
import utils, { WidgetProps } from "@rjsf/utils";
import { useFormContext } from "../FormContext";
import { SliderComponent } from "@react-native-community/slider";

const { rangeSpec } = utils;

const RangeWidget = ({
  value,
  readonly,
  disabled,
  schema,
  onChange,
}: WidgetProps) => {
  const { theme } = useFormContext();
  const { min = 0, step = 1, max = 100 } = rangeSpec(schema);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.ends,
          {
            color: theme.textColor,
          },
        ]}
      >
        {min}
      </Text>
      <SliderComponent
        style={styles.slider}
        value={value}
        step={step}
        disabled={disabled || readonly}
        minimumValue={min}
        maximumValue={max}
        onValueChange={onChange}
        thumbTintColor={theme.highlightColor}
        minimumTrackTintColor={theme.highlightColor}
      />
      <Text
        style={[
          styles.ends,
          {
            color: theme.highlightColor,
          },
        ]}
      >
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  ends: {
    fontSize: 14,
    color: "gray",
  },
  slider: {
    flex: 1,
    marginHorizontal: 15,
    height: 40,
  },
});

export default RangeWidget;
