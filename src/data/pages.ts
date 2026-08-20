import type { Lang } from './i18n';

export type ServicePageKey = 'transport' | 'agency' | 'transit';

const pages = {
  fr: {
    labels: { services: 'Nos services', discover: 'Découvrir ce service', consultation: 'Demander une consultation', contact: 'Parler à notre équipe' },
    servicePages: {
      transport: {
        title: 'Transport Maritime & Affrètement',
        description: 'Organisation du transport maritime et solutions d’affrètement adaptées à vos opérations.',
        intro: 'COST coordonne le mouvement de vos cargaisons et recherche le navire adapté à vos contraintes opérationnelles, réglementaires et commerciales.',
        blocks: [
          { title: 'Transport maritime', text: 'Nous organisons l’acheminement maritime de cargaisons entre les ports camerounais, le golfe de Guinée et les marchés internationaux.', bullets: ['Planification des opérations maritimes', 'Coordination navire, terminal et cargaison', 'Suivi opérationnel et reporting'] },
          { title: 'Affrètement de navires', text: 'Nous accompagnons les clients dans la recherche et la négociation d’une capacité maritime adaptée à leur besoin.', bullets: ['Affrètement au voyage ou à temps', 'Analyse des contraintes de cargaison', 'Coordination contractuelle et opérationnelle'] },
        ],
      },
      agency: {
        title: 'Agence Portuaire & Manutention',
        description: 'Consignation, représentation maritime et manutention portuaire au Cameroun.',
        intro: 'Un interlocuteur local unique pour représenter le navire, coordonner son escale et superviser les opérations portuaires.',
        blocks: [
          { title: 'Consignation de navires', text: 'Représentation locale du navire et coordination de l’ensemble des formalités liées à son escale.', bullets: ['Formalités d’entrée et de sortie', 'Coordination des services au navire', 'Rapports réguliers à l’armateur'] },
          { title: 'Agent maritime', text: 'Interface opérationnelle entre l’armateur, le navire, le terminal et les autorités portuaires.', bullets: ['Protection des intérêts du mandant', 'Suivi des intervenants portuaires', 'Assistance à l’équipage'] },
          { title: 'Aconier de Type B', text: 'Organisation et supervision des opérations de chargement, de déchargement et de manutention.', bullets: ['Planification des moyens de manutention', 'Supervision HSE des opérations', 'Suivi documentaire des marchandises'] },
        ],
      },
      transit: {
        title: 'Transit & Douane',
        description: 'Accompagnement des opérations douanières et logistiques depuis les ports camerounais.',
        intro: 'COST facilite le passage portuaire et douanier des marchandises avec une attention particulière à la conformité et aux délais.',
        blocks: [
          { title: 'Formalités douanières', text: 'Préparation et suivi des dossiers d’importation et d’exportation auprès des administrations compétentes.', bullets: ['Constitution des dossiers', 'Suivi des déclarations', 'Coordination des inspections'] },
          { title: 'Transit vers la zone CEMAC', text: 'Coordination de l’acheminement des marchandises depuis les ports vers leur destination dans l’hinterland.', bullets: ['Planification du transit', 'Suivi documentaire', 'Traçabilité jusqu’à destination'] },
        ],
      },
    },
    about: {
      title: 'À propos de COST', description: 'Une expertise maritime et portuaire ancrée au Cameroun.',
      heading: 'Un partenaire local pour vos opérations maritimes',
      paragraphs: ['COST  Cameroon Oil Shipping & Trading  accompagne les armateurs, affréteurs et opérateurs du secteur énergétique dans leurs opérations maritimes et portuaires en Afrique centrale.', 'Notre rôle est de simplifier les escales, coordonner les intervenants et assurer un suivi transparent de chaque opération, depuis la préparation jusqu’à la clôture.'],
      values: ['Fiabilité', 'Expertise maritime', 'Réactivité', 'Conformité'],
    },
    zones: { title: 'Nos zones d’intervention', description: 'Douala, Kribi, Limbé et les corridors de la zone CEMAC.', heading: 'Une présence au plus près des opérations', ports: [{ city: 'Douala', text: 'Siège à Bonapriso et interventions au principal port polyvalent du Cameroun.' }, { city: 'Kribi', text: 'Accompagnement des escales et projets liés au port en eau profonde.' }, { city: 'Limbé', text: 'Interventions adaptées aux activités énergétiques et maritimes de la façade ouest.' }, { city: 'Zone CEMAC', text: 'Coordination des flux de transit vers les pays de l’hinterland.' }] },
    gallery: { title: 'Galerie', description: 'Les opérations et équipes COST en images.', heading: 'Nos opérations sur le terrain', notice: 'Découvrez les opérations, infrastructures et équipes qui accompagnent les flux maritimes et logistiques.', items: ['Opérations maritimes', 'Escale portuaire', 'Manutention', 'Installations pétrolières', 'Terminal à conteneurs', 'Opérations portuaires'], socialLinkTitle: 'Nos actions sociales', socialLinkText: 'COST agit aux côtés des communautés. Découvrez en images la réalisation d’un point d’eau communautaire.', socialLinkLabel: 'Voir la galerie' },
    socialGallery: { title: 'Actions sociales', description: 'Les actions sociales menées par COST aux côtés des communautés locales.', eyebrow: 'Engagement communautaire', heading: 'Un point d’eau pour la communauté', notice: 'De l’installation de l’équipement de forage à l’aménagement du point d’eau, découvrez les étapes de cette action menée sur le terrain.', backLabel: 'Retour à la galerie', items: ['Construction de l’abri du point d’eau', 'Installation du bassin et de la pompe', 'Travaux de forage sur le terrain', 'Aménagement des abords', 'Mise en place de l’équipement de forage', 'Suivi des travaux avec la communauté', 'Équipe au travail sur le chantier'] },
    contact: { 
      title: 'Contact', 
      description: 'Contactez COST pour votre prochaine opération maritime ou portuaire au Cameroun.', 
      heading: 'Parlons de votre prochaine opération', 
      text: 'Expliquez-nous votre besoin. Notre équipe vous orientera vers la solution maritime, portuaire ou douanière adaptée.', 
      phoneLabel: 'Téléphone', 
      addressLabel: 'Adresse', 
      socialLabel: 'Réseaux sociaux',
      socialLinks: [
        { name: 'Facebook', url: 'https://www.facebook.com/share/1CJN8h6WEB/?mibextid=wwXIfr' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/company/camerounoilshippingtrading/about/' } // CORRECTION : LinkedIn au lieu de Linkedln
      ]
    },  },
  en: {
    labels: { services: 'Our services', discover: 'Discover this service', consultation: 'Request a consultation', contact: 'Talk to our team' },
    servicePages: {
      transport: {
        title: 'Maritime Transport & Chartering', description: 'Maritime transport coordination and chartering solutions tailored to your operations.',
        intro: 'COST coordinates cargo movements and sources vessels suited to your operational, regulatory and commercial requirements.',
        blocks: [
          { title: 'Maritime transport', text: 'We organise cargo transportation between Cameroonian ports, the Gulf of Guinea and international markets.', bullets: ['Maritime operations planning', 'Vessel, terminal and cargo coordination', 'Operational monitoring and reporting'] },
          { title: 'Vessel chartering', text: 'We support clients in sourcing and negotiating maritime capacity suited to their needs.', bullets: ['Voyage or time chartering', 'Cargo requirements analysis', 'Contractual and operational coordination'] },
        ],
      },
      agency: {
        title: 'Port Agency & Cargo Handling', description: 'Vessel agency, maritime representation and cargo handling in Cameroon.',
        intro: 'A single local point of contact to represent the vessel, coordinate its port call and supervise port operations.',
        blocks: [
          { title: 'Vessel agency', text: 'Local vessel representation and coordination of all formalities related to the port call.', bullets: ['Arrival and departure formalities', 'Ship services coordination', 'Regular reporting to owners'] },
          { title: 'Maritime agent', text: 'Operational interface between owner, vessel, terminal and port authorities.', bullets: ['Principal’s interests protected', 'Port stakeholder coordination', 'Crew assistance'] },
          { title: 'Type B stevedoring', text: 'Organisation and supervision of cargo loading, unloading and handling operations.', bullets: ['Handling resources planning', 'HSE operations supervision', 'Cargo documentation monitoring'] },
        ],
      },
      transit: {
        title: 'Transit & Customs', description: 'Customs and logistics support from Cameroonian ports.',
        intro: 'COST facilitates port and customs clearance with close attention to compliance and turnaround times.',
        blocks: [
          { title: 'Customs formalities', text: 'Preparation and monitoring of import and export files with the relevant authorities.', bullets: ['File preparation', 'Declaration monitoring', 'Inspection coordination'] },
          { title: 'CEMAC transit', text: 'Coordination of cargo transport from ports to destinations across the hinterland.', bullets: ['Transit planning', 'Document monitoring', 'Tracking through final destination'] },
        ],
      },
    },
    about: { title: 'About COST', description: 'Maritime and port expertise rooted in Cameroon.', heading: 'A local partner for maritime operations', paragraphs: ['COST — Cameroon Oil Shipping & Trading — supports shipowners, charterers and energy-sector operators throughout their maritime and port operations in Central Africa.', 'Our role is to simplify port calls, coordinate stakeholders and provide transparent operational reporting from preparation through completion.'], values: ['Reliability', 'Maritime expertise', 'Responsiveness', 'Compliance'] },
    zones: { title: 'Our locations', description: 'Douala, Kribi, Limbe and CEMAC corridors.', heading: 'Close to every operation', ports: [{ city: 'Douala', text: 'Bonapriso headquarters and operations at Cameroon’s main multipurpose port.' }, { city: 'Kribi', text: 'Port call and project support at the deep-water port.' }, { city: 'Limbe', text: 'Services tailored to energy and maritime operations on the western coast.' }] },
    gallery: { title: 'Gallery', description: 'COST operations and teams in pictures.', heading: 'Our field operations', notice: 'Explore the operations, infrastructure and teams supporting maritime and logistics flows.', items: ['Maritime operations', 'Port calls', 'Cargo handling', 'Oil terminals', 'Container terminal', 'Port operations'], socialLinkTitle: 'Our social initiatives', socialLinkText: 'COST works alongside local communities. See the construction of a community water point in pictures.', socialLinkLabel: 'View the gallery' },
    socialGallery: { title: 'Social initiatives', description: 'COST social initiatives carried out alongside local communities.', eyebrow: 'Community commitment', heading: 'A water point for the community', notice: 'From installing the drilling equipment to completing the water point, explore each stage of this field initiative.', backLabel: 'Back to the gallery', items: ['Building the water point shelter', 'Installing the basin and pump', 'Drilling work on site', 'Preparing the surrounding area', 'Setting up the drilling equipment', 'Monitoring the work with the community', 'Team at work on the site'] },
     contact: { 
      title: 'Contact', 
      description: 'Contact COST about your next maritime or port operation in Cameroon.', 
      heading: 'Let’s discuss your next operation', 
      text: 'Tell us what you need. Our team will guide you towards the right maritime, port or customs solution.', 
      phoneLabel: 'Phone', 
      addressLabel: 'Address', 
      socialLabel: 'Social media',
      socialLinks: [
        { name: 'Facebook', url: 'https://www.facebook.com/share/1CJN8h6WEB/?mibextid=wwXIfr' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/company/camerounoilshippingtrading/about/' }
      ]
    },
  },
} as const;

export function getPageContent(lang: Lang) { return pages[lang]; }
