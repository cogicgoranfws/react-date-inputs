export interface DateInputsProps {
  value?: Date;
  onChange?(value?: Date): void;
  onBlur?(e: React.ChangeEvent): undefined;
  dayPlaceholder?: string;
  monthPlaceholder?: string;
  yearPlaceholder?: string;
  className?: string;
  label?: string;
  disabled?: boolean;
  inputComponent?: React.ElementType;
  labelComponent?: React.ElementType;
  inputComponentProps?: Record<string, unknown>;
  labelComponentProps?: Record<string, unknown>;
  show?: (keyof typeof Unit)[];
  autoTab?: boolean;
}

export enum Unit {
  day = 'day',
  month = 'month',
  year = 'year',
}

export interface DateUnits {
  [Unit.day]?: number | string;
  [Unit.month]?: number | string;
  [Unit.year]?: number | string;
}
