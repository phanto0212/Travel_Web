
import React, { useState } from 'react'
import { WrapperInputStyle } from './style';

function InputFormComponent(props) {
    const [valueInput, setValueInput] = useState('');
    const {placeholder = 'Nhập text', ...Rests} = props;
  return (
    <WrapperInputStyle placeholder={placeholder}   {...Rests} />
  )
}

export default InputFormComponent