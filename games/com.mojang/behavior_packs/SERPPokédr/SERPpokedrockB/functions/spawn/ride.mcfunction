scoreboard players add PKHP SerpWorld 1
execute if score PKHP SerpWorld matches 101.. run scoreboard players set PKHP SerpWorld 0

#Habilidades
execute as @s at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,scores={ability=17}] run damage @e[type=serp:loot_bubble,r=0.5] 1 entity_attack entity @s

execute at @s anchored eyes positioned ^0.4^^ if entity @e[c=1,r=0.4,tag=tamed,family=flying] positioned ^-0.8^^ if entity @e[c=1,r=0.4,tag=tamed,family=flying] run effect @s slow_falling 1 1 true
execute at @s anchored eyes positioned ^0.4^^ if entity @e[c=1,r=0.4,tag=tamed,family=flying] positioned ^-0.8^^ if entity @e[c=1,r=0.4,tag=tamed,scores={ability=19}] run effect @s slow_falling 1 1 true
execute at @s anchored eyes positioned ^0.4^^ if entity @e[c=1,r=0.4,tag=tamed,scores={ability=19}] positioned ^-0.8^^ if entity @e[c=1,r=0.4,tag=tamed,family=flying] run effect @s slow_falling 1 1 true
execute at @s anchored eyes positioned ^0.4^^ if entity @e[c=1,r=0.4,tag=tamed,scores={ability=19}] positioned ^-0.8^^ if entity @e[c=1,r=0.4,tag=tamed,scores={ability=19}] run effect @s slow_falling 1 1 true

#Zubat
execute at @s anchored eyes at @e[r=0.5,tag=tamed,family=zubat] anchored eyes if score PKHP SerpWorld matches 25 run particle minecraft:sonic_explosion ~~~
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=zubat] if score PKHP SerpWorld matches 25 run playsound mob.pokemon.41 @s
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=zubat] if score PKHP SerpWorld matches 25 run effect @s night_vision 1 1 true
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=zubat] if score PKHP SerpWorld matches 25 run camerashake add @s 0.2 0.5
execute at @s anchored eyes at @e[r=0.5,tag=tamed,family=zubat] anchored eyes if score PKHP SerpWorld matches 50 run particle minecraft:sonic_explosion ~~~
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=zubat] if score PKHP SerpWorld matches 50 run playsound mob.pokemon.41 @s
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=zubat] if score PKHP SerpWorld matches 50 run effect @s night_vision 1 1 true
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=zubat] if score PKHP SerpWorld matches 50 run camerashake add @s 0.2 0.5
execute at @s anchored eyes at @e[r=0.5,tag=tamed,family=zubat] anchored eyes if score PKHP SerpWorld matches 75 run particle minecraft:sonic_explosion ~~~
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=zubat] if score PKHP SerpWorld matches 75 run playsound mob.pokemon.41 @s
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=zubat] if score PKHP SerpWorld matches 75 run effect @s night_vision 1 1 true
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=zubat] if score PKHP SerpWorld matches 75 run camerashake add @s 0.2 0.5
execute at @s anchored eyes at @e[r=0.5,tag=tamed,family=zubat] anchored eyes if score PKHP SerpWorld matches 100 run particle minecraft:sonic_explosion ~~~
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=zubat] if score PKHP SerpWorld matches 100 run playsound mob.pokemon.41 @s
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=zubat] if score PKHP SerpWorld matches 100 run effect @s night_vision 1 1 true
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=zubat] if score PKHP SerpWorld matches 100 run camerashake add @s 0.2 0.5

#Magnemite
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=magnemite] at @e[type=item,r=6] facing entity @s feet run tp @e[type=item,r=6] ^^^0.1 true
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=magnemite] if score PKHP SerpWorld matches 0 at @e[type=item,r=6] run particle serp:attack_electric_tiny ~~0.5~
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=magnemite] if score PKHP SerpWorld matches 10 at @e[type=item,r=6] run particle serp:attack_electric_tiny ~~0.5~
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=magnemite] if score PKHP SerpWorld matches 20 at @e[type=item,r=6] run particle serp:attack_electric_tiny ~~0.5~
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=magnemite] if score PKHP SerpWorld matches 30 at @e[type=item,r=6] run particle serp:attack_electric_tiny ~~0.5~
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=magnemite] if score PKHP SerpWorld matches 40 at @e[type=item,r=6] run particle serp:attack_electric_tiny ~~0.5~
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=magnemite] if score PKHP SerpWorld matches 50 at @e[type=item,r=6] run particle serp:attack_electric_tiny ~~0.5~
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=magnemite] if score PKHP SerpWorld matches 60 at @e[type=item,r=6] run particle serp:attack_electric_tiny ~~0.5~
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=magnemite] if score PKHP SerpWorld matches 70 at @e[type=item,r=6] run particle serp:attack_electric_tiny ~~0.5~
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=magnemite] if score PKHP SerpWorld matches 80 at @e[type=item,r=6] run particle serp:attack_electric_tiny ~~0.5~
execute at @s anchored eyes if entity @e[r=0.5,tag=tamed,family=magnemite] if score PKHP SerpWorld matches 90 at @e[type=item,r=6] run particle serp:attack_electric_tiny ~~0.5~


