const quizData = {
  questions: [
    {
      id: 1,
      text: "When the Kenning & Co. Inquisitors sweep your sector with a Hard Reality field, causing immediate nausea and bleeding from the ears, what is your first instinct?",
      options: [
        { text: "Produce your identification chip and remain perfectly still. Order is protection.", scores: { B_Corpo: 2 } },
        { text: "Duck into a 'dead-zone' alleyway you've scouted, using a lead-lined blanket to mask your signature.", scores: { B_Street: 2 } },
        { text: "Watch them from the ruins with a predator's curiosity. They don't belong here, and eventually, the Thrum will take them.", scores: { B_Nomad: 2 } }
      ]
    },
    {
      id: 2,
      text: "What was the most common sound of your childhood?",
      options: [
        { text: "The hum of the Citadel’s climate-controlled air and the soothing, rhythmic data-streams of the local grid.", scores: { B_Corpo: 2 } },
        { text: "The shouting of gray-market traders and the grinding of jury-rigged machinery in a crowded sanctuary city.", scores: { B_Street: 2 } },
        { text: "The howling of the Thrum-winds and the chitinous clicking of Pandemonium entities in the wasteland.", scores: { B_Nomad: 2 } }
      ]
    },
    {
      id: 3,
      text: "You find a pre-breach artifact of immense value. What do you do?",
      options: [
        { text: "Log it immediately with the proper authorities. It is part of the collective heritage and must be preserved by the Client State.", scores: { B_Corpo: 2 } },
        { text: "Take it to the nearest 'Fixer' to see how many months of clean water and 'wetware' nutrients it can buy you.", scores: { B_Street: 2 } },
        { text: "Bury it or destroy it. Ancient things bring ancient ghosts, and the wasteland is crowded enough.", scores: { B_Nomad: 2 } }
      ]
    },
    {
      id: 4,
      text: "How do you view the 'Hard Reality' of the City-States?",
      options: [
        { text: "It is the only thing keeping humanity from being devoured by the chaos of Pandemonium.", scores: { B_Corpo: 2 } },
        { text: "It's a gilded cage that keeps the rich safe while the rest of us choke on the static.", scores: { B_Street: 2 } },
        { text: "An arrogant lie. Reality is fluid, and trying to freeze it only makes the eventual thaw more violent.", scores: { B_Nomad: 2 } }
      ]
    },
    {
      id: 5,
      text: "What is 'Home' to you?",
      options: [
        { text: "A clean, secure apartment where my productivity is tracked and my needs are met.", scores: { B_Corpo: 2 } },
        { text: "Anywhere with a roof that doesn't leak Thrum-noise and a lock that works most of the time.", scores: { B_Street: 2 } },
        { text: "The open road and the shifting sands of the ruins. Static locations are just targets.", scores: { B_Nomad: 2 } }
      ]
    },
    {
      id: 6,
      text: "A feral Thrum-beast, its body a shifting mass of eyes and teeth, blocks your path. How do you handle it?",
      options: [
        { text: "Plant my feet, brace my reinforced frame, and force it to break itself against me.", scores: { A_Anchor: 2 } },
        { text: "Reach into the Thrum and suggest to the beast that I am actually a part of the landscape, or that its hunger has already been sated.", scores: { A_Weaver: 2 } },
        { text: "Use my sensors to identify its biological weaknesses and coordinate my team's fire to bring it down efficiently.", scores: { A_Conduit: 2 } },
        { text: "Wait for it to blink, then move through the gap in its perception to strike the killing blow before it knows I'm there.", scores: { A_Phantom: 2 } }
      ]
    },
    {
      id: 7,
      text: "In a team, what is your primary responsibility?",
      options: [
        { text: "To be the line that never breaks. I am the shield and the anvil.", scores: { A_Anchor: 2 } },
        { text: "To control the environment and the minds of our enemies. I decide how the battle is fought.", scores: { A_Weaver: 2 } },
        { text: "To manage the flow of information and ensure our systems are always a step ahead.", scores: { A_Conduit: 2 } },
        { text: "To eliminate high-value targets and gather intelligence without being seen.", scores: { A_Phantom: 2 } }
      ]
    },
    {
      id: 8,
      text: "What is the greatest weapon in your arsenal?",
      options: [
        { text: "My physical resilience and the raw durability of my form.", scores: { A_Anchor: 2 } },
        { text: "My focus and the ability to stabilize my intent against the chaos of the world.", scores: { A_Weaver: 2 } },
        { text: "My access to data and my ability to interface with the systems around me.", scores: { A_Conduit: 2 } },
        { text: "My ability to remain unseen and unheard until the moment of impact.", scores: { A_Phantom: 2 } }
      ]
    },
    {
      id: 9,
      text: "How do you deal with a locked, high-security corporate door?",
      options: [
        { text: "Smash it off its hinges. Subtle is for the weak.", scores: { A_Anchor: 2 } },
        { text: "Spend a few moments visualizing a reality where the door was never locked to begin with.", scores: { A_Weaver: 2 } },
        { text: "Direct my neural interface into the door's logic-grid and convince it that I have the highest clearance level.", scores: { A_Conduit: 2 } },
        { text: "Find a ventilation shaft or a conceptual 'gap' in the security field to bypass it entirely.", scores: { A_Phantom: 2 } }
      ]
    },
    {
      id: 10,
      text: "When a plan goes wrong, what is your reaction?",
      options: [
        { text: "Draw all attention to myself to allow my team to escape or regroup.", scores: { A_Anchor: 2 } },
        { text: "Unleash a wave of destabilizing energy to sow confusion among the enemy.", scores: { A_Weaver: 2 } },
        { text: "Instantly recalculate the odds and provide a new, optimized path for survival.", scores: { A_Conduit: 2 } },
        { text: "Disappear into the shadows and wait for the perfect moment to turn the tide.", scores: { A_Phantom: 2 } }
      ]
    },
    {
      id: 11,
      text: "You are offered a 'Passenger'—a sentient parasite from Pandemonium that will grant you the ability to translate any language and see through walls. What is your reaction?",
      options: [
        { text: "Accept it. I don't mind sharing my body if it means I can understand the world better.", scores: { S_Symbiotic: 3 } },
        { text: "No. I will not host a foreign intelligence in my own flesh.", scores: { S_Sanitization: 1, S_Augmentation: 1 } }
      ]
    },
    {
      id: 12,
      text: "To survive a lethal fall, you must rapidly shift your bone structure into a shock-absorbing lattice. The risk is that you may never look truly 'human' again. Do you do it?",
      options: [
        { text: "Yes. Survival is more important than aesthetics. My body is a tool.", scores: { S_Morphological: 3 } },
        { text: "No. I would rather die as a human than live as a monster.", scores: { S_Augmentation: 1, S_Processing: 1 } }
      ]
    },
    {
      id: 13,
      text: "You can win any negotiation by secreting a pheromone that induces absolute trust in your target. However, this will eventually burn out your own ability to feel genuine emotion. Is it worth it?",
      options: [
        { text: "Yes. In this world, trust is a resource to be exploited, and emotions are a liability.", scores: { S_Pheromonal: 3 } },
        { text: "No. My emotions are what make me who I am.", scores: { S_Taibhsear: 1, S_Covenants: 1 } }
      ]
    },
    {
      id: 14,
      text: "You have the opportunity to join a 'Hive-Network' of biological computing, allowing you to process data at incredible speeds. The cost is that your 'I' will become a 'We.' Do you accept?",
      options: [
        { text: "Yes. The collective is stronger, and my individual ego is a small price for such power.", scores: { S_Proliferant: 3 } },
        { text: "No. My mind belongs to me alone.", scores: { S_Mechanist: 1, S_Processing: 1 } }
      ]
    },
    {
      id: 15,
      text: "You can achieve near-immortality through 'Metabolic Mastery,' regenerating from any wound. But you will be in a constant state of starvation, and your body will always run at a fever pitch. Do you choose this path?",
      options: [
        { text: "Yes. I will endure any hunger to be truly unkillable.", scores: { S_Trophic: 3 } },
        { text: "No. That kind of hunger is a living hell.", scores: { S_Augmentation: 1, S_Sanitization: 1 } }
      ]
    },
    {
      id: 16,
      text: "You are offered a neural link to the City's infrastructure, allowing you to 'feel' the power-grid and control the city's defenses. It will slowly strip away your empathy. Do you plug in?",
      options: [
        { text: "Yes. To manage a city, one must be as objective as the machines that run it.", scores: { S_Mechanist: 3 } },
        { text: "No. I refuse to become a cold cog in a corporate machine.", scores: { S_Maya: 1, S_Covenants: 1 } }
      ]
    },
    {
      id: 17,
      text: "You want sensors that can see through the illusions of Wytches and track the heat-sigs of ghosts. The cost is permanent sensory overload and a detachment from 'natural' sight. Do you install them?",
      options: [
        { text: "Yes. I want to see the world as it truly is, no matter how painful.", scores: { S_Perceptics: 3 } },
        { text: "No. Some things are better left unseen.", scores: { S_Maya: 1, S_Taibhsear: 1 } }
      ]
    },
    {
      id: 18,
      text: "You need raw power to survive. You can replace your limbs with chrome that can crush steel, but you will lose the ability to feel the warmth of a fire or the touch of a loved one. Do you do it?",
      options: [
        { text: "Yes. Strength is the only currency that matters in a fight.", scores: { S_Augmentation: 3 } },
        { text: "No. To lose touch is to lose my connection to the world.", scores: { S_Morphological: 1, S_Alchemy: 1 } }
      ]
    },
    {
      id: 19,
      text: "You are a Wytch-Hunter. You can install 'Sanitization' modules that kill the Thrum around you, but they will cause you constant, agonizing migraines. Do you endure the pain?",
      options: [
        { text: "Yes. The chaos must be purged, and my pain is a badge of my dedication to Hard Reality.", scores: { S_Sanitization: 3 } },
        { text: "No. I will find another way to fight without destroying my own mind.", scores: { S_Wyrding: 1, S_Weft: 1 } }
      ]
    },
    {
      id: 20,
      text: "You can overclock your brain to see the world in slow motion, giving you impossible reaction times. But you risk your brain literally 'cooking' itself during use. Do you pull the trigger?",
      options: [
        { text: "Yes. A few moments of godhood are worth a lifetime of cognitive decay.", scores: { S_Processing: 3 } },
        { text: "No. I'd rather move at the speed of life and keep my mind intact.", scores: { S_Wyrding: 1, S_Uchronia: 1 } }
      ]
    },
    {
      id: 21,
      text: "You can read the minds of others by using your own soul as a sieve, but you risk filtering out your own identity and becoming a 'Semantic Ghost.' Do you look?",
      options: [
        { text: "Yes. Information is the ultimate power, and I will sacrifice my 'self' to know the truth.", scores: { S_Taibhsear: 3 } },
        { text: "No. My secrets are my own, and I will respect the secrets of others.", scores: { S_Pheromonal: 1, S_Maya: 1 } }
      ]
    },
    {
      id: 22,
      text: "You can stabilize a single 'lucky' future, ensuring your success. But every time you do, you draw the attention of Pandemonium entities who hunger for your 'Luck.' Do you take the chance?",
      options: [
        { text: "Yes. I will gamble with the devil to win today.", scores: { S_Wyrding: 3 } },
        { text: "No. I will make my own luck through effort, not manipulation.", scores: { S_Alchemy: 1, S_Processing: 1 } }
      ]
    },
    {
      id: 23,
      text: "You can 'bottle' stability into potions that can heal or destroy. To make them truly powerful, you must be hyper-specific, limiting their use to a single moment in time. Are you willing to be that precise?",
      options: [
        { text: "Yes. Perfection requires focus, and I will be the master of the 'Particular.'", scores: { S_Alchemy: 3 } },
        { text: "No. I need power that is flexible, not fragile.", scores: { S_Symbiotic: 1, S_Uchronia: 1 } }
      ]
    },
    {
      id: 24,
      text: "To cast a permanent blessing or curse, you must literally 'forget' the memory that fuels it. Would you forget your first love's face to protect your city?",
      options: [
        { text: "Yes. My memories are a resource to be spent for the greater good.", scores: { S_Weft: 3 } },
        { text: "No. My memories are all I truly own. I will not hollow myself out.", scores: { S_Perceptics: 1, S_Covenants: 1 } }
      ]
    },
    {
      id: 25,
      text: "You can 'skip' through time and space by convincing the universe you are already at your destination. But if you fail, you may be lost in the gaps between realities. Do you take the leap?",
      options: [
        { text: "Yes. Distance is just an illusion I am happy to break.", scores: { S_Uchronia: 3 } },
        { text: "No. I will walk the path the long way and stay grounded in reality.", scores: { S_Augmentation: 1, S_Trophic: 1 } }
      ]
    },
    {
      id: 26,
      text: "You can make a contract with a Pandemonium entity for immense power. You must follow a strict 'Taboo' for the rest of your life (e.g., never speaking your true name). Do you sign?",
      options: [
        { text: "Yes. I can follow any rule if it grants me the strength to survive.", scores: { S_Covenants: 3 } },
        { text: "No. I will be no one's servant, and I will follow no one's rules but my own.", scores: { S_Morphological: 1, S_Wyrding: 1 } }
      ]
    },
    {
      id: 27,
      text: "You can reshape reality with 'Maya,' creating illusions that can deceive even the Thrum itself. But if you hold an illusion too long, you might become it. Do you dare to dream?",
      options: [
        { text: "Yes. Reality is a lie anyway; I might as well tell a better one.", scores: { S_Maya: 3 } },
        { text: "No. I want to stand on solid ground, not a house of mirrors.", scores: { S_Sanitization: 1, S_Perceptics: 1 } }
      ]
    }
  ],
  results: {
    backgrounds: {
      B_Corpo: {
        title: "The Client State Citizen",
        quote: "Efficiency through Hard Reality.",
        description: "You are a product of the Citadel, a citizen of a sovereign corporate fortress like the Client State of Boston. You grew up in a world of clean lines, climate-controlled air, and the absolute certainty of the urban grid. To you, 'Hard Reality' is not an oppression, but a shield against the evolutionary chaos of the Thrum."
      },
      B_Street: {
        title: "The Sanctuary Survivor",
        quote: "Cunning in the Gray Markets.",
        description: "You grew up in the shadows of the Client State, in the 'Sanctuary Cities' where the grid is patchy and the law is whatever the local Fixer says it is. Your life has been a constant juggle of jury-rigged tech, street-level wetware, and the ancient folk-wytchcraft of your ancestors."
      },
      B_Nomad: {
        title: "The Feral Outlander",
        quote: "Untethered in the Ruins.",
        description: "You are a child of the ruins, a predator of the shifting sands where the Thrum is at its most violent. You have no home but the road and no masters but the entities of Pandemonium that you've learned to avoid or appease. You don't just survive the Thrum; you are a part of it."
      }
    },
    archetypes: {
      A_Anchor: {
        title: "The Anchor",
        quote: "The Unyielding Bastion.",
        description: "You are the one who stands between your team and the horrors of the world. Whether through heavy Cyberware reinforcement or Biogenic structural adaptations, you are nearly impossible to move and even harder to kill. In a world where reality is shifting, you are the fixed point."
      },
      A_Weaver: {
        title: "The Weaver",
        quote: "The Architect of Intent.",
        description: "You don't just survive reality; you shape it. Whether through Wytchcraft rituals or Pheromonal dominance, you control the battlefield by manipulating the minds and souls of those around you. You weave the frequencies of the Thrum into a tapestry that favors your team."
      },
      A_Conduit: {
        title: "The Conduit",
        quote: "The Information Nexus.",
        description: "Knowledge is the only currency you truly value. You are the logistician, the hacker, and the broker who manages the flow of data and energy. You see the weaknesses in every system and the connections between every soul."
      },
      A_Phantom: {
        title: "The Phantom",
        quote: "The Semantic Ghost.",
        description: "You strike from the gaps between realities. You are the infiltrator, the assassin, and the scout who moves through the world unseen and unheard. You gather intelligence and eliminate targets without ever leaving a footprint."
      }
    },
    subspecialties: {
      S_Symbiotic: { title: "Symbiotic Branch", horror: "Hosting a sentient 'Passenger' from Pandemonium.", manifestation: "You are never truly alone. You can feel the Passenger coiled around your spine or pulsing behind your eyes. If you don't feed it, it will start to eat you from the inside out." },
      S_Morphological: { title: "Morphological Branch", horror: "The loss of a permanent shape.", manifestation: "Your body is a shifting lattice of chitin and muscle. Eventually, your body might 'forget' how to be human at all." },
      S_Pheromonal: { title: "Pheromonal Branch", horror: "The death of genuine emotion.", manifestation: "You can command a room with a scent, but your own endocrine system is a scorched wasteland. You find it impossible to feel the very emotions you simulate in others." },
      S_Proliferant: { title: "Proliferant Branch", horror: "Identity erosion in the Hive.", manifestation: "You are a node in a fungal network. Your individual ego is being slowly digested by the colony you host." },
      S_Trophic: { title: "Trophic Branch", horror: "The Metabolic Fever.", manifestation: "You are nearly unkillable, but your body runs at a temperature that would cook a normal human. You are in a constant, agonizing state of starvation." },
      S_Mechanist: { title: "Mechanist Branch", horror: "The Cold Logic Personality.", manifestation: "You manage massive logistics with a thought, but biological empathy is becoming an 'error' in your code. You are becoming a god of the gears." },
      S_Perceptics: { title: "Perceptics Branch", horror: "Chronic Sensory Overload.", manifestation: "You see the world as a cascading waterfall of data, but you can no longer see a sunset or a smile without a data-overlay telling you its exact frequency." },
      S_Augmentation: { title: "Augmentation Branch", horror: "Sensation Loss.", manifestation: "You can crush steel with your bare hands, but you can't feel the texture of silk or the warmth of a hand." },
      S_Sanitization: { title: "Sanitization Branch", horror: "Biological Nausea & Migraines.", manifestation: "You carry the 'Hard Reality' with you, but it makes you physically ill. You suffer from permanent migraines and constant nausea." },
      S_Processing: { title: "Processing Branch", horror: "Neural Burn.", manifestation: "You move as if everyone else is standing still, but every time you overclock, you can feel your brain cooking." },
      S_Taibhsear: { title: "Taibhsear", horror: "Depersonalization.", manifestation: "You can read any mind, but you risk filtering out your own identity. You are becoming a 'Semantic Ghost'." },
      S_Wyrding: { title: "Wyrding", horror: "Pandemonium Attention.", manifestation: "Your luck is a debt that will eventually be collected by things that live in the Thrum." },
      S_Alchemy: { title: "Alchemy & Pharma", horror: "The Fragility of Perfection.", manifestation: "You can bottle miracles, but your power is hyper-specific. One missed detail turns stability into a nightmare." },
      S_Weft: { title: "Weft-Work", horror: "Memory Sacrifice.", manifestation: "To cast a spell, you must literally 'forget' the memory that fuels it. You are becoming a hollow shell, one forgotten memory at a time." },
      S_Uchronia: { title: "Uchronia", horror: "Spatial Amnesia.", manifestation: "The more you skip through time and space, the more the universe 'forgets' where you actually belong." },
      S_Covenants: { title: "Covenants", horror: "The Uslovie (The Taboo).", manifestation: "Your power is backed by a Patron. The moment you break your Taboo, you will unravel instantly." },
      S_Maya: { title: "Maya", horror: "Becoming the Lie.", manifestation: "You might forget who you were before the mask, and you'll be trapped in a lie forever." }
    }
  }
};
