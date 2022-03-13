import React from 'react';

import { Button } from '../components/Button/Button';


export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    label:{
      type: { name: 'string', required: false }
    },
    color:{
      type: { name: 'string', required: false }
    }
  },
};


const fun = () => {console.log("hello")};

const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {};
