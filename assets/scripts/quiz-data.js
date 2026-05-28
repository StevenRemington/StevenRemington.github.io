const quizData = {
  questions: [
    {
      id: 1,
      text: "A Kenning & Co. 'Inquisitor' sweep enters your sector, projecting a localized 'Hard Reality' field.",
      context: "**Hard Reality:** A technology used by the corporate City-States to stabilize the laws of physics, effectively 'killing' magic and causing intense biological nausea in the unaugmented.",
      options: [
        { text: "Produce my identification and remain still; the safety of order outweighs the temporary discomfort.", scores: { B_Corpo: 2, A_Anchor: 1 } },
        { text: "Slip into a 'dead-zone' alley using a lead-lined blanket to mask my signature from their scanners.", scores: { B_Street: 2, A_Phantom: 1 } },
        { text: "Watch them from the ruins. Their artificial order is a fragile lie that the world will eventually digest.", scores: { B_Nomad: 2, A_Weaver: 1 } }
      ]
    },
    {
      id: 2,
      text: "You find a pre-breach artifact leaking 'The Thrum' into the surrounding air.",
      context: "**The Thrum:** The infinite, chaotic substrate of reality. It is the source of all power, but its unfiltered presence causes mutation, madness, and the unraveling of physical laws.",
      options: [
        { text: "Log it with the authorities; such volatility must be harnessed and stabilized for the state.", scores: { B_Corpo: 2, S_Sanitization: 1 } },
        { text: "Fence it for 'Wetware' nutrients; survival in the sanctuary cities requires constant biological upkeep.", scores: { B_Street: 2, S_Symbiotic: 1 } },
        { text: "Bury it or destroy it; ancient things bring ancient ghosts from Pandaemonium.", scores: { B_Nomad: 2, S_Weft: 1 } }
      ]
    },
    {
      id: 3,
      text: "How do you view the 'Client State' you live in?",
      context: "**Client State:** Sovereign corporate fortresses (like Boston) where citizenship is a contract renewed through productivity, protected by permanent reality-anchors.",
      options: [
        { text: "It is a bastion of civilization in a world that has forgotten how to be sane.", scores: { B_Corpo: 2, A_Anchor: 1 } },
        { text: "A gilded cage. I'd rather live in the cracks where the corporations can't see me.", scores: { B_Street: 2, A_Phantom: 1 } },
        { text: "An arrogant cage built by people who are terrified of the wind.", scores: { B_Nomad: 2, A_Weaver: 1 } }
      ]
    },
    {
      id: 4,
      text: "A feral Thrum-beast blocks your path. How do you handle it?",
      context: "**Thrum-beast:** A creature from Pandaemonium or a mutated animal that has lost its biological stability, becoming a shifting mass of eyes, teeth, and raw intent.",
      options: [
        { text: "Shift my bone density and grow chitinous plating to force it to yield through raw physical dominance.", scores: { S_Morphological: 3, A_Anchor: 1 } },
        { text: "Emit a synthesized pheromone that mimics its own 'predator-signal,' forcing it to retreat in terror.", scores: { S_Pheromonal: 3, A_Weaver: 1 } },
        { text: "Overclock my neural processors, watching it move in slow motion as I dismantle its vital points with surgical precision.", scores: { S_Processing: 3, A_Phantom: 1 } },
        { text: "Reach into its frequency and convince it that I am not a threat, but a part of the landscape it should ignore.", scores: { S_Maya: 3, A_Weaver: 1 } }
      ]
    },
    {
      id: 5,
      text: "You must bypass a high-security 'Hard Reality' vault. Your methodology?",
      options: [
        { text: "Deploy an active Sanitization pulse to create a 'dead-zone' within their field, then walk through the gap.", scores: { S_Sanitization: 3, A_Anchor: 1 } },
        { text: "Interface with the building's biological oversight-mold, hacking the 'Wetware' that manages the locks.", scores: { S_Proliferant: 3, A_Conduit: 1 } },
        { text: "Use multi-spectral optics to see the conceptual gaps in the field, moving through the 'shadows' of the code.", scores: { S_Perceptics: 3, A_Phantom: 1 } },
        { text: "Stabilize an alternate timeline where the vault was never actually closed.", scores: { S_Uchronia: 3, A_Weaver: 1 } }
      ]
    },
    {
      id: 6,
      text: "To gain critical intel from a high-value target, you would...",
      options: [
        { text: "Filter my mind into theirs, sifting through their memories like a sieve until the truth remains.", scores: { S_Taibhsear: 3, A_Conduit: 1 } },
        { text: "Administer a custom-brewed Alchemical reagent that forces their semantic signature to speak only truth.", scores: { S_Alchemy: 3, A_Weaver: 1 } },
        { text: "Plug directly into their neural-port, extracting the raw data-logs of their experiences.", scores: { S_Mechanist: 3, A_Conduit: 1 } },
        { text: "Offer them a 'Passenger' that will eat their lies from the inside out until they can only speak reality.", scores: { S_Symbiotic: 3, A_Anchor: 1 } }
      ]
    },
    {
      id: 7,
      text: "In a brutal, unexpected street fight, you prioritize...",
      options: [
        { text: "Regenerating my wounds as fast as they can be dealt; I will win through metabolic endurance.", scores: { S_Trophic: 3, A_Anchor: 1 } },
        { text: "Using raw titanium bone-lacing and hydraulic punches to break their chassis with one strike.", scores: { S_Augmentation: 3, A_Anchor: 1 } },
        { text: "Stabilizing the probability of the fight so that every shot they take is a statistical failure.", scores: { S_Wyrding: 3, A_Weaver: 1 } },
        { text: "Summoning a shadow of my Patron's intent to blot out their vision and focus.", scores: { S_Covenants: 3, A_Weaver: 1 } }
      ]
    },
    {
      id: 8,
      text: "You are tasked with protecting a sanctuary from a 'Thrum-Storm.' How do you do it?",
      context: "**Thrum-Storm:** A localized collapse of reality where conceptual frequencies bleed into the physical world, causing spontaneous changes in gravity, time, and matter.",
      options: [
        { text: "I sacrifice a significant memory—the face of a loved one—to weave a persistent ward of protection.", scores: { S_Weft: 3, A_Weaver: 1 } },
        { text: "I anchor the sector by linking my mind to the city's power-grid, forcing the machines to hold reality steady.", scores: { S_Mechanist: 3, A_Conduit: 1 } },
        { text: "I use my multi-spectral sensors to map the storm's frequencies, directing the team to the eye of the calm.", scores: { S_Perceptics: 3, A_Phantom: 1 } },
        { text: "I grow a biological spire of Proliferant mold to absorb and digest the excess Thrum-noise.", scores: { S_Proliferant: 3, A_Conduit: 1 } }
      ]
    },
    {
      id: 9,
      text: "When facing a choice between personal cost and power, you'd rather lose...",
      options: [
        { text: "My empathy. I prefer the cold efficiency of a machine interface to the burden of feeling.", scores: { S_Mechanist: 3, A_Conduit: 1 } },
        { text: "My physical sensation. I will trade the ability to feel a touch for the strength to crush a skull.", scores: { S_Augmentation: 3, A_Anchor: 1 } },
        { text: "My original shape. I will become whatever mutation the moment requires to survive.", scores: { S_Morphological: 3, A_Anchor: 1 } },
        { text: "My 'Self'. I am happy to become a hollow vessel for the seeping thoughts of others.", scores: { S_Taibhsear: 3, A_Conduit: 1 } }
      ]
    },
    {
      id: 10,
      text: "To you, the greatest horror of power is...",
      options: [
        { text: "Being lost in the gaps between realities, never truly being 'anywhere' again.", scores: { S_Uchronia: 3 } },
        { text: "Realizing your body is no longer yours, but a host for a starving Pandemonium passenger.", scores: { S_Symbiotic: 3 } },
        { text: "Knowing your brain is literally cooking itself every time you reach for speed.", scores: { S_Processing: 3 } },
        { text: "The crushing weight of a Taboo that will unravel your soul if you ever speak your name.", scores: { S_Covenants: 3 } }
      ]
    },
    {
      id: 11,
      text: "How do you view your own biology?",
      options: [
        { text: "As a machine that is currently under-performing and needs better parts.", scores: { S_Augmentation: 2, S_Processing: 1 } },
        { text: "As a fertile garden that I must cultivate with the best strains of the Thrum.", scores: { S_Trophic: 2, S_Morphological: 1 } },
        { text: "As a semantic anchor that I must keep heavy and stable through ritual and memory.", scores: { S_Weft: 2, S_Wyrding: 1 } },
        { text: "As a fragile husk that I will eventually discard when my intent is strong enough.", scores: { S_Covenants: 2, S_Maya: 1 } }
      ]
    },
    {
      id: 12,
      text: "In a team of four, you are the one who...",
      options: [
        { text: "Stands in the front, absorbing the trauma so the others can work.", scores: { A_Anchor: 3, S_Trophic: 1 } },
        { text: "Directly manipulates the battlefield's frequency to keep the enemy off-balance.", scores: { A_Weaver: 3, S_Wyrding: 1 } },
        { text: "Provides the oversight and data-feeds that ensure no one is ever surprised.", scores: { A_Conduit: 3, S_Perceptics: 1 } },
        { text: "Disappears entirely, strike-point to strike-point, ending the fight before it starts.", scores: { A_Phantom: 3, S_Uchronia: 1 } }
      ]
    },
    {
      id: 13,
      text: "A Pandemonium entity offers you a 'Mastery' of your chosen field. The catch?",
      options: [
        { text: "I can never cross running water again. I'll take the strength.", scores: { S_Covenants: 3 } },
        { text: "I will never feel natural hunger or thirst again—only the fever of the Thrum.", scores: { S_Trophic: 3 } },
        { text: "I will see the world only in data-streams, never in color or light.", scores: { S_Perceptics: 3 } },
        { text: "I will forget every happy memory I have ever made.", scores: { S_Weft: 3 } }
      ]
    },
    {
      id: 14,
      text: "When a plan fails, your first instinct is to...",
      options: [
        { text: "Brace for impact and trust in my resilience to weather the fallout.", scores: { A_Anchor: 2, S_Augmentation: 1 } },
        { text: "Instantly calculate the statistical odds of every escape route.", scores: { A_Conduit: 2, S_Wyrding: 1 } },
        { text: "Vanish into the shadows and wait for the chaos to settle.", scores: { A_Phantom: 2, S_Maya: 1 } },
        { text: "Unleash a wave of destabilizing energy to sow confusion and mask our exit.", scores: { A_Weaver: 2, S_Sanitization: 1 } }
      ]
    },
    {
      id: 15,
      text: "Which statement resonates most with you?",
      options: [
        { text: "'Steel and logic are the only things that don't lie.'", scores: { Pure_Cyber: 1, S_Sanitization: 1 } },
        { text: "'Flesh is a conversation that never stops changing.'", scores: { Pure_Bio: 1, S_Morphological: 1 } },
        { text: "'Reality is a story, and I am the one holding the pen.'", scores: { Pure_Wytch: 1, S_Maya: 1 } },
        { text: "'Balance is for those who are afraid of the extremes.'", scores: { Tri_Hybrid: 1, S_Symbiotic: 1 } }
      ]
    }
  ],
  results: {
    backgrounds: {
      B_Corpo: { title: "The Client State Citizen", quote: "Efficiency through Hard Reality.", description: "You are a product of the Citadel. To you, 'Hard Reality' is not an oppression, but a shield against the evolutionary chaos of the Thrum." },
      B_Street: { title: "The Sanctuary Survivor", quote: "Cunning in the Gray Markets.", description: "You grew up in the shadows of the Client State. Your life has been a constant juggle of jury-rigged tech, street-level wetware, and ancient folk-wytchcraft." },
      B_Nomad: { title: "The Feral Outlander", quote: "Untethered in the Ruins.", description: "You are a child of the ruins, a predator of the shifting sands where the Thrum is at its most violent. You don't just survive the Thrum; you are a part of it." }
    },
    archetypes: {
      A_Anchor: { title: "The Anchor", quote: "The Unyielding Bastion.", description: "You are the fixed point. You take the hits, draw the fire, and ensure that the 'Hard Reality' of your team's position remains unbroken." },
      A_Weaver: { title: "The Weaver", quote: "The Architect of Intent.", description: "You control the battlefield by manipulating the minds, biology, and souls of those around you. You shape intent." },
      A_Conduit: { title: "The Conduit", quote: "The Information Nexus.", description: "Knowledge is the only currency you truly value. You see the weaknesses in every system and manage the flow of combat data." },
      A_Phantom: { title: "The Phantom", quote: "The Semantic Ghost.", description: "You strike from the gaps between realities. You move through the world unseen and unheard, bypassing physical and conceptual security." }
    },
    combinations: {
      Pure_Bio: { title: "The Apex Flesh", description: "You have completely surrendered your humanity to evolutionary chaos. Your body is a terrifying, ever-shifting ecosystem of Pandemonium biology." },
      Pure_Cyber: { title: "The Chrome Purist", description: "Meat is weak, and the Thrum is a glitch. You have replaced your vulnerabilities with cold, unfeeling logic and steel." },
      Pure_Wytch: { title: "The Semantic Architect", description: "You exist purely as intent. Your mind is a weapon that bends the fabric of reality, though your soul is hollowed by sacrifice." },
      Bio_Cyber: { title: "The Iron-Flesh Engine", description: "A brutal hybrid. You anchor your terrifying biological mutations with a chassis of cold steel, creating a contradictory but unstoppable force." },
      Bio_Wytch: { title: "The Pandemonium Cultivator", description: "You mix flesh-craft with mind-craft. You don't just negotiate with the Thrum; you grow its nightmares inside your own veins." },
      Cyber_Wytch: { title: "The Corporate Occultist", description: "You merge high-tech oversight with ancient ritual. You run your Wytchcraft through data-streams and use chrome to anchor your spells." },
      Tri_Hybrid: { title: "The Convergence Anomaly", description: "You are a living contradiction. Flesh, metal, and magic war within you, making you a completely unpredictable, highly volatile entity." }
    },
    subspecialties: {
      S_Symbiotic: { title: "Symbiotic Branch (Bio)", horror: "Hosting a sentient 'Passenger'.", manifestation: "You are never truly alone. If you don't feed it, it will eat you from the inside out." },
      S_Morphological: { title: "Morphological Branch (Bio)", horror: "The loss of a permanent shape.", manifestation: "Your body is a shifting lattice of chitin and muscle. You might 'forget' how to be human." },
      S_Pheromonal: { title: "Pheromonal Branch (Bio)", horror: "The death of genuine emotion.", manifestation: "You can command a room with a scent, but your own endocrine system is a scorched wasteland." },
      S_Proliferant: { title: "Proliferant Branch (Bio)", horror: "Identity erosion in the Hive.", manifestation: "You are a node in a fungal network. Your individual ego is being slowly digested by the colony." },
      S_Trophic: { title: "Trophic Branch (Bio)", horror: "The Metabolic Fever.", manifestation: "You are nearly unkillable, but your body runs at a temperature that would cook a normal human." },
      S_Mechanist: { title: "Mechanist Branch (Cyber)", horror: "The Cold Logic Personality.", manifestation: "You manage massive logistics with a thought, but biological empathy is becoming an 'error' in your code." },
      S_Perceptics: { title: "Perceptics Branch (Cyber)", horror: "Chronic Sensory Overload.", manifestation: "You see the world as a cascading waterfall of data, detached from the 'natural' world." },
      S_Augmentation: { title: "Augmentation Branch (Cyber)", horror: "Sensation Loss.", manifestation: "You can crush steel with your bare hands, but you can't feel the warmth of another person." },
      S_Sanitization: { title: "Sanitization Branch (Cyber)", horror: "Biological Nausea & Migraines.", manifestation: "You carry 'Hard Reality' with you, suffering from permanent migraines and constant nausea." },
      S_Processing: { title: "Processing Branch (Cyber)", horror: "Neural Burn.", manifestation: "You move as if everyone else is standing still, but every time you overclock, you can feel your brain cooking." },
      S_Taibhsear: { title: "Taibhsear (Wytch)", horror: "Depersonalization.", manifestation: "You read minds by filtering out the 'noise', risking filtering out your own identity entirely." },
      S_Wyrding: { title: "Wyrding (Wytch)", horror: "Pandemonium Attention.", manifestation: "Your luck is a debt that will eventually be collected by things that live in the Thrum." },
      S_Alchemy: { title: "Alchemy & Pharma (Wytch)", horror: "The Fragility of Perfection.", manifestation: "You can bottle miracles, but your power is hyper-specific. One missed detail turns stability into a nightmare." },
      S_Weft: { title: "Weft-Work (Wytch)", horror: "Memory Sacrifice.", manifestation: "To cast a spell, you must literally 'forget' the memory that fuels it." },
      S_Uchronia: { title: "Uchronia (Wytch)", horror: "Spatial Amnesia.", manifestation: "The more you skip through space, the more the universe 'forgets' where you actually belong." },
      S_Covenants: { title: "Covenants (Wytch)", horror: "The Uslovie (The Taboo).", manifestation: "Your power is backed by a Patron. The moment you break your Taboo, you will unravel instantly." },
      S_Maya: { title: "Maya (Wytch)", horror: "Becoming the Lie.", manifestation: "You hold an illusion so long that you might forget who you were before the mask." }
    }
  }
};
