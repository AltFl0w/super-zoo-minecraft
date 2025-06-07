tag @s[tag=out_slot1] add return1
tag @s[tag=out_slot2] add return2
tag @s[tag=out_slot3] add return3
tag @s[tag=out_slot4] add return4
tag @s[tag=out_slot5] add return5
tag @s[tag=out_slot6] add return6
tellraw @s[tag=dying] {"rawtext":[{"text":"<"},{"selector":"@s"},{"text":"> "},{"translate":"serp.fatal_damage"}]}
tellraw @s[tag=!dying,tag=!evolve,tag=!pokevial] {"rawtext":[{"translate":"serp.healed"}]}
tellraw @s[tag=reloadvial] {"rawtext":[{"translate":"serp.vial_reloaded"}]}
tellraw @s[tag=pokevial] {"rawtext":[{"translate":"serp.vial_healed"},{"score":{"name":"@s","objective":"pokevial"}}]}

tag @s[tag=dying] remove dying
tag @s[tag=evolve] remove evolve
tag @s[tag=pokevial] remove pokevial
tag @s[tag=reloadvial] remove reloadvial