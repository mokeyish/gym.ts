import { Space } from './space';
import { int32, Ix1 } from '@tszone/ndarray';
import { assert } from '@tszone/ext';

/**
 * A discrete space
 * @example
 *     >>> Discrete(2)
 */
export class Discrete extends Space {
    public readonly n: number;
    constructor(n: number) {
        assert(n >= 0);
        super([n], int32);
        this.n = n;
    }

    contains(x: number): boolean {
        return x >= 0 && x < this.n;
    }

    sample(): number {
        return Math.randint(this.n);
    }

    toString(): string {
        return `Discrete(${this.n})`;
    }

    equal(other: Space): boolean {
        return other instanceof Discrete && other.n === this.n;
    }
}
