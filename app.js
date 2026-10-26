const heroes = [
  { name: "Alchemist", file: "alchemist", attr: "Сила", roles: ["Керри", "Мидер"], difficulty: "★★☆", tier: "Средние", desc: "Быстро фармит.", lore: "lore.html?hero=Alchemist" },
  { name: "Axe", file: "axe", attr: "Сила", roles: ["Оффлейнер"], difficulty: "★☆☆", tier: "Легкие", desc: "Прыгает в толпу.", lore: "lore.html?hero=Axe" },
  { name: "Bristleback", file: "bristleback", attr: "Сила", roles: ["Оффлейнер"], difficulty: "★☆☆", tier: "Легкие", desc: "Живучий танк.", lore: "lore.html?hero=Bristleback" },
  { name: "Centaur Warrunner", file: "centaur", attr: "Сила", roles: ["Оффлейнер"], difficulty: "★☆☆", tier: "Легкие", desc: "Танк с AoE-станом.", lore: "lore.html?hero=Centaur%20Warrunner" },
  { name: "Chaos Knight", file: "chaos_knight", attr: "Сила", roles: ["Керри"], difficulty: "★☆☆", tier: "Легкие", desc: "Иллюзии и урон.", lore: "lore.html?hero=Chaos%20Knight" },
  { name: "Dawnbreaker", file: "dawnbreaker", attr: "Сила", roles: ["Оффлейнер", "Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Летает на помощь.", lore: "lore.html?hero=Dawnbreaker" },
  { name: "Doom", file: "doom_bringer", attr: "Сила", roles: ["Оффлейнер"], difficulty: "★★☆", tier: "Средние", desc: "Запрещает способности.", lore: "lore.html?hero=Doom" },
  { name: "Dragon Knight", file: "dragon_knight", attr: "Сила", roles: ["Оффлейнер", "Мидер"], difficulty: "★☆☆", tier: "Легкие", desc: "Превращается в дракона.", lore: "lore.html?hero=Dragon%20Knight" },
  { name: "Earth Spirit", file: "earth_spirit", attr: "Сила", roles: ["Поддержка"], difficulty: "★★★", tier: "Сложные", desc: "Сложный герой на камнях.", lore: "lore.html?hero=Earth%20Spirit" },
  { name: "Earthshaker", file: "earthshaker", attr: "Сила", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Echo Slam решает драки.", lore: "lore.html?hero=Earthshaker" },
  { name: "Elder Titan", file: "elder_titan", attr: "Сила", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Снижает броню.", lore: "lore.html?hero=Elder%20Titan" },
  { name: "Huskar", file: "huskar", attr: "Сила", roles: ["Керри", "Мидер"], difficulty: "★☆☆", tier: "Легкие", desc: "Чем меньше HP, тем сильнее.", lore: "lore.html?hero=Huskar" },
  { name: "Kunkka", file: "kunkka", attr: "Сила", roles: ["Мидер", "Оффлейнер"], difficulty: "★★☆", tier: "Средние", desc: "Бочки и корабль.", lore: "lore.html?hero=Kunkka" },
  { name: "Legion Commander", file: "legion_commander", attr: "Сила", roles: ["Оффлейнер"], difficulty: "★☆☆", tier: "Легкие", desc: "Дуэли дают урон.", lore: "lore.html?hero=Legion%20Commander" },
  { name: "Lifestealer", file: "life_stealer", attr: "Сила", roles: ["Керри"], difficulty: "★★☆", tier: "Средние", desc: "Вампирит и прячется.", lore: "lore.html?hero=Lifestealer" },
  { name: "Mars", file: "mars", attr: "Сила", roles: ["Оффлейнер"], difficulty: "★★☆", tier: "Средние", desc: "Арена и копьё.", lore: "lore.html?hero=Mars" },
  { name: "Night Stalker", file: "night_stalker", attr: "Сила", roles: ["Оффлейнер"], difficulty: "★☆☆", tier: "Легкие", desc: "Сильнее ночью.", lore: "lore.html?hero=Night%20Stalker" },
  { name: "Ogre Magi", file: "ogre_magi", attr: "Сила", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Контроль и мультикаст.", lore: "lore.html?hero=Ogre%20Magi" },
  { name: "Omniknight", file: "omniknight", attr: "Сила", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Лечит и даёт иммунитет.", lore: "lore.html?hero=Omniknight" },
  { name: "Primal Beast", file: "primal_beast", attr: "Сила", roles: ["Оффлейнер"], difficulty: "★☆☆", tier: "Легкие", desc: "Топчет врагов.", lore: "lore.html?hero=Primal%20Beast" },
  { name: "Pudge", file: "pudge", attr: "Сила", roles: ["Оффлейнер", "Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Крюк решает.", lore: "lore.html?hero=Pudge" },
  { name: "Slardar", file: "slardar", attr: "Сила", roles: ["Оффлейнер"], difficulty: "★☆☆", tier: "Легкие", desc: "Снижает броню.", lore: "lore.html?hero=Slardar" },
  { name: "Spirit Breaker", file: "spirit_breaker", attr: "Сила", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Бегает и станит.", lore: "lore.html?hero=Spirit%20Breaker" },
  { name: "Sven", file: "sven", attr: "Сила", roles: ["Керри"], difficulty: "★☆☆", tier: "Легкие", desc: "Огромный урон.", lore: "lore.html?hero=Sven" },
  { name: "Tidehunter", file: "tidehunter", attr: "Сила", roles: ["Оффлейнер"], difficulty: "★☆☆", tier: "Легкие", desc: "Ravage решает.", lore: "lore.html?hero=Tidehunter" },
  { name: "Tiny", file: "tiny", attr: "Сила", roles: ["Мидер", "Оффлейнер"], difficulty: "★★☆", tier: "Средние", desc: "Кидает героев.", lore: "lore.html?hero=Tiny" },
  { name: "Treant Protector", file: "treant", attr: "Сила", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Лечит и станит.", lore: "lore.html?hero=Treant%20Protector" },
  { name: "Tusk", file: "tusk", attr: "Сила", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Кидает и станит.", lore: "lore.html?hero=Tusk" },
  { name: "Underlord", file: "abyssal_underlord", attr: "Сила", roles: ["Оффлейнер"], difficulty: "★★☆", tier: "Средние", desc: "Портал и усиление.", lore: "lore.html?hero=Underlord" },
  { name: "Undying", file: "undying", attr: "Сила", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Гроб и воровство силы.", lore: "lore.html?hero=Undying" },
  { name: "Wraith King", file: "skeleton_king", attr: "Сила", roles: ["Керри"], difficulty: "★☆☆", tier: "Легкие", desc: "Воскрешение.", lore: "lore.html?hero=Wraith%20King" },

  { name: "Anti-Mage", file: "antimage", attr: "Ловкость", roles: ["Керри"], difficulty: "★☆☆", tier: "Легкие", desc: "Сжигает ману.", lore: "lore.html?hero=Anti-Mage" },
  { name: "Arc Warden", file: "arc_warden", attr: "Ловкость", roles: ["Керри", "Мидер"], difficulty: "★★★", tier: "Сложные", desc: "Создаёт копию.", lore: "lore.html?hero=Arc%20Warden" },
  { name: "Bloodseeker", file: "bloodseeker", attr: "Ловкость", roles: ["Керри", "Оффлейнер"], difficulty: "★☆☆", tier: "Легкие", desc: "Бежит за ранеными.", lore: "lore.html?hero=Bloodseeker" },
  { name: "Bounty Hunter", file: "bounty_hunter", attr: "Ловкость", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Ищет врагов в инвизе.", lore: "lore.html?hero=Bounty%20Hunter" },
  { name: "Clinkz", file: "clinkz", attr: "Ловкость", roles: ["Керри"], difficulty: "★★☆", tier: "Средние", desc: "Стреляет издалека.", lore: "lore.html?hero=Clinkz" },
  { name: "Drow Ranger", file: "drow_ranger", attr: "Ловкость", roles: ["Керри"], difficulty: "★☆☆", tier: "Легкие", desc: "Стреляет издалека.", lore: "lore.html?hero=Drow%20Ranger" },
  { name: "Ember Spirit", file: "ember_spirit", attr: "Ловкость", roles: ["Мидер", "Керри"], difficulty: "★★☆", tier: "Средние", desc: "Прыгает по духам.", lore: "lore.html?hero=Ember%20Spirit" },
  { name: "Faceless Void", file: "faceless_void", attr: "Ловкость", roles: ["Керри"], difficulty: "★★☆", tier: "Средние", desc: "Замораживает в зоне.", lore: "lore.html?hero=Faceless%20Void" },
  { name: "Gyrocopter", file: "gyrocopter", attr: "Ловкость", roles: ["Керри"], difficulty: "★☆☆", tier: "Легкие", desc: "Ракеты по площади.", lore: "lore.html?hero=Gyrocopter" },
  { name: "Hoodwink", file: "hoodwink", attr: "Ловкость", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Арбалет и ловушки.", lore: "lore.html?hero=Hoodwink" },
  { name: "Juggernaut", file: "juggernaut", attr: "Ловкость", roles: ["Керри"], difficulty: "★☆☆", tier: "Легкие", desc: "Крутится и неуязвим.", lore: "lore.html?hero=Juggernaut" },
  { name: "Kez", file: "kez", attr: "Ловкость", roles: ["Керри", "Мидер"], difficulty: "★★☆", tier: "Средние", desc: "Два стиля боя.", lore: "lore.html?hero=Kez" },
  { name: "Lone Druid", file: "lone_druid", attr: "Ловкость", roles: ["Керри", "Оффлейнер"], difficulty: "★★★", tier: "Сложные", desc: "Управляет медведем.", lore: "lore.html?hero=Lone%20Druid" },
  { name: "Luna", file: "luna", attr: "Ловкость", roles: ["Керри"], difficulty: "★☆☆", tier: "Легкие", desc: "Урон по площади.", lore: "lore.html?hero=Luna" },
  { name: "Medusa", file: "medusa", attr: "Ловкость", roles: ["Керри"], difficulty: "★☆☆", tier: "Легкие", desc: "Живучая керри.", lore: "lore.html?hero=Medusa" },
  { name: "Meepo", file: "meepo", attr: "Ловкость", roles: ["Мидер"], difficulty: "★★★", tier: "Сложные", desc: "Много копий.", lore: "lore.html?hero=Meepo" },
  { name: "Mirana", file: "mirana", attr: "Ловкость", roles: ["Поддержка", "Керри"], difficulty: "★★☆", tier: "Средние", desc: "Стрела и невидимость.", lore: "lore.html?hero=Mirana" },
  { name: "Monkey King", file: "monkey_king", attr: "Ловкость", roles: ["Керри", "Мидер"], difficulty: "★★☆", tier: "Средние", desc: "Прыгает с дерева.", lore: "lore.html?hero=Monkey%20King" },
  { name: "Morphling", file: "morphling", attr: "Ловкость", roles: ["Керри", "Мидер"], difficulty: "★★★", tier: "Сложные", desc: "Меняет атрибуты.", lore: "lore.html?hero=Morphling" },
  { name: "Naga Siren", file: "naga_siren", attr: "Ловкость", roles: ["Керри"], difficulty: "★★☆", tier: "Средние", desc: "Иллюзии и сон.", lore: "lore.html?hero=Naga%20Siren" },
  { name: "Phantom Assassin", file: "phantom_assassin", attr: "Ловкость", roles: ["Керри"], difficulty: "★☆☆", tier: "Легкие", desc: "Криты и уклонение.", lore: "lore.html?hero=Phantom%20Assassin" },
  { name: "Phantom Lancer", file: "phantom_lancer", attr: "Ловкость", roles: ["Керри"], difficulty: "★★☆", tier: "Средние", desc: "Толпа иллюзий.", lore: "lore.html?hero=Phantom%20Lancer" },
  { name: "Razor", file: "razor", attr: "Ловкость", roles: ["Мидер", "Керри"], difficulty: "★☆☆", tier: "Легкие", desc: "Крадёт урон.", lore: "lore.html?hero=Razor" },
  { name: "Riki", file: "riki", attr: "Ловкость", roles: ["Керри"], difficulty: "★☆☆", tier: "Легкие", desc: "Постоянный инвиз.", lore: "lore.html?hero=Riki" },
  { name: "Shadow Fiend", file: "nevermore", attr: "Ловкость", roles: ["Мидер"], difficulty: "★★☆", tier: "Средние", desc: "Собирает души.", lore: "lore.html?hero=Shadow%20Fiend" },
  { name: "Slark", file: "slark", attr: "Ловкость", roles: ["Керри"], difficulty: "★★☆", tier: "Средние", desc: "Крадёт атрибуты.", lore: "lore.html?hero=Slark" },
  { name: "Sniper", file: "sniper", attr: "Ловкость", roles: ["Керри", "Мидер"], difficulty: "★☆☆", tier: "Легкие", desc: "Дальний урон.", lore: "lore.html?hero=Sniper" },
  { name: "Spectre", file: "spectre", attr: "Ловкость", roles: ["Керри"], difficulty: "★★☆", tier: "Средние", desc: "Прыгает на врагов.", lore: "lore.html?hero=Spectre" },
  { name: "Templar Assassin", file: "templar_assassin", attr: "Ловкость", roles: ["Мидер", "Керри"], difficulty: "★★☆", tier: "Средние", desc: "Щит и урон.", lore: "lore.html?hero=Templar%20Assassin" },
  { name: "Terrorblade", file: "terrorblade", attr: "Ловкость", roles: ["Керри"], difficulty: "★★☆", tier: "Средние", desc: "Меняет HP.", lore: "lore.html?hero=Terrorblade" },
  { name: "Troll Warlord", file: "troll_warlord", attr: "Ловкость", roles: ["Керри"], difficulty: "★☆☆", tier: "Легкие", desc: "Быстро бьёт.", lore: "lore.html?hero=Troll%20Warlord" },
  { name: "Ursa", file: "ursa", attr: "Ловкость", roles: ["Керри", "Оффлейнер"], difficulty: "★☆☆", tier: "Легкие", desc: "Убивает одиноких.", lore: "lore.html?hero=Ursa" },
  { name: "Viper", file: "viper", attr: "Ловкость", roles: ["Мидер", "Оффлейнер"], difficulty: "★☆☆", tier: "Легкие", desc: "Травит врагов.", lore: "lore.html?hero=Viper" },
  { name: "Weaver", file: "weaver", attr: "Ловкость", roles: ["Керри", "Оффлейнер"], difficulty: "★★☆", tier: "Средние", desc: "Отматывает время.", lore: "lore.html?hero=Weaver" },

  { name: "Ancient Apparition", file: "ancient_apparition", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Блокирует лечение.", lore: "lore.html?hero=Ancient%20Apparition" },
  { name: "Chen", file: "chen", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Подчиняет крипов.", lore: "lore.html?hero=Chen" },
  { name: "Crystal Maiden", file: "crystal_maiden", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Даёт ману и замораживает.", lore: "lore.html?hero=Crystal%20Maiden" },
  { name: "Death Prophet", file: "death_prophet", attr: "Интеллект", roles: ["Оффлейнер", "Мидер"], difficulty: "★☆☆", tier: "Легкие", desc: "Духи ломают башни.", lore: "lore.html?hero=Death%20Prophet" },
  { name: "Disruptor", file: "disruptor", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Блокирует куполом.", lore: "lore.html?hero=Disruptor" },
  { name: "Enchantress", file: "enchantress", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Подчиняет крипов.", lore: "lore.html?hero=Enchantress" },
  { name: "Grimstroke", file: "grimstroke", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Рисует и связывает.", lore: "lore.html?hero=Grimstroke" },
  { name: "Invoker", file: "invoker", attr: "Интеллект", roles: ["Мидер"], difficulty: "★★★", tier: "Сложные", desc: "10 заклинаний.", lore: "lore.html?hero=Invoker" },
  { name: "Jakiro", file: "jakiro", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Огонь и лёд.", lore: "lore.html?hero=Jakiro" },
  { name: "Keeper of the Light", file: "keeper_of_the_light", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Даёт ману.", lore: "lore.html?hero=Keeper%20of%20the%20Light" },
  { name: "Leshrac", file: "leshrac", attr: "Интеллект", roles: ["Мидер", "Оффлейнер"], difficulty: "★☆☆", tier: "Легкие", desc: "Ломает башни.", lore: "lore.html?hero=Leshrac" },
  { name: "Lich", file: "lich", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Замедление и ульт.", lore: "lore.html?hero=Lich" },
  { name: "Lina", file: "lina", attr: "Интеллект", roles: ["Мидер", "Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Мощный урон.", lore: "lore.html?hero=Lina" },
  { name: "Lion", file: "lion", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Два стана и палец.", lore: "lore.html?hero=Lion" },
  { name: "Muerta", file: "muerta", attr: "Интеллект", roles: ["Керри", "Мидер"], difficulty: "★☆☆", tier: "Легкие", desc: "Магический урон.", lore: "lore.html?hero=Muerta" },
  { name: "Necrophos", file: "necrolyte", attr: "Интеллект", roles: ["Оффлейнер"], difficulty: "★☆☆", tier: "Легкие", desc: "Лечится от урона.", lore: "lore.html?hero=Necrophos" },
  { name: "Oracle", file: "oracle", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Лечение и урон.", lore: "lore.html?hero=Oracle" },
  { name: "Outworld Destroyer", file: "obsidian_destroyer", attr: "Интеллект", roles: ["Мидер"], difficulty: "★★☆", tier: "Средние", desc: "Ворует интеллект.", lore: "lore.html?hero=Outworld%20Destroyer" },
  { name: "Puck", file: "puck", attr: "Интеллект", roles: ["Мидер"], difficulty: "★★☆", tier: "Средние", desc: "Мобильный маг.", lore: "lore.html?hero=Puck" },
  { name: "Pugna", file: "pugna", attr: "Интеллект", roles: ["Мидер", "Оффлейнер"], difficulty: "★★☆", tier: "Средние", desc: "Ломает башни.", lore: "lore.html?hero=Pugna" },
  { name: "Queen of Pain", file: "queenofpain", attr: "Интеллект", roles: ["Мидер"], difficulty: "★★☆", tier: "Средние", desc: "Взрывной урон.", lore: "lore.html?hero=Queen%20of%20Pain" },
  { name: "Ringmaster", file: "ringmaster", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Циркач с контролем.", lore: "lore.html?hero=Ringmaster" },
  { name: "Rubick", file: "rubick", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★★★", tier: "Сложные", desc: "Крадёт заклинания.", lore: "lore.html?hero=Rubick" },
  { name: "Shadow Demon", file: "shadow_demon", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Иллюзии и спасение.", lore: "lore.html?hero=Shadow%20Demon" },
  { name: "Shadow Shaman", file: "shadow_shaman", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Контроль и змеи.", lore: "lore.html?hero=Shadow%20Shaman" },
  { name: "Silencer", file: "silencer", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Запрет каста.", lore: "lore.html?hero=Silencer" },
  { name: "Skywrath Mage", file: "skywrath_mage", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Магический урон.", lore: "lore.html?hero=Skywrath%20Mage" },
  { name: "Storm Spirit", file: "storm_spirit", attr: "Интеллект", roles: ["Мидер"], difficulty: "★★★", tier: "Сложные", desc: "Летает на мане.", lore: "lore.html?hero=Storm%20Spirit" },
  { name: "Tinker", file: "tinker", attr: "Интеллект", roles: ["Мидер"], difficulty: "★★★", tier: "Сложные", desc: "Перезарядка и прыжки.", lore: "lore.html?hero=Tinker" },
  { name: "Warlock", file: "warlock", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Голем и лечение.", lore: "lore.html?hero=Warlock" },
  { name: "Witch Doctor", file: "witch_doctor", attr: "Интеллект", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Лечит и крутит ульт.", lore: "lore.html?hero=Witch%20Doctor" },
  { name: "Zeus", file: "zuus", attr: "Интеллект", roles: ["Мидер", "Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Молнии по карте.", lore: "lore.html?hero=Zeus" },

  { name: "Abaddon", file: "abaddon", attr: "Универсальный", roles: ["Поддержка", "Оффлейнер"], difficulty: "★☆☆", tier: "Легкие", desc: "Снимает дебаффы.", lore: "lore.html?hero=Abaddon" },
  { name: "Bane", file: "bane", attr: "Универсальный", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Усыпляет и контролит.", lore: "lore.html?hero=Bane" },
  { name: "Batrider", file: "batrider", attr: "Универсальный", roles: ["Оффлейнер"], difficulty: "★★☆", tier: "Средние", desc: "Тащит врагов к своим.", lore: "lore.html?hero=Batrider" },
  { name: "Beastmaster", file: "beastmaster", attr: "Универсальный", roles: ["Оффлейнер"], difficulty: "★★☆", tier: "Средние", desc: "Призывает зверей.", lore: "lore.html?hero=Beastmaster" },
  { name: "Brewmaster", file: "brewmaster", attr: "Универсальный", roles: ["Оффлейнер"], difficulty: "★★☆", tier: "Средние", desc: "Делится на трёх панд.", lore: "lore.html?hero=Brewmaster" },
  { name: "Broodmother", file: "broodmother", attr: "Универсальный", roles: ["Оффлейнер"], difficulty: "★★☆", tier: "Средние", desc: "Плодит пауков.", lore: "lore.html?hero=Broodmother" },
  { name: "Clockwerk", file: "rattletrap", attr: "Универсальный", roles: ["Оффлейнер", "Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Запирает в коконе.", lore: "lore.html?hero=Clockwerk" },
  { name: "Dark Seer", file: "dark_seer", attr: "Универсальный", roles: ["Оффлейнер"], difficulty: "★★☆", tier: "Средние", desc: "Копии врагов.", lore: "lore.html?hero=Dark%20Seer" },
  { name: "Dark Willow", file: "dark_willow", attr: "Универсальный", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Фея с контролем.", lore: "lore.html?hero=Dark%20Willow" },
  { name: "Dazzle", file: "dazzle", attr: "Универсальный", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Спасает от смерти.", lore: "lore.html?hero=Dazzle" },
  { name: "Enigma", file: "enigma", attr: "Универсальный", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Black Hole решает драки.", lore: "lore.html?hero=Enigma" },
  { name: "Io", file: "wisp", attr: "Универсальный", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Связан с союзником.", lore: "lore.html?hero=Io" },
  { name: "Lycan", file: "lycan", attr: "Универсальный", roles: ["Керри", "Оффлейнер"], difficulty: "★★☆", tier: "Средние", desc: "Волки и башни.", lore: "lore.html?hero=Lycan" },
  { name: "Magnus", file: "magnataur", attr: "Универсальный", roles: ["Оффлейнер", "Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Стягивает врагов.", lore: "lore.html?hero=Magnus" },
  { name: "Marci", file: "marci", attr: "Универсальный", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Прыгает и кидает.", lore: "lore.html?hero=Marci" },
  { name: "Nature's Prophet", file: "furion", attr: "Универсальный", roles: ["Оффлейнер", "Керри"], difficulty: "★★☆", tier: "Средние", desc: "Телепорт по карте.", lore: "lore.html?hero=Nature's%20Prophet" },
  { name: "Nyx Assassin", file: "nyx_assassin", attr: "Универсальный", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Станит из инвиза.", lore: "lore.html?hero=Nyx%20Assassin" },
  { name: "Pangolier", file: "pangolier", attr: "Универсальный", roles: ["Мидер", "Оффлейнер"], difficulty: "★★☆", tier: "Средние", desc: "Катается и сбивает.", lore: "lore.html?hero=Pangolier" },
  { name: "Phoenix", file: "phoenix", attr: "Универсальный", roles: ["Поддержка", "Оффлейнер"], difficulty: "★★☆", tier: "Средние", desc: "Сжигает себя.", lore: "lore.html?hero=Phoenix" },
  { name: "Sand King", file: "sand_king", attr: "Универсальный", roles: ["Оффлейнер", "Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Под землёй и AoE.", lore: "lore.html?hero=Sand%20King" },
  { name: "Snapfire", file: "snapfire", attr: "Универсальный", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Печеньки и жаба.", lore: "lore.html?hero=Snapfire" },
  { name: "Techies", file: "techies", attr: "Универсальный", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Мины и взрывы.", lore: "lore.html?hero=Techies" },
  { name: "Timbersaw", file: "shredder", attr: "Универсальный", roles: ["Оффлейнер"], difficulty: "★★☆", tier: "Средние", desc: "Рубит деревья.", lore: "lore.html?hero=Timbersaw" },
  { name: "Vengeful Spirit", file: "vengefulspirit", attr: "Универсальный", roles: ["Поддержка"], difficulty: "★☆☆", tier: "Легкие", desc: "Меняется местами.", lore: "lore.html?hero=Vengeful%20Spirit" },
  { name: "Venomancer", file: "venomancer", attr: "Универсальный", roles: ["Поддержка", "Оффлейнер"], difficulty: "★☆☆", tier: "Легкие", desc: "Травит и замедляет.", lore: "lore.html?hero=Venomancer" },
  { name: "Visage", file: "visage", attr: "Универсальный", roles: ["Оффлейнер"], difficulty: "★★★", tier: "Сложные", desc: "Управляет птицами.", lore: "lore.html?hero=Visage" },
  { name: "Void Spirit", file: "void_spirit", attr: "Универсальный", roles: ["Мидер"], difficulty: "★★☆", tier: "Средние", desc: "Прыгает и уклоняется.", lore: "lore.html?hero=Void%20Spirit" },
  { name: "Windranger", file: "windrunner", attr: "Универсальный", roles: ["Мидер", "Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Стрела и уклонение.", lore: "lore.html?hero=Windranger" },
  { name: "Winter Wyvern", file: "winter_wyvern", attr: "Универсальный", roles: ["Поддержка"], difficulty: "★★☆", tier: "Средние", desc: "Замораживает врагов.", lore: "lore.html?hero=Winter%20Wyvern" }
];

const terms = [
  { term: "Farm", def: "Добывать золото и опыт, убивая крипов." },
  { term: "Last hit", def: "Добить крипа, чтобы получить золото." },
  { term: "Deny", def: "Добить своего крипа, чтобы враг не получил золото." },
  { term: "Push", def: "Ломать башни и продвигать линию крипов к базе врага." },
  { term: "Pull", def: "Отводить своих крипов в лес, чтобы линия откатилась к тебе." },
  { term: "Stack", def: "Обновлять нейтральных крипов в лагере для большего фарма." },
  { term: "Harass", def: "Бить врага по чуть-чуть, чтобы он не мог фармить." },
  { term: "Gank", def: "Внезапное нападение на врага в другой линии." },
  { term: "Dive", def: "Прыжок под вышку врага ради убийства." },
  { term: "Bait", def: "Притворяться слабым, чтобы враг пошёл на тебя и попал в ловушку." },
  { term: "Kite", def: "Бегать от врага и бить его, не давая догнать." },
  { term: "Juke", def: "Прятаться в лесу, чтобы сбить врага со следа." },
  { term: "Turn", def: "Резко развернуться и убить того, кто тебя преследует." },
  { term: "Manfight", def: "Драться один на один без бегства." },
  { term: "Disable", def: "Любой контроль: стан, рут, сайленс, хекс." },
  { term: "Stun", def: "Оглушение: враг не может двигаться и кастовать." },
  { term: "Root", def: "Обездвиживание: враг не ходит, но может кастовать." },
  { term: "Silence", def: "Запрет на заклинания, но движение остаётся." },
  { term: "Hex", def: "Превращение в животное: враг не ходит и не кастует." },
  { term: "Slow", def: "Замедление движения." },
  { term: "Bash", def: "Шанс оглушить с удара." },
  { term: "AoE", def: "Area of Effect — урон или эффект по площади." },
  { term: "DoT", def: "Damage over Time — урон, который тикает со временем." },
  { term: "Nuke", def: "Мощный разовый урон заклинанием." },
  { term: "Buff", def: "Положительный эффект на героя." },
  { term: "Debuff", def: "Отрицательный эффект на героя." },
  { term: "Proc", def: "Срабатывание случайного эффекта (крит, баш, уклонение)." },
  { term: "RNG", def: "Random Number Generation — случайность в игре." },
  { term: "Mid", def: "Центральная линия карты." },
  { term: "Top", def: "Верхняя линия." },
  { term: "Bot", def: "Нижняя линия." },
  { term: "Safe lane", def: "Лёгкая линия, где керри фармит безопасно." },
  { term: "Offlane", def: "Сложная линия, где оффлейнер выживает против двоих." },
  { term: "High ground", def: "Возвышенность: преимущество в обзоре и защите." },
  { term: "Fog of War", def: "Туман войны: невидимые зоны карты." },
  { term: "Roshan", def: "Мощный нейтральный босс, дающий Aegis." },
  { term: "Rune", def: "Руна на реке: бафф или бонус." },
  { term: "Glyph", def: "Кнопка защиты башен от урона." },
  { term: "Fortify", def: "То же, что Glyph — защита башен." },
  { term: "Carry", def: "Герой, который к поздней игре становится сильнее всех." },
  { term: "Hard carry", def: "Керри, которому нужно очень много фарма." },
  { term: "Support", def: "Помогает команде: вардит, лечит, контролит." },
  { term: "Hard support", def: "Пятёрка: полностью жертвует собой ради команды." },
  { term: "Offlaner", def: "Игрок на сложной линии, обычно танк или инициатор." },
  { term: "Initiator", def: "Герой, который начинает драку контролем." },
  { term: "Tank", def: "Герой, который впитывает урон." },
  { term: "Roamer", def: "Игрок, который ходит по карте и ганкает." },
  { term: "Buyback", def: "Выкуп после смерти за золото." },
  { term: "Dieback", def: "Смерть сразу после buyback — потеря вдвойне." },
  { term: "Courier", def: "Курьер, который носит предметы." },
  { term: "Crow", def: "Улучшенный курьер." },
  { term: "BKB", def: "Black King Bar — предмет, дающий иммунитет к магии." },
  { term: "Dagger", def: "Blink Dagger — телепорт на короткое расстояние." },
  { term: "Blink", def: "То же, что Dagger." },
  { term: "Sentry", def: "Вард, который видит невидимок." },
  { term: "Observer", def: "Вард, который даёт обзор." },
  { term: "Dust", def: "Порошок, который подсвечивает невидимок." },
  { term: "Gem", def: "Gem of True Sight — постоянный обзор невидимок." },
  { term: "Guinsoo", def: "Scythe of Vyse — хекс по цели." },
  { term: "Sheepstick", def: "То же, что Guinsoo." },
  { term: "Rapier", def: "Divine Rapier — самый дорогой меч, теряется при смерти." },
  { term: "GG", def: "Good Game — конец игры, часто «сдаться»." },
  { term: "FB", def: "First Blood — первое убийство в матче." },
  { term: "KS", def: "Kill Steal — украсть убийство у союзника." },
  { term: "Feeder", def: "Игрок, который часто умирает и кормит врага." },
  { term: "Feed", def: "Умирать, отдавая врагу золото и опыт." },
  { term: "Noob", def: "Новичок, часто используется как оскорбление." },
  { term: "OOM", def: "Out of Mana — нет маны." },
  { term: "AFK", def: "Away From Keyboard — отошёл от клавиатуры." },
  { term: "Tilt", def: "Состояние злости и раздражения после неудач." },
  { term: "Throwing", def: "Слить игру, которая была почти выиграна." },
  { term: "Rat", def: "Крыса: герой, который ломает башни в обход." },
  { term: "Snowball", def: "Быстро усиливаться за счёт ранних убийств." },
  { term: "FF", def: "Forfeit — сдаться, закончить матч." },
  { term: "MIA", def: "Missing in Action — враг пропал с линии." },
  { term: "Tango", def: "Предмет для восстановления здоровья на линии." }
];

function createCard(hero) {
  const imgSrc = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.file}.png`;
  const rolesText = hero.roles.join(" / ");
  
  return `
    <div class="card">
      <img src="${imgSrc}" alt="${hero.name}" class="hero-img" onerror="this.src='https://via.placeholder.com/300x180?text=${hero.name}'">
      <div class="card-content">
        <h3>${hero.name}</h3>
        <div class="attr">${hero.attr} • ${rolesText}</div>
        <p><strong>Сложность:</strong> ${hero.difficulty}</p>
        <p>${hero.desc}</p>
        <a href="${hero.lore}" class="more-link">Подробнее →</a>
      </div>
    </div>
  `;
}

const container = document.getElementById("cards");
let activeAttr = [];
let activeRole = [];
let activeDiff = [];

function renderHeroes() {
  if (!container) return;
  
  let filtered = heroes;
  
  if (activeAttr.length > 0) {
    filtered = filtered.filter(h => activeAttr.includes(h.attr));
  }
  if (activeRole.length > 0) {
    filtered = filtered.filter(h => h.roles.some(r => activeRole.includes(r)));
  }
  if (activeDiff.length > 0) {
    filtered = filtered.filter(h => activeDiff.includes(h.tier));
  }

  if (filtered.length === 0) {
    container.innerHTML = `<p style="text-align:center; width:100%; grid-column: 1/-1; padding: 40px; font-weight:bold; color:#666;">По вашему запросу никого не найдено 😢</p>`;
  } else {
    container.innerHTML = filtered.map(createCard).join("");
  }
}
window.toggleFilter = function(type, value, btn) {
  let arr;
  if (type === 'attr') arr = activeAttr;
  else if (type === 'role') arr = activeRole;
  else if (type === 'diff') arr = activeDiff;

  if (value === 'all') {
    arr.length = 0;
    const group = btn.parentElement;
    group.querySelectorAll('.filter-btn').forEach(b => {
      if (b !== btn) b.classList.remove('active');
    });
    btn.classList.add('active'); 
  } else {
    const group = btn.parentElement;
    const allBtn = group.querySelector('.filter-btn'); 
  
    if (arr.includes(value)) {
      arr = arr.filter(v => v !== value); 
      btn.classList.remove('active');     
    } else {
      arr.push(value);                    
      btn.classList.add('active');       
    }
    
    if (arr.length === 0) {
      allBtn.classList.add('active');
    } else {
      allBtn.classList.remove('active');  
    }
  }
  
  renderHeroes();
};

const filterPanel = document.createElement("div");
filterPanel.className = "filter-panel";
filterPanel.innerHTML = `
  <div class="filter-group">
    <span>Атрибут:</span>
    <button class="filter-btn active" onclick="toggleFilter('attr', 'all', this)">Все</button>
    <button class="filter-btn" onclick="toggleFilter('attr', 'Сила', this)">Сила</button>
    <button class="filter-btn" onclick="toggleFilter('attr', 'Ловкость', this)">Ловкость</button>
    <button class="filter-btn" onclick="toggleFilter('attr', 'Интеллект', this)">Интеллект</button>
    <button class="filter-btn" onclick="toggleFilter('attr', 'Универсальный', this)">Универсал</button>
  </div>
  <div class="filter-group">
    <span>Роль:</span>
    <button class="filter-btn active" onclick="toggleFilter('role', 'all', this)">Все</button>
    <button class="filter-btn" onclick="toggleFilter('role', 'Керри', this)">Керри</button>
    <button class="filter-btn" onclick="toggleFilter('role', 'Мидер', this)">Мидер</button>
    <button class="filter-btn" onclick="toggleFilter('role', 'Оффлейнер', this)">Оффлейнер</button>
    <button class="filter-btn" onclick="toggleFilter('role', 'Поддержка', this)">Поддержка</button>
  </div>
  <div class="filter-group">
    <span>Сложность:</span>
    <button class="filter-btn active" onclick="toggleFilter('diff', 'all', this)">Все</button>
    <button class="filter-btn" onclick="toggleFilter('diff', 'Легкие', this)">Легкие</button>
    <button class="filter-btn" onclick="toggleFilter('diff', 'Средние', this)">Средние</button>
    <button class="filter-btn" onclick="toggleFilter('diff', 'Сложные', this)">Сложные</button>
  </div>
`;

document.querySelector('.heroes-header').appendChild(filterPanel);
renderHeroes();

const glossaryContainer = document.getElementById("glossary-list");
if (glossaryContainer) {
  glossaryContainer.innerHTML = "";
  terms.forEach((t) => {
    glossaryContainer.innerHTML += `
      <div class="term">
        <h4>${t.term}</h4>
        <p>${t.def}</p>
      </div>
    `;
  });
}

const header = document.getElementById("header");
if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});