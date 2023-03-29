export type ButtonProps = {
  label: string;
  onClick: () => void;
  colorScheme:
    | 'btn-primary'
    | 'btn-primary-outline'
    | 'btn-primary-disabled'
    | 'btn-secondary'
    | 'btn-secondary-outline'
    | 'btn-secondary-disabled'
    | 'btn-accent'
    | 'btn-accent-outline'
    | 'btn-accent-disabled'
    | 'btn-success'
    | 'btn-success-outline'
    | 'btn-success-disabled'
    | 'btn-warning'
    | 'btn-warning-outline'
    | 'btn-warning-disabled'
    | 'btn-danger'
    | 'btn-danger-outline'
    | 'btn-danger-disabled'
    | 'btn-disabled'
    | 'default';
  disabled?: boolean;
};
