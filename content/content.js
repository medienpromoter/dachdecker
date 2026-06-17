/**
 * content.js – Zentraler Content-Store für [FIRMENNAME] Dachdecker
 *
 * Alle Texte, Bilder und Metadaten für Leistungsseiten an einem Ort.
 * Leistungsseiten im /leistungen/-Ordner beziehen ihren Inhalt von hier.
 */

const FIRMA = {
  name:        '[FIRMENNAME]',
  nameKurz:    '[FIRMENNAME]',
  rechtsform:  '[FIRMENNAME GmbH & Co. KG]',
  slogan:      'Ihr Dach in [Stadt] – fachgerecht, termingerecht, sauber.',
  gegründet:   '[GRÜNDUNGSJAHR]',
  meister:     '[Meistername]',
  stadt:       '[Stadt]',
  region:      '[Region]',
  telefon:     '0[XXX] [XXXXXXX]',
  email:       'info@[domain].de',
  strasse:     '[Straße XX]',
  plz:         '[XXXXX]',
  maps:        'https://maps.google.com/?q=[FIRMENADRESSE]',
  googleBew:   '4.9',
  googleAnz:   '127',
  daecherGesamt: '500',
  jahreDachdeckerRoofing: '[XX]',
};

const LEISTUNGEN = [
  {
    slug:       'dacheindeckung',
    titel:      'Dacheindeckung',
    kurztext:   'Neueindeckung für Steildächer, Flachdächer und Metalldächer – von der Planung bis zur schlüsselfertigen Übergabe.',
    heroBild:   '../images/dacheindeckung/hero/dacheindeckung-hero.jpg',
    icon:       '🏠',
    meta: {
      title:       'Dacheindeckung in [Stadt] | [FIRMENNAME]',
      description: 'Professionelle Dacheindeckung in [Stadt]: Ziegel, Schiefer, Flachdach, Metall. Kostenloser Beratungstermin – jetzt anfragen.',
    },
    intro: `Eine neue Dacheindeckung schützt Ihr Haus für Jahrzehnte vor Wind, Regen und Kälte.
            [FIRMENNAME] übernimmt alles – Gerüstbau, Abdeckung des Altbelags, neue Eindeckung inklusive
            Unterspannbahn und Lattung sowie die saubere Entsorgung des Altmaterials.`,
    vorteile: [
      'Schutz vor Nässe, Wind und Frostschäden für 30–60+ Jahre',
      'Höherer Wohnkomfort durch optimierte Dachdämmung',
      'Wertsteigerung Ihrer Immobilie',
      'Einhalten aktueller Energieeinsparanforderungen (GEG)',
    ],
    ablauf: [
      { titel: 'Beratung & Aufmaß', text: 'Wir besichtigen Ihr Dach kostenlos, nehmen Maß und besprechen Materialwahl und Zeitplan.' },
      { titel: 'Gerüstbau & Vorbereitung', text: 'Gerüst wird gestellt, Dachfläche gesichert, altes Material abgetragen und fachgerecht entsorgt.' },
      { titel: 'Neue Eindeckung', text: 'Unterspannbahn, Konterlattung, Traglattung und Eindeckung – Schicht für Schicht nach Herstellervorgabe.' },
      { titel: 'Abschlussarbeiten & Übergabe', text: 'Dachrinnen, First- und Gratanschlüsse, Reinigung der Baustelle und gemeinsame Abnahme.' },
    ],
    unterleistungen: [
      {
        id:    'steildach',
        titel: 'Steildach-Eindeckung',
        text:  `Für Steildächer ab ca. 22° Dachneigung bieten wir Tonziegel, Betondachsteine, Schiefer und
                Faserzementplatten an. Tonziegel sind die klassische Wahl mit einer Lebensdauer von
                30–60+ Jahren und einer großen Farbvielfalt. Betondachsteine sind eine günstigere Alternative
                mit ähnlicher Haltbarkeit. Schiefer eignet sich besonders für denkmalgeschützte Gebäude –
                sehr langlebig (100+ Jahre) und hochwertig. Faserzementplatten sind leicht und preisgünstig
                für einfachere Dachformen.`,
        bilder: [
          '../images/dacheindeckung/steildach-eindeckung/steildach-eindeckung1.jpg',
          '../images/dacheindeckung/steildach-eindeckung/betondachsteine.jpg',
          '../images/dacheindeckung/steildach-eindeckung/schieferdach.jpg',
        ],
      },
      {
        id:    'flachdach',
        titel: 'Flachdach-Eindeckung',
        text:  `Flachdächer und flach geneigte Dächer (bis ca. 10°) werden mit Bitumenbahnen,
                Kunststoffbahnen (PVC, EPDM, TPO) oder als Gründach ausgeführt. Bitumenbahnen sind
                bewährt und kostengünstig (Lebensdauer 20–30 Jahre). Kunststoffbahnen punkten mit
                hoher UV-Beständigkeit und geringerem Gewicht. Eine Dachbegrünung verbessert die
                Dämmung, hält Regenwasser zurück und schafft ökologischen Mehrwert.`,
        bilder: [
          '../images/dacheindeckung/flachdach-eindeckung/flachdach-eindeckung1.jpg',
        ],
      },
      {
        id:    'metalldach',
        titel: 'Metalldach',
        text:  `Stehfalzdeckungen aus Titanzink, Kupfer oder Aluminium sind außergewöhnlich langlebig
                und für anspruchsvolle Architektur geeignet. Trapezblech ist die wirtschaftliche Wahl
                für Gewerbe- und Industriegebäude. Wir beraten Sie, welches Material zu Ihrer
                Dachform und Ihrem Budget passt.`,
        bilder: [
          '../images/dacheindeckung/metalldach/metalldach1.jpg',
        ],
      },
      {
        id:    'reetdach',
        titel: 'Reetdach',
        text:  `Reetdächer sind eine traditionelle Eindeckungsart mit besonderem Charakter.
                Wichtig: Für Reetdächer gelten spezifische Brandschutzanforderungen, die wir gemeinsam
                mit Ihnen und den zuständigen Behörden abstimmen. Wir haben Erfahrung mit historischen
                Reetdächern in der Region [Region].`,
        bilder: [
          '../images/dacheindeckung/reetdach/reetdach1.jpg',
        ],
      },
    ],
    cta: {
      text: 'Jetzt Dacheindeckung anfragen',
      sub:  'Kostenloses Angebot – Aufmaß vor Ort in [Stadt] und Umgebung',
    },
  },

  {
    slug:    'dachsanierung-reparatur',
    titel:   'Dachsanierung & Reparatur',
    kurztext: 'Von der Notabdeckung bei Sturmschaden bis zur Komplettsanierung – schnell, zuverlässig und versicherungskonform dokumentiert.',
    heroBild: '../images/dachsanierung_und_reparatur/hero/dachsanierung-hero.jpg',
    icon:    '🔧',
    meta: {
      title:       'Dachsanierung & Reparatur in [Stadt] | [FIRMENNAME]',
      description: 'Sturmschaden, undichtes Dach oder Komplettsanierung? [FIRMENNAME] aus [Stadt] repariert schnell und dokumentiert für die Versicherung.',
    },
    intro: `Viele Dachschäden sind von innen oder außen nicht sofort sichtbar. Ein Dach-Check
            vor der Herbst-Wintersaison hilft, kleine Probleme zu erkennen, bevor sie teuer werden.
            Bei Sturm- und Hagelschäden sind wir kurzfristig vor Ort – mit Notabdeckung, Begutachtung
            und vollständiger Dokumentation für Ihre Wohngebäudeversicherung.`,
    vorteile: [
      'Schnelle Reaktionszeit bei Sturmschäden – Notabdeckung noch am gleichen Tag',
      'Fotodokumentation und Kostenvoranschlag für die Versicherung',
      'Kompetente Beratung: Reparatur oder Komplettsanierung?',
      'Alle Arbeiten nach Herstellervorgaben und VOB/B',
    ],
    ablauf: [
      { titel: 'Notabdeckung (bei Akutschaden)', text: 'Sofortige Sicherung der Schadensstelle mit Plane oder Folie, um weiteren Wassereintritt zu verhindern.' },
      { titel: 'Begutachtung & Dokumentation', text: 'Vollständige Schadensaufnahme mit Fotodokumentation – verwertbar für die Schadensmeldung an Ihre Versicherung.' },
      { titel: 'Kostenvoranschlag', text: 'Transparentes Angebot: Was ist zu reparieren, was kostet es, wie lange dauert es?' },
      { titel: 'Fachgerechte Reparatur', text: 'Austausch defekter Ziegel, Erneuerung von Anschlüssen, Verblechungen und Rinnen – sauber und termingerecht.' },
    ],
    unterleistungen: [
      {
        id:    'reparatur-undichtigkeit',
        titel: 'Reparatur bei Undichtigkeit',
        text:  `Undichte Stellen entstehen häufig an Anschlüssen (Schornstein, Dachgauben,
                Dachflächenfenster), an beschädigten Ziegeln oder durch verrottete Verblechungen.
                Wir lokalisieren die Leckage und beheben sie dauerhaft – einzelner Ziegelaustausch,
                neue Anschlussbleche oder Erneuerung der gesamten Eindeckung in diesem Bereich.`,
        bilder: ['../images/dachsanierung_und_reparatur/reparatur/reparatur1.jpg'],
      },
      {
        id:    'komplettsanierung',
        titel: 'Komplettsanierung',
        text:  `Wenn die Eindeckung über 30 Jahre alt ist oder mehrere Schadstellen aufweist,
                ist eine Komplettsanierung wirtschaftlich sinnvoller als einzelne Reparaturen.
                Wir tragen den Altbelag ab, prüfen die Dachkonstruktion und decken vollständig
                neu ein – kombiniert mit einer aktuellen Dämmung nach GEG.`,
        bilder: ['../images/dachsanierung_und_reparatur/sanierung/sanierung1.jpg'],
      },
      {
        id:    'sturmschaden',
        titel: 'Sturm- & Hagelschadenreparatur',
        text:  `Sturmschäden am Dach sind in der Regel über die Wohngebäudeversicherung abgedeckt.
                Wir unterstützen Sie bei der Schadensmeldung: vollständige Fotodokumentation,
                detaillierter Kostenvoranschlag und – wenn gewünscht – direkte Kommunikation
                mit Ihrem Versicherer.`,
        bilder: ['../images/dachsanierung_und_reparatur/sturmschaden/sturmschaden1.jpg'],
      },
      {
        id:    'dachrinnen',
        titel: 'Dachrinnen & Fallrohre',
        text:  `Verrostete oder undichte Dachrinnen schädigen langfristig die Fassade und das
                Fundament. Wir tauschen Rinnen und Fallrohre in Zink, Kupfer oder Kunststoff aus
                und installieren optional Laubschutzgitter, die Verstopfungen dauerhaft verhindern.`,
        bilder: ['../images/dachsanierung_und_reparatur/dachrinnen/dachrinnen1.jpg'],
      },
    ],
    cta: {
      text: 'Sturmschaden melden – jetzt anrufen',
      sub:  'Oder Dach-Check anfragen: Wir begutachten Ihr Dach kostenlos.',
    },
  },

  {
    slug:    'dachdaemmung',
    titel:   'Dachdämmung',
    kurztext: 'Weniger Heizkosten, mehr Wohnkomfort: Wir dämmen Ihr Dach mit der richtigen Methode – Zwischensparren, Aufsparren oder Flachdachdämmung.',
    heroBild: '../images/dachdaemmung/hero/dachdaemmung-hero.jpg',
    icon:    '🌡️',
    meta: {
      title:       'Dachdämmung in [Stadt] | [FIRMENNAME]',
      description: 'Profi-Dachdämmung in [Stadt]: Zwischensparren, Aufsparren, Flachdach. KfW-Förderung möglich. Jetzt Angebot anfragen.',
    },
    intro: `Ein ungedämmtes oder schlecht gedämmtes Dach kann 20–30 % des gesamten Wärmeverlusts
            eines Hauses verursachen. Mit einer fachgerecht ausgeführten Dachdämmung senken Sie
            Ihre Heizkosten dauerhaft – und erfüllen die Anforderungen des Gebäudeenergiegesetzes (GEG).
            [FIRMENNAME] berät Sie zur passenden Methode und unterstützt bei der KfW/BAFA-Förderantragstellung.`,
    vorteile: [
      'Spürbar niedrigere Heizkosten durch reduzierten Wärmeverlust',
      'Mehr Wohnkomfort: gleichmäßige Temperaturen, weniger Zugluft',
      'Schutz vor Sommerhitze (Hitzeschutz) durch geeignete Materialien',
      'KfW/BAFA-Förderung (BEG) möglich – bis zu 20 % Zuschuss',
    ],
    ablauf: [
      { titel: 'Beratung & Bestandsaufnahme', text: 'Wir prüfen Ihren Dachstuhl, besprechen Ihre Ziele (Energieeinsparung, Wohnausbau) und empfehlen die passende Dämmmethode.' },
      { titel: 'Angebot & Förderantrag', text: 'Detailliertes Angebot mit Materialspezifikationen; auf Wunsch unterstützen wir beim KfW/BAFA-Antrag.' },
      { titel: 'Umsetzung', text: 'Fachgerechte Montage der Dämmung – wärmebrückenfrei, luftdicht, nach aktuellen Normen (DIN 4108).' },
      { titel: 'Abnahme & Dokumentation', text: 'Gemeinsame Abnahme und Übergabe aller Dokumentationsunterlagen für die Förderung.' },
    ],
    unterleistungen: [
      {
        id:    'zwischensparren',
        titel: 'Zwischensparrendämmung',
        text:  `Die Zwischensparrendämmung ist die häufigste Methode bei Sanierungen von innen:
                Dämmmaterial (Mineralwolle oder Holzfaserdämmung) wird zwischen die Dachsparren
                eingebracht, ohne die Eindeckung anzutasten. Ideal, wenn der Dachstuhl zugänglich
                ist und die Eindeckung noch in gutem Zustand ist.`,
        bilder: ['../images/dachdaemmung/zwischensparren/zwischensparren1.jpg'],
      },
      {
        id:    'aufsparren',
        titel: 'Aufsparrendämmung',
        text:  `Bei einer geplanten Neueindeckung bietet sich die Aufsparrendämmung an:
                Die Dämmplatten (meist PIR/PUR-Hartschaum) werden von außen auf die Sparren gelegt –
                das ergibt eine durchgehende, wärmebrückenfreie Dämmschicht. Der Dachstuhl bleibt
                von innen sichtbar, was besonders beim Ausbau zum Wohnraum optisch attraktiv ist.`,
        bilder: ['../images/dachdaemmung/aufsparren/aufsparren1.jpg'],
      },
      {
        id:    'untersparren',
        titel: 'Untersparrendämmung',
        text:  `Als Ergänzung zu einer bereits vorhandenen Zwischensparrendämmung kann eine
                zusätzliche Dämmschicht unterhalb der Sparren aufgebracht werden.
                Das erhöht den Gesamt-U-Wert und schließt verbleibende Wärmebrücken.`,
        bilder: ['../images/dachdaemmung/untersparren/untersparren1.jpg'],
      },
      {
        id:    'flachdachdaemmung',
        titel: 'Flachdachdämmung',
        text:  `Beim Warmdach wird die Dämmung direkt unter der Abdichtungsbahn eingebaut –
                das ist die Standardlösung. Beim Umkehrdach liegt die Dämmung oberhalb der
                Abdichtung und schützt diese vor Temperaturschwankungen.
                Wir beraten Sie, welcher Aufbau für Ihr Flachdach sinnvoll ist.`,
        bilder: ['../images/dachdaemmung/flachdach/flachdachdaemmung1.jpg'],
      },
    ],
    cta: {
      text: 'Jetzt Dachdämmung anfragen',
      sub:  'KfW/BAFA-Förderung möglich – wir helfen bei der Antragstellung.',
    },
  },

  {
    slug:    'dachausbau',
    titel:   'Dachausbau',
    kurztext: 'Wohnraum schaffen, wo früher Lagerfläche war: Gauben, Dachflächenfenster und Dachterrassen für mehr Platz und Licht.',
    heroBild: '../images/dachausbau/hero/dachausbau-hero.jpg',
    icon:    '🏗️',
    meta: {
      title:       'Dachausbau in [Stadt] | [FIRMENNAME]',
      description: 'Dachausbau in [Stadt]: Wohnraum schaffen, Gauben einbauen, Dachterrasse planen. Kostenlose Erstberatung – jetzt anfragen.',
    },
    intro: `Der Ausbau des Dachgeschosses ist eine der effektivsten Möglichkeiten, Wohnfläche
            zu gewinnen – ohne teuren Anbau. [FIRMENNAME] übernimmt den kompletten Dachausbau:
            von der Statikprüfung über Dämmung und Fenstereinbau bis zu Gauben und Dachterrassen.
            Baugenehmigungen klären wir gemeinsam mit Ihnen.`,
    vorteile: [
      'Deutlich mehr Wohnfläche ohne Neubaukosten',
      'Ideale Kombination mit Dachdämmung (ohnehin fälliger Eingriff)',
      'Wertsteigerung der Immobilie durch zusätzliche Wohnfläche',
      'Mehr natürliches Licht durch Dachflächenfenster und Gauben',
    ],
    ablauf: [
      { titel: 'Beratung & Planung', text: 'Wir besichtigen den Dachstuhl, besprechen Ihre Ziele und klären Kniestockhöhe, Dachschrägen und Raumaufteilung.' },
      { titel: 'Baugenehmigung', text: 'Sofern erforderlich (z. B. bei Gauben), unterstützen wir bei den Antragsunterlagen für die Baubehörde.' },
      { titel: 'Umsetzung', text: 'Dämmung, Gaube, Fenstereinbau, Trockenbau – alles aus einer Hand oder koordiniert mit Ihren weiteren Gewerken.' },
      { titel: 'Übergabe', text: 'Abnahme, Reinigung und Übergabe aller Unterlagen (Ausführungspläne, Materialnachweise).' },
    ],
    unterleistungen: [
      {
        id:    'wohnraumausbau',
        titel: 'Ausbau zum Wohnraum',
        text:  `Voraussetzung ist eine ausreichende Kniestockhöhe und eine tragfähige Dachkonstruktion.
                Wir prüfen die Statik – falls erforderlich, ziehen wir einen Statiker hinzu.
                Anschließend dämmen wir, bauen aus und koordinieren bei Bedarf Heizung,
                Elektro und Innenausbau.`,
        bilder: ['../images/dachausbau/ausbau_von_wohnraum/wohnraumausbau1.jpg'],
      },
      {
        id:    'gauben-fenster',
        titel: 'Dachflächenfenster & Gauben',
        text:  `Dachflächenfenster (z. B. Velux, Fakro) bringen Licht ins Dachgeschoss ohne
                bauliche Veränderung der Dachform. Gauben schaffen zusätzliche Stehhöhe und
                Raumfläche. Giebelgauben, Schleppgauben und Walmgauben – wir beraten zur
                optimalen Lösung für Ihre Dachform. Hinweis: Gauben sind in den meisten
                Gemeinden genehmigungspflichtig.`,
        bilder: ['../images/dachausbau/dachflächenfenster_und_gauben/gauben1.jpg'],
      },
      {
        id:    'dachterrasse',
        titel: 'Dachterrasse',
        text:  `Eine begehbare Dachfläche stellt höchste Anforderungen an die Abdichtung –
                jede undichte Stelle führt zu Wasserschäden im Gebäude. Wir prüfen die
                baulichen Voraussetzungen (Statik, Gefälle, Entwässerung) und führen die
                Abdichtung fachgerecht aus.`,
        bilder: ['../images/dachausbau/dachterrasse/dachterrasse1.jpg'],
      },
    ],
    cta: {
      text: 'Jetzt Dachausbau planen lassen',
      sub:  'Kostenlose Erstberatung – wir kommen zu Ihnen.',
    },
  },

  {
    slug:    'photovoltaik',
    titel:   'Photovoltaik auf dem Dach',
    kurztext: 'Solaranlage auf dem Dach – wir übernehmen Montage und Abdichtung. Dichtes Dach, sicher montiertes System.',
    heroBild: '../images/photovoltaik_auf_dem_bach/hero/pv-hero.jpg',
    icon:    '☀️',
    meta: {
      title:       'Photovoltaik Dachmontage in [Stadt] | [FIRMENNAME]',
      description: 'PV-Montage auf Steil- und Flachdach in [Stadt]: Dachhaken-Systeme, Indach-PV, Abdichtung. Dach prüfen lassen – jetzt anfragen.',
    },
    intro: `Eine Photovoltaikanlage beginnt auf dem Dach – und der Dach ist unser Handwerk.
            [FIRMENNAME] montiert PV-Anlagen fachgerecht auf Steildächern und Flachdächern:
            mit geprüften Dachhaken-Systemen, dichter Einbindung aller Durchdringungen und
            Statikprüfung vor der Montage. Den Elektroanschluss übernimmt Ihr Elektrofachbetrieb.`,
    vorteile: [
      'Statikprüfung vor Montage – Sicherheit für Ihr Gebäude',
      'Jede Dachdurchdringung fachgerecht abgedichtet',
      'Kombination mit Neueindeckung spart Gerüstkosten',
      'Indach-Systeme für hochwertige Optik ohne aufgeständerte Module',
    ],
    ablauf: [
      { titel: 'Dach- und Statikprüfung', text: 'Wir begutachten Dachzustand, Eindeckungsart und Tragfähigkeit – Voraussetzung für jede PV-Montage.' },
      { titel: 'Montagevorbereitung', text: 'Dachhaken oder Klemmsystem werden vorbereitet, alle Anschlusspunkte abgedichtet.' },
      { titel: 'PV-Montage', text: 'Schienensystem und Module werden montiert. Auf Flachdächern: Aufständerung ohne Dachdurchdringung (Auflast).' },
      { titel: 'Übergabe an Elektriker', text: 'Wir übergeben die fertig montierte Anlage an den Elektrofachbetrieb für Verkabelung und Netzanschluss.' },
    ],
    unterleistungen: [
      {
        id:    'pv-steildach',
        titel: 'PV auf Steildach',
        text:  `Auf Steildächern (Ziegel, Schiefer, Faserzement) werden Dachhaken-Montagesysteme
                verwendet. Jeder Dachhaken wird fachgerecht unter die Eindeckung eingebunden und
                gegen eindringendes Wasser abgedichtet. Wir prüfen vorab, ob die Dachkonstruktion
                das Zusatzgewicht der Anlage trägt.`,
        bilder: ['../images/photovoltaik_auf_dem_bach/steildach/pv-steildach1.jpg'],
      },
      {
        id:    'pv-flachdach',
        titel: 'PV auf Flachdach',
        text:  `Auf Flachdächern wird die PV-Anlage aufgeständert – entweder Ost-West oder
                Süd-Ausrichtung. Als Auflastsystem benötigt die Montage keine Durchdringung
                der Dachhaut und schont damit die Abdichtung. Wir klären Statik, Aufbaumaße
                und Entwässerung vorab.`,
        bilder: ['../images/photovoltaik_auf_dem_bach/flachdach/pv-flachdach1.jpg'],
      },
      {
        id:    'pv-indach',
        titel: 'Indach-Systeme',
        text:  `Indach-PV-Module ersetzen die klassische Dacheindeckung direkt – das Ergebnis
                ist ein optisch hochwertiges, bündiges Erscheinungsbild. Ideal in Kombination
                mit einer Neueindeckung, da das Gerüst ohnehin steht und der Mehraufwand gering ist.`,
        bilder: ['../images/photovoltaik_auf_dem_bach/indach/pv-indach1.jpg'],
      },
    ],
    cta: {
      text: 'Dach für Solar prüfen lassen',
      sub:  'Kostenlose Begutachtung – wir sagen Ihnen, ob und wie Ihr Dach für PV geeignet ist.',
    },
  },

  {
    slug:    'klempnerarbeiten',
    titel:   'Klempnerarbeiten',
    kurztext: 'Dachrinnen, Verblechungen und Anschlüsse – Metallarbeiten am Dach, die schützen und dauerhaft dicht halten.',
    heroBild: '../images/klempnerarbeiten_spengelerarbeit/hero/klempner-hero.jpg',
    icon:    '🔩',
    meta: {
      title:       'Klempnerarbeiten in [Stadt] | [FIRMENNAME]',
      description: 'Dachrinnen, Anschlussbleche, Verblechungen in [Stadt]: Material Zink, Kupfer, Aluminium. Langlebig und dicht – jetzt anfragen.',
    },
    intro: `Klempnerarbeiten am Dach sind mehr als Ästhetik – sie schützen die Bausubstanz
            vor Feuchtigkeit. Undichte Rinnen, fehlende Anschlussbleche oder schlecht
            abgedichtete Durchdringungen führen langfristig zu teuren Schäden an Fassade,
            Mauerwerk und Fundament. Wir arbeiten in Zink, Kupfer und Aluminium.`,
    vorteile: [
      'Dichte Anschlüsse – kein Wasser ins Mauerwerk',
      'Materialwahl nach Langlebigkeit und Budget: Zink, Kupfer, Aluminium',
      'Schneefangsysteme zum Schutz von Personen und Gebäuden',
      'Laubschutz verhindert Verstopfungen dauerhaft',
    ],
    ablauf: [
      { titel: 'Begutachtung', text: 'Wir prüfen bestehende Rinnen, Verblechungen und Anschlüsse auf Korrosion, Undichtigkeiten und Gefälle.' },
      { titel: 'Angebot', text: 'Material, Umfang und Zeitplan werden festgelegt.' },
      { titel: 'Ausführung', text: 'Rinnen, Fallrohre, Anschlussbleche und Verblechungen werden fachgerecht montiert oder erneuert.' },
      { titel: 'Abnahme', text: 'Dichtigkeitsprüfung, Reinigung der Baustelle, gemeinsame Abnahme.' },
    ],
    unterleistungen: [
      {
        id:    'dachrinnen',
        titel: 'Dachrinnen & Fallrohre',
        text:  `Wir installieren und reparieren Dachrinnen und Fallrohre in Zink (langlebig,
                verwittert edel), Kupfer (sehr hochwertig, sehr langlebig) und Aluminium
                (leicht, rostfrei, preisgünstig). Wichtig: Unterdimensionierte Rinnen führen
                bei Starkregen zu Überlauf – wir berechnen die richtige Rinnengröße nach
                Ihrer Dachfläche.`,
        bilder: ['../images/klempnerarbeiten_spengelerarbeit/dachrinnen/dachrinnen1.jpg'],
      },
      {
        id:    'verblechung',
        titel: 'Verblechungen & Anschlüsse',
        text:  `Schornsteinverblechung, Wandanschlüsse, Gaubenverblechung, Fensterbankbleche –
                jede Verblechung muss wasserdicht und dauerhaft haltbar sein. Wir fertigen
                Anschlussbleche maßgenau vor Ort oder in der Werkstatt und bauen sie
                fachgerecht ein.`,
        bilder: ['../images/klempnerarbeiten_spengelerarbeit/verblechung/verblechung1.jpg'],
      },
      {
        id:    'schneefang',
        titel: 'Schneefangsysteme',
        text:  `Dachlawinen können Menschen und Gebäude gefährden. Schneefanggitter und
                Schneefangstangen sind in vielen Regionen und bei bestimmten Dachneigungen
                vorgeschrieben oder dringend empfehlenswert. Wir montieren geprüfte Systeme
                nach DIN EN 1991 / ÖNORM.`,
        bilder: ['../images/klempnerarbeiten_spengelerarbeit/schneefang/schneefang1.jpg'],
      },
    ],
    cta: {
      text: 'Jetzt Klempnerarbeiten anfragen',
      sub:  'Rinnen, Verblechungen, Anschlüsse – wir begutachten kostenlos.',
    },
  },

  {
    slug:    'wartung-dach-check',
    titel:   'Wartung & Dach-Check',
    kurztext: 'Kleine Schäden früh erkennen, bevor sie teuer werden: jährlicher Dach-Check, Dachrinnenreinigung und Wartungsvertrag.',
    heroBild: '../images/wartung_und_dach-check/hero/wartung-hero.jpg',
    icon:    '🔍',
    meta: {
      title:       'Dach-Wartung & Dach-Check in [Stadt] | [FIRMENNAME]',
      description: 'Jährlicher Dach-Check in [Stadt]: Eindeckung, Rinnen, Anschlüsse. Moosentfernung, Reinigung, Wartungsvertrag. Jetzt buchen.',
    },
    intro: `Ein Dach hält jahrzehntelang – wenn es regelmäßig gewartet wird. Viele Schäden
            entstehen schleichend: ein loser Ziegel, eine verstopfte Rinne, Moos das Feuchtigkeit
            speichert. Der jährliche Dach-Check von [FIRMENNAME] erkennt solche Probleme früh –
            bevor daraus ein teurer Wasserschaden wird.`,
    vorteile: [
      'Früherkennung kleiner Schäden spart teure Folgeschäden',
      'Längere Lebensdauer der Eindeckung durch regelmäßige Pflege',
      'Verstopfte Rinnen verhindern – kein Frostschaden im Winter',
      'Wartungsvertrag: wir erinnern Sie automatisch, Sie müssen nicht selbst daran denken',
    ],
    ablauf: [
      { titel: 'Sichtprüfung Eindeckung', text: 'Prüfung auf defekte, verrutschte oder fehlende Ziegel, Dachsteine oder Schindeln.' },
      { titel: 'Prüfung der Anschlüsse', text: 'First, Grat, Kehle, Schornstein, Gauben – alle kritischen Übergangsstellen werden kontrolliert.' },
      { titel: 'Dachrinnenreinigung', text: 'Laub und Schmutz werden entfernt, Gefälle und Dichtigkeit der Rinnen geprüft.' },
      { titel: 'Bericht & Empfehlung', text: 'Schriftlicher Befund: Was ist in Ordnung, was sollte in den nächsten 1–2 Jahren behoben werden?' },
    ],
    unterleistungen: [
      {
        id:    'dach-check',
        titel: 'Jährlicher Dach-Check',
        text:  `Der ideale Zeitpunkt ist vor der Heizperiode (September/Oktober), damit
                das Dach winterfest ist. Wir prüfen Eindeckung, Anschlüsse, Rinnen und
                sichtbare Teile der Dachkonstruktion. Befund und Empfehlungen erhalten Sie
                schriftlich.`,
        bilder: ['../images/wartung_und_dach-check/dach-check/check1.jpg'],
      },
      {
        id:    'moosentfernung',
        titel: 'Moosentfernung & Dachreinigung',
        text:  `Moos und Algen speichern Feuchtigkeit und schädigen Dachziegel langfristig.
                Wir entfernen Bewuchs schonend – ohne aggressiven Hochdruckreiniger,
                der die Oberfläche der Eindeckung angreift. Optional: Biozid-Behandlung
                zur Vorbeugung.`,
        bilder: ['../images/wartung_und_dach-check/moos/moos1.jpg'],
      },
      {
        id:    'wartungsvertrag',
        titel: 'Wartungsvertrag',
        text:  `Mit dem Wartungsvertrag von [FIRMENNAME] kümmern wir uns jedes Jahr automatisch
                um Ihren Dach-Check und die Rinnenreinigung. Sie erhalten rechtzeitig einen
                Terminvorschlag – ohne dass Sie selbst daran denken müssen.
                Abschließen und entspannt sein.`,
        bilder: ['../images/wartung_und_dach-check/wartungsvertrag/vertrag1.jpg'],
      },
    ],
    cta: {
      text: 'Jetzt Dach-Check buchen',
      sub:  'Oder Wartungsvertrag anfragen – einmal abschließen, dauerhaft geschützt.',
    },
  },

  {
    slug:    'geruestbau',
    titel:   'Gerüstbau',
    kurztext: 'Sicheres, geprüftes Gerüst – als Teil unserer Dacharbeiten oder auf Anfrage für andere Gewerke.',
    heroBild: '../images/geruestbau/hero/geruestbau-hero.jpg',
    icon:    '🏗️',
    meta: {
      title:       'Gerüstbau in [Stadt] | [FIRMENNAME]',
      description: 'Geprüfter Gerüstbau in [Stadt] für Dacharbeiten und auf Anfrage für andere Gewerke. Sicherheit nach aktuellen Vorschriften.',
    },
    intro: `Jede Dacharbeit beginnt mit einem sicheren Gerüst. Bei [FIRMENNAME] ist der
            Gerüstbau in alle Dacharbeiten integriert – kein separater Auftragnehmer, keine
            Koordinationsprobleme. Auf Anfrage stellen wir Gerüste auch für andere Handwerksbetriebe
            oder für Eigenleistungen bereit.`,
    vorteile: [
      'Gerüste nach aktuellen DGUV-Vorschriften und DIN EN 12811',
      'Gerüstauf- und abbau aus einer Hand mit den Dacharbeiten',
      'Auf Anfrage auch für Fassadenarbeiten oder andere Gewerke',
      'Sicherheitsnetz und Schutzdach auf Anfrage',
    ],
    ablauf: [
      { titel: 'Aufmaß & Planung', text: 'Art und Größe des Gerüsts werden nach Gebäude, Dachfläche und Arbeitsaufgabe geplant.' },
      { titel: 'Aufbau', text: 'Fachgerechter Gerüstaufbau mit Seitenschutz, Belagflächen und Verankerung am Gebäude.' },
      { titel: 'Nutzung', text: 'Das Gerüst steht für die gesamte Bauphase – sicher und witterungsbeständig.' },
      { titel: 'Abbau', text: 'Nach Abschluss der Arbeiten wird das Gerüst fachgerecht abgebaut und das Gelände gereinigt.' },
    ],
    unterleistungen: [],
    cta: {
      text: 'Gerüst anfragen',
      sub:  'Für Dacharbeiten inkl. oder separat – wir unterbreiten ein Angebot.',
    },
  },
];

/* Browser-Export */
if (typeof window !== 'undefined') {
  window.FIRMA = FIRMA;
  window.LEISTUNGEN = LEISTUNGEN;
}

/* Node-Export (für Build-Skripte) */
if (typeof module !== 'undefined') {
  module.exports = { FIRMA, LEISTUNGEN };
}
