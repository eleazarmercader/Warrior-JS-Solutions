# Baby Steps Tower

## Level 5

_You hear cries for help. Captives must need rescuing._

> **TIP:** Combine `warrior.feel().getUnit().isEnemy()` and `warrior.feel().getUnit().isBound()` to see if there's a captive, and `warrior.rescue()` to rescue him. Don't attack captives.

## Floor Map

```
╔═══════╗
║@ CaaSC║
╚═══════╝

@ = you (20 HP)
C = captive (1 HP)
S = thick sludge (24 HP)
a = archer (7 HP)
```

## Abilities

### Actions (only one per turn)

- `warrior.attack()`: Attacks a unit in the given direction (`'forward'` by default), dealing 5 HP of damage.
- `warrior.rescue()`: Releases a unit from his chains in the given direction (`'forward'` by default).
- `warrior.rest()`: Gains 10% of max health back, but does nothing more.
- `warrior.walk()`: Moves one space in the given direction (`'forward'` by default).

### Senses

- `warrior.feel()`: Returns the adjacent space in the given direction (`'forward'` by default).
- `warrior.health()`: Returns an integer representing your health.
- `warrior.maxHealth()`: Returns an integer representing your maximum health.
- `warrior.think()`: Thinks out loud (`console.log` replacement).