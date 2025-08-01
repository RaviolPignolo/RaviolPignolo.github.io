import { Item } from '../Item.js';

export class BladeOfTheRuinedKing extends Item {
    constructor() {
        super({
            image: 'assets/items/BladeOfTheRuinedKing_item.png',
            name: 'Blade of the Ruined King',
            cost: 3200,
            sell: 2240,
            hp: 0,
            hp_regen: 0,
            mana: 0,
            mana_regen: 0,
            ad: 40,
            attack_speed: 0.25,
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
            lifesteal: 0.10,
            ah: 0,
            movespeed_flat: 0,
            movespeed_percent: 0,
            tenacity: 0,
            tags: ['fighter','marksman']
        });
    }
}