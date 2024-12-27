import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/ds-input/ds-input';

const meta: Meta = {
  title: 'Components/Input',
  tags: ['autodocs'],
  render: (args) => html`
    <ds-input
      label=${args.label}
      placeholder=${args.placeholder}
      type=${args.type}
      .value=${args.value}
      ?disabled=${args.disabled}
      state=${args.state}
      message=${args.message}
    ></ds-input>
  `,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
    },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    type: 'text',
    value: '',
    disabled: false,
    state: 'default',
    message: '',
  },
};

export const WithError: StoryObj = {
  args: {
    ...Default.args,
    state: 'error',
    message: 'This field is required',
  },
};

export const WithSuccess: StoryObj = {
  args: {
    ...Default.args,
    state: 'success',
    message: 'Username is available',
  },
};

export const Disabled: StoryObj = {
  args: {
    ...Default.args,
    disabled: true,
  },
};