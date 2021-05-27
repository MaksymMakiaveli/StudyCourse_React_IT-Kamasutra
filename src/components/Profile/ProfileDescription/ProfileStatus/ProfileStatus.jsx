import React, { Component } from 'react';

export class ProfileStatus extends Component {
  state = {
    editMode: false,
    status:this.props.status,
  };

  activeEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivatedEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps,prevState){
    if(prevProps.status !== this.props.status){
      this.setState({
        status:this.props.status
      })
    }
  }
  render() {
    return (
      <>
        {!this.state.editMode && <span onClick={this.activeEditMode}>{this.props.status || '_-_-_-_'}</span>}
        {this.state.editMode && (
          <input
            autoFocus={true}
            onChange={this.onStatusChange}
            onBlur={this.deactivatedEditMode}
            type='text'
            value={this.state.status}
          />
        )}
      </>
    );
  }
}
