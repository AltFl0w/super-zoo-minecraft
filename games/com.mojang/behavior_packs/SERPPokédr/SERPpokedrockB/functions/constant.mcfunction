#pokemonTimeOver
execute as @a if entity@s[tag=started] unless entity @s[hasitem={item=serp:pokedex}] run give @s serp:pokedex 1 0 {"item_lock":{"mode":"lock_in_inventory"},"keep_on_death":{}}
execute as @e[family=pokemon,scores={VIC=1..}] at @s if block ~~~ water run tp @s ~~0.1~
execute as @e[family=pokemon,scores={VIC=1..}] at @s if block ~ ~-0.5 ~ air run tp ~ ~-0.1~ true
execute as @e[family=!player,scores={VIC=1..}] at @s run effect @s slowness 1 10 true
#timers
execute as @e[scores={repel=1..}] at @s run scoreboard players remove @s repel 1