tag @s add on_turn
tp @s ~~0.5~ facing @e[family=pokemon,r=10,tag=on_fight,tag=!on_turn,c=1]
execute @a[r=15,c=2] ~~~ tp @s ~~0.2~ facing @e[family=pokemon,r=10,tag=on_fight,tag=!on_turn,c=1]
effect @s slowness 3 10 true

#Scores

scoreboard objectives add atkb dummy
scoreboard objectives add critic dummy
scoreboard objectives add stab dummy
scoreboard objectives add serp50 dummy
scoreboard objectives add effective dummy
scoreboard objectives add damage dummy
scoreboard objectives add variable dummy
scoreboard objectives add extra dummy
scoreboard players set @s[family=tiny] atkb 4
scoreboard players set @s[family=medium] atkb 7
scoreboard players set @s[family=big] atkb 10
scoreboard players set @s[family=pseudo] atkb 15
scoreboard players set @s[family=legendary] atkb 20
scoreboard players set @s critic 0
scoreboard players set @s stab 0
scoreboard players set @s serp50 2
scoreboard players set @s effective 0
scoreboard players set @s damage 0
scoreboard players set @s variable 0
scoreboard players set @s[tag=!serppower] extra 0

#Immunity

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ghost] ~~~ scoreboard players set @e[r=16,c=1,tag=on_turn,tag=normal] extra -100
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ghost] ~~~ scoreboard players set @e[r=16,c=1,tag=on_turn,tag=fight] extra -100
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ scoreboard players set @e[r=16,c=1,tag=on_turn,tag=poison] extra -100
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=flying] ~~~ scoreboard players set @e[r=16,c=1,tag=on_turn,tag=ground] extra -100
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=normal] ~~~ scoreboard players set @e[r=16,c=1,tag=on_turn,tag=ghost] extra -100
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ground] ~~~ scoreboard players set @e[r=16,c=1,tag=on_turn,tag=electric] extra -100
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dark] ~~~ scoreboard players set @e[r=16,c=1,tag=on_turn,tag=psychic] extra -100
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fairy] ~~~ scoreboard players set @e[r=16,c=1,tag=on_turn,tag=dragon] extra -100

#Resistances

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=normal] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=normal] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=flying] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=fight] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=poison] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=fight] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=bug] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=fight] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=psychic] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=fight] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fairy] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=fight] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=flying] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=flying] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=electric] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=flying] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=poison] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=poison] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ground] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=poison] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=poison] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ghost] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=poison] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=bug] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=ground] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=ground] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fight] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=rock] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ground] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=rock] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=rock] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fight] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=bug] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=flying] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=bug] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=poison] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=bug] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ghost] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=bug] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=bug] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=bug] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fairy] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=bug] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dark] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=ghost] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=steel] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=steel] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=water] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=steel] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=electric] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=steel] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=fire] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=fire] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=water] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=fire] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dragon] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=fire] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=water] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=water] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=water] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dragon] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=water] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=flying] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=grass] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=poison] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=grass] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=bug] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=grass] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=grass] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=grass] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=grass] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dragon] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=grass] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=electric] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=electric] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=electric] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dragon] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=electric] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=psychic] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=psychic] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=psychic] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=ice] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=ice] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=water] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=ice] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ice] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=ice] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=dragon] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fight] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=dark] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dark] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=dark] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fairy] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=dark] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=poison] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=fairy] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=fairy] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire] ~~~ scoreboard players remove @e[r=16,c=1,tag=on_turn,tag=fairy] effective 1

#Effectivities

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=normal,family=!ghost] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=fight] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock,family=!ghost] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=fight] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel,family=!ghost] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=fight] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ice,family=!ghost] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=fight] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dark,family=!ghost] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=fight] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fight] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=flying] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=bug] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=flying] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=flying] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass,family=!steel] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=poison] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fairy,family=!steel] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=poison] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=poison,family=!flying] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=ground] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock,family=!flying] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=ground] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel,family=!flying] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=ground] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire,family=!flying] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=ground] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=electric,family=!flying] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=ground] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=flying] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=rock] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=bug] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=rock] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=rock] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ice] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=rock] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=bug] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=psychic] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=bug] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dark] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=bug] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ghost,family=!normal] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=ghost] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=psychic,family=!normal] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=ghost] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=steel] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ice] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=steel] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fairy] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=steel] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=bug] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=fire] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=fire] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=fire] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ice] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=fire] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ground] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=water] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=water] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=water] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ground] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=grass] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=grass] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=water] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=grass] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=flying,family=!ground] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=electric] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=water,family=!ground] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=electric] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fight,family=!dark] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=psychic] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=poison,family=!dark] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=psychic] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=flying] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=ice] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ground] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=ice] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=ice] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dragon] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=ice] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dragon,family=!fairy] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=dragon] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ghost] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=dark] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=psychic] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=dark] effective 1

execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fight] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=fairy] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dark] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=fairy] effective 1
execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dragon] ~~~ scoreboard players add @e[r=16,c=1,tag=on_turn,tag=fairy] effective 1

#stab

scoreboard players set @s[tag=normal,family=normal] stab 1
scoreboard players set @s[tag=fight,family=fight] stab 1
scoreboard players set @s[tag=flying,family=flying] stab 1
scoreboard players set @s[tag=poison,family=poison] stab 1
scoreboard players set @s[tag=ground,family=ground] stab 1
scoreboard players set @s[tag=rock,family=rock] stab 1
scoreboard players set @s[tag=bug,family=bug] stab 1
scoreboard players set @s[tag=ghost,family=ghost] stab 1
scoreboard players set @s[tag=steel,family=steel] stab 1
scoreboard players set @s[tag=fire,family=fire] stab 1
scoreboard players set @s[tag=water,family=water] stab 1
scoreboard players set @s[tag=grass,family=grass] stab 1
scoreboard players set @s[tag=electric,family=electric] stab 1
scoreboard players set @s[tag=psychic,family=psychic] stab 1
scoreboard players set @s[tag=ice,family=ice] stab 1
scoreboard players set @s[tag=dragon,family=dragon] stab 1
scoreboard players set @s[tag=dark,family=dark] stab 1
scoreboard players set @s[tag=fairy,family=fairy] stab 1


#Modifications

scoreboard players random @s variable 1 100
scoreboard players set @s[scores={variable=1..6}] extra -100
scoreboard players set @s[tag=critic] critic 1
scoreboard players add @s[tag=mega] extra 2
scoreboard players add @s[tag=serppower] extra 3


#damage operation

scoreboard players operation @s stab *= @s atkb 
scoreboard players operation @s stab /= @s serp50 
scoreboard players operation @s stab /= @s serp50 

scoreboard players operation @s critic *= @s atkb 

scoreboard players operation @s effective *= @s atkb 
scoreboard players operation @s effective /= @s serp50

scoreboard players operation @s extra *= @s atkb 
scoreboard players operation @s extra /= @s serp50

scoreboard players operation @e[c=1,r=16,tag=on_fight,tag=!on_turn] damage = @s atkb
scoreboard players operation @e[c=1,r=16,tag=on_fight,tag=!on_turn] damage += @s stab
scoreboard players operation @e[c=1,r=16,tag=on_fight,tag=!on_turn] damage += @s effective
scoreboard players operation @e[c=1,r=16,tag=on_fight,tag=!on_turn] damage += @s critic
scoreboard players operation @e[c=1,r=16,tag=on_fight,tag=!on_turn] damage += @s extra
scoreboard players operation @e[c=1,r=16,tag=on_fight,tag=!on_turn,tag=max] damage /= @s serp50


#damage

damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=1}] 1 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=2}] 2 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=3}] 3 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=4}] 4 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=5}] 5 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=6}] 6 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=7}] 7 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=8}] 8 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=9}] 9 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=10}] 10 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=11}] 11 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=12}] 12 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=13}] 13 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=14}] 14 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=15}] 15 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=16}] 16 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=17}] 17 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=18}] 18 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=19}] 19 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=20}] 20 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=21}] 21 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=22}] 22 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=23}] 23 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=24}] 24 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=25}] 25 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=26}] 26 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=27}] 27 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=28}] 28 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=29}] 29 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=30}] 30 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=31}] 31 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=32}] 32 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=33}] 33 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=34}] 34 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=35}] 35 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=36}] 36 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=37}] 37 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=38}] 38 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=39}] 39 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=40}] 40 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=41}] 41 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=42}] 42 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=43}] 43 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=44}] 44 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=45}] 45 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=46}] 46 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=47}] 47 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=48}] 48 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=49}] 49 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=50}] 50 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=51}] 51 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=52}] 52 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=53}] 53 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=54}] 54 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=55}] 55 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=56}] 56 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=57}] 57 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=58}] 58 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=59}] 59 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=60}] 60 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=61}] 61 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=62}] 62 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=63}] 63 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=64}] 64 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=65}] 65 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=66}] 66 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=67}] 67 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=68}] 68 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=69}] 69 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=70}] 70 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=71}] 71 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=72}] 72 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=73}] 73 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=74}] 74 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=75}] 75 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=76}] 76 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=77}] 77 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=78}] 78 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=79}] 79 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=80}] 80 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=81}] 81 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=82}] 82 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=83}] 83 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=84}] 84 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=85}] 85 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=86}] 86 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=87}] 87 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=88}] 88 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=89}] 89 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=90}] 90 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=91}] 91 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=92}] 92 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=93}] 93 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=94}] 94 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=95}] 95 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=96}] 96 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=97}] 97 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=98}] 98 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=99}] 99 none entity @s
damage @e[c=1,r=16,tag=on_fight,tag=!on_turn,scores={damage=100}] 100 none entity @s

