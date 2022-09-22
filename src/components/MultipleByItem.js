import React from 'react';

export default (props) => {

  const { value, multipleBy } = props;
  const x = value !== 'Max' ? 'x' : '';
  const optionText = `Buy ${x}${value}`;
  const optionClass = value === multipleBy ? 'multiple-by-option-active' : '';

  const handleClick = () => {
    const { multipleByItemClickHandler, value } = props;
    multipleByItemClickHandler(value);
  }

  return (
    <p className={optionClass} onClick={handleClick}>{optionText}</p>
  );
}