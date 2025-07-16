export class Champion {
    constructor({
        name, title, level = 1,
        base_hp, base_hp_g, base_hp_regen, base_hp_regen_g,
        base_mana, base_mana_g, base_mana_regen, base_mana_regen_g,
        base_energy, base_energy_regen,
        base_ad, base_ad_g, base_armor, base_armor_g, base_mr, base_mr_g,
        base_range, base_move_speed, base_attack_speed, attack_speed_ratio, bonus_attack_speed
    }) {
        this.name = name;
        this.title = title;
        this.level = level;
        this.its_alive = true;
        this.q_level = 0;
        this.w_level = 0;
        this.e_level = 0;
        this.r_level = 0;
        this.base_hp = base_hp;
        this.base_hp_g = base_hp_g;
        this.base_hp_regen = base_hp_regen;
        this.base_hp_regen_g = base_hp_regen_g;
        this.base_mana = base_mana;
        this.base_mana_g = base_mana_g;
        this.base_mana_regen = base_mana_regen;
        this.base_mana_regen_g = base_mana_regen_g;
        this.base_energy = base_energy;
        this.base_energy_regen = base_energy_regen;
        this.base_ad = base_ad;
        this.base_ad_g = base_ad_g;
        this.base_armor = base_armor;
        this.base_armor_g = base_armor_g;
        this.base_mr = base_mr;
        this.base_mr_g = base_mr_g;
        this.base_range = base_range;
        this.base_move_speed = base_move_speed;
        this.base_attack_speed = base_attack_speed;
        this.attack_speed_ratio = attack_speed_ratio;
        this.bonus_attack_speed = bonus_attack_speed;
        this.inventory = Array(6).fill(null);
        this.__post_init__();
    }
    __post_init__() {
        this.actual_hp = this.base_hp;
        this.actual_hp_regen = this.base_hp_regen;
        this.actual_max_hp = this.base_hp;
        this.actual_mana = this.base_mana;
        this.actual_mana_regen = this.base_mana_regen;
        this.actual_max_mana = this.base_mana;
        this.actual_energy = this.base_energy;
        this.actual_energy_regen = this.base_energy_regen;
        this.actual_max_energy = this.base_energy;
        this.actual_ad = this.base_ad;
        this.actual_armor = this.base_armor;
        this.actual_mr = this.base_mr;
        this.actual_range = this.base_range;
        this.actual_move_speed = this.base_move_speed;
        this.actual_healshield_power = 0;
        this.actual_tenacity = 0;
        this.actual_ap = 0;
        this.actual_crit_chance = 0;
        this.actual_crit_damage = 0;
        this.actual_bonus_armor = 0;
        this.actual_bonus_mr = 0;
        this.actual_total_armor = this.actual_armor + this.actual_bonus_armor;
        this.actual_total_mr = this.actual_mr + this.actual_bonus_mr;
        this.actual_armorpen_flat = 0;
        this.actual_armorpen_percent = 0;
        this.actual_magicpen_flat = 0;
        this.actual_magicpen_percent = 0;
        this.actual_lifesteal = 0;
        this.actual_ah = 0;
        this.actual_attack_speed = this.base_attack_speed;
        this.actual_attack_speed_ratio = this.attack_speed_ratio;
        this.actual_bonus_attack_speed_level = 0.00;
        this.actual_bonus_attack_speed_external = 0.00;
        this.actual_total_bonus_attack_speed = 0;
        this.ultimo_danio_recibido = null;
        this.tiempo_ultimo_danio = 0;
    }
    recalculateStats() {
        // Fórmula oficial de Riot para stats por nivel
        // stat = base + growth * (level - 1) * (0.7025 + 0.0175 * (level - 1))
        const lvl = Math.max(1, Math.min(this.level, 18));
        const scale = 0.7025 + 0.0175 * (lvl - 1);
        this.actual_hp = this.base_hp + this.base_hp_g * (lvl - 1) * scale;
        this.actual_hp_regen = this.base_hp_regen + this.base_hp_regen_g * (lvl - 1) * scale;
        this.actual_max_hp = this.actual_hp;
        this.actual_mana = this.base_mana + this.base_mana_g * (lvl - 1) * scale;
        this.actual_mana_regen = this.base_mana_regen + this.base_mana_regen_g * (lvl - 1) * scale;
        this.actual_max_mana = this.actual_mana;
        this.actual_energy = this.base_energy;
        this.actual_energy_regen = this.base_energy_regen;
        this.actual_max_energy = this.base_energy;
        this.actual_ad = this.base_ad + this.base_ad_g * (lvl - 1) * scale;
        this.actual_ap = 0;
        this.actual_bonus_armor = 0;
        this.actual_bonus_mr = 0;
        this.actual_armor = this.base_armor + this.base_armor_g * (lvl - 1) * scale;
        this.actual_mr = this.base_mr + this.base_mr_g * (lvl - 1) * scale;
        this.actual_healshield_power = 0;
        this.actual_tenacity = 0;
        this.actual_crit_chance = 0;
        this.actual_crit_damage = 0;
        this.actual_armorpen_flat = 0;
        this.actual_armorpen_percent = 0;
        this.actual_magicpen_flat = 0;
        this.actual_magicpen_percent = 0;
        this.actual_lifesteal = 0;
        this.actual_ah = 0;
        this.actual_move_speed = this.base_move_speed;
        this.actual_bonus_attack_speed_external = 0;
        this.actual_bonus_attack_speed_level = this.actual_attack_speed_ratio * this.bonus_attack_speed * (lvl - 1) * scale;
        this.actual_total_bonus_attack_speed = this.actual_bonus_attack_speed_level + this.actual_bonus_attack_speed_external;
        this.actual_attack_speed = this.base_attack_speed * (1 + this.actual_total_bonus_attack_speed);
        this.actual_total_armor = this.actual_armor + this.actual_bonus_armor;
        this.actual_total_mr = this.actual_mr + this.actual_bonus_mr;
    }

    levelUp() {
        if (this.level < 18) {
            this.level += 1;
            this.recalculateStats();
        }
    }
    levelUpAbility(ability) {
        if (ability === "Q" && this.q_level < 5) this.q_level++;
        if (ability === "W" && this.w_level < 5) this.w_level++;
        if (ability === "E" && this.e_level < 5) this.e_level++;
        if (ability === "R" && this.r_level < 3) this.r_level++;
    }
    addItem(item) {
        for (let i = 0; i < this.inventory.length; i++) {
            if (!this.inventory[i]) {
                this.inventory[i] = item;
                this.updateStats(item, true);
                return;
            }
        }
    }
    removeItem(item) {
        for (let i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i] && this.inventory[i].name === item.name) {
                this.inventory[i] = null;
                this.updateStats(item, false);
                return;
            }
        }
    }
    listItems() {
        return this.inventory.filter(item => item !== null).map(item => item.name);
    }
    updateStats(item, add) {
        const factor = add ? 1 : -1;
        this.actual_hp += (item.hp || 0) * factor;
        this.actual_hp_regen += (item.hp_regen || 0) * factor;
        this.actual_mana += (item.mana || 0) * factor;
        this.actual_mana_regen += (item.mana_regen || 0) * factor;
        this.actual_ad += (item.ad || 0) * factor;
        this.actual_ap += (item.ap || 0) * factor;
        this.actual_bonus_armor += (item.armor || 0) * factor;
        this.actual_bonus_mr += (item.mr || 0) * factor;
        this.actual_total_armor = this.actual_armor + this.actual_bonus_armor;
        this.actual_total_mr = this.actual_mr + this.actual_bonus_mr;
        this.actual_healshield_power += (item.healshield_power || 0) * factor;
        this.actual_tenacity += (item.tenacity || 0) * factor;
        this.actual_crit_chance += (item.crit_chance || 0) * factor;
        this.actual_crit_damage += (item.crit_damage || 0) * factor;
        this.actual_armorpen_flat += (item.armorpen_flat || 0) * factor;
        this.actual_armorpen_percent += (item.armorpen_percent || 0) * factor;
        this.actual_magicpen_flat += (item.magicpen_flat || 0) * factor;
        this.actual_magicpen_percent += (item.magicpen_percent || 0) * factor;
        this.actual_lifesteal += (item.lifesteal || 0) * factor;
        this.actual_ah += (item.ah || 0) * factor;
        this.actual_move_speed += (item.movespeed_flat || 0) * factor;
        this.actual_move_speed += (item.movespeed_percent || 0) * factor;
        this.actual_bonus_attack_speed_external += (item.attack_speed || 0) * factor;
        this.actual_total_bonus_attack_speed = this.actual_bonus_attack_speed_level + this.actual_bonus_attack_speed_external;
        this.actual_attack_speed = this.base_attack_speed * (1 + this.actual_total_bonus_attack_speed);
    }
        applyItemsStats() {
        // Reset stats to base before applying items
        this.recalculateStats();
        for (let item of this.inventory) {
            if (item) {
                this.actual_hp += item.hp || 0;
                this.actual_hp_regen += item.hp_regen || 0;
                this.actual_mana += item.mana || 0;
                this.actual_mana_regen += item.mana_regen || 0;
                this.actual_ad += item.ad || 0;
                this.actual_ap += item.ap || 0;
                this.actual_bonus_armor += item.armor || 0;
                this.actual_bonus_mr += item.mr || 0;
                this.actual_total_armor = this.actual_armor + this.actual_bonus_armor;
                this.actual_total_mr = this.actual_mr + this.actual_bonus_mr;
                this.actual_healshield_power += item.healshield_power || 0;
                this.actual_tenacity += item.tenacity || 0;
                this.actual_crit_chance += item.crit_chance || 0;
                this.actual_crit_damage += item.crit_damage || 0;
                this.actual_armorpen_flat += item.armorpen_flat || 0;
                this.actual_armorpen_percent += item.armorpen_percent || 0;
                this.actual_magicpen_flat += item.magicpen_flat || 0;
                this.actual_magicpen_percent += item.magicpen_percent || 0;
                this.actual_lifesteal += item.lifesteal || 0;
                this.actual_ah += item.ah || 0;
                this.actual_move_speed += item.movespeed_flat || 0;
                this.actual_move_speed += item.movespeed_percent || 0;
                this.actual_bonus_attack_speed_external += item.attack_speed || 0;
                this.actual_total_bonus_attack_speed = this.actual_bonus_attack_speed_level + this.actual_bonus_attack_speed_external;
                this.actual_attack_speed = this.base_attack_speed * (1 + this.actual_total_bonus_attack_speed);
            }
        }
    }

    // Forcibly recalculate stats after item removal
    forceRecalcWithItems() {
        this.applyItemsStats();
    }
    damage(cantidad, tipo, objetivo) {
        let daño_total = 0;
        if (tipo === "TRUE") {
            daño_total = cantidad;
        } else if (tipo === "AP") {
            if (objetivo.actual_total_mr > 0) {
                daño_total = cantidad / (1 + objetivo.actual_total_mr / 100);
            } else {
                daño_total = cantidad * (2 - (100 / (100 - objetivo.actual_total_mr)));
            }
        } else if (tipo === "AD") {
            if (objetivo.actual_total_armor > 0) {
                daño_total = cantidad / (1 + objetivo.actual_total_armor / 100);
            } else {
                daño_total = cantidad * (2 - (100 / (100 - objetivo.actual_total_armor)));
            }
        } else {
            return;
        }
        daño_total = Math.max(daño_total, 0);
        objetivo.actual_hp -= daño_total;
        objetivo.recibirDanio(daño_total, tipo);
        objetivo.actual_hp = Math.max(objetivo.actual_hp, 0);
        if (objetivo.actual_hp === 0) {
            objetivo.seMuere();
        }
    }
    seMuere() {
        this.its_alive = false;
    }
    recibirDanio(valor, tipo) {
        this.ultimo_danio_recibido = { valor, tipo };
        this.tiempo_ultimo_danio = Date.now();
    }
    // Métodos de habilidades para sobreescribir
    aa(objetivo) { this.damage(this.actual_ad, "AD", objetivo); }
    p() {}
    q() {}
    w() {}
    e() {}
    r() {}
} // Fin de la clase Champion
