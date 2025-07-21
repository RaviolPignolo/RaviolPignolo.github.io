import { Item } from '../Item.js';

export class ZekesConvergence extends Item {
    constructor() {
        super({
            image: 'assets/items/ZekesConvergence_item.png',
            name: 'Zeke´s Convergence',
            cost: 2200,
            sell: 1540,
            hp: 300,
            hp_regen: 0,
            mana: 0,
            mana_regen: 0,
            ad: 0,
            attack_speed: 0,
            ap: 0,
            armor: 25,
            mr: 25,
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
            tags: ['tank','support']
        });
    }
}