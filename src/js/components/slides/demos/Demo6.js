import React, { Component } from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Layer from 'grommet/components/Layer';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import RadioButton from 'grommet/components/RadioButton';

Anchor.displayName = 'Anchor';
Box.displayName = 'Box';
Button.displayName = 'Button';
Form.displayName = 'Form';
FormFields.displayName = 'FormFields';
FormField.displayName = 'FormField';
Footer.displayName = 'Footer';
Heading.displayName = 'Heading';
Layer.displayName = 'Layer';
List.displayName = 'List';
ListItem.displayName = 'ListItem';
RadioButton.displayName = 'RadioButton';

import CloseIcon from 'grommet/components/icons/base/Close';
import AddIcon from 'grommet/components/icons/base/Add';
import LinkIcon from 'grommet/components/icons/base/Link';

import Demo from '../../Demo';

const explanation = 'Layer and Form is a powerful combination that is very common for Single Page Apps.';

class LayerDemo extends Component {
  constructor () {
    super();

    this._toggleLayer = this._toggleLayer.bind(this);

    this.state = {
      showLayer: false
    };
  }

  _toggleLayer () {
    this.setState({showLayer: !this.state.showLayer});
  }
  render () {

    let layer;
    if (this.state.showLayer) {
      layer = (
        <Layer closer={true} onClose={this._toggleLayer} align='right'
          a11yTitle='Add User'>
          <Box pad={{horizontal: 'small', vertical: 'large'}}>
            <Form>
              <Heading strong={true} tag='h2'>
                Add User
              </Heading>
              <FormFields>
                <fieldset>
                  <FormField label="Name" htmlFor='nameInput'>
                    <input type='text' name='nameInput' id='nameInput' />
                  </FormField>
                  <FormField label="Presence" help="Are you going to Jennison party?">
                    <RadioButton id="presence-1" label="Yes" name="choice"/>
                    <RadioButton id="presence-2" label="Sure" name="choice"/>
                  </FormField>
                </fieldset>
              </FormFields>
            </Form>
            <Footer pad={{vertical: 'small'}}>
              <Button primary={true} label='Add' onClick={() => {}} />
            </Footer>
          </Box>
        </Layer>
      );
    }

    return (
      <div>
        <Button icon={<AddIcon />} plain={true}
          onClick={this._toggleLayer} a11yTitle='Add User' />
        <List>
          <ListItem responsive={false} justify="between">
            <span>Alan Souza</span>
            <Button plain={true} a11yTitle='Delete Alan Souza user'
              icon={<CloseIcon />} onClick={() => {}} />
          </ListItem>
          <ListItem responsive={false} justify="between">
            <span>Sam Ogami</span>
            <Button plain={true} a11yTitle='Delete Sam Ogami user'
              icon={<CloseIcon />} onClick={() => {}} />
          </ListItem>
        </List>
        {layer}
      </div>
    );
  }
}

LayerDemo.displayName = 'LayerDemo';

const Demo6 = () => {
  const codepenAnchor = (
    <Anchor href='http://codepen.io/alansouzati/pen/ZWKWrG?editors=0010'
      target='_blank' label='CodePen' icon={<LinkIcon />}
      a11yTitle='See in CodePen' />
  );

  const source = (
    <Layer closer={true} onClose={() => {}} align='right'
      a11yTitle='Add User'>
      <Box pad={{horizontal: 'small', vertical: 'large'}}>
        <Form>
          <Heading strong={true} tag='h2'>
            Add User
          </Heading>
          <FormFields>
            <fieldset>
              <FormField label="Name" htmlFor='nameInput'>
                <input type='text' name='nameInput' id='nameInput' />
              </FormField>
              <FormField label="Presence" help="Are you going to Jennison party?">
                <RadioButton id="presence-1" label="Yes" name="choice"/>
                <RadioButton id="presence-2" label="Sure" name="choice"/>
              </FormField>
            </fieldset>
          </FormFields>
        </Form>
        <Footer pad={{vertical: 'small'}}>
          <Button primary={true} label='Add' onClick={() => {}} />
        </Footer>
      </Box>
    </Layer>
  );

  return (
    <Demo explanation={explanation} code={<LayerDemo />} source={source}
      anchor={codepenAnchor} />
  );
};

export default Demo6;
