/// <reference path="omnisharp-server.d.ts" />
/// <reference path="node_modules/rx/ts/rx.all.d.ts" />
/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/chai/chai.d.ts" />
/// <reference path="typings/lodash/lodash.d.ts" />
/// <reference path="lib/interfaces.d.ts" />

interface Map<K, V> {
    clear(): void;
    delete(key: K): boolean;
    forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V;
    has(key: K): boolean;
    set(key: K, value?: V): Map<K, V>;
    size: number;
}
interface MapConstructor {
    new <K, V>(): Map<K, V>;
    prototype: Map<any, any>;
}
declare var Map: MapConstructor;
