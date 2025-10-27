import Button from "./Button"

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"],
    },
    shape: {
      control: { type: "select" },
      options: ["square", "pills"],
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
}

export const Primary = {
  args: {
    type: "primary",
    children: "Primary Button",
  },
}

export const Secondary = {
  args: {
    type: "secondary",
    children: "Secondary Button",
  },
}

export const Danger = {
  args: {
    type: "danger",
    children: "Danger Button",
  },
}

export const Pills = {
  args: {
    type: "primary",
    shape: "pills",
    children: "Rounded Button",
  },
}
