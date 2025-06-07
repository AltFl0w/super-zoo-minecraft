tag @s add defeated
effect @s slowness 15 10 true
particle serp:defeated ~~0.5~
event entity @e[tag=!defeated,tag=ratk,r=15] serp:end_attack
event entity @e[family=pokemon,r=15] serp:normalize
tag @e[family=pokemon,tag=ratk,r=15] remove ratk