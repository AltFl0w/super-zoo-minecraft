scoreboard players random @s CombatRandom 1 5

execute as @s[scores={CombatRandom=1}] run tellraw @a[r=6] {"rawtext":[{"translate":"joy.1"}]}
execute as @s[scores={CombatRandom=2}] run tellraw @a[r=6] {"rawtext":[{"translate":"joy.2"}]}
execute as @s[scores={CombatRandom=3}] run tellraw @a[r=6] {"rawtext":[{"translate":"joy.3"}]}
execute as @s[scores={CombatRandom=4}] run tellraw @a[r=6] {"rawtext":[{"translate":"joy.4"}]}
execute as @s[scores={CombatRandom=5}] run tellraw @a[r=6] {"rawtext":[{"translate":"joy.5"}]}

scoreboard players set @s CombatRandom 0