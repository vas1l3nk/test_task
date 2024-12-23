declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export = classNames;
}
type DeepPartial<T> = T extends object
    ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
    : T;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
