import { Item } from '../Item.js';

export class Hullbreaker extends Item {
    constructor() {
        super({
            image: 'assets/items/Hullbreaker_item.png',
            name: 'Hullbreaker',
            cost: 3000,
            sell: 2100,
            hp: 500,
            hp_regen: 0,
            mana: 0,
            mana_regen: 0,
            ad: 40,
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
            movespeed_flat: 0,
            movespeed_percent: 0.04,
            tenacity: 0,
            tags: ['fighter']
        });
    }
}