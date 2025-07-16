import { Karthus } from './champions/Karthus.js';
import { Twitch } from './champions/Twitch.js';
import { BlackfireTorch } from './items/BlackfireTorch.js';
import { Bloodthirster } from './items/Bloodthirster.js';
import { Thornmail } from './items/Thornmail.js';
import { SpiritVisage } from './items/SpiritVisage.js';

const championClasses = [Karthus, Twitch];
const itemClasses = [BlackfireTorch, Bloodthirster, Thornmail, SpiritVisage];

const championSelects = [
    document.getElementById('attacker-champion'),
    document.getElementById('defender-champion')
];
const levelInputs = [
    document.getElementById('attacker-level'),
    document.getElementById('defender-level')
];
const statsDivs = [
    document.getElementById('attacker-stats'),
    document.getElementById('defender-stats')
];

let champions = [null, null];
let items = [[], []];

function renderChampionOptions() {
    championSelects.forEach(select => {
        select.innerHTML = '';
        championClasses.forEach((champClass, idx) => {
            const champ = new champClass();
            const option = document.createElement('option');
            option.value = idx;
            option.textContent = champ.name;
            select.appendChild(option);
        });
    });
}

function updateChampion(side) {
    const champIdx = parseInt(championSelects[side].value);
    champions[side] = new championClasses[champIdx]();
    // Mantener el nivel seleccionado si ya había uno
    let currentLevel = parseInt(levelInputs[side].value);
    if (isNaN(currentLevel) || currentLevel < 1) currentLevel = 1;
    if (currentLevel > 18) currentLevel = 18;
    champions[side].level = currentLevel;
    if (typeof champions[side].recalculateStats === 'function') {
        champions[side].recalculateStats();
    }
    // Reset items
    items[side] = Array(6).fill(null);
    updateChampionItems(side);
    renderStats(side);
}

function updateChampionItems(side) {
    if (!champions[side]) return;
    // Limpiar inventario y recalcular stats base
    champions[side].inventory = Array(6).fill(null);
    // No llamar a recalculateStats aquí, solo a applyItemsStats
    // Asignar ítems seleccionados al inventario
    items[side].forEach((idx, i) => {
        if (idx !== null && itemClasses[idx]) {
            champions[side].inventory[i] = new itemClasses[idx]();
        }
    });
    // Sumar stats de todos los ítems equipados correctamente
    if (typeof champions[side].applyItemsStats === 'function') {
        champions[side].applyItemsStats();
    }
}

function renderStats(side) {
    if (!champions[side]) {
        statsDivs[side].innerHTML = '';
        return;
    }
    const champ = champions[side];
    const stats = [
        `HP: ${champ.actual_hp.toFixed(0)}`,
        `Mana: ${champ.actual_mana.toFixed(0)}`,
        `AD: ${champ.actual_ad.toFixed(1)}`,
        `AP: ${champ.actual_ap.toFixed(1)}`,
        `Armor: ${champ.actual_total_armor.toFixed(1)}`,
        `MR: ${champ.actual_total_mr.toFixed(1)}`,
        `Attack Speed: ${(champ.actual_attack_speed).toFixed(3)}`,
        `Move Speed: ${champ.actual_move_speed.toFixed(1)}`
    ];
    statsDivs[side].innerHTML = stats.map(s => `<div>${s}</div>`).join('');
}

championSelects.forEach((select, side) => {
    select.addEventListener('change', () => {
        updateChampion(side);
    });
});
levelInputs.forEach((input, side) => {
    input.addEventListener('input', () => {
        if (!champions[side]) return;
        let newLevel = parseInt(input.value);
        if (isNaN(newLevel) || newLevel < 1) newLevel = 1;
        if (newLevel > 18) newLevel = 18;
        champions[side].level = newLevel;
        if (typeof champions[side].recalculateStats === 'function') {
            champions[side].recalculateStats();
        }
        updateChampionItems(side);
        renderStats(side);
    });
});

// Inicialización

renderChampionOptions();
updateChampion(0);
updateChampion(1);

// Drag & Drop de ítems
function setupDragAndDrop() {
    const itemIcons = document.querySelectorAll('.item-icon');
    const slotContainers = [
        document.getElementById('attacker-item-slots'),
        document.getElementById('defender-item-slots')
    ];

    itemIcons.forEach(icon => {
        icon.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', icon.getAttribute('data-item'));
        });
    });

    slotContainers.forEach((container, side) => {
        const slots = container.querySelectorAll('.item-slot');
        slots.forEach((slot, idx) => {
            slot.addEventListener('dragover', (e) => {
                e.preventDefault();
                slot.style.boxShadow = '0 0 8px #4e4ecf';
            });
            slot.addEventListener('dragleave', (e) => {
                slot.style.boxShadow = '';
            });
            slot.addEventListener('drop', (e) => {
                e.preventDefault();
                slot.style.boxShadow = '';
                const itemName = e.dataTransfer.getData('text/plain');
                // Buscar el índice del ítem
                const itemIdx = itemClasses.findIndex(cls => cls.name.replace(/\s/g, '') === itemName.replace(/\s/g, '') || cls.prototype.constructor.name.replace(/\s/g, '') === itemName.replace(/\s/g, ''));
                // Verificar si el ítem ya está en otro slot
                if (itemIdx !== -1 && !items[side].includes(itemIdx)) {
                    items[side][idx] = itemIdx;
                    // Mostrar el icono en el slot
                    slot.innerHTML = `<img src="assets/items/${itemClasses[itemIdx].name.replace(/\s/g, '')}_item.png" alt="${itemClasses[itemIdx].name}" class="item-icon" style="width:40px;height:40px;">`;
                    updateChampionItems(side);
                    renderStats(side);
                }
            });
            // Permitir quitar el ítem del slot con doble click
            slot.addEventListener('dblclick', () => {
                items[side][idx] = null;
                slot.innerHTML = '';
                updateChampionItems(side);
                if (champions[side] && typeof champions[side].forceRecalcWithItems === 'function') {
                    champions[side].forceRecalcWithItems();
                }
                renderStats(side);
            });
        });
    });
}

// Mostrar/ocultar el bloque de ítems
document.getElementById('toggle-items').addEventListener('click', () => {
    const iconsBlock = document.getElementById('items-icons');
    iconsBlock.style.display = iconsBlock.style.display === 'none' ? 'block' : 'none';
});

// Inicializar drag & drop después de cargar el DOM
window.addEventListener('DOMContentLoaded', () => {
    setupDragAndDrop();
});
