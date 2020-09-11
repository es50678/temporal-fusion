import React from 'react';
import Counter from './counter';

export default {
  component: Counter,
  title: 'Counter'
}

const Template = (args) => {
  return <Counter {...args} />
}

export const Default = Template.bind({});

