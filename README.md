# 🦕 deno-module-starter

[Deno](https://deno.land) module starter repository.

## Usage

```typescript
import { multiplyNumbers } from "https://deno.land/x/test_deno@0.1.0/mod.ts";

const multipliedNumbers = multiplyNumbers(2,2);
console.log(multipliedNumbers); // 4
```

## Test

```bash
# unit tests
deno ./test.ts
```

## Format code

```bash
deno fmt **/*.ts
```

## Resources

- [Deno Website](https://deno.land)
- [Deno Style Guide](https://deno.land/std/style_guide.md)
- [Deno Gitter](https://gitter.im/denolife/Lobby)
