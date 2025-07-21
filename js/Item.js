export class Item {
    constructor({
        name, image, cost, sell, hp = 0, hp_regen = 0, mana = 0, mana_regen = 0, ad = 0, attack_speed = 0, ap = 0, armor = 0, mr = 0, healshield_power = 0, tenacity = 0, crit_chance = 0, crit_damage = 0, armorpen_flat = 0, armorpen_percent = 0, magicpen_flat = 0, magicpen_percent = 0, lifesteal = 0, ah = 0, movespeed_flat = 0, movespeed_percent = 0, tags = []
    }) {
        this.image = image;
        this.name = name;
        this.cost = cost;
        this.sell = sell;
        this.hp = hp;
        this.hp_regen = hp_regen;
        this.mana = mana;
        this.mana_regen = mana_regen;
        this.ad = ad;
        this.attack_speed = attack_speed;
        this.ap = ap;
        this.armor = armor;
        this.mr = mr;
        this.healshield_power = healshield_power;
        this.tenacity = tenacity;
        this.crit_chance = crit_chance;
        this.crit_damage = crit_damage;
        this.armorpen_flat = armorpen_flat;
        this.armorpen_percent = armorpen_percent;
        this.magicpen_flat = magicpen_flat;
        this.magicpen_percent = magicpen_percent;
        this.lifesteal = lifesteal;
        this.ah = ah;
        this.movespeed_flat = movespeed_flat;
        this.movespeed_percent = movespeed_percent;
        this.tags = tags;
    }
}
