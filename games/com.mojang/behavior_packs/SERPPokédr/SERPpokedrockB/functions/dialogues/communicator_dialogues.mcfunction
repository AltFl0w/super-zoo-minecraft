execute as @s[tag=boot_on] run tellraw @a[r=5] {"rawtext":[{"translate":"communicator.on"}]}

execute as @s[tag=trainer] run tellraw @a[r=5] {"rawtext":[{"translate":"trainer.mission"}]}
execute as @s[tag=trainer_thanks] run tellraw @a[r=5] {"rawtext":[{"translate":"trainer.thanks"}]}

execute as @s[tag=prof] run tellraw @a[r=5] {"rawtext":[{"translate":"prof.mission"}]}
execute as @s[tag=prof_mega] run tellraw @a[r=5] {"rawtext":[{"translate":"prof.mega"}]}
execute as @s[tag=prof_mega] run tag @p add mega_ring
execute as @s[tag=prof_max] run tellraw @a[r=5] {"rawtext":[{"translate":"prof.max"}]}
execute as @s[tag=prof_max] run tag @p add dynamax_band
execute as @s[tag=prof_egg] run tellraw @a[r=5] {"rawtext":[{"translate":"prof.egg"}]}

execute as @s[tag=goh] run tellraw @a[r=5] {"rawtext":[{"translate":"goh.mission"}]}
execute as @s[tag=goh_articuno] run tellraw @a[r=5] {"rawtext":[{"translate":"goh.articuno"}]}
execute as @s[tag=goh_zapdos] run tellraw @a[r=5] {"rawtext":[{"translate":"goh.zapdos"}]}
execute as @s[tag=goh_moltres] run tellraw @a[r=5] {"rawtext":[{"translate":"goh.moltres"}]}
execute as @s[tag=goh_raikou] run tellraw @a[r=5] {"rawtext":[{"translate":"goh.raikou"}]}
execute as @s[tag=goh_entei] run tellraw @a[r=5] {"rawtext":[{"translate":"goh.entei"}]}
execute as @s[tag=goh_suicune] run tellraw @a[r=5] {"rawtext":[{"translate":"goh.suicune"}]}

tag @s remove boot_on
tag @s remove trainer
tag @s remove trainer_thanks
tag @s remove prof
tag @s remove prof_mega
tag @s remove prof_max
tag @s remove prof_egg
tag @s remove goh
tag @s remove goh_articuno
tag @s remove goh_zapdos
tag @s remove goh_moltres
tag @s remove goh_raikou
tag @s remove goh_entei
tag @s remove goh_suicune