import { Item } from '../Item.js';

export class HollowRadiance extends Item {
    constructor() {
        super({
            image: 'assets/items/HollowRadiance_item.png',
            name: 'Hollow Radiance',
            cost: 2800,
            sell: 1960,
            hp: 400,
            hp_regen: 1.00,
            mana: 0,
            mana_regen: 0,
            ad: 0,
            attack_speed: 0,
            ap: 0,
            armor: 0,
            mr: 40,
            healshield_power: 0,
            tenacity: 0,
            crit_chance: 0,
            crit_damage: 0,
            armorpen_flat: 0,
            armorpen_percent: 0,
            magicpen_flat: 0,
            magicpen_percent: 0,
            lifesteal: 0,
            ah: 10,
            movespeed_flat: 0,
            movespeed_percent: 0,
            tenacity: 0,
            tags: ['tank']
        });
    }
}