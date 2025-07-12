import React from 'react';
import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const ButtonBordered = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: 'transparent',
  width: "fit-content",
  color: 'var(--black-color)',
  fontSize: 'var(--normal-font-size)',
  fontWeight: 'bold', 
  borderRadius: '0.5rem',
  border: '0.2rem solid var(--black-color)',
  padding: '0.2rem 1rem', 
  textTransform: 'lowercase',
  transition: "ease-in 0.2s", 
    '&:hover': {
        letterSpacing: '0.15rem', 
  },
}));

export default ButtonBordered
