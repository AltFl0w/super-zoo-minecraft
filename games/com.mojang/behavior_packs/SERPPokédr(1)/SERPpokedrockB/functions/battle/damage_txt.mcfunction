#damage

execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=1..},tag=!max,tag=!mega] ~~~ tellraw @a[r=15,tag=text_damage] {"rawtext":[{"translate":"combat.received"},{"score":{"name":"@s","objective":"damage"}},{"translate":"combat.damage"}]}
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=1..},tag=max] ~~~ tellraw @a[r=15,tag=text_damage] {"rawtext":[{"translate":"combat.receivedd"},{"score":{"name":"@s","objective":"damage"}},{"translate":"combat.damage"}]}
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=1..},tag=mega] ~~~ tellraw @a[r=15,tag=text_damage] {"rawtext":[{"translate":"combat.receivedm"},{"score":{"name":"@s","objective":"damage"}},{"translate":"combat.damage"}]}

execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=!1..}] ~~~ tellraw @a[r=15,tag=text_damage] {"rawtext":[{"translate":"combat.not_received"}]}

#ineffective

execute @s[scores={variable=!1..6,effective=-20..-1},r=16,c=1,tag=on_turn] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ tellraw @a[r=15,tag=!hide_txt] {"rawtext":[{"translate":"combat.ineffective"}]}

#immunities

execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=normal] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ghost] ~~~ tellraw @a[r=15,tag=!hide_txt] {"rawtext":[{"translate":"combat.immunity"}]}
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fight] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ghost] ~~~ tellraw @a[r=15,tag=!hide_txt] {"rawtext":[{"translate":"combat.immunity"}]}
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=poison] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ tellraw @a[r=15,tag=!hide_txt] {"rawtext":[{"translate":"combat.immunity"}]}
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ground] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=flying] ~~~ tellraw @a[r=15,tag=!hide_txt] {"rawtext":[{"translate":"combat.immunity"}]}
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ghost] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=normal] ~~~ tellraw @a[r=15,tag=!hide_txt] {"rawtext":[{"translate":"combat.immunity"}]}
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=electric] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ground] ~~~ tellraw @a[r=15,tag=!hide_txt] {"rawtext":[{"translate":"combat.immunity"}]}
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=psychic] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dark] ~~~ tellraw @a[r=15,tag=!hide_txt] {"rawtext":[{"translate":"combat.immunity"}]}
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=dragon] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fairy] ~~~ tellraw @a[r=15,tag=!hide_txt] {"rawtext":[{"translate":"combat.immunity"}]}

#miss

execute @s[scores={variable=1..6}] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ tellraw @a[r=15,tag=!hide_txt] {"rawtext":[{"translate":"combat.miss"}]}

#effectiveness

execute @s[scores={variable=!1..6,effective=1..},r=16,c=1,tag=on_turn] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ tellraw @a[r=15,tag=!hide_txt] {"rawtext":[{"translate":"combat.effective"}]}

#critic

execute @s[scores={variable=!1..6},tag=critic] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ tellraw @a[r=15,tag=!hide_txt] {"rawtext":[{"translate":"combat.critic"}]}
