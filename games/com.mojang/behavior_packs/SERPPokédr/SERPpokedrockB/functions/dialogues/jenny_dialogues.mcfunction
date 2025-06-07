scoreboard players random @s[tag=!event] CombatRandom 1 5
scoreboard players random @s[tag=event] CombatRandom 1 3

execute as @s[tag=!event,scores={CombatRandom=1}] run tellraw @a[r=6] {"rawtext":[{"translate":"jenny.1"}]}
execute as @s[tag=!event,scores={CombatRandom=2}] run tellraw @a[r=6] {"rawtext":[{"translate":"jenny.2"}]}
execute as @s[tag=!event,scores={CombatRandom=3}] run tellraw @a[r=6] {"rawtext":[{"translate":"jenny.3"}]}
execute as @s[tag=!event,scores={CombatRandom=4}] run tellraw @a[r=6] {"rawtext":[{"translate":"jenny.4"}]}
execute as @s[tag=!event,scores={CombatRandom=5}] run tellraw @a[r=6] {"rawtext":[{"translate":"jenny.5"}]}
execute as @s[tag=event,scores={CombatRandom=1}] run tellraw @a[r=6] {"rawtext":[{"translate":"event.1"}]}
execute as @s[tag=event,scores={CombatRandom=2}] run tellraw @a[r=6] {"rawtext":[{"translate":"event.2"}]}
execute as @s[tag=event,scores={CombatRandom=3}] run tellraw @a[r=6] {"rawtext":[{"translate":"event.3"}]}

scoreboard players set @s CombatRandom 0

tag @s remove event