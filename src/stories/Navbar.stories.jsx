import React from 'react';

import { Navbar } from '../components/Header/Navbar';

const data = {logo:"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
title:"Nazy-UI",items:[{name:"Home", link:"/"},{name:"Products", link:"/"},{name:"Pricing", link:"/"}],
dropdowns:[{name:"Contact Us", items:[{name:"Email", link:"/"},{name:"Call", link:"/"},{name:"Twitter", link:"/"}]}, {name:"Donate", items:[{name:"Charity US", link:"/"},{name:"Charity Canada", link:"/"},{name:"Charity Ukraineu", link:"/"}]}]};

export default {
    title: 'Navbar',
    component: Navbar,
    argTypes: {
      theme: {
        options: ['light', 'dark'],
        control: { type: 'radio' },
      },
      title:{
        type: { name: 'string', required: false }
      },
      logo:{
        type: { name: 'string', required: false }
      }
    },
  };
  
  const Template = (args) => <Navbar {...args} />;

  export const Nav = Template.bind({});
  Nav.args = data;

