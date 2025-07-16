import { Item } from '../Item.js';

export class Hubris extends Item {
    constructor() {
        super({
            name: 'Hubris',
            cost: 3000,
            sell: 0,
            hp: 0,
            hp_regen: 0,
            mana: 0,
            mana_regen: 0,
            ad: 60,
            attack_speed: 0,
            ap: 0,
            armor: 0,
            mr: 0,
            healshield_power: 0,
            tenacity: 0,
            crit_chance: 0,
            crit_damage: 0,
            armorpen_flat: 18,
            armorpen_percent: 0,
            magicpen_flat: 0,
            magicpen_percent: 0,
            lifesteal: 0,
            ah: 10,
            movespeed_flat: 0,
            movespeed_percent: 0,
            tenacity: 0,
            tags: ['assasin']
        });
    }
}