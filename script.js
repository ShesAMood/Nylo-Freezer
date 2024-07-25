function calculate() {
    const magicLevel = parseInt(document.getElementById('magicLevel').value);
    const useVoid = document.getElementById('useVoid').checked;
    const iceSceptre = document.getElementById('iceSceptre').checked;
    
    let boostType = document.querySelector('input[name="boostType"]:checked').value;
    let prayerType = document.querySelector('input[name="prayerType"]:checked').value;

    let toBeat = (magicLevel + 9) * 204;
    let visual;
	
    if (boostType == 3) {
        visual = magicLevel; // No boost
    } else if (boostType == 1) {
        visual = (magicLevel * 1.1) + 4; // Saturated Heart
    } else if (boostType == 2) {
        visual = magicLevel + 4; // Divine Mage Pot
    }

    let effective = Math.floor(visual);

    if (prayerType == 3) {
        effective *= 1; // No Prayer
    } else if (prayerType == 2) {
        effective *= 1.15; // Mystic Might
    } else if (prayerType == 1) {
        effective *= 1.25; // Augury
    }

    effective = Math.floor(effective);

    if (useVoid) {
        effective *= 1.45;
        effective = Math.floor(effective);
    }
	
	effective += 9;
	
    if (iceSceptre) {
		const result = Math.ceil(((toBeat / 1.1) / effective) - 64);
    } else {
		const result = Math.ceil((toBeat / effective) - 64);
	}

    document.getElementById('result').innerText = `You need a magic attack bonus of: ${result}`;
}
