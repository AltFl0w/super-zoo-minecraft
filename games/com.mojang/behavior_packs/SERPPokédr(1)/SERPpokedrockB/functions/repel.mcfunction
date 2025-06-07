scoreboard players remove @a[scores={repel=1..}] repel 1
scoreboard objectives add repel2 dummy
scoreboard objectives add repel3 dummy
scoreboard players set @a repel2 10
execute @a ~~~ scoreboard players operation @s repel3 = @s repel
execute @a ~~~ scoreboard players operation @s repel3 /= @s repel2

execute @a ~~~ titleraw @s[scores={repel=10..},tag=!hideserp] actionbar {"rawtext":[{"score":{"name":"@s","objective":"repel3"}}]}
execute @a ~~~ titleraw @s[scores={repel=1..9},tag=!hideserp] actionbar {"rawtext":[{"score":{"name":"@s","objective":"repel3"}},{"text":"."},{"score":{"name":"@s","objective":"repel"}}]}