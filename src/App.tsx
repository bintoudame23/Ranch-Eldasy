import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  ArrowUpRight,
  MoveRight,
  MapPin,
  Phone,
  Mail,
  CalendarDays,
  Users,
  Leaf,
  Droplets,
  ShieldCheck,
  Sprout,
  Star,
  Sun,
  Trees,
  ChevronDown,
  ChevronLeft,
  Milk,
  TrendingUp,
  Award,
  Heart,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   IMAGES
───────────────────────────────────────────── */
const IMAGES = {
  hero:      'https://images.pexels.com/photos/36374911/pexels-photo-36374911.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000',
  horsesRun: 'https://images.pexels.com/photos/35932751/pexels-photo-35932751.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
  horses2:   'https://images.pexels.com/photos/27948134/pexels-photo-27948134.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
  cattle:    'https://images.pexels.com/photos/17538711/pexels-photo-17538711.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
  herd:      'https://images.pexels.com/photos/4154222/pexels-photo-4154222.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
  goats:     'https://images.pexels.com/photos/27866036/pexels-photo-27866036.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
  pastoral:  'https://images.pexels.com/photos/18325882/pexels-photo-18325882.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
  herder:    'https://images.pexels.com/photos/32707547/pexels-photo-32707547.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  cowPortrait:'https://images.pexels.com/photos/35836688/pexels-photo-35836688.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  horsePortrait:'https://images.pexels.com/photos/5098968/pexels-photo-5098968.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
  horseClose:'https://images.pexels.com/photos/33358385/pexels-photo-33358385.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
  meat:      'https://images.pexels.com/photos/33157191/pexels-photo-33157191.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  aerial:    'https://images.pexels.com/photos/12075304/pexels-photo-12075304.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
};

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const SLOGANS = [
  'Du ranch à votre assiette',
  'De nos troupeaux à votre table',
  'L\'élevage d\'exception, de la ferme à votre table',
  'Des prairies d\'Eldasy à votre assiette',
  'De nos terres à votre émerveillement',
  'Du ranch à votre admiration',
];

const STATS = [
  { value: '120 ha', label: 'de prairies préservées', icon: Trees },
  { value: '4',      label: 'filières d\'élevage',    icon: Sprout },
  { value: '100%',   label: 'ancré au Sénégal',       icon: MapPin },
  { value: '15+',    label: 'années de passion',      icon: Heart },
];

const ANIMALS = [
  {
    id: 'bovins',
    title: 'Bovins',
    subtitle: 'La force de nos prairies',
    img: IMAGES.cattle,
    portrait: IMAGES.cowPortrait,
    desc: 'Nos bovins sont au cœur du ranch Eldasy. Races locales parfaitement adaptées au climat sénégalais, ils pâturent librement sur nos 120 hectares de savane.',
    details: 'Races élevées : N\'Dama, Gobra, Borgou, Azawak. Ces races autochtones sont reconnues pour leur résistance à la trypanosomiase et leur adaptation aux conditions sahéliennes. Très demandés pour la viande et les cérémonies (mariages, fêtes religieuses).',
    uses: ['Viande de qualité', 'Lait frais', 'Reproduction', 'Travail agricole'],
    color: 'from-[#3a2012] to-[#7a3e1a]',
  },
  {
    id: 'chevaux',
    title: 'Chevaux',
    subtitle: 'L\'élégance du ranch',
    img: IMAGES.horsesRun,
    portrait: IMAGES.horseClose,
    desc: 'Symboles de prestige et de liberté, nos chevaux incarnent l\'âme d\'Eldasy. Dressés avec soin, ils participent aux activités équestres et à l\'agrotourisme.',
    details: 'Véritables ambassadeurs du ranch, nos chevaux sont utilisés pour le transport traditionnel, les loisirs, l\'équitation et les spectacles culturels. Un atout touristique et patrimonial unique.',
    uses: ['Équitation & loisirs', 'Spectacles & tourisme', 'Prestige & patrimoine', 'Reproduction'],
    color: 'from-[#1a1f2e] to-[#2d3f5e]',
  },
  {
    id: 'ovins',
    title: 'Ovins',
    subtitle: 'La tradition sénégalaise',
    img: IMAGES.goats,
    portrait: IMAGES.goats,
    desc: 'Moutons et brebis font partie du patrimoine pastoral sénégalais. Très prisés pour la Tabaski et les grandes cérémonies, nos troupeaux ovins sont soignés avec le plus grand soin.',
    details: 'Races : Djallonké, Sahel, Bali-Bali, Ladoum (haut de gamme). La demande explose chaque année lors de l\'Aïd el-Kébir. Nos moutons Ladoum, race d\'exception à forte valeur, sont notre fleuron.',
    uses: ['Viande de fête', 'Tabaski & cérémonies', 'Laine & cuir', 'Vente de reproducteurs'],
    color: 'from-[#1f3020] to-[#2d5230]',
  },
  {
    id: 'caprins',
    title: 'Caprins',
    subtitle: 'Résistance & polyvalence',
    img: IMAGES.goats,
    portrait: IMAGES.goats,
    desc: 'Les chèvres sont les championnes de la résilience au Sénégal. Adaptées à la sécheresse, elles prospèrent là où d\'autres peinent. Leur lait et leur viande sont très appréciés localement.',
    details: 'Races : Peul, Sahel. Faciles à élever, productives et résistantes. Le lait de chèvre ouvre la voie à des produits dérivés à forte valeur ajoutée : yaourt, fromage de chèvre artisanal, cosmétiques naturels.',
    uses: ['Viande & lait', 'Fromage artisanal', 'Résistance sécheresse', 'Petite économie'],
    color: 'from-[#2a1f10] to-[#4a3318]',
  },
];

