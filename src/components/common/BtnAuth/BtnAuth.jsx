import React, { Component } from 'react';
import { Button } from 'primereact/button';
import cl from 'classnames';

export class BtnAuthFalse extends Component {
  render() {
    return (
      <div>
        <Button icon='pi pi-user' label='Login' className={cl()} />
      </div>
    );
  }
}

export class BtnAuthTrue extends Component {
  render() {
    return (
      <div>
        <Button label='Submit' icon='pi pi-check' className={cl('p-button-success')} />
      </div>
    );
  }
}
