import { Item } from '../Item.js';

export class ArmoredAdvance extends Item {
    constructor() {
        super({
            name: 'Armored Advance',
            cost: 1700,
            sell: 0,
            hp: 0,
            hp_regen: 0,
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
            ah: 0,
            movespeed_flat: 50,
            movespeed_percent: 0,
            tenacity: 0,
            tags: ['boots']
        });
    }
}