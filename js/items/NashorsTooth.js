import { Item } from '../Item.js';

export class NashorsTooth extends Item {
    constructor() {
        super({
            image: 'assets/items/NashorsTooth_item.png',
            name: 'Nashor´s Tooth',
            cost: 2900,
            sell: 2030,
            hp: 0,
            hp_regen: 0,
            mana: 0,
            mana_regen: 0,
            ad: 0,
            attack_speed: 0.50,
            ap: 80,
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
            tags: ['marksman', 'mage']
        });
    }
}