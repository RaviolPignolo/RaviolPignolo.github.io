import { Karthus } from './champions/Karthus.js';
import { Twitch } from './champions/Twitch.js';
import { AbyssalMask } from './items/AbyssalMask.js';
import { ArchangelsStaff } from './items/ArchangelsStaff.js';
import { ArdentCenser } from './items/ArdentCenser.js';
import { ArmoredAdvance } from './items/ArmoredAdvance.js';
import { AxiomArc } from './items/AxiomArc.js';
import { BansheesVeil } from './items/BansheesVeil.js';
import { BerserkersGreaves } from './items/BerserkersGreaves.js';
import { BlackCleaver } from './items/BlackCleaver.js';
import { BlackfireTorch } from './items/BlackfireTorch.js';
import { BladeOfTheRuinedKing } from './items/BladeOfTheRuinedKing.js';
import { BloodlettersCurse } from './items/BloodlettersCurse.js';
import { Bloodthirster } from './items/Bloodthirster.js';
import { BootsOfSwiftness } from './items/BootsOfSwiftness.js';
import { ChempunkChainsword } from './items/ChempunkChainsword.js';
import { ChainedCrushers } from './items/ChainedCrushers.js';
import { CosmicDrive } from './items/CosmicDrive.js';
import { CrimsonLucidity } from './items/CrimsonLucidity.js';
import { Cryptbloom } from './items/Cryptbloom.js';
import { Dawncore } from './items/Dawncore.js';
import { DeadMansPlate } from './items/DeadMansPlate.js';
import { DeathsDance } from './items/DeathsDance.js';
import { EchoesOfHelia } from './items/EchoesOfHelia.js';
// ...continúa con el resto de los ítems...
import { SpiritVisage } from './items/SpiritVisage.js';
import { Thornmail } from './items/Thornmail.js';

const championClasses = [Karthus, Twitch];
const itemClasses = [
  AbyssalMask,
  ArchangelsStaff,
  ArdentCenser,
  ArmoredAdvance,
  AxiomArc,
  BansheesVeil,
  BerserkersGreaves,
  BlackCleaver,
  BlackfireTorch,
  BladeOfTheRuinedKing,
  BloodlettersCurse,
  Bloodthirster,
  BootsOfSwiftness,
  ChempunkChainsword,
  ChainedCrushers,
  CosmicDrive,
  CrimsonLucidity,
  Cryptbloom,
  Dawncore,
  DeadMansPlate,
  DeathsDance,
  EchoesOfHelia,
  // ...continúa con el resto de los ítems...
  SpiritVisage,
  Thornmail
];

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
    renderSkills(side);
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
        renderSkills(side);
    });
});

// Inicialización

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
    renderChampionOptions();
    updateChampion(0);
    updateChampion(1);
    renderSkills(0);
    renderSkills(1);
    renderItemsByCategory('all');
    setupCategoryMenu();
    setupDragAndDrop();
// Renderiza los ítems según la categoría seleccionada
function renderItemsByCategory(category) {
    const itemsListDiv = document.getElementById('items-icons-list');
    itemsListDiv.innerHTML = '';
    let filteredItems;
    if (category === 'all') {
        filteredItems = itemClasses;
    } else {
        filteredItems = itemClasses.filter(cls => {
            const instance = new cls();
            return instance.tags && instance.tags.includes(category);
        });
    }
    filteredItems.forEach(cls => {
        const instance = new cls();
        const itemName = cls.name.replace(/\s/g, '');
        const img = document.createElement('img');
        img.src = `assets/items/${itemName}_item.png`;
        img.alt = itemName;
        img.className = 'item-icon';
        img.setAttribute('draggable', 'true');
        img.setAttribute('data-item', itemName);
        itemsListDiv.appendChild(img);
    });
    setupDragAndDrop();
}

// Configura el menú de categorías para filtrar ítems
function setupCategoryMenu() {
    const menu = document.getElementById('items-category-menu');
    if (!menu) return;
    menu.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            menu.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderItemsByCategory(btn.getAttribute('data-category'));
        });
    });
    // Marca 'Todos' como activo por defecto
    menu.querySelector('.category-btn[data-category="all"]').classList.add('active');
}
});

function renderSkills(side) {
    const skillsDiv = document.getElementById(side === 0 ? 'attacker-skills' : 'defender-skills');
    const descDiv = document.getElementById(side === 0 ? 'attacker-skill-desc' : 'defender-skill-desc');
    skillsDiv.innerHTML = '';
    descDiv.innerHTML = '';
    if (!champions[side]) return;
    const champ = champions[side];
    const skillKeys = [
        { key: 'P' },
        { key: 'Q' },
        { key: 'W' },
        { key: 'E' },
        { key: 'R' }
    ];
    skillKeys.forEach(({ key }) => {
        // Normalizar nombre del campeón para la ruta
        const champFolder = champ.name.replace(/\s/g, '').replace(/'/g, '').replace(/[^a-zA-Z0-9]/g, '');
        const imgName = `${champFolder}_${key}_ability.png`;
        const imgPath = `assets/champions/${champFolder}/${imgName}`;
        // Crear elemento de habilidad
        const skillElem = document.createElement('div');
        skillElem.className = 'skill';
        skillElem.innerHTML = `<img src="${imgPath}" alt="${key}" style="width:40px;height:40px;vertical-align:middle;border-radius:8px;">`;
        // Click: mostrar/cerrar descripción
        skillElem.addEventListener('click', () => {
            // Si ya está abierta esta descripción, ciérrala
            if (descDiv.getAttribute('data-open') === key) {
                descDiv.innerHTML = '';
                descDiv.removeAttribute('data-open');
            } else {
                descDiv.innerHTML = `<div class='skill-desc-block'><strong>${champ.name} ${key}</strong><br>${getSkillDescription(champ, key)}</div>`;
                descDiv.setAttribute('data-open', key);
            }
        });
        // Doble click: agregar a secuencia de acciones
        skillElem.addEventListener('dblclick', () => {
            addActionToSequence(champ.name, key);
        });
        skillsDiv.appendChild(skillElem);
    });
}

function getSkillDescription(champ, key) {
    // Puedes personalizar esto por campeón y habilidad
    if (champ.name === 'Karthus') {
        switch (key) {
            case 'P': return `<span style='color:#b0eaff;'>Desafía la muerte y lanza habilidades durante 7 segundos tras morir. <br> No puede moverse ni usar básicos, pero es inmune a control de masas y daño.</span>`;
            case 'Q': return `<span style='color:#b0eaff;'>Inflige daño mágico en área.</span>`;
            case 'W': return `<span style='color:#b0eaff;'>Reduce la resistencia mágica de los enemigos.</span>`;
            case 'E': return `<span style='color:#b0eaff;'>Daño mágico por segundo en área.</span>`;
            case 'R': return `<span style='color:#b0eaff;'>Daño global a todos los enemigos.</span>`;
        }
    }
    if (champ.name === 'Twitch') {
        switch (key) {
            case 'P': return `<span style='color:#b0eaff;'>Aplica veneno a los enemigos.</span>`;
            case 'Q': return `<span style='color:#b0eaff;'>Camuflaje y velocidad de ataque.</span>`;
            case 'W': return `<span style='color:#b0eaff;'>Lanza una nube de veneno.</span>`;
            case 'E': return `<span style='color:#b0eaff;'>Daño adicional según acumulación de veneno.</span>`;
            case 'R': return `<span style='color:#b0eaff;'>Aumenta el alcance y daño de los ataques.</span>`;
        }
    }
    return '<span style="color:#b0eaff;">Descripción no disponible.</span>';
}
