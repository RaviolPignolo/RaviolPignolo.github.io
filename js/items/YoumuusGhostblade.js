import { Item } from '../Item.js';

export class YoumuusGhostblade extends Item {
    constructor() {
        super({
            image: 'assets/items/YoumuusGhostblade_item.png',
            name: 'Youmuu´s Ghostblade',
            cost: 2800,
            sell: 1960,
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
            ah: 0,
            movespeed_flat: 0,
            movespeed_percent: 0.04,
            tenacity: 0,
            tags: ['assassin']
        });
    }
}