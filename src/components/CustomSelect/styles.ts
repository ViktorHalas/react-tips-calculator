import { StylesConfig } from 'react-select';
import { SelectOption } from '../../types/types';

export const StyledSelect : StylesConfig<SelectOption, false> = {
    control: (baseStyles) =>({
      ...baseStyles,
      width: '100%',
      height: '68px',
      textAlign: 'center',
      fontSize: '18px',
      border: 'none',
      borderRadius: '34px',
    })
  }