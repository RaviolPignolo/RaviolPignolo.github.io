import { Item } from '../Item.js';

export class Redemption extends Item {
    constructor() {
        super({
            image: 'assets/items/Redemption_item.png',
            name: 'Redemption',
            cost: 2300,
            sell: 1610,
            hp: 200,
            hp_regen: 0,
            mana: 0,
            mana_regen: 1.00,
            ad: 0,
            attack_speed: 0,
            ap: 0,
            armor: 0,
            mr: 0,
            healshield_power: 0.10,
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
            tags: ['support']
        });
    }
}