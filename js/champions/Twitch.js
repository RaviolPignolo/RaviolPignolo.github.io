import { Champion } from '../Champion.js';

export class Twitch extends Champion {
    constructor() {
        super({
            name: 'Twitch',
            title: 'The Plague Rat',
            level: 1,
            base_hp: 630,
            base_hp_g: 104,
            base_hp_regen: 3.75,
            base_hp_regen_g: 0.6,
            base_mana: 300,
            base_mana_g: 40,
            base_mana_regen: 7.25,
            base_mana_regen_g: 0.7,
            base_energy: 0,
            base_energy_regen: 0,
            base_ad: 59,
            base_ad_g: 3.1,
            base_armor: 27,
            base_armor_g: 4.2,
            base_mr: 30,
            base_mr_g: 1.3,
            base_range: 550,
            base_move_speed: 330,
            base_attack_speed: 0.679,
            attack_speed_ratio: 0.679,
            bonus_attack_speed: 0.0338
        });
        this.q_level = 0;
        this.w_level = 0;
        this.e_level = 0;
        this.r_level = 0;
        this.r_activa = false;
        this.r_turno_inicio = null;
        this.r_ad_original = null;
    }

    levelUpAbility(ability) {
        super.levelUpAbility(ability);
    }

    pasiva() {
        super.p();
    }

    q() {
        super.q();
    }

    w() {
        super.w();
    }

    e() {
        super.e();
    }

    r(turno_actual) {
        const nivel = this.r_level;
        const mana_costs = [100, 100, 100];
        const bonus_ad = [30, 45, 60];
        if (nivel < 1) return;
        let mana_cost = mana_costs[nivel - 1];
        if (this.actual_mana < mana_cost || this.r_activa) return;
        super.r();
        this.actual_mana = Math.max(this.actual_mana - mana_cost, 0);
        this.r_ad_original = this.actual_ad;
        this.actual_ad += bonus_ad[nivel - 1];
        this.r_turno_inicio = turno_actual;
        this.r_activa = true;
    }

    actualizarEstadoR(turno_actual) {
        if (this.r_activa && (turno_actual - this.r_turno_inicio >= 6000)) {
            this.actual_ad = this.r_ad_original;
            this.r_activa = false;
        }
    }
}
