let dados = [
    {
        titulo: "Sova",
        descricao: "Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape.",
        tags: 'iniciador',
        habilidades: [
            {
                nome: "DRONE CORUJA (C)",
                descricao_habilidade: "EQUIPE um drone coruja. DISPARE para acionar e pilotar o drone. Enquanto pilota o drone, DISPARE para atirar um dardo marcador. O dardo revelará a localização de qualquer jogador atingido. Inimigos podem destruir o Drone Coruja."
            },
            {
                nome: "FLECHA DE CHOQUE (Q)",
                descricao_habilidade: "EQUIPE um arco com uma flecha de choque. DISPARE para lançar a flecha, que explode com o impacto causando dano aos jogadores próximos. SEGURE O DISPARO para estender o alcance do projétil. Use o DISPARO ALTERNATIVO para adicionar até dois ricochetes à flecha."
            },
            {
                nome: "FLECHA RASTREADORA (E)",
                descricao_habilidade: "EQUIPE um arco com uma flecha de reconhecimento. DISPARE para lançar a flecha, que é ativada mediante impacto e Revela a localização de quaisquer inimigos próximos da linha de visão. Inimigos podem destruí-la. SEGURE O DISPARO para estender o alcance do projétil. Use o DISPARO ALTERNATIVO para adicionar até dois ricochetes à flecha."
            },
            {
                nome: "FÚRIA DO CAÇADOR (X)",
                descricao_habilidade: "EQUIPE um arco com três disparos de longo alcance que perfuram paredes. DISPARE para atirar um raio de energia diante de Sova, causando dano e revelando a localização dos inimigos que estiverem na linha. A habilidade pode ser REPETIDA mais duas vezes enquanto o cronômetro de habilidade estiver ativo."
            }
        ]
    },
    {
        titulo: "Jett",
        descricao: "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.",
        tags: 'duelista duel',
        habilidades: [
            {
                nome: "ERUPÇÃO DAS BRUMAS (C)",
                descricao_habilidade: "Lança INSTANTANEAMENTE um projétil que se expande numa breve nuvem que obscurece a visão ao bater numa superfície. SEGURE o botão da habilidade para curvar a fumaça na direção da sua mira."
            },
            {
                nome: "CORRENTE ASCENDENTE (Q)",
                descricao_habilidade: "INSTANTANEAMENTE impele Jett bem alto no ar."
            },
            {
                nome: "BRISA DE IMPULSO (E)",
                descricao_habilidade: "ATIVE para preparar uma rajada de vento por tempo limitado. REPITA a habilidade para lançar Jett na direção do movimento atual dela. Se estiver parada, Jett será lançada para a frente. A carga de Brisa de Impulso é redefinida a cada dois abates."
            },
            {
                nome: "TORMENTA DE AÇO (X)",
                descricao_habilidade: "EQUIPE um conjunto de facas de arremesso altamente precisas. DISPARE para lançar uma única faca contra o alvo. As facas são recarregadas ao matar um oponente. Use o DISPARO ALTERNATIVO para jogar todas as facas restantes contra o alvo, porém elas não são recarregadas ao matar um oponente."
            }
        ]
    },
    {
        titulo: "Phoenix",
        descricao: "Chegando com tudo diretamente do Reino Unido, o poder estelar de Phoenix reluz em seu estilo de luta, incendiando o campo de batalha com luz e estilo. Tendo ajuda ou não, ele entra na luta como e quando achar que deve.",
        tags: 'bang molotov duelista flash',
        habilidades: [
            {
                nome: "MÃOS QUENTES (C)",
                descricao_habilidade: "EQUIPE uma bola de fogo. DISPARE para jogar a bola de fogo, que explode após um intervalo ou ao atingir o chão, criando uma zona duradoura de fogo que causa dano aos inimigos."
            },
            {
                nome: "BOLA CURVA (Q)",
                descricao_habilidade: "EQUIPE um orbe de chamas que avança em curva e detona pouco após o lançamento. DISPARE para curvá-lo para a esquerda, detonando e cegando qualquer jogador que vir o orbe. Use o DISPARO ALTERNATIVO para curvá-lo para a direita."
            },
            {
                nome: "LABAREDA (E)",
                descricao_habilidade: "EQUIPE uma parede de fogo. DISPARE para criar uma linha de chamas que avança, gerando uma parede de fogo que bloqueia a visão e causa dano a jogadores que passarem por ela. SEGURE O DISPARO para curvá-la na direção da mira."
            },
            {
                nome: "RENASCIMENTO (X)",
                descricao_habilidade: "INSTANTANEAMENTE coloca um marcador na localização de Phoenix. Com a habilidade ativa, morrer ou deixar o tempo acabar encerrarão a habilidade e trarão Phoenix de volta ao local marcado com Vida completa."
            }
        ]
    },
    {
        titulo: "Sage",
        descricao: "Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha.",
        tags: 'parede slow lentidao lentidão sentinela',
        habilidades: [
            {
                nome: "ORBE DE BARREIRA (C)",
                descricao_habilidade: "EQUIPE um orbe de barreira. DISPARE para posicionar uma parede sólida. DISPARO ALTERNATIVO gira o marcador de alvo."
            },
            {
                nome: "ORBE DE LENTIDÃO (Q)",
                descricao_habilidade: "EQUIPE um orbe de lentidão. DISPARE para lançá-lo. O orbe detona ao pousar, criando um campo duradouro que desacelera os jogadores dentro dele."
            },
            {
                nome: "ORBE CURATIVO (E)",
                descricao_habilidade: "EQUIPE um orbe curativo. DISPARE com a mira sobre um aliado ferido para ativar uma cura ao longo do tempo. Use o DISPARO ALTERNATIVO enquanto Sage estiver ferida para ativar uma autocura ao longo do tempo."
            },
            {
                nome: "RESSURREIÇÃO (X)",
                descricao_habilidade: "EQUIPE uma habilidade de ressurreição. DISPARE com a mira sobre um aliado morto para começar a revivê-lo. Depois de uma breve canalização, o aliado voltará com a Vida completa."
            }
        ]
    },
    {
        titulo: "Brimstone",
        descricao: "Vindo diretamente dos EUA, o arsenal orbital do Brimstone garante que o esquadrão dele sempre esteja em vantagem. Sua capacidade de oferecer utilitários com precisão e segurança faz dele um comandante inigualável na linha de frente.",
        tags: 'smoke incendiaria molotov controlador',
        habilidades: [
            {
                nome: "SINALIZADOR ESTIMULANTE (C)",
                descricao_habilidade: "EQUIPE um sinalizador estimulante. DISPARE para jogar o sinalizador diante de Brimstone. Ao pousar, o sinalizador criará um campo que concede Tiro Rápido aos jogadores."
            },
            {
                nome: "INCENDIÁRIO (Q)",
                descricao_habilidade: "EQUIPE um lançador de granadas incendiárias. DISPARE para lançar uma granada que detona no chão, gerando uma zona de fogo que causa dano aos jogadores dentro dela."
            },
            {
                nome: "FUMAÇA CELESTE (E)",
                descricao_habilidade: "EQUIPE um mapa tático. DISPARE para marcar os locais onde as nuvens de fumaça de Brimstone pousarão. Use o DISPARO ALTERNATIVO para confirmar, lançando nuvens de fumaça de longa duração que bloqueiam a visão na área selecionada."
            },
            {
                nome: "ATAQUE ORBITAL (X)",
                descricao_habilidade: "EQUIPE um mapa tático. DISPARE para lançar um ataque prolongado de laser orbital no local selecionado, causando muito dano ao longo do tempo aos jogadores na área selecionada."
            }
        ]
    },
    {
        titulo: "Reyna",
        descricao: "Criada no coração do México, Reyna domina o combate individual, destacando-se a cada abate efetuado. Sua capacidade só é limitada por sua própria perícia, tornando-a bastante dependente de desempenho.",
        tags: 'olho bang duelista flash',
        habilidades: [
            {
                nome: "OLHAR VORAZ (C)",
                descricao_habilidade: "EQUIPE um olho etéreo e destrutível. ATIVE para lançá-lo adiante a uma curta distância. O olho deixará com visão turva todos os inimigos que olharem para ele."
            },
            {
                nome: "DEVORAR (Q)",
                descricao_habilidade: "Inimigos abatidos por Reyna deixam Orbes de Alma que duram 3s. INSTANTANEAMENTE consome um Orbe de Alma próximo, curando-se de forma rápida por um curto período. A quantidade de Vida concedida por esta habilidade que ultrapassar 100 decairá ao longo do tempo. Se a habilidade IMPERATRIZ estiver ativa, esta habilidade será conjurada automaticamente e não consumirá o orbe."
            },
            {
                nome: "DISPENSAR (E)",
                descricao_habilidade: "INSTANTANEAMENTE consome um Orbe de Alma próximo, ficando inatingível por um curto período. Também se torna invisível se a habilidade IMPERATRIZ estiver ativa."
            },
            {
                nome: "IMPERATRIZ (X)",
                descricao_habilidade: "INSTANTANEAMENTE entra em estado de frenesi, aumentando de forma drástica as velocidades de disparo, equipamento e recarga de munição. Renova a duração ao fazer um abate."
            }
        ]
    },
    {
        titulo: "Breach",
        descricao: "Breach, o homem-biônico sueco, dispara poderosos jatos cinéticos para forçar a abertura de um caminho pelo território inimigo. O dano e a interrupção que ele causa garantem que nenhuma luta seja justa.",
        tags: 'stun flash explosão iniciador bang brech brith clarao clarão',
        habilidades: [
            {
                nome: "PÓS-CHOQUE (C)",
                descricao_habilidade: "QUIPE uma carga de fusão. DISPARE a carga para armar um jato de ação lenta pela parede. O jato causa muito dano a todos que estiverem na área de efeito."
            },
            {
                nome: "ESTOPIM (Q)",
                descricao_habilidade: "EQUIPE uma carga cegante. DISPARE a carga para armar um jato de ação rápida pela parede. A carga é detonada, cegando todos os jogadores que estiverem olhando para ela."
            },
            {
                nome: "FALHA TECTÔNICA (E)",
                descricao_habilidade: "EQUIPE um impacto sísmico. SEGURE O DISPARO para aumentar a distância. SOLTE para iniciar o terremoto, estonteando todos os jogadores na zona e numa linha reta até a zona."
            },
            {
                nome: "ONDA TROVEJANTE (X)",
                descricao_habilidade: "EQUIPE uma carga sísmica. Dispare para lançar um terremoto em cascata por todo o terreno num grande cone. O terremoto estonteia e derruba todos que estiverem na área de efeito."
            }
        ]
    },
    {
        titulo: "Omen",
        descricao: "Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque.",
        tags: 'teleporte fumaça sombra controlador smoke flash bang',
        habilidades: [
            {
                nome: "PASSOS TENEBROSOS (C)",
                descricao_habilidade: "EQUIPE uma habilidade de passos sombrios e olhe o indicador de alcance. DISPARE para começar uma breve canalização e, então, teleporte-se para o local marcado."
            },
            {
                nome: "PARANOIA(Q)",
                descricao_habilidade: "INSTANTANEAMENTE emite um projétil sombrio adiante, reduzindo brevemente o alcance de visão dos jogadores tocados. O projétil atravessa paredes."
            },
            {
                nome: "MANTO SOMBRIO (E)",
                descricao_habilidade: "EQUIPE um orbe sombrio e entre em um universo distorcido para posicionar os orbes. PRESSIONE o botão de habilidade para lançar o orbe no local marcado, criando uma esfera de sombra duradoura que bloqueia a visão. SEGURE O DISPARO enquanto mira para afastar o marcador. SEGURE O DISPARO ALTERNATIVO enquanto mira para aproximar o marcador. PRESSIONE RECARREGAR para alternar para a visão de mira normal."
            },
            {
                nome: "SALTO DAS SOMBRAS (X)",
                descricao_habilidade: "EQUIPE um mapa tático. DISPARE para começar a se teleportar ao local selecionado. Enquanto se teleporta, Omen aparecerá como um Vulto que pode ser destruído por qualquer inimigo para cancelar o teleporte."
            }
        ]
    },
    {
        titulo: "Raze",
        descricao: "Raze chega do Brasil com uma explosão de carisma e armas enormes. Com seu estilo de jogo 'porradeiro', ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM!",
        tags: 'explosivo granada duelista',
        habilidades: [
            {
                nome: "BUMBA (C)",
                descricao_habilidade: "EQUIPE um Bumba. DISPARE para lançar o robô, que avança em linha reta no chão, ricocheteando nas paredes. O Bumba trava ao detectar inimigos no cone frontal e os persegue, explodindo e causando muito dano se alcançá-los."
            },
            {
                nome: "CARGA DE EXPLOSIVOS (Q)",
                descricao_habilidade: "INSTANTANEAMENTE joga uma Carga de Explosivos que gruda em superfícies. REUSE a habilidade depois de instalar para detonar, causando dano e movendo tudo que for atingido. Raze não sofre dano ao ser atingida pelo efeito desta habilidade, mas ainda pode sofrer dano de queda se for arremessada para longe."
            },
            {
                nome: "CARTUCHOS DE TINTA (E)",
                descricao_habilidade: "EQUIPE uma granada múltipla. DISPARE para jogar a granada, que causa dano e cria submunições, cada uma causando dano a qualquer um que estiver no alcance. Use o DISPARO ALTERNATIVO para arremessar a curta distância. A carga dos Cartuchos de Tinta é redefinida a cada dois abates."
            },
            {
                nome: "ESTRAGA-PRAZERES (X)",
                descricao_habilidade: "EQUIPE um lança-mísseis. DISPARE um foguete que causa dano devastador em área ao fazer contato com qualquer coisa."
            }
        ]
    },
    {
        titulo: "Killjoy",
        descricao: "Killjoy, uma alemã genial, defende posições-chave no campo de batalha facilmente com seu arsenal de invenções. Se o dano causado por seu equipamento não der cabo dos inimigos, os efeitos negativos de seus queridos robôs darão conta do recado.",
        tags: 'torreta robô sentinela',
        habilidades: [
            {
                nome: "NANOENXAME (C)",
                descricao_habilidade: "EQUIPE uma granada Nanoenxame. DISPARE para lançar a granada. Ao atingir uma superfície, a Nanoenxame fica oculta. ATIVE a Nanoenxame para acionar um enxame de nanorrobôs que causam dano."
            },
            {
                nome: "ROBÔ DE ALARME (Q)",
                descricao_habilidade: "EQUIPE um Robô de Alarme oculto. DISPARE para ativar um robô que persegue os inimigos que entram no alcance. Ao se aproximar do alvo, o robô explode, causando dano e aplicando Vulnerável. SEGURE EQUIPAR para retirar um robô ativado."
            },
            {
                nome: "TORRETA (E)",
                descricao_habilidade: "EQUIPE uma Torreta. DISPARE para ativar uma torreta que atira em inimigos em um cone de 180°. SEGURE EQUIPAR para retirar a torreta ativada."
            },
            {
                nome: "CONFINAMENTo (X)",
                descricao_habilidade: "EQUIPE o dispositivo de Confinamento. DISPARE para ativá-lo. Após um longo processo de ativação, o dispositivo detém todos os inimigos no raio de alcance. O dispositivo pode ser destruído pelos inimigos."
            }
        ]
    },

    {
        "titulo": "Astra",
        "descricao": "Astra, a Agente ganense, utiliza energias cósmicas para moldar o campo de batalha a seu bel-prazer. Com total domínio da sua forma astral e um talento estratégico nato, ela está sempre anos-luz à frente dos inimigos.",
        "tags": 'controle estrelas espaço controlador smoke',
        "habilidades": [
            {
                "nome": "POÇO GRAVITACIONAL (C)",
                "descricao_habilidade": "Posicione Estrelas na Forma Astral. ATIVE uma delas para formar um Poço Gravitacional. Jogadores na área são puxados em direção ao centro antes de ele explodir, deixando Vulnerável quem ainda estiver preso ali."
            },
            {
                "nome": "PULSO NOVA (Q)",
                "descricao_habilidade": "Posicione Estrelas na Forma Astral. ATIVE uma Estrela para detonar um Pulso Nova. O Pulso Nova carrega brevemente e depois estoura, causando concussão a todos os jogadores na área."
            },
            {
                "nome": "NEBULOSA (E)",
                "descricao_habilidade": "Posicione Estrelas na Forma Astral. ATIVE uma Estrela para transformá-la em uma Nebulosa (fumaça). USE uma Estrela para dissipá-la, retornando a Estrela para ser posicionada em um novo local após um período. Dissipar forma brevemente uma Nebulosa falsa na localização da Estrela antes de retornar."
            },
            {
                "nome": "FORMA ASTRAL / DIVISA CÓSMICA (X)",
                "descricao_habilidade": "ATIVE para entrar na Forma Astral, em que você pode posicionar Estrelas com o DISPARO. As Estrelas podem ser reativadas depois para serem transformadas em Pulso Nova, Nebulosa ou Poço Gravitacional. Quando Divisa Cósmica estiver carregada, use o DISPARO ALTERNATIVO na Forma Astral para começar a mirar e, depois, o DISPARO para escolher dois locais. Uma Divisa Cósmica infinita surge e conecta os pontos selecionados. A Divisa Cósmica bloqueia disparos e abafa muito o som."
            }
        ]
    },

    {
        "titulo": "Yoru",
        "descricao": "Yoru, nativo do Japão, abre fendas na realidade para infiltrar as linhas inimigas sem ser visto. Ele usa tanto artimanhas quanto táticas agressivas, e os alvos são abatidos sem saber de onde o ataque veio.",
        "tags": 'teleporte invisibilidade duelista flash bang',
        "habilidades": [
            {
                "nome": "FALCATRUA (C)",
                "descricao_habilidade": "EQUIPE um eco dimensional que se transforma em uma cópia do Yoru quando ativado. DISPARE para ativar a cópia e fazê-la avançar. Use o MODO SECUNDÁRIO para posicionar um eco inativo. USE para transformar o eco inativo em uma cópia e fazê-la avançar. As cópias explodem e cegam os inimigos quando destruídas por eles."
            },
            {
                "nome": "PONTO CEGO (Q)",
                "descricao_habilidade": "EQUIPE para arrancar um fragmento dimensional instável da realidade. DISPARE para lançar o fragmento, ativando um clarão que se dissipa ao atingir uma superfície sólida."
            },
            {
                "nome": "PASSAGEM DIMENSIONAL (E)",
                "descricao_habilidade": "EQUIPE um fluxo dimensional. DISPARE para lançá-lo à frente. Use o DISPARO ALTERNATIVO para posicionar um fluxo imóvel. ATIVE para se teleportar até ele. USE para acionar um teleporte falso."
            },
            {
                "nome": "ESPIONAGEM DIMENSIONAL (X)",
                "descricao_habilidade": "EQUIPE uma máscara para olhar por entre as dimensões. DISPARE para entrar na dimensão do Yoru, onde você não poderá ser afetado nem visto pelos inimigos lá fora. REATIVE para sair da dimensão do Yoru mais cedo."
            }
        ]
    },

    {
        "titulo": "Kayo",
        "descricao": "KAY/O é uma máquina de guerra construída com um único propósito: neutralizar Radiantes. Ele é capaz de Suprimir habilidades inimigas, anulando a capacidade de contra-ataque dos adversários e dando a si e a seus aliados uma vantagem essencial em combate.",
        "tags": 'desabilitação faca iniciador flash bang',
        "habilidades": [
            {
                "nome": "FRAG/MENTO (C)",
                "descricao_habilidade": "EQUIPE um fragmento explosivo. DISPARE para lançá-lo. O fragmento se fixa ao chão e explode várias vezes, causando dano quase letal no centro de cada explosão."
            },
            {
                "nome": "GRANADA/CLARÃO (Q)",
                "descricao_habilidade": "EQUIPE uma granada de clarão. DISPARE para jogá-la por cima. Use o DISPARO ALTERNATIVO para arremessar a curta distância uma versão mais fraca que explode mais rápido. A granada de clarão explode após um curto período, Cegando qualquer um que estiver na linha de visão."
            },
            {
                "nome": "PONTO/ZERO (E)",
                "descricao_habilidade": "EQUIPE uma lâmina de supressão. DISPARE para lançar. A lâmina se fixa à primeira superfície que atingir e explode, Suprimindo qualquer um que estiver dentro do raio da explosão. Inimigos podem destruir a lâmina."
            },
            {
                "nome": "ANULAR/CMD (X)",
                "descricao_habilidade": "NSTANTANEAMENTE sobrecarrega com energia de Radianita polarizada que emite grandes pulsos energéticos em um raio enorme a partir de onde KAY/O estiver. Inimigos atingidos pelos pulsos são Suprimidos por um curto período. Enquanto estiver sobrecarregado, KAY/O recebe Estimulante de Combate e pode ser reestabilizado se for abatido."
            }
        ]
    },

    {
        "titulo": "Chamber",
        "descricao": "Bem-vestido e armado até os dentes, o criador de armas francês Chamber coloca os inimigos para correr com precisão mortal. Use e abuse do arsenal personalizado dele para segurar posições e abater inimigos de longe, criando a defesa perfeita para qualquer plano.",
        "tags": 'arma gadgets precisão sentinela ',
        "habilidades": [
            {
                "nome": "MARCA REGISTRADA (C)",
                "descricao_habilidade": "EQUIPE uma armadilha que busca por inimigos. DISPARE para posicioná-la no chão. Quando um inimigo visível entra no alcance, a armadilha inicia uma contagem regressiva e desestabiliza o terreno ao redor, criando um campo duradouro que Desacelera os jogadores dentro dele. A armadilha pode ser recuperada para ser REPOSICIONADA."
            },
            {
                "nome": "CAÇADOR DE CABEÇAS (Q)",
                "descricao_habilidade": "ATIVE para equipar uma pistola pesada. Use o DISPARO ALTERNATIVO com a pistola equipada para mirar."
            },
            {
                "nome": "RENDEZVOUS (E)",
                "descricao_habilidade": "EQUIPE uma âncora de teleporte. DISPARE para posicioná-la no chão. Enquanto estiver no chão e dentro do alcance da âncora, REATIVE para teleportar rapidamente até a âncora. A âncora pode ser recuperada para ser REPOSICIONADA."
            },
            {
                "nome": "TOUR DE FORCE (X)",
                "descricao_habilidade": "ATIVE para invocar um poderoso fuzil de precisão personalizado que abate um inimigo com qualquer acerto na parte superior do corpo. Use o DISPARO ALTERNATIVO para mirar. Abater um inimigo cria um campo duradouro que Desacelera os jogadores dentro dele."
            }
        ]
    },

    {
        "titulo": "Harbor",
        "descricao": "Vindo do litoral indiano, Harbor entra em campo com a força da tormenta, empunhando tecnologia ancestral com domínio sobre a água. Ele libera corredeiras espumantes e ondas esmagadoras para proteger seus aliados ou atacar aqueles que se opõem a ele.",
        "tags": 'água controle controlador smoke',
        "habilidades": [
            {
                "nome": "CASCATA (C)",
                "descricao_habilidade": "EQUIPE uma onda de água. DISPARE para enviar a onda para frente e através de paredes. REPITA para impedir a onda de seguir em frente. Jogadores atingidos sofrem REDUÇÃO DE VELOCIDADE."
            },
            {
                "nome": "ENSEADA (Q)",
                "descricao_habilidade": "EQUIPE uma esfera de água defensiva. DISPARE para jogá-la. Use o DISPARO ALTERNATIVO para lançar por baixo. Ao atingir o solo, a esfera invoca um escudo de água destrutível que bloqueia balas."
            },
            {
                "nome": "MARÉ ALTA (E)",
                "descricao_habilidade": "EQUIPE uma parede de água. DISPARE para enviar a água para frente junto ao chão. SEGURE O DISPARO para guiar a água na direção da sua retícula, atravessando o mundo e fazendo surgir uma parede ao longo do caminho. Use o DISPARO ALTERNATIVO enquanto curva para parar a água mais cedo. Jogadores atingidos sofrem REDUÇÃO DE VELOCIDADE."
            },
            {
                "nome": "RETALIAÇÃOs (X)",
                "descricao_habilidade": "EQUIPE o poder total do seu Artefato. DISPARE para invocar um gêiser no solo. Os inimigos na área são repetidamente alvejados por ataques do gêiser. Jogadores capturados dentro de uma área de ataque sofrem CONCUSSÃO."
            }
        ]
    },

    {
        "titulo": "Gekko",
        "descricao": "Gekko, de Los Angeles, lidera um grupo muito unido de criaturas caóticas. Seus amigos atropelam tudo, tirando os inimigos do caminho. Depois, Gekko corre atrás deles para reagrupá-los e reiniciar o processo.",
        "tags": 'criaturas suporte iniciador flash bang',
        "habilidades": [
            {
                "nome": "MOSH PIT (C)",
                "descricao_habilidade": "EQUIPE Mosh. DISPARE para lançá-lo como uma granada. Use o DISPARO ALTERNATIVO para lançar por baixo. Ao atingir uma superfície, Mosh se duplica em uma grande área e, depois de uns instantes, explode."
            },
            {
                "nome": "WINGMAN (Q)",
                "descricao_habilidade": "EQUIPE Wingman. DISPARE para enviá-lo para encontrar inimigos. Wingman lança uma forte explosão na direção do primeiro inimigo que vê. Use o DISPARO ALTERNATIVO na direção de um ponto ou Spike plantada para que Wingman plante ou desarme a Spike. Para plantar, Gekko deve estar com a Spike no inventário. Quando Wingman expira, ele se transforma em um glóbulo inativo. INTERAJA para recuperar o glóbulo e ganhar outra carga de Wingman após um curto período."
            },
            {
                "nome": "DIZZY (E)",
                "descricao_habilidade": "EQUIPE Dizzy. DISPARE para enviá-la voando pelo ar. Dizzy avança e solta explosões de plasma nos inimigos em sua linha de visão. Os inimigos atingidos pelo plasma ficam cegos. Ao expirar, Dizzy se transforma em um glóbulo inativo. INTERAJA para recuperar o glóbulo e ganhar outra carga de Dizzy após um curto período."
            },
            {
                "nome": "THRASH (X)",
                "descricao_habilidade": "GEQUIPE Thrash. DISPARE para se conectar à mente dela e guiá-la pelo território inimigo. ATIVE para avançar e explodir, detendo qualquer inimigo em um pequeno raio. Ao expirar, Thrash se transforma em um glóbulo inativo. INTERAJA para recuperar o glóbulo e ganhar outra carga de Thrash após um curto período. Thrash pode ser recuperada uma vez."
            }
        ]
    },

    {
        "titulo": "Viper",
        "descricao": "Viper, a química dos Estados Unidos, emprega uma variedade de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo. Se as toxinas não matarem a presa, seus jogos mentais certamente o farão.",
        "tags": 'veneno gás controlador smoke',
        "habilidades": [
            {
                "nome": "VENENO DE COBRA (C)",
                "descricao_habilidade": "EQUIPE um lançador químico. DISPARE para lançar um cilindro que se rompe ao atingir o chão, gerando uma zona química duradoura que causa dano e reduz a velocidade dos inimigos."
            },
            {
                "nome": "NUVEM VENENOSA (Q)",
                "descricao_habilidade": "EQUIPE um emissor de gás. DISPARE para jogar o emissor, que persiste até o fim da rodada. REPITA para criar uma nuvem de gás tóxico que drena combustível. A habilidade pode ser recolhida e REPOSICIONADA antes do início da rodada e pode ser REPETIDA mais de uma vez ao longo da rodada."
            },
            {
                "nome": "CORTINA TÓXICA (E)",
                "descricao_habilidade": "EQUIPE um lançador de emissores de gás. DISPARE para lançar uma longa linha de emissores de gás. REPITA a habilidade para criar uma parede alta de gás tóxico que drena combustível. A habilidade pode ser REPETIDA mais de uma vez."
            },
            {
                "nome": "POÇO PEÇONHENTO (X)",
                "descricao_habilidade": "EQUIPE um borrifador químico. DISPARE para borrifar uma nuvem química em todas as direções ao redor de Viper, criando uma grande nuvem que reduz o alcance de visão e a Vida máxima dos jogadores dentro dela."
            }
        ]
    },

    {
        "titulo": "Neon",
        "descricao": "Neon, nossa Agente filipina, avança em velocidades incríveis, descarregando surtos de radiância bioelétrica tão rapidamente quanto seu corpo consegue gerá-los. Ela corre à frente para pegar os inimigos de surpresa, abatendo-os mais rápido do que um raio.",
        "tags": 'eletricidade velocidade duelista',
        "habilidades": [
            {
                "nome": "VIA EXPRESSA (C)",
                "descricao_habilidade": "DISPARE duas linhas de energia no chão à frente. As linhas se estendem por uma curta distância ou até atingirem uma superfície. Elas se tornam paredes de eletricidade estática que bloqueiam a visão e causam dano aos inimigos que as atravessarem."
            },
            {
                "nome": "RICOCHETE ELÉTRICO (Q)",
                "descricao_habilidade": "INSTANTANEAMENTE arremessa um raio de energia que ricocheteia uma vez. Ao atingir cada superfície, o raio eletrifica o chão abaixo dele com uma explosão."
            },
            {
                "nome": "EQUIPAMENTO VOLTAICO (E)",
                "descricao_habilidade": "INSTANTANEAMENTE canaliza o poder de Neon para receber velocidade aumentada. Ao atingir a carga máxima, use o DISPARO ALTERNATIVO para acionar um deslize elétrico. O carregamento é redefinido a cada dois abates."
            },
            {
                "nome": "SOBRECARGA (X)",
                "descricao_habilidade": "Neon libera todo o seu poder e velocidade por um curto período. DISPARE para canalizar isso em um raio elétrico mortal com alta precisão de movimento. A duração é redefinida com cada abate."
            }
        ]
    },

    {
        "titulo": "Fade",
        "descricao": "Fade, uma caçadora de recompensas turca, usa o poder dos pesadelos para capturar os segredos dos inimigos. Personificando o próprio terror, ela persegue os alvos e revela seus medos mais profundos para, depois, destruí-los na escuridão.",
        "tags": 'escuro medo iniciador',
        "habilidades": [
            {
                "nome": "ESPREITADOR (C)",
                "descricao_habilidade": "EQUIPE um Espreitador. DISPARE para enviá-lo à frente. SEGURE O DISPARO para mover o Espreitador na direção da sua retícula. Ele perseguirá o primeiro rastro sinistro ou inimigo que encontrar e afetará o alvo com visão turva ao alcançá-lo."
            },
            {
                "nome": "CLAUSURA (Q)",
                "descricao_habilidade": "EQUIPE um nódulo de puro temor. DISPARE para arremessá-lo. O nódulo cairá depois de um determinado tempo. REPITA a habilidade para soltá-lo antecipadamente. Esse nódulo se rompe ao impacto, enclausurando inimigos próximos. Inimigos enclausurados sofrem surdez e deterioração."
            },
            {
                "nome": "ASSOMBRAR (E)",
                "descricao_habilidade": "EQUIPE uma assombração. DISPARE para arremessá-la. Ela cairá depois de um determinado tempo. REPITA a habilidade para soltá-la antecipadamente. Essa assombração ataca ao contato, revelando inimigos em sua linha de visão e criando rastros sinistros até eles. Ela pode ser destruída pelos inimigos."
            },
            {
                "nome": "VÉU DA NOITE (X)",
                "descricao_habilidade": "EQUIPE o poder dos pesadelos. DISPARE para liberar uma onda implacável de energia aterrorizante. Inimigos atingidos pela onda são marcados por rastros sinistros e sofrem surdez e deterioração."
            }
        ]
    },

    {
        "titulo": "Cypher",
        "descricao": "Cypher, um vendedor de informações do Marrocos, é uma verdadeira rede de vigilância de um homem só que fica de olho em cada movimento dos inimigos. Nenhum segredo está a salvo. Nenhuma manobra passa despercebida. Cypher está sempre vigiando.s",
        "tags": 'informações armadilhas sentinela',
        "habilidades": [
            {
                "nome": "FIO-ARMADILHA (C)",
                "descricao_habilidade": "EQUIPE um fio-armadilha. DISPARE para instalar um fio acionador oculto e destrutível no local-alvo, criando uma linha entre o local e a parede oposta. Jogadores inimigos que passarem por um fio e não destruírem o dispositivo a tempo ficarão imobilizados, revelados e estonteados depois de um breve intervalo. A habilidade pode ser recolhida para ser REPOSICIONADA."
            },
            {
                "nome": "JAULA CIBERNÉTICA (Q)",
                "descricao_habilidade": "INSTANTANEAMENTE joga a jaula cibernética diante de Cypher. Ative para criar uma zona que bloqueia a visão e reduz a velocidade de inimigos que passarem por ela."
            },
            {
                "nome": "CÂMERA DE VIGILÂNCIA (E)",
                "descricao_habilidade": "EQUIPE uma Câmera de Vigilância. DISPARE para colocar a câmera no local-alvo. REPITA a habilidade para controlar a visão da câmera. Enquanto controla a câmera, DISPARE para lançar um dardo marcador. O dardo revelará a localização de qualquer jogador atingido. A câmera pode ser recuperada e REPOSICIONADA."
            },
            {
                "nome": "ASSALTO NEURAL (X)",
                "descricao_habilidade": "Use INSTANTANEAMENTE num jogador inimigo morto na sua mira para revelar a localização de todos os jogadores inimigos ainda vivos."
            }
        ]
    },
    {
        "titulo": "Clove",
        "descricao": "Clove, ume encrenqueire da Escócia, vai desorientar os inimigos tanto no calor do combate quanto no frio da morte. Jovem e imortal, elu mantém os inimigos confusos até do além-túmulo: momentos após a morte, elu retorna à vida.s",
        "tags": 'estratégia suporte controlador smoke',
        "habilidades": [
            {
                "nome": "REVITALIZAR (C)",
                "descricao_habilidade": "Absorva INSTANTANEAMENTE a energia vital de um inimigo caído que sofreu dano ou foi abatido por Clove e receba aceleração e Vida temporárias."
            },
            {
                "nome": "DESVITALIZAÇÃO (Q)",
                "descricao_habilidade": "EQUIPE um fragmento de Essência da Imortalidade. DISPARE para lançá-lo. Ele detona após um breve intervalo e aplica temporariamente Deterioração a todos os alvos atingidos."
            },
            {
                "nome": "ARTIMANHA (E)",
                "descricao_habilidade": "EQUIPE para visualizar o campo de batalha. DISPARE para marcar os locais onde você quer posicionar as nuvens de Clove. Use o DISPARO ALTERNATIVO para confirmar e lançar nuvens que bloqueiam a visão nas áreas selecionadas. Clove pode usar essa habilidade depois de morrer."
            },
            {
                "nome": "AINDA NÃO MORRI (X)",
                "descricao_habilidade": "Após morrer, ATIVE para ressuscitar. Depois de ressuscitar, Clove precisa obter um abate ou uma assistência de dano em um determinado período ou morre de vez."
            }
        ]
    },

    {
        "titulo": "Iso",
        "descricao": "Iso é um mercenário chinês que entra em estado de fluxo para desmantelar os oponentes. Ele reconfigura a energia do ambiente para se proteger de balas e avança totalmente focado em direção ao próximo duelo até a morte.",
        "tags": 'duelista',
        "habilidades": [
            {
                "nome": "CONTINGÊNCIA (C)",
                "descricao_habilidade": "EQUIPE para reunir energia prismática. DISPARE para enviar à frente uma parede de energia indestrutível que bloqueia balas."
            },
            {
                "nome": "CENTELHA DEBILITANTE (Q)",
                "descricao_habilidade": "EQUIPE um feixe molecular. DISPARE para lançá-lo à frente e aplicar FRÁGIL a todos os jogadores que tocar. O feixe pode atravessar objetos sólidos, inclusive paredes."
            },
            {
                "nome": "FLUXO PROTETOR (E)",
                "descricao_habilidade": "INICIE um cronômetro de foco. Enquanto estiver focado, entre em um estado de fluxo. Inimigos que você abater ou causar dano durante esse tempo geram um orbe de energia. Atirar nesse orbe concede a você um escudo que absorve uma instância de dano de qualquer fonte."
            },
            {
                "nome": "CONTRATO DE ABATE (X)",
                "descricao_habilidade": "EQUIPE uma arena interdimensional. DISPARE para lançar uma coluna de energia pelo campo de batalha que puxa você e o primeiro inimigo atingido por ela para a arena. Você e esse oponente lutam até a morte."
            }
        ]
    },


    {
        "titulo": "Deadlock",
        "descricao": "A agente norueguesa Deadlock posiciona uma gama de nanofios de alta tecnologia para proteger o campo de batalha até mesmo do ataque mais letal. Ninguém escapa do seu olhar vigilante. Ninguém sobrevive à sua ferocidade implacável.",
        "tags": 'sentinela',
        "habilidades": [
            {
                "nome": "GRAVNET (C)",
                "descricao_habilidade": "EQUIPE uma granada GravNet. DISPARE para lançar. Use o DISPARO ALTERNATIVO para arremessar a curta distância. A GravNet detona ao atingir o chão, forçando inimigos pegos por ela a agacharem e moverem-se lentamente."
            },
            {
                "nome": "BARREIRA DE CONTENÇÃO (Q)",
                "descricao_habilidade": "EQUIPE um disco de Malha de Barreira. DISPARE para lançar à frente. Ao atingir o chão, o disco gera barreiras a partir do ponto de origem que bloqueiam a movimentação de personagens."
            },
            {
                "nome": "SENSOR SÔNICO (E)",
                "descricao_habilidade": "EQUIPE um Sensor Sônico. DISPARE para posicionar. O sensor monitora os sons dos inimigos em uma área. Causa concussão na área se sons de passos, disparos ou qualquer barulho significativo forem detectados."
            },
            {
                "nome": "ANIQUILAÇÃO (X)",
                "descricao_habilidade": "EQUIPE um Acelerador de Nanofios. DISPARE para liberar um pulso de nanofios que captura o primeiro inimigo que encontrar. O inimigo encasulado é puxado por uma trilha de nanofios e abatido se chegar ao final da trilha, a não ser que seja libertado. O casulo de nanofios é destrutível."
            }
        ]
    },

    {
        "titulo": "VYSE",
        "descricao": "A mestre dos metais Vyse usa metal líquido para isolar, prender e desarmar os inimigos. Com astúcia e manipulação, ela faz todos os adversários que a enfrentam temerem o próprio campo de batalha.",
        "tags": 'sentinela espinhos',
        "habilidades": [
            {
                "nome": "ESPINHEIRO CORTANTE (C)",
                "descricao_habilidade": "EQUIPE um emaranhado de metal líquido. DISPARE para lançar. Ao cair, o metal se torna invisível. Quando ATIVADO, ele se espalha e cria um grande espinheiro que causa Lentidão e dano a todos os jogadores que passam por ele."
            },
            {
                "nome": "CERCA-VIVA (Q)",
                "descricao_habilidade": "EQUIPE filamentos de metal líquido. DISPARE para posicionar uma armadilha de parede oculta. Quando um inimigo passa por ela, uma parede indestrutível emerge do chão atrás dele. A parede dura um breve período antes de se dissipar"
            },
            {
                "nome": "ROSA ARCANA (E)",
                "descricao_habilidade": "EQUIPE uma Rosa Arcana. Mire em uma superfície e DISPARE para posicionar uma Rosa Arcana oculta, ou use o DISPARO ALTERNATIVO para posicionar a Rosa Arcana através da superfície. USE NOVAMENTE para cegar todos os jogadores que estiverem olhando para ela. A habilidade pode ser recuperada e REPOSICIONADA."
            },
            {
                "nome": "JARDIM DE AÇO (X)",
                "descricao_habilidade": "EQUIPE um espinheiro de metal líquido. DISPARE para lançar metal como uma torrente de espinhos metálicos, BLOQUEANDO as armas primárias inimigas após um breve período."
            }
        ]
    },




];
