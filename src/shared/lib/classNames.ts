type Mods = Record<string, string | boolean>;

export const classNames = (cls: string, mods: Mods = {}, otherClasses: string[] = []): string => {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
        ...otherClasses.filter(Boolean)
    ].join(' ');
};