#Para el jefe
execute as @s at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] run effect @s haste 1 1 true
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] run tag @e[r=6,type=item,name="Hulla",tag=!ItemDetect] add OreLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] run tag @e[r=6,type=item,name="Cobre bruto",tag=!ItemDetect] add OreLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] run tag @e[r=6,type=item,name="Hierro bruto",tag=!ItemDetect] add OreLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] run tag @e[r=6,type=item,name="Polvo de redstone",tag=!ItemDetect] add OreLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] run tag @e[r=6,type=item,name="Oro bruto",tag=!ItemDetect] add OreLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] run tag @e[r=6,type=item,name="Pepita de oro",tag=!ItemDetect] add OreLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] run tag @e[r=6,type=item,name="Lapislázuli",tag=!ItemDetect] add OreLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] run tag @e[r=6,type=item,name="Diamante",tag=!ItemDetect] add OreLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] run tag @e[r=6,type=item,name="Esmeralda",tag=!ItemDetect] add OreLog


execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ coal_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ coal_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ coal_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ coal_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 coal_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 coal_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ deepslate_coal_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ deepslate_coal_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ deepslate_coal_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ deepslate_coal_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 deepslate_coal_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 deepslate_coal_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ copper_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ copper_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ copper_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ copper_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 copper_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 copper_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ deepslate_copper_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ deepslate_copper_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ deepslate_copper_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ deepslate_copper_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 deepslate_copper_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 deepslate_copper_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ iron_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ iron_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ iron_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ iron_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 iron_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 iron_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ lapis_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ lapis_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ lapis_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ lapis_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 lapis_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 lapis_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ deepslate_lapis_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ deepslate_lapis_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ deepslate_lapis_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ deepslate_lapis_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 deepslate_lapis_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 deepslate_lapis_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ deepslate_iron_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ deepslate_iron_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ deepslate_iron_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ deepslate_iron_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 deepslate_iron_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 deepslate_iron_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ redstone_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ redstone_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ redstone_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ redstone_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 redstone_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 redstone_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ deepslate_redstone_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ deepslate_redstone_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ deepslate_redstone_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ deepslate_redstone_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 deepslate_redstone_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 deepslate_redstone_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ gold_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ gold_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ gold_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ gold_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 gold_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 gold_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ deepslate_gold_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ deepslate_gold_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ deepslate_gold_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ deepslate_gold_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 deepslate_gold_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 deepslate_gold_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ nether_gold_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ nether_gold_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ nether_gold_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ nether_gold_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 nether_gold_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 nether_gold_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ diamond_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ diamond_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ diamond_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ diamond_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 diamond_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 diamond_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ deepslate_diamond_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ deepslate_diamond_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ deepslate_diamond_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ deepslate_diamond_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 deepslate_diamond_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 deepslate_diamond_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ emerald_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ emerald_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ emerald_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ emerald_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 emerald_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 emerald_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ deepslate_emerald_ore run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ deepslate_emerald_ore run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~-1~~ deepslate_emerald_ore run setblock ~-1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~1~~ deepslate_emerald_ore run setblock ~1~~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~-1 deepslate_emerald_ore run setblock ~~~-1 air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] at @e[r=6,type=item,tag=OreLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~~1 deepslate_emerald_ore run setblock ~~~1 air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=dunsparce] run tag @e[r=7,type=item,tag=OreLog,tag=!ItemDetect] add ItemDetect


#spinarak
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=spinarak] run effect @s weaving 1 1


#Habilidad de Dios
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Tronco de roble",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Tronco de abeto",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Tronco de abedul",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Tronco de la jungla",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Tronco de acacia",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Tronco de roble oscuro",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Tronco de manglar",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Tronco de cerezo",tag=!ItemDetect] add TreeLog

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Oak Log",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Spruce Log",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Birch Log",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Jungle Log",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Acacia Log",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Dark Oak Log",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Mangrove Log",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Cherry Log",tag=!ItemDetect] add TreeLog

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Tora de Carvalho",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Tora de Pinheiro",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Tora de Bétula",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Tora da Selva",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Tora de Acácia",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Tora de Carvalho Escuro",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Tora de Mangue",tag=!ItemDetect] add TreeLog
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=6,type=item,name="Tora de Cerejeira",tag=!ItemDetect] add TreeLog

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] at @e[r=6,type=item,tag=TreeLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ oak_log run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] at @e[r=6,type=item,tag=TreeLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ spruce_log run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] at @e[r=6,type=item,tag=TreeLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ birch_log run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] at @e[r=6,type=item,tag=TreeLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ jungle_log run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] at @e[r=6,type=item,tag=TreeLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ acacia_log run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] at @e[r=6,type=item,tag=TreeLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ dark_oak_log run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] at @e[r=6,type=item,tag=TreeLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ mangrove_log run setblock ~~1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] at @e[r=6,type=item,tag=TreeLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~1~ cherry_log run setblock ~~1~ air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] at @e[r=6,type=item,tag=TreeLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ oak_log run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] at @e[r=6,type=item,tag=TreeLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ spruce_log run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] at @e[r=6,type=item,tag=TreeLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ birch_log run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] at @e[r=6,type=item,tag=TreeLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ jungle_log run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] at @e[r=6,type=item,tag=TreeLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ acacia_log run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] at @e[r=6,type=item,tag=TreeLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ dark_oak_log run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] at @e[r=6,type=item,tag=TreeLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ mangrove_log run setblock ~~-1~ air destroy
execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] at @e[r=6,type=item,tag=TreeLog,tag=!ItemDetect,rm=0.7] unless entity @s[r=0.7] if block ~~-1~ cherry_log run setblock ~~-1~ air destroy

execute as @a at @s positioned ~~1.8~ if entity @e[r=0.6,tag=tamed,family=bidoof] run tag @e[r=7,type=item,tag=TreeLog,tag=!ItemDetect] add ItemDetect