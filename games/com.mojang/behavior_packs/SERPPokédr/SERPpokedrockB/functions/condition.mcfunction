scoreboard players set @s[tag=!battle] STGC2 80
execute as @s[scores={condition=1}] run particle serp:attack_electric ~~~
execute as @s[scores={condition=1}] run effect @s slowness 1 8 true
execute as @s[scores={condition=2}] run particle serp:attack_fire ~~~
execute as @s[scores={condition=2}] run damage @s 4 fire
execute as @s[scores={condition=3}] run particle serp:attack_poison ~~~
execute as @s[scores={condition=3}] run damage @s 3 fire
execute as @s[scores={condition=4}] run particle serp:attack_poison ~~~
execute as @s[scores={condition=4}] run damage @s 6 fire
execute as @s[scores={condition=5}] anchored eyes run particle serp:sleeping ~~~
execute as @s[scores={condition=5}] anchored eyes run particle serp:sleeping2 ~~~
execute as @s[scores={condition=5}] run effect @s slowness 3 10 true
execute as @s[scores={condition=6}] anchored eyes run particle serp:sleeping ~~~
execute as @s[scores={condition=6}] anchored eyes run particle serp:sleeping2 ~~~
execute as @s[scores={condition=6}] run effect @s slowness 3 1 true
execute as @s[scores={condition=7}] run particle serp:attack_ice ~~~
execute as @s[scores={condition=7}] run effect @s slowness 3 10 true
execute as @s[scores={condition=8}] anchored eyes run particle serp:confused ~~~