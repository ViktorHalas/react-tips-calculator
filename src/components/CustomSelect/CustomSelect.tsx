import React from 'react'
import Select, { ActionMeta, SingleValue } from 'react-select'
import { SelectOption } from '../../types/types';
import { StyledSelect } from './styles';

interface CustomSelectProps {
  $options: SelectOption[];
  $defaultValue?: SelectOption; 
  handleTipsSelect: (newValue: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void;
}


export const CustomSelect = ({ handleTipsSelect, $options, $defaultValue }: CustomSelectProps) => {
  return (
    <Select
    options={$options}
    onChange={handleTipsSelect}
    defaultValue={$defaultValue}
    styles = {StyledSelect}
    />
  )
}