const COMMITMENTS = [
  { icon: Leaf,       title: 'Élevage responsable',  text: 'Des pratiques respectueuses du rythme naturel et de la santé de nos animaux, pour un élevage sain et durable.' },
  { icon: Droplets,   title: 'Gestion de l\'eau',     text: 'Forages, châteaux d\'eau et abreuvoirs modernes pour garantir l\'accès à l\'eau en toute saison au Sénégal.' },
  { icon: ShieldCheck,title: 'Suivi vétérinaire',     text: 'Un vétérinaire et un technicien d\'élevage sur site pour la prévention des maladies et le bien-être animal.' },
  { icon: Sun,        title: 'Énergie solaire',       text: 'L\'énergie solaire alimente nos installations pour réduire notre empreinte carbone et nos coûts d\'exploitation.' },
  { icon: TrendingUp, title: 'Filière locale',        text: 'Nous soutenons l\'économie locale : emplois, fournitures, partenariats avec les communautés rurales voisines.' },
  { icon: Award,      title: 'Traçabilité & qualité', text: 'Chaque animal est identifié et suivi de la naissance au produit final. Hygiène, qualité et transparence.' },
];

const GALLERY = [
  { src: IMAGES.horsesRun, alt: 'Chevaux au galop au coucher du soleil' },
  { src: IMAGES.horses2,   alt: 'Troupeau de chevaux dans la poussière' },
  { src: IMAGES.cattle,    alt: 'Troupeau de bovins à la tombée du jour' },
  { src: IMAGES.herd,      alt: 'Bovins sur les plaines arides' },
  { src: IMAGES.goats,     alt: 'Chèvres et moutons au coucher du soleil' },
  { src: IMAGES.pastoral,  alt: 'Vue aérienne des pâturages Eldasy' },
  { src: IMAGES.herder,    alt: 'Éleveur africain avec ses bovins' },
  { src: IMAGES.aerial,    alt: 'Vue drone des bovins en pâturage vert' },
];

