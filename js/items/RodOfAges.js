import { Item } from '../Item.js';

export class RodOfAges extends Item {
    constructor() {
        super({
            image: 'assets/items/RodOfAges_item.png',
            name: 'Rod of Ages',
            cost: 2600,
            sell: 1820,
            hp: 350,
            hp_regen: 0,
            mana: 500,
            mana_regen: 0,
            ad: 0,
            attack_speed: 0,
            ap: 45,
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
            movespeed_flat: 0,
            movespeed_percent: 0,
            tenacity: 0,
            tags: ['mage']
        });
    }
}