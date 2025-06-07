scoreboard players random @s CombatRandom 1 5

execute as @s[scores={CombatRandom=1}] run tellraw @a[r=6] {"rawtext":[{"translate":"prof.1"}]}
execute as @s[scores={CombatRandom=2}] run tellraw @a[r=6] {"rawtext":[{"translate":"prof.2"}]}
execute as @s[scores={CombatRandom=3}] run tellraw @a[r=6] {"rawtext":[{"translate":"prof.3"}]}
execute as @s[scores={CombatRandom=4}] run tellraw @a[r=6] {"rawtext":[{"translate":"prof.4"}]}
execute as @s[scores={CombatRandom=5}] run tellraw @a[r=6] {"rawtext":[{"translate":"prof.5"}]}

scoreboard players set @s CombatRandom 0