const FAQ = [
  { q: 'Peut-on visiter le ranch Eldasy ?', a: 'Oui ! Nous organisons des visites guidées du lundi au samedi sur rendez-vous. Vous découvrirez nos troupeaux, nos installations et l\'histoire du ranch. Idéal pour les familles, les écoles et les professionnels.' },
  { q: 'Proposez-vous de la vente directe de bétail ?', a: 'Absolument. Nous vendons bovins, ovins (dont les Ladoum), caprins et proposons des reproducteurs de qualité. Contactez-nous pour obtenir notre catalogue et les prix actuels.' },
  { q: 'Quels sont les animaux disponibles pour la Tabaski ?', a: 'Chaque année, nous préparons un lot spécial de moutons de qualité pour l\'Aïd el-Kébir : Bali-Bali, Peul-Peul, Touabir et les prestigieux Ladoum. Réservez à l\'avance pour garantir votre animal.' },
  { q: 'Proposez-vous des partenariats ou des investissements ?', a: 'Oui, nous sommes ouverts aux partenariats dans l\'élevage, la transformation de produits animaux et l\'agrotourisme. Le Sénégal offre d\'excellentes opportunités et le gouvernement soutient les projets d\'élevage modernes.' },
  { q: 'Y a-t-il des activités équestres au ranch ?', a: 'Nos chevaux accueillent des visiteurs pour des promenades équestres encadrées, des initiations à l\'équitation et des spectacles culturels. Un moment inoubliable pour petits et grands.' },
];

