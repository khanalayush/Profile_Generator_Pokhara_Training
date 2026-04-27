(() => {
	// ===================== EDIT HERE: LOCAL IMAGE FILE =====================
	// Put your image in this same project folder and set file name below.
	// Example: 'profilepic.jpg' or 'myphoto.png'
	
    
    const profileImageFile = 'userprofilepic.jpg';
	
    
    
    // =================== END EDIT: LOCAL IMAGE FILE ========================



	// ======================= EDIT HERE: PERSONAL INFO =======================
	// Update your name, id/roll, department, year, email, and gpa below.
	const myInfo = {
		name: 'Ayush Khanal',
		tagline: 'DevOps',
		roll:  '08 / 22070127',
		department: 'Bachelor of Computer Engineering',
		year: '2022',
		email: 'khanalayush06@gmail.com',
		gpa: '3.00'
	};
	// ===================== END EDIT: PERSONAL INFO =========================

 
	const facts = [
		{ id: 1, quote: 'Stay hungry, stay foolish.' },
		{ id: 2, quote: 'Success doesn\'t come to you, you go to it.' },
		{ id: 3, quote: 'Small progress every day leads to big results.' },
		{ id: 4, quote: 'Don\'t watch the clock; do what it does. Keep going.' },
		{ id: 5, quote: 'Your only limit is your mind.' },
		{ id: 6, quote: 'Push yourself because no one else is going to do it for you.' },
		{ id: 7, quote: 'Dream it. Build it. Achieve it.' },
		{ id: 8, quote: 'Hard work beats talent when talent doesn\'t work hard.' },
		{ id: 9, quote: 'Failure is not the opposite of success; it is part of success.' },
		{ id: 10, quote: 'Code your future one line at a time.' }
	];
	 

	const profilePhoto = document.getElementById('profile-photo');
	const nameEl = document.getElementById('student-name');
	const taglineEl = document.getElementById('student-tagline');
	const rollEl = document.getElementById('info-roll');
	const departmentEl = document.getElementById('info-department');
	const yearEl = document.getElementById('info-year');
	const emailEl = document.getElementById('info-email');
	const gpaEl = document.getElementById('info-gpa');
	const btn = document.getElementById('fact-btn');
	const factBox = document.getElementById('fact-box');

	if (
		!profilePhoto ||
		!nameEl ||
		!taglineEl ||
		!rollEl ||
		!departmentEl ||
		!yearEl ||
		!emailEl ||
		!gpaEl ||
		!btn ||
		!factBox
	) {
		return;
	}

	profilePhoto.src = profileImageFile;
	nameEl.textContent = myInfo.name;
	taglineEl.textContent = myInfo.tagline;
	rollEl.textContent = myInfo.roll;
	departmentEl.textContent = myInfo.department;
	yearEl.textContent = myInfo.year;
	emailEl.textContent = myInfo.email;
	gpaEl.textContent = myInfo.gpa;

	let lastIndex = -1;

	btn.addEventListener('click', () => {
		let idx;
		do {
			idx = Math.floor(Math.random() * facts.length);
		} while (idx === lastIndex && facts.length > 1);

		lastIndex = idx;
		const selectedFact = facts[idx];

		factBox.classList.remove('visible', 'placeholder');
		setTimeout(() => {
			factBox.textContent = selectedFact.quote;
			factBox.classList.add('visible');
		}, 300);
	});
})();
 