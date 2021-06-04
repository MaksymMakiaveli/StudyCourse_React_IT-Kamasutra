import React, { useEffect, useState } from 'react';

export const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const toggleEditMode = () => {
    if (!editMode) {
      setEditMode(true);
    }
    if (editMode) {
      setEditMode(false);
      props.updateStatus(status);
    }
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode && <span onClick={toggleEditMode}>{props.status || '_-_-_-_'}</span>}
      {editMode && (
        <input autoFocus={true} type='text' onBlur={toggleEditMode} onChange={onStatusChange} value={status} />
      )}
    </>
  );
};
