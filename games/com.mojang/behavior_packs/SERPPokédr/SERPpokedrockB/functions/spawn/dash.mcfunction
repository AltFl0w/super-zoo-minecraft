
execute as @s[family=tauros] if block ^^0.3^1 air positioned ^^0.3^1 run damage @e[r=0.6] 6 entity_explosion entity @s
execute as @s[family=tauros] if block ^^0.3^2 air positioned ^^0.3^2 run damage @e[r=0.6] 6 entity_explosion entity @s
execute as @s[family=tauros] if block ^^0.3^3 air positioned ^^0.3^3 run damage @e[r=0.6] 6 entity_explosion entity @s
execute as @s[family=tauros] if block ^^0.3^4 air positioned ^^0.3^4 run damage @e[r=0.6] 6 entity_explosion entity @s
execute as @s[family=tauros] if block ^^0.3^5 air positioned ^^0.3^5 run damage @e[r=0.6] 6 entity_explosion entity @s

execute as @s if block ^^0.3^ air run particle serp:attack_rock_ground ~~~
execute as @s if block ^^0.3^1 air run tp @s ^^^1 true
execute as @s if block ^^0.3^1 air if block ^^0.3^2 air run tp @s ^^^2 true
execute as @s if block ^^0.3^1 air if block ^^0.3^2 air if block ^^0.3^3 air run tp @s ^^^3 true
execute as @s if block ^^0.3^1 air if block ^^0.3^2 air if block ^^0.3^3 air if block ^^0.3^4 air run tp @s ^^^4 true
execute as @s if block ^^0.3^1 air run effect @s speed 4 1 true
