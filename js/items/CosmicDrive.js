import { Item } from '../Item.js';

export class CosmicDrive extends Item {
    constructor() {
        super({
            name: 'Cosmic Drive',
            cost: 3000,
            sell: 0,
            hp: 350,
            hp_regen: 0,
            mana: 0,
            mana_regen: 0,
            ad: 0,
            attack_speed: 0,
            ap: 70,
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
            ah: 25,
            movespeed_flat: 0,
            movespeed_percent: 0.04,
            tenacity: 0,
            tags: ['mage']
        });
    }
}