import { Item } from '../Item.js';

export class InfinityEdge extends Item {
    constructor() {
        super({
            image: 'assets/items/InfinityEdge_item.png',
            name: 'Infinity Edge',
            cost: 3450,
            sell: 2415,
            hp: 0,
            hp_regen: 0,
            mana: 0,
            mana_regen: 0,
            ad: 65,
            attack_speed: 0,
            ap: 0,
            armor: 0,
            mr: 0,
            healshield_power: 0,
            tenacity: 0,
            crit_chance: 0.25,
            crit_damage: 0.40,
            armorpen_flat: 0,
            armorpen_percent: 0,
            magicpen_flat: 0,
            magicpen_percent: 0,
            lifesteal: 0,
            ah: 0,
            movespeed_flat: 0,
            movespeed_percent: 0,
            tenacity: 0,
            tags: ['marksman']
        });
    }
}