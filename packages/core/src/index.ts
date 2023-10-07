import { RadioField } from './fields/radioField';
import { DatetimeField } from './fields/datetimeField';
import { Button } from './button';
import { registerConstructor } from './constants';
import {
  CheckboxField,
  ColorField,
  DateField,
  EmailField,
  FileField,
  HiddenField,
  NumberField,
  PasswordField,
  RangeField,
  SelectField,
  StaticField,
  TelField,
  TextField,
  TextareaField,
  TimeField,
  UrlField,
  WeekField,
} from './fields';
import { Group } from './group';
import { Row } from './row';

registerConstructor('group', Group, false);
registerConstructor('row', Row, false);
registerConstructor('button', Button, false);
registerConstructor('checkbox', CheckboxField, true);
registerConstructor('color', ColorField, true);
registerConstructor('date', DateField, true);
registerConstructor('datetime', DatetimeField, true);
registerConstructor('email', EmailField, true);
registerConstructor('file', FileField, true);
registerConstructor('hidden', HiddenField, true);
registerConstructor('number', NumberField, true);
registerConstructor('password', PasswordField, true);
registerConstructor('radio', RadioField, true);
registerConstructor('range', RangeField, true);
registerConstructor('select', SelectField, true);
registerConstructor('static', StaticField, true);
registerConstructor('tel', TelField, true);
registerConstructor('textarea', TextareaField, true);
registerConstructor('text', TextField, true);
registerConstructor('time', TimeField, true);
registerConstructor('url', UrlField, true);
registerConstructor('week', WeekField, true);

export { Form } from './form.js';
export { setLicenseKey } from './utils.js';
