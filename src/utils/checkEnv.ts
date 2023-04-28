export function checkEnv(param: string | undefined) {
  if (!param || typeof param !== 'string') {
    console.error(`${param} is not defined or not a string`);
  }
  return param as string;
}
