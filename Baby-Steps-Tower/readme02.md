# Baby Steps Tower

## Level 2

_It's too dark to see anything, but you smell sludge nearby._

> **TIP:** Use `warrior.feel().isEmpty()` to see if there's anything in front of you, and `warrior.attack()` to fight it. Remember, you can only do one action per turn.

## Floor Map

```
╔════════╗
║@   s  >║
╚════════╝

@ = you (20 HP)
s = sludge (12 HP)
> = stairs
```

## Abilities

### Actions (only one per turn)

- `warrior.attack()`: Attacks a unit in the given direction (`'forward'` by default), dealing 5 HP of damage.
- `warrior.walk()`: Moves one space in the given direction (`'forward'` by default).

### Senses

- `warrior.feel()`: Returns the adjacent space in the given direction (`'forward'` by default).
- `warrior.think()`: Thinks out loud (`console.log` replacement).
