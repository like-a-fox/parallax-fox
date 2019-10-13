import React, { useRef } from 'react';
import { Input } from '../../styles';

export default function TextInput(props) {
  const inputEl = useRef(null);
  return <Input {...props} ref={inputEl} />;
}
