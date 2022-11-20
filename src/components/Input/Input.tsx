import { useState } from 'react';

import style from './Input.module.scss';

interface IInputProps {
  name: string;
  placeholder: string;
}

function Input(props: IInputProps) {
  const wrapperClass = [style.wrapper];
  const labelClass = [style.label];
  const inputClass = [style.input];
  const fieldsetClass = [style.fieldset];
  const legendClass = [style.legend];
  const [isFocused, setIsFocused] = useState(false);

  if (isFocused) {
    wrapperClass.push(style.wrapperFocus);
    labelClass.push(style.animateLabel);
    fieldsetClass.push(style.fieldsetFocus);
    legendClass.push(style.legendFocus);
  }

  return (
    <div className={wrapperClass.join(' ')}>
      <div className={style.inputField}>
        <label htmlFor={props.name} className={labelClass.join(' ')}>
          {props.placeholder}
        </label>
        <input
          type="text"
          id={props.name}
          name={props.name}
          className={inputClass.join(' ')}
          placeholder={props.placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <fieldset className={fieldsetClass.join(' ')} aria-hidden="true">
          <legend className={legendClass.join(' ')}>
            <span className={style.legentText}>{props.placeholder}</span>
          </legend>
        </fieldset>
      </div>
    </div>
  );
}

export default Input;
