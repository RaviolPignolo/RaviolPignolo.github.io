import { Item } from '../Item.js';

export class Boots extends Item {
    constructor() {
        super({
            image: 'assets/items/Boots_item.png',
            name: 'Boots',
            cost: 300,
            sell: 210,
            hp: 0,
            hp_regen: 0,
            mana: 0,
            mana_regen: 0,
            ad: 0,
            attack_speed: 0,
            ap: 0,
            armor: 0,
            mr: 0,
            healshield_power: 0,
            tenacity: 0,
            crit_chance: 0,
            crit_damage: 0,
            armorpen_flat: 0,
            armorpen_percent: 0,
            magicpen_flat: 0,
            magicpen_percent: 0,
            lifesteal: 0,
            ah: 0,
            movespeed_flat: 25,
            movespeed_percent: 0,
            tenacity: 0,
            tags: ['boots']
        });
    }
}