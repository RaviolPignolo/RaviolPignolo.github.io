import { Item } from '../Item.js';

export class WitsEnd extends Item {
    constructor() {
        super({
            image: 'assets/items/WitsEnd_item.png',
            name: 'Wit´s End',
            cost: 2800,
            sell: 1960,
            hp: 0,
            hp_regen: 0,
            mana: 0,
            mana_regen: 0,
            ad: 0,
            attack_speed: 0.50,
            ap: 0,
            armor: 0,
            mr: 45,
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
            movespeed_flat: 0,
            movespeed_percent: 0,
            tenacity: 0.20,
            tags: ['fighter','marksman']
        });
    }
}