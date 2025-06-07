execute @s ~~~ tellraw @s {"rawtext":[{"translate":"serp.choosing_poke"}]}
replaceitem entity @s slot.hotbar 0 serp:pre_bulbasaur 1 0 {"item_lock":{"mode":"lock_in_slot"},"keep_on_death": {}}
replaceitem entity @s slot.hotbar 1 serp:pre_charmander 1 0 {"item_lock":{"mode":"lock_in_slot"},"keep_on_death": {}}
replaceitem entity @s slot.hotbar 2 serp:pre_squirtle 1 0 {"item_lock":{"mode":"lock_in_slot"},"keep_on_death": {}}