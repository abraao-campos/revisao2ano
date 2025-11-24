const questionBank_lin = [
    // ----------------------------------------------------------------------
    // Habilidade: EF02LP01 - Distinguir letras maiúsculas/minúsculas e uso em nomes próprios. (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual é a única palavra escrita em letra de imprensa **minúscula**?",
        "answer": "bola",
        "options": ["CASA", "Bola", "ESCOLA", "bola"],
        "skill": "EF02LP01 - Distinção de caixa alta/baixa",
        "rationale": "A palavra 'bola' está escrita integralmente em minúsculas."
    },
    {
        "question": "Se você escreve o seu nome e o nome da sua rua, qual deles **deve** começar com letra maiúscula?",
        "answer": "Ambos",
        "options": ["Apenas o nome da rua", "Apenas o seu nome", "Nenhum dos dois", "Ambos"],
        "skill": "EF02LP01 - Uso de letra maiúscula (nomes próprios)",
        "rationale": "Nomes próprios (de pessoas) e nomes de lugares (ruas) devem começar com letra maiúscula."
    },
    {
        "question": "O que a **letra maiúscula** no início de uma frase indica?",
        "answer": "O começo de um novo pensamento",
        "options": ["Que a palavra é importante", "O começo de um novo pensamento", "Que a frase é engraçada", "Que a palavra é um número"],
        "skill": "EF02LP01 - Uso de letra maiúscula (início de frase)",
        "rationale": "Em textos, a letra inicial maiúscula marca o começo de uma frase."
    },
    {
        "question": "Se você escreve o nome da sua cidade (**Rio de Janeiro**), qual tipo de letra você usa no início?",
        "answer": "Letra maiúscula",
        "options": ["Letra minúscula", "Letra cursiva minúscula", "Letra maiúscula", "Letra pequena"],
        "skill": "EF02LP01 - Uso de letra maiúscula (lugares)",
        "rationale": "Nomes próprios de lugares (cidades, estados, países) exigem letra inicial maiúscula."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP02 - Segmentação da frase. (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual a melhor forma de separar a frase: **'Eucomiumadocedepoisdoalmoço'**?",
        "answer": "Eu comi um doce depois do almoço.",
        "options": ["Eucomi umdoce depois do almoço.", "Eu comi um doce depois do almoço.", "Eucomi um doce depoisdo almoço.", "Eu comi um doce. depois do almoço."],
        "skill": "EF02LP02 - Segmentação da frase",
        "rationale": "A separação correta garante que cada palavra seja reconhecida e o sentido seja claro."
    },
    {
        "question": "O que indica que uma **palavra** deve ser separada da outra na escrita?",
        "answer": "O espaço em branco (espaçamento)",
        "options": ["Uma letra maiúscula", "O espaço em branco (espaçamento)", "Um número", "Um desenho"],
        "skill": "EF02LP02 - Uso do espaço em branco",
        "rationale": "O espaço em branco é o delimitador gráfico que separa as palavras."
    },
    {
        "question": "O que acontece se você não usar o **espaçamento** correto entre as palavras?",
        "answer": "A frase fica difícil de ler e perde o sentido",
        "options": ["A frase fica mais bonita", "A frase fica difícil de ler e perde o sentido", "A frase fica mais curta", "A frase fica cantada"],
        "skill": "EF02LP02 - Importância da segmentação",
        "rationale": "A falta de segmentação prejudica a legibilidade e a compreensão do texto."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP03 - Pontuação (ponto final, interrogação, exclamação). (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual sinal de pontuação você usa para indicar que a **frase terminou** (e não é uma pergunta nem uma emoção)?",
        "answer": "Ponto final (.)",
        "options": ["Ponto de interrogação (?)", "Ponto de exclamação (!)", "Ponto final (.)", "Vírgula (,)"],
        "skill": "EF02LP03 - Uso do Ponto Final",
        "rationale": "O ponto final encerra frases declarativas."
    },
    {
        "question": "Qual sinal de pontuação é usado para expressar **emoção forte** (susto, alegria, raiva)?",
        "answer": "Ponto de exclamação (!)",
        "options": ["Ponto final (.)", "Ponto de interrogação (?)", "Ponto de exclamação (!)", "Dois-pontos (:)"],
        "skill": "EF02LP03 - Uso do Ponto de Exclamação",
        "rationale": "O ponto de exclamação indica entonação de surpresa, alegria, espanto, etc."
    },
    {
        "question": "Se a frase é: '**Que horas são**', qual sinal de pontuação você deve usar no final?",
        "answer": "Ponto de interrogação (?)",
        "options": ["Ponto final (.)", "Vírgula (,)", "Ponto de interrogação (?)", "Ponto de exclamação (!)"],
        "skill": "EF02LP03 - Uso do Ponto de Interrogação",
        "rationale": "O ponto de interrogação encerra frases interrogativas diretas."
    },
    {
        "question": "Qual sinal de pontuação indica que você deve fazer uma **pequena pausa** na leitura?",
        "answer": "Vírgula (,)",
        "options": ["Ponto final (.)", "Ponto de exclamação (!)", "Vírgula (,)", "Aspas ('' )"],
        "skill": "EF02LP03 - Uso da Vírgula (pausa)",
        "rationale": "A vírgula é usada para indicar pausas breves ou separar elementos numa lista."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP04 - Relação fonema-grafema (som e letra). (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Na palavra **'GATO'**, qual letra faz o som de /g/?",
        "answer": "G",
        "options": ["A", "T", "G", "O"],
        "skill": "EF02LP04 - Relação fonema-grafema (G)",
        "rationale": "A letra 'G' representa o fonema /g/ antes das vogais A, O, U."
    },
    {
        "question": "Qual palavra tem a letra **'C'** com o som de /s/ (como em 'CENOURA')?",
        "answer": "CIDADE",
        "options": ["CASA", "COLA", "CAMA", "CIDADE"],
        "skill": "EF02LP04 - Relação fonema-grafema (C)",
        "rationale": "Antes de 'E' e 'I', a letra 'C' tem o som de /s/."
    },
    {
        "question": "Na palavra **'ARROZ'**, qual letra (ou grupo de letras) tem o som de /z/?",
        "answer": "Z",
        "options": ["A", "R", "Z", "O"],
        "skill": "EF02LP04 - Relação fonema-grafema (Z)",
        "rationale": "A letra 'Z' representa o fonema /z/."
    },
    {
        "question": "Qual palavra tem o som de **'R' forte** (como em 'CARRO')?",
        "answer": "RATO",
        "options": ["ARARA", "RATO", "PERU", "BARATA"],
        "skill": "EF02LP04 - Relação fonema-grafema (R)",
        "rationale": "O 'R' no início da palavra ou o 'RR' no meio tem o som forte."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP05 - Escrita de palavras (ortografia). (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual é a forma **correta** de escrever o nome do animal que produz mel?",
        "answer": "ABELHA",
        "options": ["Abeia", "ABELHA", "Abella", "Avelha"],
        "skill": "EF02LP05 - Ortografia (Lh)",
        "rationale": "A palavra 'ABELHA' é escrita com o dígrafo 'LH'."
    },
    {
        "question": "Qual palavra está escrita de forma **errada**?",
        "answer": "Chuva",
        "options": ["Cachorro", "Sapato", "Chuva", "Xicara"],
        "skill": "EF02LP05 - Ortografia (Ch vs X)",
        "rationale": "A palavra correta é 'XÍCARA'."
    },
    {
        "question": "Para escrever a palavra que significa 'muita gente', o correto é usar:",
        "answer": "Multidão",
        "options": ["Multidãow", "Mutidão", "Multidão", "Multidão."],
        "skill": "EF02LP05 - Ortografia (Consoantes complexas)",
        "rationale": "A ortografia correta é 'MULTIDÃO'."
    },
    {
        "question": "A palavra **'GIRASSOL'** é escrita com:",
        "answer": "SS",
        "options": ["S", "C", "Ç", "SS"],
        "skill": "EF02LP05 - Ortografia (SS)",
        "rationale": "A palavra 'GIRASSOL' usa 'SS' para manter o som de /s/ entre vogais."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP06 - Sílabas canônicas e não canônicas. (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual palavra é formada por **sílabas canônicas** (consoante + vogal)?",
        "answer": "SAPATO",
        "options": ["SAPATO", "BRINCO", "PÁSSARO", "FLOR"],
        "skill": "EF02LP06 - Identificação de sílabas canônicas",
        "rationale": "SAPATO (SA-PA-TO) só tem sílabas CV."
    },
    {
        "question": "A palavra **'PLACA'** tem uma sílaba não canônica. Qual é a sílaba?",
        "answer": "PLA (C+L+A)",
        "options": ["PA", "LA", "CA", "PLA (C+L+A)"],
        "skill": "EF02LP06 - Identificação de sílabas não canônicas (CVC)",
        "rationale": "PLA é uma sílaba complexa (CCV)."
    },
    {
        "question": "Qual palavra tem uma sílaba que termina em **consoante**?",
        "answer": "CANTAR",
        "options": ["BOLA", "GATO", "CASA", "CANTAR"],
        "skill": "EF02LP06 - Sílabas não canônicas (CVC ou VC)",
        "rationale": "CAN-TAR. A sílaba 'TAR' é CVC."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP07 - Segmentação de palavras em sílabas. (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Como a palavra **'BICICLETA'** deve ser separada em sílabas?",
        "answer": "BI-CI-CLE-TA",
        "options": ["BI-CI-CLE-TA", "BI-CICL-ETA", "BIC-ICLE-TA", "BICI-CLET-A"],
        "skill": "EF02LP07 - Separação silábica",
        "rationale": "A separação correta é BI-CI-CLE-TA."
    },
    {
        "question": "Quantas sílabas tem a palavra **'TELEVISÃO'**?",
        "answer": "4",
        "options": ["2", "3", "4", "5"],
        "skill": "EF02LP07 - Contagem de sílabas",
        "rationale": "TE-LE-VI-SÃO (4 sílabas)."
    },
    {
        "question": "Ao separar a palavra **'PÁSSARO'** em sílabas, o que acontece com o 'SS'?",
        "answer": "As duas letras 'S' ficam em sílabas diferentes",
        "options": ["As duas letras 'S' ficam juntas", "As duas letras 'S' ficam em sílabas diferentes", "Uma letra 'S' some", "As letras 'S' viram 'C'"],
        "skill": "EF02LP07 - Separação de dígrafos (SS/RR)",
        "rationale": "Dígrafos 'SS' e 'RR' são separados: PÁS-SA-RO."
    },
    {
        "question": "Qual palavra é **monossílaba** (tem apenas uma sílaba)?",
        "answer": "PÉ",
        "options": ["CASA", "PÉ", "AMIGO", "ESCOLA"],
        "skill": "EF02LP07 - Classificação por número de sílabas",
        "rationale": "PÉ é uma palavra de uma sílaba."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP08 - Elementos de texto (título, autor, parágrafo). (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual elemento do texto aparece **no topo** e indica o assunto geral?",
        "answer": "Título",
        "options": ["Autor", "Rodapé", "Parágrafo", "Título"],
        "skill": "EF02LP08 - Identificação de Título",
        "rationale": "O título é o nome do texto e resume o tema."
    },
    {
        "question": "O que indica que um novo **parágrafo** começou em um texto?",
        "answer": "O espaço maior antes da primeira palavra da linha",
        "options": ["A letra 'A'", "O ponto final", "O espaço maior antes da primeira palavra da linha", "O número no final"],
        "skill": "EF02LP08 - Identificação de Parágrafo",
        "rationale": "O recuo inicial na linha é a marca visual de um novo parágrafo."
    },
    {
        "question": "Quem é o **autor** de um texto?",
        "answer": "A pessoa que escreveu o texto",
        "options": ["A pessoa que leu o texto", "A pessoa que escreveu o texto", "O personagem principal", "O livro"],
        "skill": "EF02LP08 - Identificação de Autor",
        "rationale": "O autor é o criador intelectual do texto."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP09 - Relação entre partes do texto (pronomes, conectores). (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Na frase: 'João foi à feira **e** comprou frutas', a palavra em negrito liga duas ideias que indicam:",
        "answer": "Adição (continuação)",
        "options": ["Contradição", "Adição (continuação)", "Pergunta", "Opinião"],
        "skill": "EF02LP09 - Conectores ('e')",
        "rationale": "O conector 'e' serve para adicionar ou juntar informações."
    },
    {
        "question": "Na frase: 'Maria estava cansada, **por isso** foi dormir', a expressão em negrito indica:",
        "answer": "A causa/consequência de Maria estar cansada",
        "options": ["A cor da roupa", "A causa/consequência de Maria estar cansada", "O tipo de comida", "O dia da semana"],
        "skill": "EF02LP09 - Conectores ('por isso')",
        "rationale": "O conector 'por isso' introduz uma consequência."
    },
    {
        "question": "Na frase: 'Pedro gostou da bicicleta **que** seu pai lhe deu', a palavra 'que' está se referindo a qual objeto?",
        "answer": "Bicicleta",
        "options": ["Pedro", "Pai", "Bicicleta", "Deu"],
        "skill": "EF02LP09 - Pronomes e retomada",
        "rationale": "O pronome relativo 'que' retoma o substantivo anterior (bicicleta)."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP10 - Identificação de tema/assunto principal. (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Se um texto fala sobre a vida dos animais no oceano, qual é o **assunto principal**?",
        "answer": "Os animais marinhos",
        "options": ["O céu azul", "Os animais marinhos", "A comida de cachorro", "As bicicletas"],
        "skill": "EF02LP10 - Identificação de tema (animais)",
        "rationale": "O tema é o foco central do texto."
    },
    {
        "question": "Em um cartaz que mostra os horários de um circo, qual é o **objetivo** do texto?",
        "answer": "Informar sobre os espetáculos",
        "options": ["Vender flores", "Informar sobre os espetáculos", "Fazer uma pergunta", "Contar uma piada"],
        "skill": "EF02LP10 - Identificação de tema (informativo)",
        "rationale": "O objetivo de um cartaz de circo é informativo e de divulgação."
    },
    {
        "question": "Se a professora lê uma **fábula** sobre uma raposa esperta e uma uva, qual é o tema principal?",
        "answer": "A moral ou lição que a história ensina",
        "options": ["A cor da raposa", "A moral ou lição que a história ensina", "O tamanho da uva", "O preço da raposa"],
        "skill": "EF02LP10 - Identificação de tema (fábula)",
        "rationale": "Em fábulas, a lição de moral é o tema central."
    },
    {
        "question": "O que você deve procurar para descobrir o **tema principal** de uma notícia?",
        "answer": "A manchete e o primeiro parágrafo",
        "options": ["A cor do papel", "A manchete e o primeiro parágrafo", "O último número da página", "As palavras que se repetem no meio"],
        "skill": "EF02LP10 - Estratégias de leitura",
        "rationale": "A manchete (título) e a introdução (primeiro parágrafo) geralmente apresentam o tema principal."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP11 - Inferir informações implícitas. (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Se a frase é: 'Choveu muito forte e a rua ficou alagada'. O que você pode **inferir** (deduzir) que vai acontecer com as pessoas na rua?",
        "answer": "Elas vão se molhar ou ter dificuldade para andar",
        "options": ["Elas vão começar a dançar", "Elas vão se molhar ou ter dificuldade para andar", "Elas vão encontrar um tesouro", "O sol vai aparecer"],
        "skill": "EF02LP11 - Inferência (causa/consequência)",
        "rationale": "O alagamento é a causa da dificuldade de locomoção e de se molhar."
    },
    {
        "question": "Se um personagem diz: '**Que susto!**' O que você pode inferir que ele sentiu?",
        "answer": "Medo ou surpresa",
        "options": ["Felicidade", "Fome", "Medo ou surpresa", "Sono"],
        "skill": "EF02LP11 - Inferência (emoções)",
        "rationale": "A exclamação de susto indica medo ou surpresa."
    },
    {
        "question": "No conto, o herói estava com **frio** e viu uma luz acesa. O que ele provavelmente fez?",
        "answer": "Foi bater na porta para pedir ajuda ou abrigo",
        "options": ["Saiu correndo", "Foi bater na porta para pedir ajuda ou abrigo", "Comeu uma maçã", "Dormiu na grama"],
        "skill": "EF02LP11 - Inferência (intenção do personagem)",
        "rationale": "A intenção de quem sente frio e vê um abrigo é buscar ajuda."
    },
    {
        "question": "Se a mãe diz: 'Filho, já são **oito e meia da noite**!', o que você pode inferir que o filho deve fazer em breve?",
        "answer": "Se preparar para dormir ou jantar",
        "options": ["Começar a estudar", "Se preparar para dormir ou jantar", "Ir para a escola", "Lavar o carro"],
        "skill": "EF02LP11 - Inferência (rotina/horário)",
        "rationale": "O horário de 20:30 (oito e meia da noite) é um indicador de rotina noturna."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP12 - Formato de texto (organização). (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "A **receita de bolo** é organizada em duas partes principais. Quais são?",
        "answer": "Ingredientes e Modo de Preparo",
        "options": ["Ingredientes e Preço", "Ingredientes e Modo de Preparo", "Título e Autor", "Notícia e Piada"],
        "skill": "EF02LP12 - Organização da Receita",
        "rationale": "Toda receita se divide nestas duas seções principais."
    },
    {
        "question": "Qual é a organização de um **poema**?",
        "answer": "Em versos e estrofes",
        "options": ["Em parágrafos longos", "Em versos e estrofes", "Em lista de compras", "Em apenas um bloco de texto"],
        "skill": "EF02LP12 - Organização do Poema",
        "rationale": "O poema é estruturado em linhas curtas (versos) e grupos de versos (estrofes)."
    },
    {
        "question": "Um **cartaz de aviso** em geral usa frases:",
        "answer": "Curtas, com letras grandes e visíveis",
        "options": ["Muito longas e complexas", "Curtas, com letras grandes e visíveis", "Com muitos números", "Com enigmas"],
        "skill": "EF02LP12 - Organização do Cartaz",
        "rationale": "A organização visual do cartaz prioriza a comunicação rápida e direta."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP13 - Localizar informações explícitas. (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Em uma frase, a informação **explícita** é aquela que:",
        "answer": "Está escrita de forma clara e visível no texto",
        "options": ["Está escondida e precisa ser adivinhada", "Está escrita de forma clara e visível no texto", "Só o professor sabe", "Só aparece em sonho"],
        "skill": "EF02LP13 - Definição de informação explícita",
        "rationale": "Explícita significa clara, direta, visível no texto."
    },
    {
        "question": "No trecho: 'O macaco se chama Tito e tem 7 bananas'. Qual a **quantidade de bananas** que Tito tem?",
        "answer": "7",
        "options": ["1", "5", "7", "10"],
        "skill": "EF02LP13 - Localização de informação (números)",
        "rationale": "A informação está escrita diretamente no texto."
    },
    {
        "question": "Na frase: 'A menina de vestido **vermelho** está brincando'. Qual é a cor do vestido da menina?",
        "answer": "Vermelho",
        "options": ["Azul", "Amarelo", "Vermelho", "Verde"],
        "skill": "EF02LP13 - Localização de informação (cores)",
        "rationale": "A cor 'vermelho' é uma informação explícita."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP14 - Conhecer a ordem alfabética. (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual letra vem **depois** do 'H' no alfabeto?",
        "answer": "I",
        "options": ["G", "I", "J", "L"],
        "skill": "EF02LP14 - Sequência alfabética",
        "rationale": "A sequência é G, H, I."
    },
    {
        "question": "Qual das palavras deve vir **primeiro** em uma lista organizada em ordem alfabética?",
        "answer": "AMIGO",
        "options": ["AMIGO", "BOLA", "CASA", "ESCOLA"],
        "skill": "EF02LP14 - Ordenação alfabética (primeira letra)",
        "rationale": "A palavra que começa com 'A' vem antes."
    },
    {
        "question": "Se você tem as palavras **'BOLA'** e **'BONECA'**, qual vem primeiro na ordem alfabética?",
        "answer": "BOLA",
        "options": ["BONECA", "ELAS vêm juntas", "BOLA", "Depende do dia"],
        "skill": "EF02LP14 - Ordenação alfabética (segunda letra)",
        "rationale": "A terceira letra ('L' de BOLA) vem antes da terceira letra ('N' de BONECA)."
    },
    {
        "question": "O que você usa para saber a ordem de algo (como os nomes em uma chamada) por ordem alfabética?",
        "answer": "O alfabeto de A a Z",
        "options": ["Um relógio", "O alfabeto de A a Z", "Uma régua", "Um termômetro"],
        "skill": "EF02LP14 - Instrumento de ordenação",
        "rationale": "O alfabeto é a referência para a ordenação alfabética."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP15 - Consultar dicionário/glossário. (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual é a principal função do **dicionário**?",
        "answer": "Explicar o significado das palavras",
        "options": ["Fazer barulho", "Explicar o significado das palavras", "Contar histórias", "Fazer contas"],
        "skill": "EF02LP15 - Função do Dicionário",
        "rationale": "O dicionário é a obra de referência para o significado e ortografia das palavras."
    },
    {
        "question": "O que são as **palavras-guia** que aparecem no topo de cada página do dicionário?",
        "answer": "Ajudam a achar a palavra que você procura mais rápido",
        "options": ["São os nomes dos autores", "Ajudam a achar a palavra que você procura mais rápido", "São as palavras mais longas", "São palavras secretas"],
        "skill": "EF02LP15 - Uso de palavras-guia",
        "rationale": "As palavras-guia indicam a primeira e a última palavra da página."
    },
    {
        "question": "Para procurar a palavra **'JANELA'** no dicionário, em qual letra você deve começar a procurar?",
        "answer": "J",
        "options": ["A", "Z", "J", "E"],
        "skill": "EF02LP15 - Estratégia de busca",
        "rationale": "A busca começa pela primeira letra da palavra."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP16 - Concordância (substantivo-adjetivo; singular-plural). (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual é o **plural** (mais de um) da palavra **'CASA'**?",
        "answer": "CASAS",
        "options": ["CASO", "CASOS", "CASA", "CASAS"],
        "skill": "EF02LP16 - Plural de substantivos",
        "rationale": "O plural de 'CASA' é 'CASAS'."
    },
    {
        "question": "Qual frase está correta na concordância?",
        "answer": "O gato bonito",
        "options": ["A gato bonito", "O gato bonitas", "O gato bonito", "Os gato bonitos"],
        "skill": "EF02LP16 - Concordância (substantivo/adjetivo)",
        "rationale": "O substantivo 'gato' (masculino singular) concorda com o artigo 'O' e o adjetivo 'bonito'."
    },
    {
        "question": "Qual o **singular** da frase: 'As flores cheirosas'?",
        "answer": "A flor cheirosa",
        "options": ["O flor cheiroso", "A flor cheirosa", "As flor cheirosa", "O cheiroso flor"],
        "skill": "EF02LP16 - Singular de frases",
        "rationale": "Todos os elementos devem ir para o singular e manter a concordância: 'A' (artigo feminino singular), 'flor' (substantivo feminino singular), 'cheirosa' (adjetivo feminino singular)."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP17 - Identificar verbos no presente, passado e futuro. (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "A palavra **'BRINCOU'** indica uma ação no tempo:",
        "answer": "Passado (já aconteceu)",
        "options": ["Presente (acontecendo agora)", "Futuro (ainda vai acontecer)", "Passado (já aconteceu)", "Nunca acontece"],
        "skill": "EF02LP17 - Verbo no Passado",
        "rationale": "O pretérito ('BRINCOU') indica uma ação que já ocorreu."
    },
    {
        "question": "Qual das palavras indica uma ação que está acontecendo **agora**?",
        "answer": "CORRE",
        "options": ["CORRERÁ", "CORREU", "CORRE", "CORRER"],
        "skill": "EF02LP17 - Verbo no Presente",
        "rationale": "O presente ('CORRE') indica uma ação que está sendo realizada no momento."
    },
    {
        "question": "Qual palavra indica que a ação **ainda vai acontecer**?",
        "answer": "COMERÁ",
        "options": ["COMEU", "COME", "COMERÁ", "COMIDA"],
        "skill": "EF02LP17 - Verbo no Futuro",
        "rationale": "O futuro ('COMERÁ') indica uma ação que está por vir."
    },
    {
        "question": "Na frase: 'Ontem, o pássaro **voou**', a palavra em negrito indica que a ação de voar está no:",
        "answer": "Passado",
        "options": ["Presente", "Futuro", "Passado", "Infinito"],
        "skill": "EF02LP17 - Verbo e Marcador Temporal",
        "rationale": "O marcador temporal 'Ontem' e o verbo 'voou' (pretérito) situam a ação no passado."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP18 - Reconhecer a função de substantivos e adjetivos. (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "O **substantivo** é a palavra usada para dar nome a:",
        "answer": "Pessoas, objetos, lugares e sentimentos",
        "options": ["Ações (como correr)", "Qualidades (como bonito)", "Pessoas, objetos, lugares e sentimentos", "Números (como dez)"],
        "skill": "EF02LP18 - Função do Substantivo",
        "rationale": "Substantivos são a classe de palavras que nomeia os seres."
    },
    {
        "question": "Na frase: 'O Sol está **quente**', a palavra em negrito é um:",
        "answer": "Adjetivo",
        "options": ["Verbo", "Substantivo", "Adjetivo", "Artigo"],
        "skill": "EF02LP18 - Função do Adjetivo",
        "rationale": "Adjetivos dão qualidade ou característica ao substantivo (Sol)."
    },
    {
        "question": "Qual das palavras abaixo é um **substantivo** (dá nome a algo)?",
        "answer": "CADERNO",
        "options": ["BONITO", "CORRER", "CADERNO", "LENTAMENTE"],
        "skill": "EF02LP18 - Identificação de Substantivo",
        "rationale": "CADERNO é o nome de um objeto."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP19 - Pronúncia de sílabas (entonação). (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Na palavra **'MÁGICO'**, qual sílaba você pronuncia com mais força (sílaba tônica)?",
        "answer": "MÁ",
        "options": ["CO", "MÁ", "GI", "GO"],
        "skill": "EF02LP19 - Sílaba Tônica",
        "rationale": "A sílaba tônica em MÁ-GI-CO é a primeira, marcada pelo acento."
    },
    {
        "question": "Ao ler um **ponto de interrogação (?)**, a sua voz deve ter uma entonação de:",
        "answer": "Pergunta",
        "options": ["Tristeza", "Surpresa", "Pergunta", "Felicidade"],
        "skill": "EF02LP19 - Entonação (Interrogação)",
        "rationale": "O ponto de interrogação exige entonação de pergunta."
    },
    {
        "question": "Qual é a função da **entonação** (o jeito de falar) na leitura de uma frase?",
        "answer": "Ajudar a entender o sentido e a emoção da frase",
        "options": ["Aumentar o tamanho da letra", "Ajudar a entender o sentido e a emoção da frase", "Contar quantos números tem", "Diminuir o texto"],
        "skill": "EF02LP19 - Função da Entonação",
        "rationale": "A entonação define se a frase é uma pergunta, uma afirmação, ou uma exclamação."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP20 - Reconhecer função de cartazes e avisos. (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual a principal função de um **cartaz de 'PROCURA-SE'** (com a foto de um animal perdido)?",
        "answer": "Solicitar a ajuda das pessoas para encontrar algo ou alguém",
        "options": ["Contar uma piada", "Solicitar a ajuda das pessoas para encontrar algo ou alguém", "Vender comida", "Dar um prêmio"],
        "skill": "EF02LP20 - Gênero textual (Cartaz)",
        "rationale": "O cartaz de 'procura-se' é um texto de utilidade pública para solicitar ajuda ou informação."
    },
    {
        "question": "Qual gênero textual tem a função de dar um **alerta** ou uma **orientação** simples e rápida (ex: 'Não pise na grama')?",
        "answer": "Aviso",
        "options": ["Poema", "Receita", "Aviso", "Novela"],
        "skill": "EF02LP20 - Gênero textual (Aviso)",
        "rationale": "Avisos são textos curtos e diretos com função de alertar ou instruir."
    },
    {
        "question": "Em um cartaz de **campanha de vacinação**, qual é a informação principal que não pode faltar?",
        "answer": "O dia, local e público-alvo da vacinação",
        "options": ["O nome do presidente", "O dia, local e público-alvo da vacinação", "Uma receita de bolo", "A letra de uma música"],
        "skill": "EF02LP20 - Informação central (Cartaz)",
        "rationale": "Cartazes de campanha precisam de informações essenciais (o quê, quando, onde, para quem) para cumprir seu objetivo."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP21 - Identificar função de notícias e reportagens. (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual a principal função de uma **notícia** em um jornal?",
        "answer": "Informar sobre um fato recente e verdadeiro",
        "options": ["Inventar histórias", "Informar sobre um fato recente e verdadeiro", "Ensinar a cozinhar", "Fazer as pessoas dormirem"],
        "skill": "EF02LP21 - Gênero textual (Notícia)",
        "rationale": "Notícias têm a função de informar sobre acontecimentos reais e atuais."
    },
    {
        "question": "A **manchete** (título grande) de uma notícia serve para:",
        "answer": "Chamar a atenção do leitor e resumir o que aconteceu",
        "options": ["Fazer uma pergunta", "Chamar a atenção do leitor e resumir o que aconteceu", "Esconder o assunto", "Mudar o nome do jornal"],
        "skill": "EF02LP21 - Elemento da Notícia (Manchete)",
        "rationale": "A manchete é a parte mais visível e tem o poder de atrair o leitor."
    },
    {
        "question": "Qual a diferença de uma **notícia** para uma **reportagem**?",
        "answer": "A reportagem é mais longa e profunda, investigando o assunto",
        "options": ["A reportagem é sempre falsa", "A reportagem é mais longa e profunda, investigando o assunto", "A notícia não tem título", "A reportagem é feita só com desenhos"],
        "skill": "EF02LP21 - Diferença Notícia vs Reportagem",
        "rationale": "Reportagens são textos mais detalhados e investigativos sobre um tema."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP22 - Identificar função de regras e instruções. (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual é a principal função de um texto que explica as **regras de um jogo**?",
        "answer": "Ensinar como jogar e garantir a justiça",
        "options": ["Fazer um bolo", "Ensinar como jogar e garantir a justiça", "Vender o jogo", "Dormir"],
        "skill": "EF02LP22 - Gênero textual (Regras de Jogo)",
        "rationale": "As regras garantem que o jogo seja justo e que os participantes saibam como agir."
    },
    {
        "question": "Textos que usam palavras como 'primeiro', 'depois', 'em seguida' são tipicamente textos de:",
        "answer": "Instrução (sequência de passos)",
        "options": ["Poema", "Notícia", "Instrução (sequência de passos)", "Fábula"],
        "skill": "EF02LP22 - Marcadores de instrução",
        "rationale": "Estes marcadores temporais sequenciam as ações de uma instrução."
    },
    {
        "question": "Se o texto diz: '**Pressione** o botão vermelho', ele está dando uma:",
        "answer": "Ordem ou comando (instrução)",
        "options": ["Pergunta", "Ordem ou comando (instrução)", "Opinião", "Piada"],
        "skill": "EF02LP22 - Linguagem instrucional (verbo no imperativo)",
        "rationale": "Verbos no modo imperativo ('pressione', 'misture', 'vá') são típicos de textos instrucionais."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP23 - Identificar função de receitas e bulas. (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "A **Bula de Remédio** tem a função de:",
        "answer": "Informar como usar o remédio, seus efeitos e cuidados",
        "options": ["Vender flores", "Informar como usar o remédio, seus efeitos e cuidados", "Contar uma história", "Fazer as pessoas rirem"],
        "skill": "EF02LP23 - Gênero textual (Bula)",
        "rationale": "A bula é um texto informativo e instrucional sobre medicamentos."
    },
    {
        "question": "Qual a principal diferença entre uma **receita de comida** e uma **receita médica**?",
        "answer": "A de comida ensina a cozinhar, e a médica é uma ordem para comprar remédios",
        "options": ["Não há diferença", "A de comida ensina a cozinhar, e a médica é uma ordem para comprar remédios", "A médica tem números e a de comida não", "A médica é um poema"],
        "skill": "EF02LP23 - Diferença Receita (Culinária) vs Receita (Médica)",
        "rationale": "A receita médica é um documento legal que autoriza a compra e prescreve o uso de medicamentos."
    },
    {
        "question": "Qual informação é essencial em uma receita de bolo para que ele dê certo?",
        "answer": "A quantidade (medida) de cada ingrediente",
        "options": ["O nome do vizinho", "A quantidade (medida) de cada ingrediente", "A cor da parede", "O número de uma música"],
        "skill": "EF02LP23 - Informação essencial (Receita)",
        "rationale": "As quantidades são cruciais para o sucesso de uma receita culinária."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP24 - Reconhecer função de poemas e rimas. (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual a principal característica de um **poema**?",
        "answer": "É escrito em versos e estrofes, com ritmo e, às vezes, rima",
        "options": ["É um texto com regras", "É escrito em versos e estrofes, com ritmo e, às vezes, rima", "É uma lista de nomes", "É uma notícia de jornal"],
        "skill": "EF02LP24 - Característica do Poema",
        "rationale": "A estrutura em versos/estrofes e o uso de recursos sonoros são características principais."
    },
    {
        "question": "Qual par de palavras **rima** (tem sons parecidos no final)?",
        "answer": "Castelo / Amarelo",
        "options": ["Gato / Cachorro", "Castelo / Amarelo", "Pão / Livro", "Mesa / Sol"],
        "skill": "EF02LP24 - Rima",
        "rationale": "Rima é a repetição de sons no final das palavras (cast**elo** / amar**elo**)."
    },
    {
        "question": "Se um poema usa a frase: 'O vento **sussurra** segredos no ouvido', ele está usando qual recurso poético?",
        "answer": "Personificação (dar vida a algo)",
        "options": ["Lista de compras", "Personificação (dar vida a algo)", "Receita", "Regra de jogo"],
        "skill": "EF02LP24 - Recursos poéticos",
        "rationale": "Personificação (ou prosopopeia) é dar ações humanas a objetos ou fenômenos da natureza."
    },
    {
        "question": "Qual o principal **objetivo** de um poema?",
        "answer": "Expressar sentimentos, emoções ou ideias de forma artística",
        "options": ["Apenas vender", "Expressar sentimentos, emoções ou ideias de forma artística", "Apenas informar a hora", "Apenas ensinar uma regra"],
        "skill": "EF02LP24 - Função do Poema",
        "rationale": "A função estética e expressiva é a principal do poema."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP25 - Identificar função de contos e fábulas. (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual gênero textual conta uma **história curta** com personagens e um acontecimento principal?",
        "answer": "Conto ou Fábula",
        "options": ["Bula de Remédio", "Poema", "Conto ou Fábula", "Lista de Compras"],
        "skill": "EF02LP25 - Gênero textual (Conto)",
        "rationale": "Contos e fábulas são narrativas breves e focadas."
    },
    {
        "question": "A principal diferença entre uma **fábula** e um **conto** comum é que a fábula:",
        "answer": "Sempre tem uma moral (lição) no final",
        "options": ["Sempre é muito longa", "Sempre tem animais como personagens", "Sempre tem uma moral (lição) no final", "Nunca tem diálogo"],
        "skill": "EF02LP25 - Gênero textual (Fábula vs Conto)",
        "rationale": "A moral é a característica distintiva da fábula."
    },
    {
        "question": "Qual gênero textual você lê para descobrir o que significam palavras desconhecidas?",
        "answer": "Dicionário",
        "options": ["Convite", "Reportagem", "Dicionário", "Regra de Jogo"],
        "skill": "EF02LP25 - Gênero textual (Dicionário)",
        "rationale": "O Dicionário fornece o significado das palavras."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP26 - Planejar produção de textos (contos, poemas). (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual é a **primeira coisa** que você deve decidir ao planejar escrever um conto?",
        "answer": "Qual será o assunto ou tema (o que vai acontecer)",
        "options": ["A cor da caneta", "Qual será o assunto ou tema (o que vai acontecer)", "Onde o conto será guardado", "Qual será o título (depois de pronto)"],
        "skill": "EF02LP26 - Planejamento (Tema)",
        "rationale": "O tema/assunto é o ponto de partida para qualquer texto narrativo."
    },
    {
        "question": "Ao escrever um **poema** sobre a natureza, o que você deve planejar antes de começar a escrever os versos?",
        "answer": "Quais sentimentos ou cores quer expressar",
        "options": ["Que horas vai brincar", "Quais sentimentos ou cores quer expressar", "O que vai jantar", "Quantos carros vai desenhar"],
        "skill": "EF02LP26 - Planejamento (Recursos expressivos)",
        "rationale": "Em poemas, o planejamento envolve a escolha de emoções e recursos estéticos."
    },
    {
        "question": "O que você deve definir para que o leitor saiba quem está falando em um conto?",
        "answer": "Os personagens e o narrador",
        "options": ["O tamanho da página", "Os personagens e o narrador", "O tipo de letra", "O clima lá fora"],
        "skill": "EF02LP26 - Planejamento (Narrador e Personagens)",
        "rationale": "A definição do narrador e dos personagens é crucial para a estrutura da narrativa."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP27 - Escrever textos curtos (narrativas, poemas, receitas). (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Ao escrever uma **receita**, qual palavra é essencial para o 'Modo de Preparo'?",
        "answer": "Misture",
        "options": ["Mágico", "Gato", "Misture", "Cheiroso"],
        "skill": "EF02LP27 - Escrita (Vocabulário instrucional)",
        "rationale": "Verbos no imperativo são essenciais em textos instrucionais como receitas."
    },
    {
        "question": "Em uma **narrativa** (conto), o que você usa para indicar que o personagem está falando?",
        "answer": "Travessão (—)",
        "options": ["Vírgula (,)", "Ponto final (.)", "Travessão (—)", "Ponto de exclamação (!)"],
        "skill": "EF02LP27 - Escrita (Diálogo)",
        "rationale": "O travessão marca o início da fala do personagem."
    },
    {
        "question": "Qual o melhor título para uma história curta sobre um cachorrinho que encontra uma bola?",
        "answer": "O Cãozinho e a Bola Perdida",
        "options": ["A Cama do Dono", "O Cãozinho e a Bola Perdida", "A Vaca Amarela", "O Pássaro que Cantava"],
        "skill": "EF02LP27 - Escrita (Título)",
        "rationale": "O título deve refletir o assunto principal da história."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP28 - Revisar o próprio texto. (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual a primeira coisa que você deve checar ao **revisar** seu texto?",
        "answer": "Se ele está fácil de entender e se as palavras estão separadas corretamente",
        "options": ["Se o texto é longo", "Se ele está fácil de entender e se as palavras estão separadas corretamente", "Se a letra é bonita", "Se o papel é branco"],
        "skill": "EF02LP28 - Revisão (Clareza e Segmentação)",
        "rationale": "A clareza e a correta segmentação (espaçamento) são essenciais para a compreensão."
    },
    {
        "question": "Se você encontra a palavra **'caxa'** em seu texto, o que você deve fazer na revisão?",
        "answer": "Corrigir para 'caixa'",
        "options": ["Colocar um ponto final", "Corrigir para 'caixa'", "Mudar a cor da letra", "Esconder a palavra"],
        "skill": "EF02LP28 - Revisão (Ortografia)",
        "rationale": "A revisão ortográfica busca erros de escrita."
    },
    {
        "question": "Qual pergunta você faz para revisar a **pontuação** do seu texto?",
        "answer": "Usei o ponto de interrogação nas perguntas e o ponto final nas afirmações?",
        "options": ["A frase tem 10 palavras?", "Usei o ponto de interrogação nas perguntas e o ponto final nas afirmações?", "Coloquei muitos números?", "A caneta tem tinta?"],
        "skill": "EF02LP28 - Revisão (Pontuação)",
        "rationale": "A revisão de pontuação verifica a adequação dos sinais ao sentido da frase."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP29 - Ler em voz alta com fluência. (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "O que significa **ler com fluência**?",
        "answer": "Ler com a velocidade certa, com a entonação correta e sem muitos erros",
        "options": ["Ler muito rápido e sem respirar", "Ler com a velocidade certa, com a entonação correta e sem muitos erros", "Ler só com os olhos", "Ler apenas o título"],
        "skill": "EF02LP29 - Conceito de Fluência",
        "rationale": "A fluência envolve velocidade, precisão e expressividade (entonação)."
    },
    {
        "question": "Para ler em voz alta um **poema**, você deve dar atenção especial:",
        "answer": "Ao ritmo e às rimas",
        "options": ["Aos números", "Ao ritmo e às rimas", "Às regras do jogo", "Aos nomes de rua"],
        "skill": "EF02LP29 - Leitura (Ritmo e Poesia)",
        "rationale": "O ritmo e a sonoridade são elementos chave na leitura de poemas."
    },
    {
        "question": "Ao ler a palavra **'JAMAIS'** (com exclamação), sua voz deve expressar:",
        "answer": "Uma afirmação ou negação forte",
        "options": ["Uma dúvida", "Uma afirmação ou negação forte", "Um sussurro", "Uma receita"],
        "skill": "EF02LP29 - Leitura (Expressividade)",
        "rationale": "O ponto de exclamação e a palavra 'jamais' exigem uma entonação enfática."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02LP30 - Participar de debates e discussões. (3 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual a melhor atitude ao participar de uma **discussão** em grupo?",
        "answer": "Escutar a opinião dos outros com respeito",
        "options": ["Falar mais alto que todos", "Escutar a opinião dos outros com respeito", "Falar apenas sobre si mesmo", "Ficar de costas"],
        "skill": "EF02LP30 - Conduta em debate (Respeito)",
        "rationale": "O respeito e a escuta ativa são fundamentais para o debate democrático."
    },
    {
        "question": "O que você deve fazer se **discordar** da opinião de um colega?",
        "answer": "Dizer o seu ponto de vista com argumentos e educação",
        "options": ["Bater na mesa", "Dizer o seu ponto de vista com argumentos e educação", "Ficar em silêncio para sempre", "Ir embora"],
        "skill": "EF02LP30 - Conduta em debate (Argumentação)",
        "rationale": "A discordância deve ser expressa de forma respeitosa e justificada."
    },
    {
        "question": "O que é um **argumento** em uma discussão?",
        "answer": "Uma razão ou prova para defender sua ideia",
        "options": ["Uma piada", "Uma razão ou prova para defender sua ideia", "Um número", "Uma cor"],
        "skill": "EF02LP30 - Conceito de Argumento",
        "rationale": "Argumentos são as justificativas usadas para sustentar um ponto de vista."
    }
];
