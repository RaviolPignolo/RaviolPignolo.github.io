import { Champion } from '../Champion.js';

export class Karthus extends Champion {
    constructor() {
        super({
            name: 'Karthus',
            title: 'The Deathsinger',
            level: 1,
            base_hp: 620,
            base_hp_g: 110,
            base_hp_regen: 6.5,
            base_hp_regen_g: 0.55,
            base_mana: 467,
            base_mana_g: 31,
            base_mana_regen: 8,
            base_mana_regen_g: 0.8,
            base_energy: 0,
            base_energy_regen: 0,
            base_ad: 46,
            base_ad_g: 3.25,
            base_armor: 21,
            base_armor_g: 4.7,
            base_mr: 30,
            base_mr_g: 1.3,
            base_range: 450,
            base_move_speed: 335,
            base_attack_speed: 0.625,
            attack_speed_ratio: 0.625,
            bonus_attack_speed: 0.0211
        });
        this.q_level = 0;
        this.w_level = 0;
        this.e_level = 0;
        this.r_level = 0;
        this.q_mana_cost = 0;
        this.w_mana_cost = 0;
        this.e_mana_cost = 0;
        this.r_mana_cost = 0;
        this.e_toggle = false;
        this.en_pasiva = false;
        this.turno_inicio_pasiva = null;
    }

    levelUpAbility(ability) {
        super.levelUpAbility(ability);
    }

    seMuere() {
        if (!this.en_pasiva) {
            this.pasiva(Date.now()); // Usar timestamp como ejemplo
        }
    }

    actualizarEstado() {
        if (this.en_pasiva && this.turno_inicio_pasiva !== null) {
            if (Date.now() - this.turno_inicio_pasiva >= 7000) { // 7 segundos
                this.en_pasiva = false;
                this.q_mana_cost = this.PREV_Q_MANA_COST;
                this.w_mana_cost = this.PREV_W_MANA_COST;
                this.e_mana_cost = this.PREV_E_MANA_COST;
                this.r_mana_cost = this.PREV_R_MANA_COST;
                super.seMuere();
            }
        }
    }

    pasiva(turno_actual) {
        super.p();
        this.PREV_Q_MANA_COST = this.q_mana_cost;
        this.PREV_W_MANA_COST = this.w_mana_cost;
        this.PREV_E_MANA_COST = this.e_mana_cost;
        this.PREV_R_MANA_COST = this.r_mana_cost;
        this.en_pasiva = true;
        this.turno_inicio_pasiva = turno_actual;
        this.q_mana_cost = 0;
        this.w_mana_cost = 0;
        this.e_mana_cost = 0;
        this.r_mana_cost = 0;
    }

    q(objetivo) {
        const tipo = 'AP';
        const nivel = this.q_level;
        const mana_costs = [20, 25, 30, 35, 40];
        const base_damages = [80, 118, 156, 194, 232];
        const ap_ratios = [0.7, 0.7, 0.7, 0.7, 0.7];
        if (nivel < 1) return;
        let mana_cost = mana_costs[nivel - 1];
        let damage = base_damages[nivel - 1] + (ap_ratios[nivel - 1] * this.actual_ap);
        if (this.en_pasiva) mana_cost = 0;
        if (this.actual_mana < mana_cost) return;
        if (objetivo) {
            super.q();
            this.actual_mana = Math.max(this.actual_mana - mana_cost, 0);
            super.damage(damage, tipo, objetivo);
        } else {
            super.q();
            this.actual_mana = Math.max(this.actual_mana - mana_cost, 0);
        }
    }

    w(objetivo) {
        const nivel = this.w_level;
        const mana_costs = [70, 70, 70, 70, 70];
        const mr_reduction = [0.25, 0.25, 0.25, 0.25, 0.25];
        if (nivel < 1) return;
        let mana_cost = mana_costs[nivel - 1];
        if (this.en_pasiva) mana_cost = 0;
        if (this.actual_mana < mana_cost) return;
        if (objetivo) {
            super.w();
            this.actual_mana = Math.max(this.actual_mana - mana_cost, 0);
            if (objetivo.actual_total_mr > 0) {
                objetivo.actual_total_mr = objetivo.actual_total_mr * (1 - mr_reduction[nivel - 1]);
            }
        } else {
            super.w();
            this.actual_mana = Math.max(this.actual_mana - mana_cost, 0);
        }
    }

    e(objetivo) {
        const tipo = 'AP';
        const nivel = this.e_level;
        const mana_costs = [30, 42, 54, 66, 78];
        const base_damages = [30, 50, 70, 90, 110];
        const ap_ratios = [0.05, 0.05, 0.05, 0.05, 0.05];
        if (nivel < 1) return;
        let mana_cost = mana_costs[nivel - 1];
        let damage = base_damages[nivel - 1] + (ap_ratios[nivel - 1] * this.actual_ap);
        if (this.en_pasiva) mana_cost = 0;
        if (this.actual_mana < mana_cost) return;
        if (objetivo) {
            super.e();
            this.actual_mana = Math.max(this.actual_mana - mana_cost, 0);
            super.damage(damage, tipo, objetivo);
        } else {
            super.e();
            this.actual_mana = Math.max(this.actual_mana - mana_cost, 0);
        }
    }

    r(objetivo) {
        const tipo = 'AP';
        const nivel = this.r_level;
        const mana_costs = [100, 100, 100];
        const base_damages = [200, 350, 500];
        const ap_ratios = [0.7, 0.7, 0.7];
        if (nivel < 1) return;
        let mana_cost = mana_costs[nivel - 1];
        let damage = base_damages[nivel - 1] + (ap_ratios[nivel - 1] * this.actual_ap);
        if (this.en_pasiva) mana_cost = 0;
        if (this.actual_mana < mana_cost) return;
        super.r();
        this.actual_mana = Math.max(this.actual_mana - mana_cost, 0);
        if (objetivo) super.damage(damage, tipo, objetivo);
    }
}
