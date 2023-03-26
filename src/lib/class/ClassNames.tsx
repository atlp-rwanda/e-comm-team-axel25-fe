import classNames from 'clsx';

export function mergeClassNames(classObj: Record<string, boolean>): string {
  return classNames(classObj);
}
