import { Item } from '../Item.js';

export class MawOfMalmortius extends Item {
    constructor() {
        super({
            image: 'assets/items/MawOfMalmortius_item.png',
            name: 'Maw of Malmortius',
            cost: 3100,
            sell: 2170,
            hp: 0,
            hp_regen: 0,
            mana: 0,
            mana_regen: 0,
            ad: 60,
            attack_speed: 0,
            ap: 0,
            armor: 0,
            mr: 40,
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