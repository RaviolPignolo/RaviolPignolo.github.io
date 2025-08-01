import { Item } from '../Item.js';

export class Muramana extends Item {
    constructor() {
        super({
            image: 'assets/items/Muramana_item.png',
            name: 'Muramana',
            cost: 2900,
            sell: 2030,
            hp: 0,
            hp_regen: 0,
            mana: 860,
            mana_regen: 0,
            ad: 35,
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
            tags: ['fighter','marksman','assassin']
        });
    }
}