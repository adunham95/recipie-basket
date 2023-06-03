import React from 'react';
import { Button, IButtonProps } from './button';

interface IIconButtonProps extends IButtonProps {
  title: string;
}

const IconButton = (props: IIconButtonProps) => {
  return (
    <Button {...props}>
      {props.children}
      <span className=" sr-only">{props.title}</span>
    </Button>
  );
};

export default IconButton;
