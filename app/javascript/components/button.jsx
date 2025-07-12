import React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Button
      component="a"
      href="/faleconosco"
      variant="contained"
      color="success"
    >
      Fale Conosco
    </Button>
  );
}
