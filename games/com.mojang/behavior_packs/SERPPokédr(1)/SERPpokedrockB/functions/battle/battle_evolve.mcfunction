execute @p[c=1,lm=15,l=1000] ~~~ execute @e[family=pokemon,c=1,r=5] ~~~ event entity @s[family=pokemon,family=tamed,family=evolv,family=tiny,r=5,c=1] serp:evolve

execute @e[family=pokemon,c=1,r=5] ~~~ execute @s[family=pokemon,family=tamed,family=evolv,family=tiny] ~~~ xp -15L @p[lm=15,l=1000,r=5,c=1]

execute @p[c=1,lm=20,l=1000] ~~~ execute @e[family=pokemon,c=1,r=5] ~~~ event entity @s[family=pokemon,family=tamed,family=evolv,family=medium,r=5,c=1] serp:evolve

execute @e[family=pokemon,c=1,r=5] ~~~ execute @s[family=pokemon,family=tamed,family=evolv,family=medium] ~~~ xp -20L @p[lm=20,l=1000,r=5,c=1]

execute @p[r=6,c=1,hasitem={location=slot.weapon.offhand,item=serp:clefairy_plush}] ~~~ execute @e[family=pokemon,c=1,r=5] ~~~ event entity @s[family=pokemon,family=tamed,family=clefairy_plush,c=1,r=5] serp:evolve_cle_p

execute @e[family=pokemon,c=1,r=5] ~~~ execute @s[family=pokemon,family=tamed,family=clefairy_plush] ~~~ replaceitem entity @p[r=6,c=1,hasitem={location=slot.weapon.offhand,item=serp:clefairy_plush}] slot.weapon.offhand 0 air 1

execute @p[r=6,c=1,hasitem={location=slot.weapon.offhand,item=serp:pichu_plush}] ~~~ execute @e[family=pokemon,c=1,r=5] ~~~ event entity @s[family=pokemon,family=tamed,family=pichu_plush,c=1,r=5] serp:evolve_pi_p

execute @e[family=pokemon,c=1,r=5] ~~~ execute @s[family=pokemon,family=tamed,family=pichu_plush] ~~~ replaceitem entity @p[r=6,c=1,hasitem={location=slot.weapon.offhand,item=serp:pichu_plush}] slot.weapon.offhand 0 air 1

execute @p[r=6,c=1,hasitem={location=slot.weapon.offhand,item=serp:fire_stone}] ~~~ execute @e[family=pokemon,c=1,r=5] ~~~ event entity @s[family=pokemon,family=tamed,family=fire_stone,c=1,r=5] serp:evolve_fir_s

execute @e[family=pokemon,c=1,r=5] ~~~ execute @s[family=pokemon,family=tamed,family=fire_stone] ~~~ replaceitem entity @p[r=6,c=1,hasitem={location=slot.weapon.offhand,item=serp:fire_stone}] slot.weapon.offhand 0 air 1

execute @p[r=6,c=1,hasitem={location=slot.weapon.offhand,item=serp:leaf_stone}] ~~~ execute @e[family=pokemon,c=1,r=5] ~~~ event entity @s[family=pokemon,family=tamed,family=leaf_stone,c=1,r=5] serp:evolve_lea_s

execute @e[family=pokemon,c=1,r=5] ~~~ execute @s[family=pokemon,family=tamed,family=leaf_stone] ~~~ replaceitem entity @p[r=6,c=1,hasitem={location=slot.weapon.offhand,item=serp:leaf_stone}] slot.weapon.offhand 0 air 1

execute @p[r=6,c=1,hasitem={location=slot.weapon.offhand,item=serp:moon_stone}] ~~~ execute @e[family=pokemon,c=1,r=5] ~~~ event entity @s[family=pokemon,family=tamed,family=moon_stone,c=1,r=5] serp:evolve_mo_s

execute @e[family=pokemon,c=1,r=5] ~~~ execute @s[family=pokemon,family=tamed,family=moon_stone] ~~~ replaceitem entity @p[r=6,c=1,hasitem={location=slot.weapon.offhand,item=serp:moon_stone}] slot.weapon.offhand 0 air 1

execute @p[r=6,c=1,hasitem={location=slot.weapon.offhand,item=serp:thunder_stone}] ~~~ execute @e[family=pokemon,c=1,r=5] ~~~ event entity @s[family=pokemon,family=tamed,family=thunder_stone,c=1,r=5] serp:evolve_thun_s

execute @e[family=pokemon,c=1,r=5] ~~~ execute @s[family=pokemon,family=tamed,family=thunder_stone] ~~~ replaceitem entity @p[r=6,c=1,hasitem={location=slot.weapon.offhand,item=serp:thunder_stone}] slot.weapon.offhand 0 air 1

execute @p[r=6,c=1,hasitem={location=slot.weapon.offhand,item=serp:water_stone}] ~~~ execute @e[family=pokemon,c=1,r=5] ~~~ event entity @s[family=pokemon,family=tamed,family=water_stone,c=1,r=5] serp:evolve_wat_s

execute @e[family=pokemon,c=1,r=5] ~~~ execute @s[family=pokemon,family=tamed,family=water_stone] ~~~ replaceitem entity @p[r=6,c=1,hasitem={location=slot.weapon.offhand,item=serp:water_stone}] slot.weapon.offhand 0 air 1

execute @p[r=6,c=1,hasitem={location=slot.weapon.offhand,item=serp:sun_stone}] ~~~ execute @e[family=pokemon,c=1,r=5] ~~~ event entity @s[family=pokemon,family=tamed,family=sun_stone,c=1,r=5] serp:evolve_sun_s

execute @e[family=pokemon,c=1,r=5] ~~~ execute @s[family=pokemon,family=tamed,family=sun_stone] ~~~ replaceitem entity @p[r=6,c=1,hasitem={location=slot.weapon.offhand,item=serp:sun_stone}] slot.weapon.offhand 0 air 1
