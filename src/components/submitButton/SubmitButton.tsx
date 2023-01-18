import { Button } from '@mui/material';
type Props = {
  variant?: 'outlined' | 'contained' | 'text';
  children: string;
  onClick?: React.MouseEventHandler;
};

const SubmitButton = ({ children, variant = 'outlined', ...rest }: Props) => {
  return (
    <Button variant={variant} {...rest}>
      {children}
    </Button>
  );
};
export default SubmitButton;
