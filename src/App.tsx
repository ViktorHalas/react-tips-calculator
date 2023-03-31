import React from 'react';
import { Form } from './components/Form/Form';
import { SelectOption } from './types/types';
import { GlobalStyles } from './UI/GlobalStyles';

const App = () => {
  const options:SelectOption[] = [
    { value: '1.10', label: '10%' },
    { value: '1.15', label: '15%' },
    { value: '1.20', label: '20%' }
  ]

  return (
    <>
      <GlobalStyles/>
      <Form $options = {options}/>
    </>
  );
};

export default App;