/* ─────────────────────────────────────────────
   NAV
───────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#ranch',       label: 'Le ranch' },
    { href: '#elevage',     label: 'Nos animaux' },
    { href: '#engagement',  label: 'Engagement' },
    { href: '#galerie',     label: 'Galerie' },
    { href: '#contact',     label: 'Contact' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-forest-900/97 shadow-[0_2px_30px_rgba(0,0,0,0.35)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10 lg:py-5">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3">
          <img src="/assets/ranch-eldasy.png" alt="Ranch Eldasy" className="h-12 w-12 object-contain" />
          <div className={`leading-tight ${scrolled ? 'text-white' : 'text-white'}`}>
            <p className="font-display text-lg font-bold uppercase tracking-[0.1em]">Ranch Eldasy</p>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ranch-400">Du ranch à votre admiration</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-ranch-300 ${scrolled ? 'text-white/85' : 'text-white/90'}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-ranch-500 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-forest-950 transition hover:bg-ranch-400 lg:flex"
        >
          Prendre contact <ArrowUpRight size={14} />
        </a>

        {/* Mobile burger */}
        <button
          className={`rounded-full p-2.5 transition lg:hidden ${scrolled ? 'bg-white/10 text-white' : 'bg-black/25 text-white'}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 mb-4 overflow-hidden rounded-2xl border border-white/10 bg-forest-900/98 shadow-2xl">
          <nav className="flex flex-col py-2">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="px-5 py-3.5 text-sm font-semibold text-white/85 transition hover:bg-white/5 hover:text-ranch-300"
              >
                {label}
              </a>
            ))}
            <div className="px-5 py-4">
              <a href="#contact" onClick={() => setOpen(false)} className="block rounded-full bg-ranch-500 py-3 text-center text-xs font-bold uppercase tracking-[0.15em] text-forest-950">
                Nous contacter
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero() {
  const [sloganIdx, setSloganIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSloganIdx((i) => (i + 1) % SLOGANS.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="accueil" className="relative flex min-h-screen items-end overflow-hidden bg-forest-950 pb-16 pt-28 lg:pb-24">
      <img
        src={IMAGES.hero}
        alt="Troupeau au coucher du soleil, Ranch Eldasy"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-75 animate-fade"
      />
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-forest-950/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="animate-rise mb-6 flex items-center gap-3 text-ranch-400">
            <span className="h-px w-10 bg-ranch-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Sénégal · Élevage d'exception</span>
          </div>

          {/* Heading */}
          <h1 className="font-display animate-rise text-6xl font-bold leading-[0.92] tracking-[-0.03em] text-white sm:text-7xl lg:text-[7.5rem]">
            Du ranch<br />
            <span className="text-ranch-400">à votre</span><br />
            admiration.
          </h1>

          {/* Rotating slogan */}
          <div className="animate-rise-2 mt-8 flex items-center gap-3 text-white/70">
            <span className="h-5 w-px bg-ranch-500" />
            <p key={sloganIdx} className="text-sm italic tracking-wide animate-fade">
              {SLOGANS[sloganIdx]}
            </p>
          </div>

          <p className="animate-rise-2 mt-6 max-w-xl text-lg leading-[1.75] text-white/80">
            Bienvenue au Ranch Eldasy, au cœur du Sénégal. Bovins, chevaux, ovins et caprins élevés avec passion sur 120 hectares de prairies préservées.
          </p>

          {/* CTAs */}
          <div className="animate-rise-3 mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#elevage" className="group inline-flex items-center justify-center gap-3 rounded-full bg-ranch-500 px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-forest-950 transition hover:bg-ranch-400">
              Découvrir nos animaux <MoveRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:border-white/60 hover:bg-white/10">
              <CalendarDays size={17} /> Visiter le ranch
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="animate-rise-3 mt-16 grid grid-cols-2 gap-5 border-t border-white/15 pt-8 sm:grid-cols-4 lg:mt-20">
          {STATS.map(({ value, label, icon: Icon }) => (
            <div key={label} className="group">
              <Icon size={18} strokeWidth={1.5} className="mb-2 text-ranch-400" />
              <p className="font-display text-3xl font-bold text-ranch-300">{value}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/55">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#ranch" className="absolute bottom-8 right-8 hidden flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/50 transition hover:text-white/80 lg:flex">
        <span>Faites défiler</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ABOUT / RANCH STORY
───────────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="ranch" className="bg-[#f5f0e6] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
        {/* Images collage */}
        <div className="relative">
          <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
            <img src={IMAGES.herder} alt="Éleveur africain avec son troupeau" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 z-20 w-48 overflow-hidden rounded-xl border-4 border-[#f5f0e6] shadow-xl sm:-right-8 sm:w-56">
            <img src={IMAGES.cowPortrait} alt="Portrait de bovin" className="aspect-[4/3] w-full object-cover" />
          </div>
          {/* Badge */}
          <div className="absolute -left-3 top-8 z-20 flex flex-col items-center justify-center rounded-2xl bg-ranch-500 px-4 py-5 text-center text-forest-950 shadow-lg sm:-left-6">
            <span className="font-display text-3xl font-bold">100%</span>
            <span className="mt-0.5 text-[9px] font-bold uppercase leading-tight tracking-wider">Sénégal<br />Local</span>
          </div>
          {/* Corner accent */}
          <div className="absolute -left-5 -top-5 h-24 w-24 border-l-2 border-t-2 border-ranch-400" />
          <div className="absolute -bottom-5 -right-5 h-24 w-24 border-b-2 border-r-2 border-ranch-400 hidden sm:block" />
        </div>

        {/* Text */}
        <div>
          <p className="eyebrow">L'esprit Eldasy</p>
          <h2 className="section-title mt-4">
            Élever avec soin.<br />
            <em>Transmettre avec fierté.</em>
          </h2>
          <p className="mt-7 text-lg leading-[1.8] text-forest-700">
            Eldasy est né d'une conviction profonde : la qualité commence par le respect. Respect de la terre, des animaux et des hommes qui font vivre le ranch chaque jour.
          </p>
          <p className="mt-5 leading-[1.8] text-forest-600">
            Situé au Sénégal, berceau d'une tradition pastorale millénaire, notre ranch moderne allie les savoirs ancestraux aux exigences contemporaines : hygiène, traçabilité, bien-être animal et durabilité.
          </p>
          <p className="mt-5 leading-[1.8] text-forest-600">
            Bovins N'Dama et Gobra, moutons Ladoum, chèvres Peul, chevaux de prestige… chaque animal est une fierté. Nos prairies sont vivantes, nos troupeaux sont sains, notre avenir est porteur.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {['Élevage sain', 'Races locales', 'Traçabilité', 'Agrotourisme', 'Partenariat'].map((tag) => (
              <span key={tag} className="rounded-full border border-ranch-400/40 bg-ranch-100/60 px-4 py-1.5 text-xs font-semibold text-ranch-700">
                {tag}
              </span>
            ))}
          </div>

          <a href="#elevage" className="mt-9 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-ranch-600 transition hover:gap-4">
            Voir nos filières <ChevronRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ANIMALS TABS
───────────────────────────────────────────── */
function AnimalsSection() {
  const [active, setActive] = useState(0);
  const animal = ANIMALS[active];

  return (
    <section id="elevage" className="bg-forest-900 px-6 py-24 text-white lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-ranch-400">Nos filières</p>
            <h2 className="section-title mt-4 text-white">
              Quatre filières,<br /><em>une excellence.</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/60">
            Du bovin au cheval, chaque espèce est élevée avec la même exigence et la même passion.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="mt-12 flex flex-wrap gap-2">
          {ANIMALS.map((a, i) => (
            <button
              key={a.id}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] transition ${
                active === i
                  ? 'bg-ranch-500 text-forest-950'
                  : 'border border-white/15 text-white/65 hover:border-white/35 hover:text-white/90'
              }`}
            >
              {a.title}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div key={animal.id} className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={animal.img}
              alt={animal.title}
              className="aspect-[16/9] w-full object-cover transition duration-700"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${animal.color} opacity-50`} />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-display text-4xl font-bold text-white">{animal.title}</h3>
              <p className="text-sm text-white/70">{animal.subtitle}</p>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl bg-white/5 p-6">
              <p className="text-base leading-7 text-white/85">{animal.desc}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-ranch-400">En détail</p>
              <p className="text-sm leading-7 text-white/70">{animal.details}</p>
            </div>
            <div className="rounded-2xl bg-ranch-500/10 p-6">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-ranch-400">Valorisations</p>
              <div className="grid grid-cols-2 gap-2">
                {animal.uses.map((u) => (
                  <div key={u} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-ranch-400" />
                    {u}
                  </div>
                ))}
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ranch-500/50 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-ranch-400 transition hover:bg-ranch-500/10"
            >
              Renseignements sur cette filière <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   OPPORTUNITIES (from the detailed context)
───────────────────────────────────────────── */
function OpportunitiesSection() {
  return (
    <section className="bg-[#f5f0e6] px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Pourquoi Eldasy ?</p>
            <h2 className="section-title mt-4">
              Le Sénégal,<br /><em>une terre d'avenir.</em>
            </h2>
            <p className="mt-7 text-lg leading-[1.8] text-forest-700">
              Au Sénégal, la demande en viande et produits animaux est en forte croissance. La population augmente, la consommation évolue et beaucoup de produits sont encore importés. Ranch Eldasy s'inscrit dans cette opportunité nationale.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: TrendingUp, t: 'Demande forte & croissante',  d: 'La population sénégalaise est en pleine croissance. La viande locale de qualité reste insuffisante face à la demande.' },
                { icon: Trees,      t: 'Terres & pâturages disponibles', d: 'Ferlo, Casamance, Louga, Thiès : le Sénégal dispose de vastes zones propices à un élevage organisé.' },
                { icon: Award,      t: 'Soutien de l\'État',           d: 'Le gouvernement sénégalais accompagne les projets d\'élevage via des programmes d\'autosuffisance alimentaire.' },
                { icon: Milk,       t: 'Diversification possible',     d: 'Viande, lait, fromage, cuir, engrais organique, agrotourisme : la diversité des revenus sécurise le modèle.' },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-4 rounded-xl border border-ranch-200/60 bg-white/60 p-5">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ranch-100 text-ranch-600">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-forest-900">{t}</p>
                    <p className="mt-1 text-sm leading-6 text-forest-600">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: investment snapshot */}
          <div className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-2xl">
              <img src={IMAGES.aerial} alt="Vue aérienne pâturages Ranch Eldasy" className="aspect-[16/9] w-full object-cover" />
            </div>
            <div className="rounded-2xl bg-forest-800 p-7 text-white">
              <p className="eyebrow text-ranch-400">Modèle économique</p>
              <p className="mt-3 font-display text-2xl font-semibold">Un ranch qui crée de la valeur</p>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {[
                  { v: '120 ha', l: 'Superficie du ranch' },
                  { v: '4 filières', l: 'Bovins · Ovins · Caprins · Chevaux' },
                  { v: 'Solaire', l: 'Énergie renouvelable' },
                  { v: 'Local', l: 'Emplois & partenariats' },
                ].map(({ v, l }) => (
                  <div key={l} className="rounded-xl bg-white/5 p-4">
                    <p className="font-display text-xl font-bold text-ranch-400">{v}</p>
                    <p className="mt-1 text-[11px] text-white/55">{l}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-ranch-400 hover:text-ranch-300">
                Partenariat & investissement <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   COMMITMENTS GRID
───────────────────────────────────────────── */
function CommitmentsSection() {
  return (
    <section id="engagement" className="bg-forest-950 px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow text-ranch-400">Notre façon de faire</p>
            <h2 className="section-title mt-4 text-white">
              Le vivant au centre<br /><em>de chaque décision.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/55">
            Six piliers qui guident toutes nos décisions, au quotidien sur nos 120 hectares de prairies sénégalaises.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {COMMITMENTS.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="group bg-forest-900 p-8 transition hover:bg-forest-800 lg:p-9">
              <div className="mb-12 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ranch-500/15 text-ranch-400">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <span className="font-display text-5xl font-bold text-white/8">0{i + 1}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{text}</p>
              <div className="mt-7 h-0.5 w-8 bg-ranch-500 transition-all duration-500 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   GALLERY
───────────────────────────────────────────── */
function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'right' ? 340 : -340, behavior: 'smooth' });
  };

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <section id="galerie" className="bg-[#f5f0e6] py-24 lg:py-28">
      <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between px-6 lg:px-10">
        <div>
          <p className="eyebrow">Galerie</p>
          <h2 className="section-title mt-4">
            La vie du ranch<br /><em>en images.</em>
          </h2>
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <button onClick={() => scroll('left')} className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-300 text-forest-700 transition hover:bg-forest-100">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-300 text-forest-700 transition hover:bg-forest-100">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide lg:px-10">
        {GALLERY.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="group relative h-60 w-72 shrink-0 overflow-hidden rounded-2xl lg:h-72 lg:w-96"
          >
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />
            <div className="absolute inset-0 flex items-end p-4 opacity-0 transition group-hover:opacity-100">
              <p className="rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white">{img.alt}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={() => setLightbox(null)}>
          <button className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" onClick={() => setLightbox(null)}>
            <X size={22} />
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" onClick={(e) => { e.stopPropagation(); setLightbox((l) => ((l! - 1 + GALLERY.length) % GALLERY.length)); }}>
            <ChevronLeft size={22} />
          </button>
          <img
            src={GALLERY[lightbox].src}
            alt={GALLERY[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l! + 1) % GALLERY.length); }}>
            <ChevronRight size={22} />
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/60">{GALLERY[lightbox].alt}</p>
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */
function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-forest-900 px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <p className="eyebrow text-ranch-400">Questions fréquentes</p>
          <h2 className="section-title mt-4 text-white">Vous avez des questions ?<br /><em>Nous avons les réponses.</em></h2>
        </div>
        <div className="flex flex-col gap-2">
          {FAQ.map(({ q, a }, i) => (
            <div key={i} className={`overflow-hidden rounded-2xl transition-colors ${openIdx === i ? 'bg-white/8' : 'bg-white/4 hover:bg-white/6'}`}>
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="font-semibold text-white">{q}</span>
                <span className={`shrink-0 rounded-full border border-white/15 p-1.5 text-ranch-400 transition-transform ${openIdx === i ? 'rotate-180' : ''}`}>
                  <ChevronDown size={16} />
                </span>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-6 text-sm leading-7 text-white/65">{a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CTA BANNER
───────────────────────────────────────────── */
function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-ranch-500 px-6 py-20 lg:px-10 lg:py-24">
      <img
        src={IMAGES.horses2}
        alt="Chevaux en liberté"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ranch-600/90 to-ranch-500/60" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-forest-950/70">Une invitation ouverte</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-forest-950 lg:text-5xl">
            Venez vivre l'expérience<br />Ranch Eldasy.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-7 text-forest-950/75">
            Une matinée dans nos prairies, une rencontre avec nos troupeaux et nos équipes, des souvenirs pour la vie.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a href="#contact" className="group inline-flex items-center justify-center gap-3 rounded-full bg-forest-950 px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-forest-800">
            Planifier une visite <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a href="#elevage" className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-forest-950/30 px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-forest-950 transition hover:bg-forest-950/10">
            Nos filières d'élevage
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────── */
function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <section id="contact" className="bg-[#f5f0e6] px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left */}
          <div>
            <p className="eyebrow">Parlons ensemble</p>
            <h2 className="section-title mt-4">
              Le ranch est<br /><em>à votre écoute.</em>
            </h2>
            <p className="mt-6 leading-[1.8] text-forest-600">
              Que vous souhaitiez visiter, acheter du bétail, explorer un partenariat ou en savoir plus sur notre élevage, notre équipe vous répond avec plaisir.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: MapPin,       label: 'Localisation', value: 'Sénégal – Afrique de l\'Ouest' },
                { icon: CalendarDays, label: 'Visites',      value: 'Lundi – Samedi · Sur rendez-vous' },
                { icon: Star,         label: 'Services',     value: 'Élevage · Vente · Agrotourisme · Partenariat' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ranch-100 text-ranch-600">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest-400">{label}</p>
                    <p className="mt-0.5 text-sm font-medium text-forest-800">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Ranch photo */}
            <div className="mt-10 overflow-hidden rounded-2xl">
              <img src={IMAGES.horsesRun} alt="Chevaux au galop, Ranch Eldasy" className="aspect-[16/9] w-full object-cover" />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-3xl bg-white p-7 shadow-[0_16px_60px_rgba(32,53,42,0.09)] lg:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field">Prénom et nom<input type="text" required /></label>
              <label className="field">Email<input type="email" placeholder="votre@email.com" required /></label>
            </div>
            <label className="field">Téléphone (optionnel)<input type="tel" placeholder="+221 7X XXX XX XX" /></label>
            <label className="field">
              Objet de votre demande
              <select defaultValue="">
                <option value="" disabled>Choisissez…</option>
                <option>Visite du ranch</option>
                <option>Achat de bovins</option>
                <option>Achat d'ovins / caprins</option>
                <option>Achat ou location de chevaux</option>
                <option>Partenariat & investissement</option>
                <option>Agrotourisme</option>
                <option>Autre question</option>
              </select>
            </label>
            <label className="field">
              Votre message
              <textarea placeholder="Décrivez votre projet ou votre question…" rows={5} required />
            </label>

            {sent ? (
              <div className="rounded-xl bg-forest-100 p-4 text-center text-sm font-semibold text-forest-700">
                Merci ! Votre message a bien été envoyé. Nous vous répondrons très bientôt.
              </div>
            ) : (
              <button
                type="submit"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-ranch-500 px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-forest-950 transition hover:bg-ranch-400"
              >
                Envoyer ma demande <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-forest-950 px-6 py-12 text-white/60 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/8 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/assets/ranch-eldasy.png" alt="Ranch Eldasy" className="h-12 w-12 object-contain" />
              <div>
                <p className="font-display font-bold uppercase tracking-[0.1em] text-white">Ranch Eldasy</p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ranch-500">Du ranch à votre admiration</p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-6">
              Élevage d'exception au cœur du Sénégal. Bovins, chevaux, ovins et caprins élevés avec passion et exigence.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Navigation</p>
            <ul className="space-y-2.5 text-xs">
              {['Le ranch', 'Nos animaux', 'Notre engagement', 'Galerie', 'Contact'].map((l) => (
                <li key={l}><a href="#" className="transition hover:text-ranch-400">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Filières */}
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Nos filières</p>
            <ul className="space-y-2.5 text-xs">
              {['Bovins (N\'Dama, Gobra)', 'Ovins (Ladoum, Djallonké)', 'Caprins (Peul, Sahel)', 'Chevaux', 'Agrotourisme'].map((l) => (
                <li key={l}><a href="#elevage" className="transition hover:text-ranch-400">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Nous trouver</p>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2"><MapPin size={13} className="text-ranch-500" /> Sénégal</li>
              <li className="flex items-center gap-2"><CalendarDays size={13} className="text-ranch-500" /> Visites Lun–Sam, sur RDV</li>
            </ul>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 rounded-full border border-ranch-500/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-ranch-400 transition hover:bg-ranch-500/10">
              Nous contacter <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px]">© {new Date().getFullYear()} Ranch Eldasy. Tous droits réservés.</p>
          <p className="text-[11px]">Élevage · Terroir · Transmission · Sénégal</p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   APP
───────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <AnimalsSection />
        <OpportunitiesSection />
        <CommitmentsSection />
        <GallerySection />
        <FAQSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
