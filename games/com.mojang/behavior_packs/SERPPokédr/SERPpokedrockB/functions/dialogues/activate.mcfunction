execute as @s[scores={mechanic=0..3,mechanicTimer=0..}] as @e[tag=battle,family=pokemon,scores={VIC=1..},rm=0.5,r=20] if score @s VIC = @e[c=1,scores={mechanic=0..3}] VIC run tp @e[c=1,scores={mechanic=0..3}] ~~~facing @s

execute as @s[scores={mechanic=0,mechanicTimer=1..}] run scoreboard players add @s mechanicTimer 1

execute as @s[scores={mechanic=0,mechanicTimer=2}] as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run inputpermission set @s camera disabled
execute as @s[scores={mechanic=0,mechanicTimer=2}] as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run inputpermission set @s movement disabled
execute as @s[scores={mechanic=0,mechanicTimer=2}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s fade time 0.1 0 0.1 color 0 255 0
execute as @s[scores={mechanic=0,mechanicTimer=5}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s set minecraft:free pos ^^2^5 facing @e[c=1]
execute as @s[scores={mechanic=0,mechanicTimer=6}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s set minecraft:free ease 0.8 linear pos ^^-0.5^1.5 facing @e[c=1]
execute as @s[scores={mechanic=0,mechanicTimer=18..35}] run particle serp:mega_sphere ~~-1~
execute as @s[scores={mechanic=0,mechanicTimer=30}] as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s set minecraft:free pos ^-0.3^1.5^-2 facing ^^^5
execute as @s[scores={mechanic=0,mechanicTimer=50}] run particle serp:exp_boost ^^^
execute as @s[scores={mechanic=0,mechanicTimer=50}] anchored eyes run particle serp:ball_pop ~~-1~
execute as @s[scores={mechanic=0,mechanicTimer=50..52}] anchored eyes run particle minecraft:huge_explosion_emitter ~~-0.6~
execute as @s[scores={mechanic=0,mechanicTimer=51}] at @s run playsound random.explode @a[r=16,tag=!hide_camera] 
execute as @s[scores={mechanic=0,mechanicTimer=50}] anchored eyes run camerashake add @a[r=16,tag=!hide_camera] 0.2 0.5
execute as @s[scores={mechanic=0,mechanicTimer=51}] run particle serp:high_efficiency ~~0.5~
execute as @s[scores={mechanic=0,mechanicTimer=70..71}] run particle serp:exp_boost ^^^
execute as @s[scores={mechanic=0,mechanicTimer=70..71}] anchored eyes run particle serp:ball_pop ~~-1~
execute as @s[scores={mechanic=0,mechanicTimer=70..72}] anchored eyes run particle minecraft:huge_explosion_emitter ~~-0.6~
execute as @s[scores={mechanic=0,mechanicTimer=71}] at @s run playsound random.explode @a[r=16,tag=!hide_camera]
execute as @s[scores={mechanic=0,mechanicTimer=70..72}] anchored eyes run camerashake add @a[r=16,tag=!hide_camera] 0.4 0.5
execute as @s[scores={mechanic=0,mechanicTimer=71..72}] run particle serp:high_efficiency ~~0.5~
execute as @s[scores={mechanic=0,mechanicTimer=90..92}] run particle serp:exp_boost ^^^
execute as @s[scores={mechanic=0,mechanicTimer=90..92}] anchored eyes run particle serp:ball_pop ~~-1~
execute as @s[scores={mechanic=0,mechanicTimer=90..93}] anchored eyes run particle minecraft:huge_explosion_emitter ~~-0.6~
execute as @s[scores={mechanic=0,mechanicTimer=91}] at @s run playsound random.explode @a[r=16,tag=!hide_camera]
execute as @s[scores={mechanic=0,mechanicTimer=90..92}] anchored eyes run camerashake add @a[r=16,tag=!hide_camera] 0.6 0.5
execute as @s[scores={mechanic=0,mechanicTimer=91..93}] run particle serp:high_efficiency ~~0.5~
execute as @s[scores={mechanic=0,mechanicTimer=110..113}] run particle serp:exp_boost ^^^
execute as @s[scores={mechanic=0,mechanicTimer=110..113}] anchored eyes run particle serp:ball_pop ~~-1~
execute as @s[scores={mechanic=0,mechanicTimer=110..114}] anchored eyes run particle minecraft:huge_explosion_emitter ~~-0.6~
execute as @s[scores={mechanic=0,mechanicTimer=111}] at @s run playsound random.explode @a[r=16,tag=!hide_camera]
execute as @s[scores={mechanic=0,mechanicTimer=110..112}] anchored eyes run camerashake add @a[r=16,tag=!hide_camera] 0.6 0.5
execute as @s[scores={mechanic=0,mechanicTimer=111..114}] run particle serp:high_efficiency ~~0.5~
execute as @s[scores={mechanic=0,mechanicTimer=111..114}] run particle serp:max_particles ~~-2~
execute as @s[scores={mechanic=0,mechanicTimer=100}] run tag @s add boost
execute as @s[scores={mechanic=0,mechanicTimer=100}] at @a[scores={VIC=1..},r=20] if score @s VIC = @p[scores={VIC=1..}] VIC run scoreboard players add PlayersActiveMechanic SerpWorld 1
execute as @s[scores={mechanic=0,mechanicTimer=97}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1,scores={mechanic=0,mechanicTimer=97}] VIC run camera @s fade time 0.1 0 0.1 color 0 255 0
execute as @s[scores={mechanic=0,mechanicTimer=100}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1,scores={mechanic=0,mechanicTimer=100}] VIC run camera @s clear
execute as @s[scores={mechanic=0,mechanicTimer=100}] as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run inputpermission set @s camera enabled
execute as @s[scores={mechanic=0,mechanicTimer=100}] as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run inputpermission set @s movement enabled
execute as @s[scores={mechanic=0,mechanicTimer=100..}] run scoreboard players set PlayersActiveMechanic SerpWorld 0
execute as @s[scores={mechanic=0,mechanicTimer=100..}] run scoreboard players set @s mechanicTimer 0

execute as @s[scores={mechanic=1,mechanicTimer=1..}] run scoreboard players add @s mechanicTimer 1
execute as @s[scores={mechanic=1,mechanicTimer=2}] as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run inputpermission set @s camera disabled
execute as @s[scores={mechanic=1,mechanicTimer=2}] as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run inputpermission set @s movement disabled
execute as @s[scores={mechanic=1,mechanicTimer=3}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s set minecraft:free ease 0.3 in_circ pos ^^2^5 facing @e[c=1]
execute as @s[scores={mechanic=1,mechanicTimer=23}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s set minecraft:free ease 0.8 in_circ pos ^^^1 facing @e[c=1]
execute as @s[scores={mechanic=1,mechanicTimer=33}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s fade time 0.2 0.5 0.8 color 255 255 255
execute as @s[scores={mechanic=1,mechanicTimer=33}] anchored eyes run playsound serp.mega @a[r=16,tag=!hide_camera]
execute as @s[scores={mechanic=1,mechanicTimer=40}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s set minecraft:free ease 0 in_circ pos ^2^^5 facing @e[c=1]
execute as @s[scores={mechanic=1,mechanicTimer=3..67}] run particle serp:mega_smoke ~~-0.6~
execute as @s[scores={mechanic=1,mechanicTimer=47..67}] run particle serp:mega_sphere ~~-0.6~
execute as @s[scores={mechanic=1,mechanicTimer=47..67}] run camerashake add @a[r=16,tag=!hide_camera] 0.1 1
execute as @s[scores={mechanic=1,mechanicTimer=68..70}] run particle minecraft:huge_explosion_emitter ~~-0.6~
execute as @s[scores={mechanic=1,mechanicTimer=70}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s fade time 0.1 0 0.1 color 255 255 255
execute as @s[scores={mechanic=1,mechanicTimer=75}] anchored eyes run particle serp:mega_icon ~~1~
execute as @s[scores={mechanic=1,mechanicTimer=67}] run playsound random.explode @a[r=16,tag=!hide_camera]
execute as @s[scores={mechanic=1,mechanicTimer=68}] run particle serp:mega_sphere ~~-0.6~
execute as @s[scores={mechanic=1,mechanicTimer=77}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s fade time 0.1 0 0.8 color 255 255 255
execute as @s[scores={mechanic=1,mechanicTimer=80}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s clear
execute as @s[scores={mechanic=1,mechanicTimer=80}] as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run inputpermission set @s camera enabled
execute as @s[scores={mechanic=1,mechanicTimer=80}] as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run inputpermission set @s movement enabled
execute as @s[scores={mechanic=1,mechanicTimer=80..}] run scoreboard players set @s mechanicTimer 0

execute as @s[scores={mechanic=2,mechanicTimer=1..}] run scoreboard players add @s mechanicTimer 1
execute as @s[scores={mechanic=2,mechanicTimer=2}] as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run inputpermission set @s camera disabled
execute as @s[scores={mechanic=2,mechanicTimer=2}] as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run inputpermission set @s movement disabled
execute as @s[scores={mechanic=2,mechanicTimer=2}] run effect @s invisibility 0 0
execute as @s[scores={mechanic=2,mechanicTimer=3}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s set minecraft:free ease 0.1 linear pos ^2^^5 facing @e[c=1]
execute as @s[scores={mechanic=2,mechanicTimer=10}] anchored eyes run particle serp:back ~~-0.6~
execute as @s[scores={mechanic=2,mechanicTimer=10}] run playsound serp.pokeball.enter @a[r=16,tag=!hide_camera]
execute as @s[scores={mechanic=2,mechanicTimer=15..90}] run effect @s invisibility 1 1 true
execute as @s[scores={mechanic=2,mechanicTimer=18}] at @s run tp ~~1.5~
execute as @s[scores={mechanic=2,mechanicTimer=20..}] at @s run tp ~~~
execute as @s[scores={mechanic=2,mechanicTimer=35}] as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s fade time 0.1 0 0.1 color 200 0 0
execute as @s[scores={mechanic=2,mechanicTimer=35}] at @s run camerashake add @a[r=16,tag=!hide_camera] 0.5 1
execute as @s[scores={mechanic=2,mechanicTimer=36..}] at @s run particle serp:mega_sphere ~~-0.6~
execute as @s[scores={mechanic=2,mechanicTimer=36}] at @s run playsound serp.pokeball.free @a[r=16,tag=!hide_camera]
execute as @s[scores={mechanic=2,mechanicTimer=36}] at @s run playsound random.explode @a[r=16,tag=!hide_camera]
execute as @s[scores={mechanic=2,mechanicTimer=37}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s set minecraft:free ease 0 linear pos ^^2^5 facing @e[c=1]
execute as @s[scores={mechanic=2,mechanicTimer=55}] as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s fade time 0.1 0 0.1 color 200 0 0 
execute as @s[scores={mechanic=2,mechanicTimer=55}] at @s run camerashake add @a[r=16,tag=!hide_camera] 0.6 1
execute as @s[scores={mechanic=2,mechanicTimer=56}] at @s run particle minecraft:huge_explosion_emitter ~~-0.6~
execute as @s[scores={mechanic=2,mechanicTimer=56}] at @s run playsound random.explode @a[r=16,tag=!hide_camera]
execute as @s[scores={mechanic=2,mechanicTimer=57}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s set minecraft:free ease 0 linear pos ^^3^6 facing @e[c=1]
execute as @s[scores={mechanic=2,mechanicTimer=75}] as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s fade time 0.1 0 0.1 color 200 0 0 
execute as @s[scores={mechanic=2,mechanicTimer=75}] at @s run camerashake add @a[r=16,tag=!hide_camera] 0.6 1
execute as @s[scores={mechanic=2,mechanicTimer=77}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s set minecraft:free ease 0 linear pos ^^5^8 facing @e[c=1]
execute as @s[scores={mechanic=2,mechanicTimer=76..}] at @s run particle serp:max_particles ~~-0.6~
execute as @s[scores={mechanic=2,mechanicTimer=76}] at @s run particle minecraft:huge_explosion_emitter ~~-0.6~
execute as @s[scores={mechanic=2,mechanicTimer=76}] at @s run playsound random.explode @a[r=16,tag=!hide_camera]
execute as @s[scores={mechanic=2,mechanicTimer=90}] at @s run tp ~~-1.5~
execute as @s[scores={mechanic=2,mechanicTimer=95}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s fade time 0.1 0 0.1 color 200 0 0 
execute as @s[scores={mechanic=2,mechanicTimer=95}] at @s run camerashake add @a[r=16,tag=!hide_camera] 0.6 1
execute as @s[scores={mechanic=2,mechanicTimer=96}] at @s run particle minecraft:huge_explosion_emitter ~~-0.6~
execute as @s[scores={mechanic=2,mechanicTimer=96}] at @s run playsound random.explode @a[r=16,tag=!hide_camera]
execute as @s[scores={mechanic=2,mechanicTimer=95}] at @s run particle serp:max_particles ~~-1.6~
execute as @s[scores={mechanic=2,mechanicTimer=97}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s set minecraft:free ease 0 linear pos ^^7^10 facing @e[c=1]
execute as @s[scores={mechanic=2,mechanicTimer=97}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s fade time 0.1 0 0.8 color 200 0 0 
execute as @s[scores={mechanic=2,mechanicTimer=100}] anchored eyes as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run camera @s clear
execute as @s[scores={mechanic=2,mechanicTimer=100}] as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run inputpermission set @s camera enabled
execute as @s[scores={mechanic=2,mechanicTimer=100}] as @a[scores={VIC=1..},r=20] if score @s VIC = @e[c=1] VIC run inputpermission set @s movement enabled
execute as @s[scores={mechanic=2,mechanicTimer=100..}] run scoreboard players set @s mechanicTimer 0