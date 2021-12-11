import React from "react";
import Card from "../index";

const storyConfig = {
  title: "components/Card",
  component: Card,
};

// template wrapped in a div to provide padding / styles to the storybook display
const Template = (args) => (
  <div>
    <Card {...args} />
  </div>
);
export const CardFront = Template.bind({});

CardFront.args = {
  fading: false,
  fadeFunction: () => {
    console.log("fade");
  },
  flipFunction: () => {
    console.log("flip");
  },
};

export const CardBack = Template.bind({});

CardBack.args = {
  fading: false,
  fadeFunction: () => {
    console.log("fade");
  },
  flipFunction: () => {
    console.log("flip");
  },
};

export default storyConfig;
