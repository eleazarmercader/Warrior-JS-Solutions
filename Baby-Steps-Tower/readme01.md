# Baby Steps Tower

## Level 1

_You see before yourself a long hallway with stairs at the end. There's nothing in the way._

> **TIP:** Call `warrior.walk()` to walk forward in the Player's `playTurn` method.

## Floor Map

```
╔════════╗
║@      >║
╚════════╝

@ = you (20 HP)
> = stairs
```

## Abilities

### Actions (only one per turn)

- `warrior.walk()`: moves one space in the given direction (`'forward'` by default).

### Senses

- `warrior.think()`: thinks out loud (`console.log` replacement).