import { helper as buildHelper } from '@ember/component/helper';

export function not(params) {
  return !params[0];
}

export default buildHelper(not);