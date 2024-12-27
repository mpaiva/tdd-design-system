import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/ds-button';

const meta: Meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => html`
    <ds-button
      variant=${args.variant}
      ?disabled=${args.disabled}
    >
      ${args.slot}
    </ds-button>
  `,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    slot: {
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    variant: 'primary',
    slot: 'Primary Button',
    disabled: false,
  },
};

export const Secondary: StoryObj = {
  args: {
    variant: 'secondary',
    slot: 'Secondary Button',
    disabled: false,
  },
};

export const Disabled: StoryObj = {
  args: {
    variant: 'primary',
    slot: 'Disabled Button',
    disabled: true,
  },
};