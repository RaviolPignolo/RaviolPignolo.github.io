import { Item } from '../Item.js';

export class PlatedSteelcaps extends Item {
    constructor() {
        super({
            image: 'assets/items/PlatedSteelcaps_item.png',
            name: 'Plated Steelcaps',
            cost: 1200,
            sell: 840,
            hp: 0,
            hp_regen: 0,
            mana: 0,
            mana_regen: 0,
            ad: 0,
            attack_speed: 0,
            ap: 0,
            armor: 25,
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
            movespeed_flat: 45,
            movespeed_percent: 0,
            tenacity: 0,
            tags: ['boots']
        });
    }
}