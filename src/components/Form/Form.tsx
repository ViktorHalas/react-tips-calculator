import React, {FormEvent, useEffect, useState} from 'react'
import { ActionMeta, SingleValue } from 'react-select'
import { useInput } from '../../hooks/useInput'
import { SelectOption } from '../../types/types'
import { Button } from '../Button/Button'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { Input } from '../Input/Input'
import { StyledForm, Title, SubTitle, Total, InputGroup } from './styles'

interface FormProps {
  $options: SelectOption[]
}
export const Form = ({$options}:FormProps) => {
  const bill = useInput();
  const persons = useInput();
  const [tips, setTips] = useState(1.10);
  const [total, setTotal] = useState("0,00");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleTipsSelect = (newValue: SingleValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => {
    setTips(Number(newValue?.value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTotal(String(((Number(bill.value) * tips) / Number(persons.value)).toFixed(2)));}
  
  useEffect(() => {
    const isEnabled = bill.value && persons.value ? false : true;
    setIsDisabled(isEnabled)
  });

  return (
    <StyledForm onSubmit = {handleSubmit}>
        <Title>Welcome to App</Title>
        <SubTitle>Let’s go calculate your tips</SubTitle>
        <InputGroup>
          <Input type='number' {...bill} $placeholder="Enter bill" />
          <Input type='number' {...persons} $placeholder="Enter persons" />
          <CustomSelect $options = {$options} $defaultValue = {$options[0]} handleTipsSelect={handleTipsSelect}/>
        </InputGroup>
        <Total>Total: {total}$</Total>
        <Button isDisabled={isDisabled}/>
    </StyledForm>
  );
};
