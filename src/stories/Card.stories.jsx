import React from 'react';
import Card from '../components/Card/Card';

export default {
    title:"Card",
    component:Card
}

const Template = (args)=> <Card {...args} />

export const Default = Template.bind({});
 Default.args = {
     img:'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
     title: 'This is a naz-card' ,
     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dicta!',
 }