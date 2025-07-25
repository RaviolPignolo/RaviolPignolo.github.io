import { Item } from '../Item.js';

export class FrozenHeart extends Item {
    constructor() {
        super({
            image: 'assets/items/FrozenHeart_item.png',
            name: 'Frozen Heart',
            cost: 2500,
            sell: 1750,
            hp: 0,
            hp_regen: 0,
            mana: 400,
            mana_regen: 0,
            ad: 0,
            attack_speed: 0,
            ap: 0,
            armor: 75,
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
            ah: 20,
            movespeed_flat: 0,
            movespeed_percent: 0,
            tenacity: 0,
            tags: ['tank','support']
        });
    }
}