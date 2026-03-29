# UTM Website - Next.js + Tailwind CSS

## 🚀 Instalare

```bash
npm install
npm run dev
```
Deschide http://localhost:3000

---

## 📁 Structura proiectului

```
utm-website/
├── app/
│   ├── layout.jsx          → Layout global (Navbar + Footer)
│   ├── page.jsx            → Pagina principală (Home)
│   ├── globals.css         → Stiluri globale
│   ├── specialitati/
│   │   └── page.jsx        → Pagina Specialități
│   ├── admitere/
│   │   └── page.jsx        → Pagina Admitere (cu formular)
│   ├── despre/
│   │   └── page.jsx        → Pagina Despre
│   ├── contact/
│   │   └── page.jsx        → Pagina Contact (cu formular)
│   └── proiecte/
│       └── page.jsx        → Pagina Proiecte
├── components/
│   ├── Navbar.jsx          → Bara de navigare
│   └── Footer.jsx          → Footer
└── public/
    └── images/             ← ✅ PUNE POZELE TALE AICI
        ├── hero/
        ├── specialitati/
        ├── admitere/
        ├── campus/
        ├── despre/
        ├── parteneri/
        ├── proiecte/
        └── contact/
```

---

## 🖼️ GHID COMPLET PENTRU POZE

### ✅ PASUL 1 — Pune poza în folderul corect

### ✅ PASUL 2 — Decomentează codul `<Image>` din fișier

Caută în fiecare pagină blocul `{/* UNCOMMENT ... */}` și elimină comentariul.

---

## 📸 Lista completă de poze

### 🏠 Pagina principală (`app/page.jsx`)

| Fișier | Locație | Dimensiune | Descriere |
|--------|---------|------------|-----------|
| `public/images/hero/hero-main.jpg` | Hero section dreapta | **800×600px** | Student cu laptop, zâmbitor |
| `public/images/parteneri/pentalog.png` | Secțiunea parteneri | **180×60px** | Logo Pentalog (fundal transparent) |
| `public/images/parteneri/endava.png` | Secțiunea parteneri | **180×60px** | Logo Endava (fundal transparent) |

---

### 📚 Pagina Specialități (`app/specialitati/page.jsx`)

| Fișier | Dimensiune | Descriere |
|--------|------------|-----------|
| `public/images/specialitati/programare.jpg` | **600×400px** | Programare — student la calculator/cod |
| `public/images/specialitati/retele.jpg` | **600×400px** | Rețele — servere, echipamente |
| `public/images/specialitati/design.jpg` | **600×400px** | Design — ecran cu UI/design grafic |

---

### 📝 Pagina Admitere (`app/admitere/page.jsx`)

| Fișier | Dimensiune | Descriere |
|--------|------------|-----------|
| `public/images/admitere/admitere-main.jpg` | **700×400px** | Studenți completând formulare sau intrând în colegiu |

---

### 🏢 Pagina Despre (`app/despre/page.jsx`)

| Fișier | Dimensiune | Descriere |
|--------|------------|-----------|
| `public/images/campus/campus-main.jpg` | **700×500px** | Clădirea principală UTM |
| `public/images/despre/interior.jpg` | **1200×500px** | Interior laborator / holuri / echipă |
| `public/images/parteneri/pentalog.png` | **180×60px** | Logo Pentalog |
| `public/images/parteneri/endava.png` | **180×60px** | Logo Endava |

---

### 📞 Pagina Contact (`app/contact/page.jsx`)

| Fișier | Dimensiune | Descriere |
|--------|------------|-----------|
| `public/images/contact/harta.jpg` | **700×400px** | Screenshot Google Maps sau embed iframe |

> **Sfat:** Poți înlocui placeholder-ul hartă cu un `<iframe>` Google Maps real.
> Mergi pe maps.google.com → Share → Embed a map → Copiază codul iframe.

---

### 🖼️ Pagina Proiecte (`app/proiecte/page.jsx`)

| Fișier | Dimensiune | Descriere |
|--------|------------|-----------|
| `public/images/proiecte/proiect-1.jpg` | **600×400px** | Screenshot proiect 1 |
| `public/images/proiecte/proiect-2.jpg` | **600×400px** | Screenshot proiect 2 |
| `public/images/proiecte/proiect-3.jpg` | **600×400px** | Screenshot proiect 3 |
| `public/images/proiecte/proiect-4.jpg` | **600×400px** | Screenshot proiect 4 |

---

## 🔧 Cum decomentezi o poză (exemplu)

**Înainte** (poza lipșeste, se vede placeholder):
```jsx
{/* UNCOMMENT după ce adaugi poza:
<Image
  src="/images/hero/hero-main.jpg"
  alt="Studenți UTM"
  fill
  className="object-cover"
  priority
/>
*/}
```

**După** (elimini `{/*` de la început și `*/}` de la final):
```jsx
<Image
  src="/images/hero/hero-main.jpg"
  alt="Studenți UTM"
  fill
  className="object-cover"
  priority
/>
```

---

## 🎨 Culori principale

| Variabilă | Culoare | Hex |
|-----------|---------|-----|
| `utm-blue` | Albastru închis | `#1a3a8f` |
| `utm-blue-light` | Albastru deschis | `#2563eb` |
| `utm-blue-dark` | Albastru foarte închis | `#0f2660` |

---

## 📌 Note importante

- Toate pozele trebuie să fie în format **JPG sau PNG**
- Logo-urile parteneri — preferabil **PNG cu fundal transparent**
- Dacă vrei să adaugi mai multe proiecte, editează array-ul `proiecte` din `app/proiecte/page.jsx`
- Formularul de contact și admitere pot fi conectate la un backend sau la Formspree/EmailJS
