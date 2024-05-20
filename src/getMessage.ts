export function getMessage(
  messageOrMessageGetter?: undefined | string | (() => string)
) {
  return typeof messageOrMessageGetter === 'function'
    ? messageOrMessageGetter()
    : messageOrMessageGetter;
}
