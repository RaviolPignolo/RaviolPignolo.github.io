import { Item } from '../Item.js';

export class WintersApproach extends Item {
    constructor() {
        super({
            name: 'Winter´s Approach',
            cost: 2400,
            sell: 0,
            hp: 550,
            hp_regen: 0,
            mana: 500,
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
            ah: 15,
            movespeed_flat: 0,
            movespeed_percent: 0,
            tenacity: 0,
            tags: ['tank']
        });
    }
}