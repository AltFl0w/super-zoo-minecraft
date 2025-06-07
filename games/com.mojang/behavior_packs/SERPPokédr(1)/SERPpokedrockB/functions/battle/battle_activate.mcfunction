scoreboard objectives add serpdelay dummy 
scoreboard objectives add serpdelay2 dummy 
scoreboard players set @a[tag=!smr] serpdelay 0
tag @a[scores={serpdelay=0}] add smr
scoreboard players set @p serp50 60
scoreboard players operation @p serpdelay2 = @p serpdelay 
scoreboard players operation @p serpdelay2 /= @p serp50 
execute @p ~~~ titleraw @s[scores={serpdelay=1..}] actionbar {"rawtext":[{"text":" §l§c"},{"score":{"name":"@s","objective":"serpdelay2"}},{"text":"§r "}]}

execute @p ~~~ execute @s[hasitem={location=slot.weapon.offhand,item=serp:dynamax_band},scores={serpdelay=0}] ~~~ event entity @e[family=pokemon,family=tamed,c=1,r=5] serp:max
execute @p ~~~ execute @s[hasitem={location=slot.weapon.offhand,item=serp:dynamax_band},scores={serpdelay=0}] ~~~ playsound random.explode @a[r=16] ~~~ 0.5
execute @p ~~~ execute @s[hasitem={location=slot.weapon.offhand,item=serp:dynamax_band},scores={serpdelay=0}] ~~~ scoreboard players set @s serpdelay 3600

execute @p ~~~ execute @s[hasitem={location=slot.weapon.offhand,item=serp:mega_ring},scores={serpdelay=0}] ~~~ event entity @e[family=pokemon,family=tamed,c=1,r=5] serp:mega
execute @p ~~~ execute @s[hasitem={location=slot.weapon.offhand,item=serp:mega_ring},scores={serpdelay=0}] ~~~ playsound serp.mega @a[r=16] ~~~ 0.5
execute @p ~~~ execute @s[hasitem={location=slot.weapon.offhand,item=serp:mega_ring},scores={serpdelay=0}] ~~~ scoreboard players set @s serpdelay 3600

execute @p ~~~ execute @s[hasitem={location=slot.weapon.offhand,item=serp:mega_ring_x},scores={serpdelay=0}] ~~~ event entity @e[family=pokemon,family=tamed,c=1,r=5] serp:megax
execute @p ~~~ execute @s[hasitem={location=slot.weapon.offhand,item=serp:mega_ring_x},scores={serpdelay=0}] ~~~ playsound serp.mega @a[r=16] ~~~ 0.5
execute @p ~~~ execute @s[hasitem={location=slot.weapon.offhand,item=serp:mega_ring_x},scores={serpdelay=0}] ~~~ scoreboard players set @s serpdelay 3600

execute @p ~~~ execute @s[hasitem={location=slot.weapon.offhand,item=serp:mega_ring_y},scores={serpdelay=0}] ~~~ event entity @e[family=pokemon,family=tamed,c=1,r=5] serp:megay
execute @p ~~~ execute @s[hasitem={location=slot.weapon.offhand,item=serp:mega_ring_y},scores={serpdelay=0}] ~~~ playsound serp.mega @a[r=16] ~~~ 0.5
execute @p ~~~ execute @s[hasitem={location=slot.weapon.offhand,item=serp:mega_ring_y},scores={serpdelay=0}] ~~~ scoreboard players set @s serpdelay 3600

execute @p ~~~ execute @s[tag=!max,tag=!mega,scores={serpdelay=0},lm=1] ~~~ tag @e[family=pokemon,family=tamed,c=1,r=5] add serppower
execute @p ~~~ execute @s[tag=!max,tag=!mega,scores={serpdelay=0},lm=1] ~~~ execute @e[family=pokemon,family=tamed,c=1,r=5] ~~~ particle serp:buff ~~0.5~
execute @p ~~~ execute @s[tag=!max,tag=!mega,scores={serpdelay=0},lm=1] ~~~ xp -1l @s
execute @p ~~~ execute @s[tag=!max,tag=!mega,scores={serpdelay=0},lm=1] ~~~ scoreboard players set @s serpdelay 1200