#Particle

execute @s[scores={variable=!1..6},tag=critic] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle minecraft:critical_hit_emitter ~~1~
execute @s[scores={variable=!1..6},tag=bug] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_bug ~~0.5~
execute @s[scores={variable=!1..6},tag=dark] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_dark ~~0.5~
execute @s[scores={variable=!1..6},tag=dragon] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_dragon ~~0.5~
execute @s[scores={variable=!1..6},tag=electric] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_electric ~~0.5~
execute @s[scores={variable=!1..6},tag=fairy] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_fairy ~~0.5~
execute @s[scores={variable=!1..6},tag=fight] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_fight ~~0.5~
execute @s[scores={variable=!1..6},tag=fire] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_fire ~~0.5~
execute @s[scores={variable=!1..6},tag=flying] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_flying ~~0.5~
execute @s[scores={variable=!1..6},tag=ghost] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_ghost ~~0.5~
execute @s[scores={variable=!1..6},tag=grass] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_grass ~~0.5~
execute @s[scores={variable=!1..6},tag=ground] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_ground ~~0.5~
execute @s[scores={variable=!1..6},tag=normal] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_normal ~~0.5~
execute @s[scores={variable=!1..6},tag=ice] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_ice ~~0.5~
execute @s[scores={variable=!1..6},tag=poison] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_poison ~~0.5~
execute @s[scores={variable=!1..6},tag=psychic] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_psychic ~~0.5~
execute @s[scores={variable=!1..6},tag=rock] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_rock ~~0.5~
execute @s[scores={variable=!1..6},tag=steel] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_steel ~~0.5~
execute @s[scores={variable=!1..6},tag=water] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_water ~~0.5~

execute @s[scores={variable=1..3},tag=bug] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_bug ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=dark] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_dark ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=dragon] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_dragon ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=electric] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_electric ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=fairy] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_fairy ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=fight] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_fight ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=fire] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_fire ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=flying] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_flying ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=ghost] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_ghost ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=grass] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_grass ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=ground] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_ground ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=normal] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_normal ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=ice] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_ice ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=poison] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_poison ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=psychic] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_psychic ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=rock] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_rock ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=steel] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_steel ^1.5^0.5 ^
execute @s[scores={variable=1..3},tag=water] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_water ^1.5^0.5 ^
execute @s[scores={variable=4..6},tag=bug] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_bug ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=dark] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_dark ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=dragon] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_dragon ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=electric] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_electric ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=fairy] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_fairy ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=fight] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_fight ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=fire] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_fire ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=flying] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_flying ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=ghost] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_ghost ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=grass] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_grass ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=ground] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_ground ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=normal] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_normal ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=ice] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_ice ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=poison] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_poison ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=psychic] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_psychic ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=rock] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_rock ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=steel] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_steel ^-1.5^0.5 ^
execute @s[scores={variable=4..6},tag=water] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_water ^-1.5^0.5 ^

execute @s[scores={variable=!1..6},tag=bug,family=bug] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_bug ~~0.5~
execute @s[scores={variable=!1..6},tag=dark,family=dark] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_dark ~~0.5~
execute @s[scores={variable=!1..6},tag=dragon,family=dragon] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_dragon ~~0.5~
execute @s[scores={variable=!1..6},tag=electric,family=electric] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_electric ~~0.5~
execute @s[scores={variable=!1..6},tag=fairy,family=fairy] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_fairy ~~0.5~
execute @s[scores={variable=!1..6},tag=fight,family=fight] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_fight ~~0.5~
execute @s[scores={variable=!1..6},tag=fire,family=fire] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_fire ~~0.5~
execute @s[scores={variable=!1..6},tag=flying,family=flying] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_flying ~~0.5~
execute @s[scores={variable=!1..6},tag=ghost,family=ghost] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_ghost ~~0.5~
execute @s[scores={variable=!1..6},tag=grass,family=grass] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_grass ~~0.5~
execute @s[scores={variable=!1..6},tag=ground,family=ground] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_ground ~~0.5~
execute @s[scores={variable=!1..6},tag=normal,family=normal] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_normal ~~0.5~
execute @s[scores={variable=!1..6},tag=ice,family=ice] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_ice ~~0.5~
execute @s[scores={variable=!1..6},tag=poison,family=poison] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_poison ~~0.5~
execute @s[scores={variable=!1..6},tag=psychic,family=psychic] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_psychic ~~0.5~
execute @s[scores={variable=!1..6},tag=rock,family=rock] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_rock ~~0.5~
execute @s[scores={variable=!1..6},tag=steel,family=steel] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_steel ~~0.5~
execute @s[scores={variable=!1..6},tag=water,family=water] ~~~ execute @e[family=pokemon,c=1,r=16,tag=on_fight,tag=!on_turn] ~~~ particle serp:attack_water ~~0.5~

execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=normal] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ghost] ~~~ particle serp:defeated ~~~
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fight] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ghost] ~~~ particle serp:defeated ~~~
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=poison] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ particle serp:defeated ~~~
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ground] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=flying] ~~~ particle serp:defeated ~~~
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ghost] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=normal] ~~~ particle serp:defeated ~~~
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=electric] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ground] ~~~ particle serp:defeated ~~~
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=psychic] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dark] ~~~ particle serp:defeated ~~~
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=dragon] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fairy] ~~~ particle serp:defeated ~~~

execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=normal] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock] ~~~ particle serp:low_efficiency ^^0.5^ 
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=normal] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fight] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=flying] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fight] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=poison] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fight] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=bug] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fight] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=psychic] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fight] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fairy] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=flying] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=flying] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=flying] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=electric] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=poison] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=poison] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=poison] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ground] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=poison] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=poison] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ghost] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ground] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=bug] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ground] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=rock] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fight] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=rock] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ground] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=rock] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=bug] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fight] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=bug] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=flying] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=bug] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=poison] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=bug] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ghost] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=bug] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=bug] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=bug] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fairy] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ghost] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dark] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=steel] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=steel] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=steel] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=water] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=steel] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=electric] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fire] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fire] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fire] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=water] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fire] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dragon] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=water] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=water] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=water] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=water] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dragon] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=grass] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=flying] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=grass] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=poison] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=grass] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=bug] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=grass] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=grass] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=grass] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=grass] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dragon] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=electric] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=electric] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=electric] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=electric] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dragon] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=psychic] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=psychic] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=psychic] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ice] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ice] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ice] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=water] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ice] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ice] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=dragon] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=dark] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fight] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=dark] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dark] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=dark] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fairy] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fairy] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=poison] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fairy] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ particle serp:low_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fairy] ~~~ execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire] ~~~ particle serp:low_efficiency ^^0.5^

execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fight] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=normal,family=!ghost] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fight] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock,family=!ghost] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fight] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel,family=!ghost] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fight] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ice,family=!ghost] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fight] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dark,family=!ghost] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=flying] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fight] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=flying] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=bug] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=flying] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=poison] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass,family=!steel] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=poison] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fairy,family=!steel] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ground] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=poison,family=!flying] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ground] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock,family=!flying] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ground] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel,family=!flying] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ground] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire,family=!flying] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ground] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=electric,family=!flying] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=rock] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=flying] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=rock] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=bug] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=rock] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=rock] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ice] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=bug] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=bug] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=psychic] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=bug] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dark] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ghost] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ghost,family=!normal] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ghost] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=psychic,family=!normal] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=steel] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=steel] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ice] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=steel] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fairy] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fire] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=bug] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fire] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=steel] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fire] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fire] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ice] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=water] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ground] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=water] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=water] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fire] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=grass] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ground] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=grass] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=rock] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=grass] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=water] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=electric] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=flying,family=!ground] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=electric] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=water,family=!ground] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=psychic] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fight,family=!dark] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=psychic] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=poison,family=!dark] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ice] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=flying] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ice] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ground] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ice] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=grass] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=ice] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dragon] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=dragon] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dragon,family=!fairy] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=dark] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=ghost] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=dark] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=psychic] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fairy] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=fight] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fairy] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dark] ~~~ particle serp:high_efficiency ^^0.5^
execute @s[scores={variable=!1..6},r=16,c=1,tag=on_turn,tag=fairy] ~~~execute @e[c=1,r=16,tag=on_fight,tag=!on_turn,family=dragon] ~~~ particle serp:high_efficiency ^^0.5^

#event

tag @s remove serppower
scoreboard players operation @e[c=1,r=16,tag=on_fight,tag=!on_turn,tag=max] damage *= @s serp50
function battle/damage_txt
event entity @s[family=tamed] serp:on_attack
event entity @e[family=pokemon,family=!tamed,c=1,r=10,tag=on_fight,tag=!on_turn] serp:on_attack