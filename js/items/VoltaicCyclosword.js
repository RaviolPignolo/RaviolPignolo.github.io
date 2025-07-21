import { Item } from '../Item.js';

export class VoltaicCyclosword extends Item {
    constructor() {
        super({
            image: 'assets/items/VoltaicCyclosword_item.png',
            name: 'Voltaic Cyclosword',
            cost: 3000,
            sell: 2100,
            hp: 0,
            hp_regen: 0,
            mana: 0,
            mana_regen: 0,
            ad: 55,
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
            tags: ['assassin']
        });
    }
}