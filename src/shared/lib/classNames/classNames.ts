export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
  styles: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string {
  return [
    styles,
    ...additional.filter(Boolean),
    ...Object.keys(mods).filter((className) => !!mods[className]),
  ].join(' ');
}
