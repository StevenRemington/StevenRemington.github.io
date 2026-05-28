const quizData = {
  questions: [
    {
      id: 1,
      text: "How do you react when a Kenning & Co. 'Inquisitor' sweep enters your sector and projects a localized 'Hard Reality' field?",
      context: "**Hard Reality:** A technology used by the corporate City-States to stabilize the laws of physics, effectively 'killing' magic and causing intense biological nausea in the unaugmented.",
      options: [
        { text: "Produce my identification and remain still; the safety of order outweighs the temporary discomfort.", scores: { B_Corpo: 2, A_Anchor: 1 } },
        { text: "Slip into a 'dead-zone' alley using a lead-lined blanket to mask my signature from their scanners.", scores: { B_Street: 2, A_Phantom: 1 } },
        { text: "Watch them from the ruins. Their artificial order is a fragile lie that the world will eventually digest.", scores: { B_Nomad: 2, A_Weaver: 1 } }
      ]
    },
    {
      id: 2,
      text: "What is your approach to a pre-breach artifact that is leaking 'The Thrum' into the surrounding air?",
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
      text: "How do you handle a feral Thrum-beast that is blocking your path?",
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
      text: "Which methodology do you use to bypass a high-security 'Hard Reality' vault?",
      context: "**Sanitization:** The specialized use of technology to actively suppress The Thrum and anchor 'Hard Reality'. It creates 'Safe Zones' where magic cannot function, but causes intense biological nausea in the user.",
      options: [
        { text: "Deploy an active Sanitization pulse to create a 'dead-zone' within their field, then walk through the gap.", scores: { S_Sanitization: 3, A_Anchor: 1 } },
        { text: "Interface with the building's biological oversight-mold, hacking the 'Wetware' that manages the locks.", scores: { S_Proliferant: 3, A_Conduit: 1 } },
        { text: "Use multi-spectral optics to see the conceptual gaps in the field, moving through the 'shadows' of the code.", scores: { S_Perceptics: 3, A_Phantom: 1 } },
        { text: "Stabilize an alternate timeline where the vault was never actually closed.", scores: { S_Uchronia: 3, A_Weaver: 1 } }
      ]
    },
    {
      id: 6,
      text: "How would you gain critical intel from a high-value target who refuses to cooperate?",
      options: [
        { text: "Filter my mind into theirs, sifting through their memories like a sieve until the truth remains.", scores: { S_Taibhsear: 3, A_Conduit: 1 } },
        { text: "Administer a custom-brewed Alchemical reagent that forces their semantic signature to speak only truth.", scores: { S_Alchemy: 3, A_Weaver: 1 } },
        { text: "Plug directly into their neural-port, extracting the raw data-logs of their experiences.", scores: { S_Mechanist: 3, A_Conduit: 1 } },
        { text: "Offer them a 'Passenger' that will eat their lies from the inside out until they can only speak reality.", scores: { S_Symbiotic: 3, A_Anchor: 1 } }
      ]
    },
    {
      id: 7,
      text: "What do you prioritize in a brutal, unexpected street fight?",
      options: [
        { text: "Regenerating my wounds as fast as they can be dealt; I will win through metabolic endurance.", scores: { S_Trophic: 3, A_Anchor: 1 } },
        { text: "Using raw titanium bone-lacing and hydraulic punches to break their chassis with one strike.", scores: { S_Augmentation: 3, A_Anchor: 1 } },
        { text: "Stabilizing the probability of the fight so that every shot they take is a statistical failure.", scores: { S_Wyrding: 3, A_Weaver: 1 } },
        { text: "Summoning a shadow of my Patron's intent to blot out their vision and focus.", scores: { S_Covenants: 3, A_Weaver: 1 } }
      ]
    },
    {
      id: 8,
      text: "How do you protect a sanctuary from an encroaching 'Thrum-Storm'?",
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
      text: "When facing a choice between personal cost and power, what are you most willing to lose?",
      options: [
        { text: "My empathy. I prefer the cold efficiency of a machine interface to the burden of feeling.", scores: { S_Mechanist: 3, A_Conduit: 1 } },
        { text: "My physical sensation. I will trade the ability to feel a touch for the strength to crush a skull.", scores: { S_Augmentation: 3, A_Anchor: 1 } },
        { text: "My original shape. I will become whatever mutation the moment requires to survive.", scores: { S_Morphological: 3, A_Anchor: 1 } },
        { text: "My 'Self'. I am happy to become a hollow vessel for the seeping thoughts of others.", scores: { S_Taibhsear: 3, A_Conduit: 1 } }
      ]
    },
    {
      id: 10,
      text: "To you, what is the greatest horror associated with power?",
      options: [
        { text: "Being lost in the gaps between realities, never truly being 'anywhere' again.", scores: { S_Uchronia: 3 } },
        { text: "Realizing your body is no longer yours, but a host for a starving Pandemonium passenger.", scores: { S_Symbiotic: 3 } },
        { text: "Knowing your brain is literally cooking itself every time you reach for speed.", scores: { S_Processing: 3 } },
        { text: "The crushing weight of a Taboo that will unravel your soul if you ever speak your name.", scores: { S_Covenants: 3 } }
      ]
    },
    {
      id: 11,
      text: "How do you view your own biology in the context of survival?",
      options: [
        { text: "As a machine that is currently under-performing and needs better parts.", scores: { S_Augmentation: 2, S_Processing: 1 } },
        { text: "As a fertile garden that I must cultivate with the best strains of the Thrum.", scores: { S_Trophic: 2, S_Morphological: 1 } },
        { text: "As a semantic anchor that I must keep heavy and stable through ritual and memory.", scores: { S_Weft: 2, S_Wyrding: 1 } },
        { text: "As a fragile husk that I will eventually discard when my intent is strong enough.", scores: { S_Covenants: 2, S_Maya: 1 } }
      ]
    },
    {
      id: 12,
      text: "Which role do you naturally fill within a team of four?",
      options: [
        { text: "Standing in the front, absorbing the trauma so the others can work.", scores: { A_Anchor: 3, S_Trophic: 1 } },
        { text: "Directly manipulating the battlefield's frequency to keep the enemy off-balance.", scores: { A_Weaver: 3, S_Wyrding: 1 } },
        { text: "Providing the oversight and data-feeds that ensure no one is ever surprised.", scores: { A_Conduit: 3, S_Perceptics: 1 } },
        { text: "Disappearing entirely, strike-point to strike-point, ending the fight before it starts.", scores: { A_Phantom: 3, S_Uchronia: 1 } }
      ]
    },
    {
      id: 13,
      text: "If a Pandemonium entity offers you 'Mastery' of your field, which catch do you accept?",
      options: [
        { text: "I can never cross running water again. I'll take the strength.", scores: { S_Covenants: 3 } },
        { text: "I will never feel natural hunger or thirst again—only the fever of the Thrum.", scores: { S_Trophic: 3 } },
        { text: "I will see the world only in data-streams, never in color or light.", scores: { S_Perceptics: 3 } },
        { text: "I will forget every happy memory I have ever made.", scores: { S_Weft: 3 } }
      ]
    },
    {
      id: 14,
      text: "When a plan fails, what is your first instinct?",
      options: [
        { text: "Brace for impact and trust in my resilience to weather the fallout.", scores: { A_Anchor: 2, S_Augmentation: 1 } },
        { text: "Instantly calculate the statistical odds of every escape route.", scores: { A_Conduit: 2, S_Wyrding: 1 } },
        { text: "Vanish into the shadows and wait for the chaos to settle.", scores: { A_Phantom: 2, S_Maya: 1 } },
        { text: "Unleash a wave of destabilizing energy to sow confusion and mask our exit.", scores: { A_Weaver: 2, S_Sanitization: 1 } }
      ]
    },
    {
      id: 15,
      text: "Which of these statements resonates most deeply with your philosophy?",
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
      Pure_Bio: { title: "The Apex Flesh", combination: "Biogenesis Purist", description: "You have completely surrendered your humanity to evolutionary chaos. Your body is a terrifying, ever-shifting ecosystem of Pandemonium biology." },
      Pure_Cyber: { title: "The Chrome Purist", combination: "Cyberware Purist", description: "Meat is weak, and the Thrum is a glitch. You have replaced your vulnerabilities with cold, unfeeling logic and steel." },
      Pure_Wytch: { title: "The Semantic Architect", combination: "Wytchcraft Purist", description: "You exist purely as intent. Your mind is a weapon that bends the fabric of reality, though your soul is hollowed by sacrifice." },
      Bio_Cyber: { title: "The Iron-Flesh Engine", combination: "Biogenesis + Cyberware", description: "A brutal hybrid. You anchor your terrifying biological mutations with a chassis of cold steel, creating a contradictory but unstoppable force." },
      Bio_Wytch: { title: "The Pandemonium Cultivator", combination: "Biogenesis + Wytchcraft", description: "You mix flesh-craft with mind-craft. You don't just negotiate with the Thrum; you grow its nightmares inside your own veins." },
      Cyber_Wytch: { title: "The Corporate Occultist", combination: "Cyberware + Wytchcraft", description: "You merge high-tech oversight with ancient ritual. You run your Wytchcraft through data-streams and use chrome to anchor your spells." },
      Tri_Hybrid: { title: "The Convergence Anomaly", combination: "Bio + Cyber + Wytch", description: "You are a living contradiction. Flesh, metal, and magic war within you, making you a completely unpredictable, highly volatile entity." }
    },
    subspecialties: {
      S_Symbiotic: { 
        title: "Symbiotic Branch", 
        benefit: "Grants access to specialized sentient 'passengers' that provide utility like universal translation or multi-spectral vision.",
        horror: "Hosting a sentient 'Passenger' from Pandemonium who feeds on your own tissues if not regularly sated with nutrients.", 
        manifestation: "You are a landlord for a monster, sharing your nervous system with a foreign intelligence that is never truly docile." 
      },
      S_Morphological: { 
        title: "Morphological Branch", 
        benefit: "Allows for rapid physical adaptation, growing dynamic armor, weaponry, or additional limbs on demand.",
        horror: "The loss of a permanent physical shape as your body becomes a shifting lattice of chitin and muscle.", 
        manifestation: "Your body may 'forget' its original human form, leading to permanent deformities or a total collapse of biological integrity." 
      },
      S_Pheromonal: { 
        title: "Pheromonal Branch", 
        benefit: "Enables total social and physical manipulation by hacking the chemical signals of those around you.",
        horror: "The death of genuine emotion as your own endocrine system is ravaged by constant signal spoofing.", 
        manifestation: "You command any room with a scent, but find yourself trapped in a scorched wasteland of permanent emotional numbness." 
      },
      S_Proliferant: { 
        title: "Proliferant Branch", 
        benefit: "Utilizes fungal and bacterial networks for high-scale data processing and environmental oversight.",
        horror: "Identity erosion as you become a node in a hive-network, catching yourself thinking in the plural.", 
        manifestation: "Your individual 'I' is slowly being digested by the colony you host, replaced by the collective 'We'." 
      },
      S_Trophic: { 
        title: "Trophic Branch", 
        benefit: "Total internal optimization allowing for near-instant cellular regeneration and survival in lethal environments.",
        horror: "The Metabolic Fever, where your body runs at a temperature that would cook a normal human.", 
        manifestation: "You are nearly unkillable but trapped in a constant, agonizing state of starvation and internal meltdown." 
      },
      S_Mechanist: { 
        title: "Mechanist Branch", 
        benefit: "Direct neural interface with city-state infrastructure, providing control over power grids and automated logistics.",
        horror: "The development of a 'Cold Logic' personality as your mind adapts to efficiency-based data structures.", 
        manifestation: "Biological empathy becomes an 'error' in your code; you see the world as a logistics problem rather than a human one." 
      },
      S_Perceptics: { 
        title: "Perceptics Branch", 
        benefit: "Enhancement of the human sensory suite to acquire raw data, track ghosts, and pierce magical illusions.",
        horror: "Chronic sensory overload and a permanent detachment from natural human perception.", 
        manifestation: "You cannot see a smile without a data-overlay telling you its frequency; the natural world is a cage of unfiltered info." 
      },
      S_Augmentation: { 
        title: "Augmentation Branch", 
        benefit: "Traditional high-end chrome providing superhuman strength, speed, and durability for heavy combat.",
        horror: "The gradual loss of physical sensation and the development of phantom limb syndromes.", 
        manifestation: "You can crush steel with your bare hands but can no longer feel the warmth of a fire or the touch of a hand." 
      },
      S_Sanitization: { 
        title: "Sanitization Branch", 
        benefit: "Actively suppresses The Thrum to create 'Safe Zones' and neutralize bio-organic or magical threats.",
        horror: "Intense biological nausea and agonizing migraines caused by the portable Hard Reality anchors you host.", 
        manifestation: "You are a walking void, a hunter who carries the heavy silence of the city-state wherever you go." 
      },
      S_Processing: { 
        title: "Processing Branch", 
        benefit: "Cognitive overclocking that makes the world appear to slow down, granting impossible reaction times.",
        horror: "Permanent cognitive degradation as your brain's biological components literally cook themselves during use.", 
        manifestation: "You trade your future for moments of perfect reaction, feeling the neural burn with every accelerated second." 
      },
      S_Taibhsear: { 
        title: "Taibhsear", 
        benefit: "Seership that allows for mind-reading, telepathic communication, and intuiting historical echoes.",
        horror: "Total loss of self-identity as you filter out the noise of the world and accidentally sieve out your own signature.", 
        manifestation: "You are becoming a 'Semantic Ghost'—physically present but conceptually hollow, filled only with others' echoes." 
      },
      S_Wyrding: { 
        title: "Wyrding", 
        benefit: "Probability manipulation by creating semantic gravity wells around a single desired outcome.",
        horror: "Drawing the attention of Pandemonium entities who are very interested in why you are hogging all the success.", 
        manifestation: "Your luck is not a gift but a debt; every stabilized future is a bill that will eventually come due." 
      },
      S_Alchemy: { 
        title: "Alchemy & Pharma", 
        benefit: "The ability to bottle stability into physical reagents, creating miracles with hyper-specific effects.",
        horror: "The fragility of perfection, where one missed detail in the protocol results in a lethal reality-backlash.", 
        manifestation: "You are a slave to the 'Particular', obsessing over exact timings and reagents to avoid a liquid nightmare." 
      },
      S_Weft: { 
        title: "Weft-Work", 
        benefit: "The creation of persistent blessings, hexes, and wards that rewrite the Thrum signature of an area or person.",
        horror: "Memory sacrifice, where you must literally 'forget' a concept or experience to fuel the working.", 
        manifestation: "You are a powerful architect of reality, but you are becoming a hollow shell, one forgotten memory at a time." 
      },
      S_Uchronia: { 
        title: "Uchronia", 
        benefit: "Spatial relocation through 'Spatial Amnesia', skipping across space by convincing the universe you are already there.",
        horror: "Spatial amnesia where the universe 'forgets' where you belong, potentially losing you in the gaps between realities.", 
        manifestation: "You move through the not-time and not-place, risking realizing one day that you have no semantic anchor to anywhere." 
      },
      S_Covenants: { 
        title: "Covenants", 
        benefit: "Bypassing willpower limitations by tying your frequency to a stable, non-human patron from Pandemonium.",
        horror: "The crushing weight of a life-long Taboo that will unravel your soul instantly if ever broken.", 
        manifestation: "You wield immense power, as long as you never look at a mirror or speak your name. You are a node for another's will." 
      },
      S_Maya: { 
        title: "Maya", 
        benefit: "Destabilizing consensus perception to reshape the environment or project a false identity through glamours.",
        horror: "Becoming the lie as consensus inertia locks your false identity in place permanently.", 
        manifestation: "You are the master of the Grand Illusion, but if you hold the mask too long, you might forget who was beneath it." 
      }
    }
  }
};
