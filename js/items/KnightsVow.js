import { Item } from '../Item.js';

export class KnightsVow extends Item {
    constructor() {
        super({
            name: 'Knight´s Vow',
            cost: 2300,
            sell: 0,
            hp: 200,
            hp_regen: 1.00,
            mana: 0,
            mana_regen: 0,
            ad: 0,
            attack_speed: 0,
            ap: 0,
            armor: 40,
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
            ah: 10,
            movespeed_flat: 0,
            movespeed_percent: 0,
            tenacity: 0,
            tags: ['support']
        });
    }
}