import { PluginItem } from '@babel/core';

export function babelRemoveConsoleLogPlugin(): PluginItem {
    return {
        visitor: {
            CallExpression(path) {
                const callee = path.get('callee');

                if (callee.isMemberExpression()) {
                    const object = callee.get('object');
                    const property = callee.get('property');

                    if (
                        object.isIdentifier({ name: 'console' }) &&
                        property.isIdentifier({ name: 'log' })
                    ) {
                        path.remove();
                    }
                }
            },
        },
    };
}
