execute @s[tag=!started] ~~~ replaceitem entity @s slot.hotbar 0 serp:button_a 1 0 {"item_lock":{"mode":"lock_in_slot"},"keep_on_death": {}}
gamerule sendCommandFeedback false
gamerule showCoordinates true
gamerule commandblockoutput false
tag @a[tag=!text_damage] add text_damage
scoreboard objectives add repel dummy 
scoreboard players set @s[tag=!finished] repel 0
gamemode s @s[hasitem={location=slot.weapon.mainhand,item=minecraft:compass}]
gamemode s @s[hasitem={location=slot.weapon.mainhand,item=serp:vs_seeker}]
execute @s[tag=!started] ~~~ tag @s add started
execute @s[tag=finished] ~~~ clear @s serp:button_a
execute @s[tag=finished] ~~~ clear @s serp:first_generation
execute @s[tag=finished] ~~~ clear @s serp:second_generation
execute @s[tag=finished] ~~~ clear @s serp:third_generation
execute @s[tag=finished] ~~~ clear @s serp:fourth_generation
execute @s[tag=finished] ~~~ clear @s serp:fifth_generation
execute @s[tag=finished] ~~~ clear @s serp:sixth_generation
execute @s[tag=finished] ~~~ clear @s serp:seventh_generation
execute @s[tag=finished] ~~~ clear @s serp:eighth_generation
execute @s[tag=finished] ~~~ clear @s serp:pre_bulbasaur
execute @s[tag=finished] ~~~ clear @s serp:pre_charmander
execute @s[tag=finished] ~~~ clear @s serp:pre_squirtle
execute @s[tag=finished] ~~~ clear @s serp:pre_chikorita
execute @s[tag=finished] ~~~ clear @s serp:pre_cyndaquil
execute @s[tag=finished] ~~~ clear @s serp:pre_totodile

function repel

scoreboard players remove @a[scores={serpdelay=1..}] serpdelay 1