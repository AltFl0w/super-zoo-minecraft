execute if block ~ ~ ~-0.02 air unless block ~ ~ ~0.02 air run particle gunsaddon:bore0 ~ ~ ~-0.02
execute if block ~ ~ ~0.02 air unless block ~ ~ ~-0.02 air run particle gunsaddon:bore0 ~ ~ ~0.02
execute if block ~ ~0.15 ~ air unless block ~ ~-0.1 ~ air run particle gunsaddon:bore1
execute if block ~ ~-0.15 ~ air unless block ~ ~0.1 ~ air run particle gunsaddon:bore1 ~ ~-0.02 ~
execute if block ~0.02 ~ ~ air unless block ~-0.02 ~ ~ air run particle gunsaddon:bore2 ~0.02 ~ ~
execute if block ~-0.02 ~ ~ air unless block ~0.02 ~ ~ air run particle gunsaddon:bore2 ~ ~ ~0.1
particle gunsaddon:chispas ~ ~ ~
playsound gun.impact @a[r=10] ~ ~ ~