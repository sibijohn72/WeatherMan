import { helper } from '@ember/component/helper';

export function celsiusConverter(params/*, hash*/) {
  return ((params[0]-273).toFixed(2));
}

export default helper(celsiusConverter);
