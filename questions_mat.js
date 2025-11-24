const questionBank_mat = [
    // ----------------------------------------------------------------------
    // Habilidade: EF02MA01 - Ler, escrever, comparar e ordenar números naturais (até a ordem de centenas). (5 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual é o maior número que você pode formar com os algarismos 5, 2 e 8?",
        "answer": "852",
        "options": ["528", "258", "852", "825"],
        "skill": "EF02MA01 - Ordenação de números",
        "rationale": "Para formar o maior número, o algarismo de maior valor (8) deve estar na posição de maior peso (centenas), seguido por 5 e 2."
    },
    {
        "question": "No quadro de ordens, qual número vem logo **depois** do 399?",
        "answer": "400",
        "options": ["390", "400", "499", "300"],
        "skill": "EF02MA01 - Sucessor",
        "rationale": "O número 400 é o sucessor imediato de 399."
    },
    {
        "question": "Qual é a escrita por extenso do número **731**?",
        "answer": "Setecentos e trinta e um",
        "options": ["Setenta e três e um", "Setecentos e três um", "Setecentos e trinta e um", "Trezentos e setenta e um"],
        "skill": "EF02MA01 - Escrita por extenso",
        "rationale": "A escrita correta é 'Setecentos e trinta e um'."
    },
    {
        "question": "Qual número representa a quantidade de 'duas centenas, zero dezena e cinco unidades'?",
        "answer": "205",
        "options": ["250", "25", "205", "502"],
        "skill": "EF02MA01 - Leitura e formação de números",
        "rationale": "2 centenas (200) + 0 dezena (0) + 5 unidades (5) = 205."
    },
    {
        "question": "Qual número é **menor** que 645, mas **maior** que 600?",
        "answer": "610",
        "options": ["650", "610", "599", "700"],
        "skill": "EF02MA01 - Comparação",
        "rationale": "O número 610 está entre 600 e 645."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA02 - Identificar a posição (centena, dezena, unidade) e o valor de cada algarismo. (5 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "No número **473**, qual algarismo ocupa a ordem da **dezena**?",
        "answer": "7",
        "options": ["4", "7", "3", "0"],
        "skill": "EF02MA02 - Identificação de ordem (dezena)",
        "rationale": "O 7 está na segunda posição (da direita para a esquerda), que é a casa da dezena."
    },
    {
        "question": "No número **219**, qual é o **valor** do algarismo **2**?",
        "answer": "200",
        "options": ["2", "20", "200", "2000"],
        "skill": "EF02MA02 - Valor posicional (centena)",
        "rationale": "O 2 está na casa das centenas, valendo 200."
    },
    {
        "question": "No número **806**, o algarismo **0** ocupa qual posição?",
        "answer": "Dezena",
        "options": ["Unidade", "Dezena", "Centena", "Milhar"],
        "skill": "EF02MA02 - Identificação de ordem (zero)",
        "rationale": "O 0, mesmo sem valor, ocupa a posição da dezena."
    },
    {
        "question": "Qual é a ordem de maior valor no número **95**?",
        "answer": "Dezena",
        "options": ["Unidade", "Dezena", "Centena", "Milhar"],
        "skill": "EF02MA02 - Ordem de maior valor",
        "rationale": "O número 95 tem dois algarismos, sendo a dezena a ordem de maior valor."
    },
    {
        "question": "Se você tem o número 321, e muda o algarismo 3 para a posição da dezena, qual novo número você forma?",
        "answer": "231",
        "options": ["321", "231", "123", "312"],
        "skill": "EF02MA02 - Mudança de posição e valor",
        "rationale": "O novo número seria 2 (centena) + 3 (dezena) + 1 (unidade) = 231."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA03 - Comparar e ordenar números naturais. (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual conjunto de números está em ordem **crescente** (do menor para o maior)?",
        "answer": "112, 121, 211",
        "options": ["112, 211, 121", "211, 121, 112", "112, 121, 211", "121, 211, 112"],
        "skill": "EF02MA03 - Ordem crescente",
        "rationale": "Ordem crescente é do menor para o maior."
    },
    {
        "question": "O símbolo **<** significa que o número da esquerda é **menor que** o da direita. Qual das comparações está correta?",
        "answer": "150 < 152",
        "options": ["200 < 199", "150 < 152", "300 < 30", "50 > 80"],
        "skill": "EF02MA03 - Uso de símbolos de comparação (<, >)",
        "rationale": "150 é menor que 152."
    },
    {
        "question": "Qual conjunto de números está em ordem **decrescente** (do maior para o menor)?",
        "answer": "450, 440, 430",
        "options": ["430, 440, 450", "450, 440, 430", "440, 450, 430", "430, 450, 440"],
        "skill": "EF02MA03 - Ordem decrescente",
        "rationale": "Ordem decrescente é do maior para o menor."
    },
    {
        "question": "Usando o símbolo **=** (igual a), qual comparação é correta?",
        "answer": "1 dezena = 10 unidades",
        "options": ["1 dezena = 1 unidade", "1 dezena = 100 unidades", "1 dezena = 10 unidades", "1 dezena = 50 unidades"],
        "skill": "EF02MA03 - Igualdade",
        "rationale": "Uma dezena é equivalente a dez unidades."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA04 - Compor e decompor números naturais. (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual é a **decomposição** do número **58**?",
        "answer": "50 + 8",
        "options": ["5 + 8", "50 + 8", "80 + 5", "58 + 0"],
        "skill": "EF02MA04 - Decomposição (dezena e unidade)",
        "rationale": "58 é composto por 5 dezenas (50) e 8 unidades (8)."
    },
    {
        "question": "Qual número é formado pela **composição** de **100 + 40 + 7**?",
        "answer": "147",
        "options": ["147", "417", "1047", "1407"],
        "skill": "EF02MA04 - Composição (centena, dezena, unidade)",
        "rationale": "100 (1 centena) + 40 (4 dezenas) + 7 (7 unidades) = 147."
    },
    {
        "question": "A decomposição de **395** por ordem é:",
        "answer": "3 centenas, 9 dezenas e 5 unidades",
        "options": ["3 dezenas, 9 centenas e 5 unidades", "3 centenas, 9 dezenas e 5 unidades", "39 dezenas e 5 unidades", "300 + 95"],
        "skill": "EF02MA04 - Decomposição por ordem",
        "rationale": "O número 395 é formado por 3 centenas, 9 dezenas e 5 unidades."
    },
    {
        "question": "O número **206** pode ser decomposto como:",
        "answer": "2 centenas e 6 unidades",
        "options": ["20 dezenas e 6 unidades", "2 centenas e 6 unidades", "20 + 6", "26 dezenas"],
        "skill": "EF02MA04 - Decomposição com zero",
        "rationale": "206 é 2 centenas, 0 dezena e 6 unidades."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA05 - Construir fatos básicos da adição e subtração. (5 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual é o resultado de **8 + 7**?",
        "answer": "15",
        "options": ["14", "15", "16", "13"],
        "skill": "EF02MA05 - Fato básico da adição (soma)",
        "rationale": "O fato básico 8 + 7 resulta em 15."
    },
    {
        "question": "Se você tem 12 balas e come 4, quantas balas sobram? (Qual é o resultado de **12 - 4**?)",
        "answer": "8",
        "options": ["7", "8", "9", "16"],
        "skill": "EF02MA05 - Fato básico da subtração (diferença)",
        "rationale": "O fato básico 12 - 4 resulta em 8."
    },
    {
        "question": "Qual é o número que falta para completar a igualdade: **10 + [  ] = 17**?",
        "answer": "7",
        "options": ["10", "17", "7", "0"],
        "skill": "EF02MA05 - Fato básico (complemento)",
        "rationale": "10 + 7 = 17."
    },
    {
        "question": "Qual é o resultado de **15 - 0**?",
        "answer": "15",
        "options": ["0", "1", "15", "14"],
        "skill": "EF02MA05 - Subtração por zero",
        "rationale": "Qualquer número subtraído de zero é ele mesmo."
    },
    {
        "question": "Para obter o resultado 18, qual adição pode ser feita?",
        "answer": "9 + 9",
        "options": ["10 + 7", "9 + 9", "12 + 5", "8 + 9"],
        "skill": "EF02MA05 - Fato básico (duplo)",
        "rationale": "9 + 9 é um fato básico da adição que resulta em 18."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA06 - Resolver e elaborar problemas de adição e subtração. (5 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "João tinha 25 figurinhas. Ganhou mais 12 de sua tia. Com quantas figurinhas João ficou no total?",
        "answer": "37",
        "options": ["13", "37", "25", "27"],
        "skill": "EF02MA06 - Problema de adição (juntar)",
        "rationale": "25 + 12 = 37."
    },
    {
        "question": "Em uma árvore havia 48 passarinhos. 15 deles voaram. Quantos passarinhos restaram na árvore?",
        "answer": "33",
        "options": ["63", "33", "43", "58"],
        "skill": "EF02MA06 - Problema de subtração (tirar)",
        "rationale": "48 - 15 = 33."
    },
    {
        "question": "Laura tem 52 adesivos e Pedro tem 31. Quantos adesivos Laura tem **a mais** que Pedro?",
        "answer": "21",
        "options": ["83", "21", "52", "31"],
        "skill": "EF02MA06 - Problema de subtração (comparação)",
        "rationale": "52 - 31 = 21."
    },
    {
        "question": "Um ônibus começou a viagem com 10 passageiros. Na primeira parada, subiram 5. Na segunda parada, desceram 2. Quantos passageiros há agora?",
        "answer": "13",
        "options": ["17", "13", "12", "15"],
        "skill": "EF02MA06 - Problema de adição e subtração (mais de uma operação)",
        "rationale": "10 + 5 = 15. Depois, 15 - 2 = 13."
    },
    {
        "question": "A mãe de Maria fez 15 bolos no sábado e 14 no domingo. Se ela vender 20 bolos, quantos sobram?",
        "answer": "9",
        "options": ["29", "5", "9", "49"],
        "skill": "EF02MA06 - Problema de adição e subtração (com duas etapas)",
        "rationale": "15 + 14 = 29. Depois, 29 - 20 = 9."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA07 - Resolver e elaborar problemas de multiplicação (adição de parcelas iguais). (5 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Se você tem 4 caixas e em cada caixa há 5 lápis, quantos lápis você tem no total? (4 vezes 5)",
        "answer": "20",
        "options": ["9", "10", "20", "25"],
        "skill": "EF02MA07 - Multiplicação (adição de parcelas iguais)",
        "rationale": "5 + 5 + 5 + 5 = 20 ou 4 x 5 = 20."
    },
    {
        "question": "Qual é a representação da adição de parcelas iguais para a multiplicação **3 x 6**?",
        "answer": "6 + 6 + 6",
        "options": ["3 + 3 + 3", "6 + 6", "6 + 6 + 6", "3 + 6"],
        "skill": "EF02MA07 - Representação da multiplicação",
        "rationale": "3 x 6 significa o número 6 somado 3 vezes."
    },
    {
        "question": "Quantos dedos há em 5 mãos? (5 vezes 5)",
        "answer": "25",
        "options": ["10", "5", "20", "25"],
        "skill": "EF02MA07 - Problema de multiplicação",
        "rationale": "5 x 5 = 25."
    },
    {
        "question": "Se o preço de um pão é R$ 2,00. Quanto custam 4 pães?",
        "answer": "R$ 8,00",
        "options": ["R$ 6,00", "R$ 8,00", "R$ 4,00", "R$ 10,00"],
        "skill": "EF02MA07 - Problema de multiplicação (dinheiro)",
        "rationale": "4 x R$ 2,00 = R$ 8,00."
    },
    {
        "question": "Numa sala, há 3 fileiras e em cada fileira há 7 cadeiras. Quantas cadeiras há no total?",
        "answer": "21",
        "options": ["10", "14", "21", "24"],
        "skill": "EF02MA07 - Problema de multiplicação (organização retangular)",
        "rationale": "3 x 7 = 21."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA08 - Resolver e elaborar problemas de divisão (repartição e medida). (5 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Maria tem 10 doces e quer dividir igualmente entre 2 amigos. Quantos doces cada amigo receberá?",
        "answer": "5",
        "options": ["12", "10", "2", "5"],
        "skill": "EF02MA08 - Divisão (repartição igualitária)",
        "rationale": "10 ÷ 2 = 5."
    },
    {
        "question": "Se você tem 15 moedas e quer formar grupos de 3 moedas, quantos grupos você forma?",
        "answer": "5",
        "options": ["18", "3", "5", "12"],
        "skill": "EF02MA08 - Divisão (medida)",
        "rationale": "15 ÷ 3 = 5 grupos."
    },
    {
        "question": "João precisa guardar 16 livros. Se cada prateleira cabe 4 livros, quantas prateleiras ele vai precisar?",
        "answer": "4",
        "options": ["20", "12", "8", "4"],
        "skill": "EF02MA08 - Divisão (medida - prateleiras)",
        "rationale": "16 ÷ 4 = 4 prateleiras."
    },
    {
        "question": "Qual é a metade de **14**?",
        "answer": "7",
        "options": ["14", "28", "12", "7"],
        "skill": "EF02MA08 - Divisão (metade)",
        "rationale": "Metade é o resultado da divisão por 2. 14 ÷ 2 = 7."
    },
    {
        "question": "Se 3 crianças ganharam um total de 9 adesivos e dividiram em partes iguais, quantos adesivos cada uma ganhou?",
        "answer": "3",
        "options": ["6", "12", "3", "9"],
        "skill": "EF02MA08 - Divisão (repartição igualitária)",
        "rationale": "9 ÷ 3 = 3."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA09 - Construir sequências de números naturais. (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual é o próximo número na sequência: 5, 10, 15, 20, **[  ]**?",
        "answer": "25",
        "options": ["21", "25", "30", "22"],
        "skill": "EF02MA09 - Sequência (adição de 5)",
        "rationale": "A sequência aumenta de 5 em 5."
    },
    {
        "question": "Qual número completa a sequência decrescente: 50, 48, 46, **[  ]**, 42?",
        "answer": "44",
        "options": ["45", "44", "43", "40"],
        "skill": "EF02MA09 - Sequência (subtração de 2)",
        "rationale": "A sequência diminui de 2 em 2."
    },
    {
        "question": "Qual é o padrão (regra) da sequência: 10, 20, 30, 40?",
        "answer": "Adicionar 10 ao número anterior",
        "options": ["Subtrair 10", "Multiplicar por 1", "Adicionar 10 ao número anterior", "Dividir por 2"],
        "skill": "EF02MA09 - Identificação do padrão",
        "rationale": "O padrão é a soma constante de 10."
    },
    {
        "question": "Qual é o próximo número na sequência: 100, 95, 90, 85, **[  ]**?",
        "answer": "80",
        "options": ["86", "81", "80", "75"],
        "skill": "EF02MA09 - Sequência (subtração de 5)",
        "rationale": "A sequência diminui de 5 em 5. 85 - 5 = 80."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA10 - Descrever posição e deslocamento (mapas, croquis). (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Para sair da sala e ir para o pátio, você deve: 'Sair, virar à direita, andar reto e virar à esquerda'. Qual conceito matemático foi usado para descrever o caminho?",
        "answer": "Deslocamento e direção",
        "options": ["Peso", "Dinheiro", "Deslocamento e direção", "Figuras planas"],
        "skill": "EF02MA10 - Descrição de deslocamento",
        "rationale": "Usar 'virar', 'andar reto' e 'sair' descreve o deslocamento."
    },
    {
        "question": "Em um mapa, se a escola está à **direita** da praça e você está na praça, para onde você deve olhar para ver a escola?",
        "answer": "Para o seu lado direito",
        "options": ["Para o seu lado esquerdo", "Para a frente", "Para o seu lado direito", "Para trás"],
        "skill": "EF02MA10 - Posição relativa (direita/esquerda)",
        "rationale": "A posição à direita indica o lado direito de quem observa ou do ponto de referência."
    },
    {
        "question": "Um **croqui** ou mapa simples serve para:",
        "answer": "Representar a localização e o caminho entre lugares",
        "options": ["Fazer contas", "Representar a localização e o caminho entre lugares", "Desenhar pessoas", "Contar histórias"],
        "skill": "EF02MA10 - Função do mapa/croqui",
        "rationale": "Mapas e croquis são representações espaciais."
    },
    {
        "question": "Qual seria a instrução correta para um robô que precisa se deslocar 3 casas para frente e 1 casa para a esquerda?",
        "answer": "Frente, frente, frente, esquerda",
        "options": ["Direita, esquerda, frente", "Frente, frente, frente, esquerda", "Frente, direita, esquerda, direita", "Esquerda, direita, frente"],
        "skill": "EF02MA10 - Codificação de deslocamento",
        "rationale": "O comando deve ter a sequência correta de movimentos: 3 de 'frente' e 1 de 'esquerda'."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA11 - Descrever e comparar sólidos geométricos (faces, arestas, vértices). (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual sólido geométrico tem **6 faces** quadradas ou retangulares?",
        "answer": "Cubo ou bloco retangular",
        "options": ["Esfera", "Cone", "Cubo ou bloco retangular", "Cilindro"],
        "skill": "EF02MA11 - Propriedades dos sólidos (Cubo/Bloco)",
        "rationale": "O cubo tem 6 faces quadradas, e o bloco retangular (paralelepípedo) tem 6 faces retangulares."
    },
    {
        "question": "A **aresta** de um sólido geométrico é:",
        "answer": "O encontro de duas faces (linha)",
        "options": ["O ponto de encontro das linhas", "O encontro de duas faces (linha)", "A parte que rola", "A parte plana do objeto"],
        "skill": "EF02MA11 - Conceito de aresta",
        "rationale": "A aresta é o segmento de reta resultante do encontro de duas faces."
    },
    {
        "question": "Qual sólido geométrico tem a característica de **poder rolar** facilmente?",
        "answer": "Esfera",
        "options": ["Pirâmide", "Cubo", "Esfera", "Bloco retangular"],
        "skill": "EF02MA11 - Sólidos que rolam",
        "rationale": "A esfera é o sólido que rola devido à sua superfície curva."
    },
    {
        "question": "O **vértice** de um sólido geométrico é:",
        "answer": "O ponto de encontro das arestas",
        "options": ["A parte plana", "O ponto de encontro das arestas", "A linha curva", "O centro da figura"],
        "skill": "EF02MA11 - Conceito de vértice",
        "rationale": "O vértice é o ponto de encontro de três ou mais arestas."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA12 - Identificar e desenhar figuras planas (triângulo, quadrado, retângulo, círculo). (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual figura plana tem **3 lados** e **3 vértices**?",
        "answer": "Triângulo",
        "options": ["Quadrado", "Círculo", "Triângulo", "Retângulo"],
        "skill": "EF02MA12 - Identificação (Triângulo)",
        "rationale": "O triângulo é um polígono de 3 lados."
    },
    {
        "question": "Se você cortar um **cubo** de papelão em suas faces, qual figura plana você obterá?",
        "answer": "Quadrado",
        "options": ["Círculo", "Triângulo", "Quadrado", "Losango"],
        "skill": "EF02MA12 - Figuras planas (faces do cubo)",
        "rationale": "As faces do cubo são quadrados."
    },
    {
        "question": "Qual figura plana **não tem lados** retos?",
        "answer": "Círculo",
        "options": ["Retângulo", "Quadrado", "Triângulo", "Círculo"],
        "skill": "EF02MA12 - Figuras planas com curvas",
        "rationale": "O círculo é delimitado por uma linha curva."
    },
    {
        "question": "Uma folha de caderno tem o formato de qual figura plana?",
        "answer": "Retângulo",
        "options": ["Círculo", "Retângulo", "Triângulo", "Pentágono"],
        "skill": "EF02MA12 - Identificação de figuras planas no ambiente",
        "rationale": "A folha de caderno tem o formato de um retângulo."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA13 - Reconhecer e comparar figuras planas com base em características (lados, vértices). (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "O **Quadrado** e o **Retângulo** são parecidos porque ambos têm:",
        "answer": "4 lados e 4 vértices",
        "options": ["Apenas 3 lados", "Lados curvos", "4 lados e 4 vértices", "Apenas 1 lado"],
        "skill": "EF02MA13 - Comparação (Quadrado e Retângulo)",
        "rationale": "Ambos são quadriláteros (4 lados e 4 vértices)."
    },
    {
        "question": "Qual é a principal diferença entre um **Quadrado** e um **Retângulo**?",
        "answer": "No quadrado, todos os lados são do mesmo tamanho",
        "options": ["No quadrado, todos os lados são do mesmo tamanho", "O retângulo não tem vértices", "O quadrado não tem lados", "O retângulo só tem 3 lados"],
        "skill": "EF02MA13 - Diferença (Lados)",
        "rationale": "No quadrado, os quatro lados têm a mesma medida; no retângulo, apenas os lados opostos são iguais."
    },
    {
        "question": "A figura plana que tem **menos** vértices que o quadrado é o:",
        "answer": "Triângulo",
        "options": ["Retângulo", "Pentágono", "Triângulo", "Hexágono"],
        "skill": "EF02MA13 - Comparação pelo número de vértices",
        "rationale": "O quadrado tem 4 vértices, o triângulo tem 3."
    },
    {
        "question": "Quantos **lados** tem um polígono chamado **Pentágono**?",
        "answer": "5",
        "options": ["3", "4", "5", "6"],
        "skill": "EF02MA13 - Relação nome e número de lados",
        "rationale": "Penta significa cinco."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA14 - Reconhecer e comparar unidades de medida de comprimento. (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual unidade de medida você usa para medir o **comprimento da sala de aula**?",
        "answer": "Metro (m)",
        "options": ["Litro (L)", "Quilograma (kg)", "Metro (m)", "Hora (h)"],
        "skill": "EF02MA14 - Unidade de medida de comprimento",
        "rationale": "O metro é a unidade padrão para medir comprimentos maiores."
    },
    {
        "question": "Para medir o **comprimento do seu lápis**, a melhor unidade é:",
        "answer": "Centímetro (cm)",
        "options": ["Quilômetro (km)", "Centímetro (cm)", "Metro (m)", "Litro (L)"],
        "skill": "EF02MA14 - Unidade de medida de comprimento (Centímetro)",
        "rationale": "O centímetro é usado para objetos menores, como lápis."
    },
    {
        "question": "Quantos **centímetros** cabem em **1 metro**?",
        "answer": "100",
        "options": ["10", "100", "1000", "50"],
        "skill": "EF02MA14 - Relação metro-centímetro",
        "rationale": "1 metro = 100 centímetros."
    },
    {
        "question": "Qual instrumento você usa para medir o **comprimento de uma mesa**?",
        "answer": "Fita métrica ou régua",
        "options": ["Balança", "Relógio", "Fita métrica ou régua", "Termômetro"],
        "skill": "EF02MA14 - Instrumentos de medida de comprimento",
        "rationale": "Régua e fita métrica são instrumentos de medida de comprimento."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA15 - Medir grandezas de massa e capacidade. (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Para medir a **capacidade** de água em uma garrafa, a unidade mais usada é:",
        "answer": "Litro (L)",
        "options": ["Quilograma (kg)", "Metro (m)", "Litro (L)", "Grau Celsius (°C)"],
        "skill": "EF02MA15 - Unidade de medida de capacidade",
        "rationale": "O litro é a unidade padrão para medir líquidos (capacidade)."
    },
    {
        "question": "Qual instrumento você usa para medir a **massa** (peso) de frutas no mercado?",
        "answer": "Balança",
        "options": ["Fita métrica", "Relógio", "Balança", "Copos"],
        "skill": "EF02MA15 - Instrumento de medida de massa",
        "rationale": "A balança mede a massa (peso)."
    },
    {
        "question": "Qual unidade de medida você usa para medir a **massa** (peso) de um pacote de arroz?",
        "answer": "Quilograma (kg)",
        "options": ["Litro (L)", "Metro (m)", "Quilograma (kg)", "Centímetro (cm)"],
        "skill": "EF02MA15 - Unidade de medida de massa",
        "rationale": "O quilograma é a unidade padrão para medir a massa."
    },
    {
        "question": "O que tem maior **capacidade** (cabe mais líquido)?",
        "answer": "Piscina",
        "options": ["Colher", "Copo", "Piscina", "Tampa de caneta"],
        "skill": "EF02MA15 - Comparação de capacidade",
        "rationale": "A piscina tem a maior capacidade de armazenamento de líquido."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA16 - Estimar, medir e comparar temperatura. (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual instrumento você usa para medir a **temperatura** do seu corpo?",
        "answer": "Termômetro",
        "options": ["Régua", "Termômetro", "Balança", "Relógio"],
        "skill": "EF02MA16 - Instrumento de medida de temperatura",
        "rationale": "O termômetro é o instrumento usado para medir a temperatura."
    },
    {
        "question": "A unidade de medida da temperatura mais comum no Brasil é:",
        "answer": "Grau Celsius (°C)",
        "options": ["Litro (L)", "Grau Celsius (°C)", "Quilômetro (km)", "Quilograma (kg)"],
        "skill": "EF02MA16 - Unidade de medida de temperatura",
        "rationale": "O Grau Celsius é a unidade padrão no Brasil."
    },
    {
        "question": "Se o termômetro marca **38°C**, a temperatura está:",
        "answer": "Quente (acima do normal para o corpo)",
        "options": ["Fria", "Normal", "Quente (acima do normal para o corpo)", "Congelando"],
        "skill": "EF02MA16 - Comparação e Estimativa de temperatura",
        "rationale": "38°C é considerado febre (temperatura quente para o corpo)."
    },
    {
        "question": "A temperatura da água que você toma banho deve ser **maior ou menor** que 10°C?",
        "answer": "Maior",
        "options": ["Menor", "Igual a zero", "Maior", "Igual a 10°C"],
        "skill": "EF02MA16 - Comparação e Estimativa de temperatura (cotidiano)",
        "rationale": "10°C é uma temperatura muito baixa; a água do banho deve ser quente, ou seja, com temperatura maior."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA17 - Reconhecer, nomear e comparar o valor das moedas e cédulas. (5 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Qual é a cédula (nota) de menor valor usada no Brasil atualmente?",
        "answer": "R$ 2,00",
        "options": ["R$ 10,00", "R$ 5,00", "R$ 2,00", "R$ 1,00"],
        "skill": "EF02MA17 - Reconhecimento de cédulas",
        "rationale": "A cédula de R$ 2,00 é a de menor valor em circulação."
    },
    {
        "question": "Qual moeda tem o maior valor entre as opções abaixo?",
        "answer": "R$ 1,00",
        "options": ["5 centavos", "10 centavos", "R$ 1,00", "25 centavos"],
        "skill": "EF02MA17 - Comparação de moedas",
        "rationale": "R$ 1,00 é a moeda de maior valor."
    },
    {
        "question": "Se você tem uma moeda de **50 centavos** e uma de **5 centavos**, qual é o valor total?",
        "answer": "55 centavos",
        "options": ["10 centavos", "50 centavos", "55 centavos", "60 centavos"],
        "skill": "EF02MA17 - Comparação e soma de moedas",
        "rationale": "50 + 5 = 55 centavos."
    },
    {
        "question": "O que você consegue comprar com R$ 10,00?",
        "answer": "Um brinquedo que custa R$ 8,00",
        "options": ["Uma bicicleta que custa R$ 150,00", "Um brinquedo que custa R$ 8,00", "Um carro que custa R$ 20.000,00", "Uma casa que custa R$ 50.000,00"],
        "skill": "EF02MA17 - Situação-problema (comparação de valores)",
        "rationale": "R$ 10,00 é suficiente para comprar o item que custa R$ 8,00."
    },
    {
        "question": "Qual é a cédula mais nova (comemorativa) do Brasil?",
        "answer": "R$ 200,00",
        "options": ["R$ 2,00", "R$ 50,00", "R$ 100,00", "R$ 200,00"],
        "skill": "EF02MA17 - Reconhecimento de cédulas (valor mais alto)",
        "rationale": "A cédula de R$ 200,00 foi a última a ser lançada."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA18 - Indicar a duração de intervalos de tempo (dia e noite, horas, minutos). (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "O que o ponteiro **grande** do relógio de ponteiros marca?",
        "answer": "Minutos",
        "options": ["Horas", "Segundos", "Minutos", "Dias"],
        "skill": "EF02MA18 - Leitura de relógio (minutos)",
        "rationale": "O ponteiro grande indica os minutos."
    },
    {
        "question": "Se são 3 horas da tarde, como escrevemos isso no relógio digital (formato 24h)?",
        "answer": "15:00",
        "options": ["03:00", "15:00", "00:03", "13:00"],
        "skill": "EF02MA18 - Formato 24h",
        "rationale": "3 horas da tarde é 12 + 3 = 15 horas."
    },
    {
        "question": "Quantos minutos têm **meia hora**?",
        "answer": "30 minutos",
        "options": ["60 minutos", "30 minutos", "15 minutos", "10 minutos"],
        "skill": "EF02MA18 - Intervalo de tempo (meia hora)",
        "rationale": "Uma hora tem 60 minutos, e meia hora é a metade: 60 ÷ 2 = 30."
    },
    {
        "question": "A aula começou às 8:00 e terminou às 9:00. Qual foi a **duração** da aula?",
        "answer": "1 hora",
        "options": ["2 horas", "30 minutos", "1 hora", "9 horas"],
        "skill": "EF02MA18 - Duração do intervalo",
        "rationale": "De 8:00 a 9:00, o intervalo é de 1 hora."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA19 - Medir e comparar tempo usando calendário. (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Quantos dias tem uma semana completa?",
        "answer": "7",
        "options": ["5", "30", "7", "12"],
        "skill": "EF02MA19 - Unidade de tempo (semana)",
        "rationale": "Uma semana tem 7 dias."
    },
    {
        "question": "Qual é o nome do terceiro mês do ano?",
        "answer": "Março",
        "options": ["Janeiro", "Fevereiro", "Março", "Abril"],
        "skill": "EF02MA19 - Ordem dos meses",
        "rationale": "O terceiro mês é Março."
    },
    {
        "question": "Qual é a unidade de tempo mais longa entre as opções?",
        "answer": "Ano",
        "options": ["Dia", "Semana", "Mês", "Ano"],
        "skill": "EF02MA19 - Comparação de unidades de tempo",
        "rationale": "O ano é a maior unidade de tempo básica (12 meses)."
    },
    {
        "question": "Quantos meses tem um ano completo?",
        "answer": "12",
        "options": ["7", "10", "12", "30"],
        "skill": "EF02MA19 - Unidade de tempo (ano)",
        "rationale": "Um ano tem 12 meses."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA20 - Estabelecer equivalências entre valores de moedas e cédulas. (5 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Quantas moedas de **10 centavos** você precisa para formar R$ 1,00?",
        "answer": "10",
        "options": ["1", "5", "10", "2"],
        "skill": "EF02MA20 - Equivalência (moedas e real)",
        "rationale": "10 moedas de R$ 0,10 somam R$ 1,00."
    },
    {
        "question": "Qual é a equivalência de valor correta?",
        "answer": "5 moedas de 50 centavos = R$ 2,50",
        "options": ["5 moedas de 50 centavos = R$ 2,50", "1 moeda de R$ 1,00 = 20 moedas de 5 centavos", "2 cédulas de R$ 5,00 = R$ 20,00", "4 moedas de 25 centavos = R$ 2,00"],
        "skill": "EF02MA20 - Equivalência (diferentes notas/moedas)",
        "rationale": "5 x R$ 0,50 = R$ 2,50."
    },
    {
        "question": "Quantas moedas de **50 centavos** são necessárias para ter o mesmo valor de uma cédula de **R$ 5,00**?",
        "answer": "10",
        "options": ["5", "10", "2", "20"],
        "skill": "EF02MA20 - Equivalência (cédula e moedas)",
        "rationale": "R$ 5,00 ÷ R$ 0,50 = 10 moedas."
    },
    {
        "question": "Você tem 1 cédula de R$ 10,00 e 2 cédulas de R$ 5,00. Qual é o valor total?",
        "answer": "R$ 20,00",
        "options": ["R$ 15,00", "R$ 10,00", "R$ 20,00", "R$ 30,00"],
        "skill": "EF02MA20 - Equivalência (soma de cédulas)",
        "rationale": "R$ 10,00 + (2 x R$ 5,00) = R$ 10,00 + R$ 10,00 = R$ 20,00."
    },
    {
        "question": "Qual a menor quantidade de cédulas para formar R$ 7,00 (usando cédulas de R$ 2,00, R$ 5,00, R$ 10,00)?",
        "answer": "1 cédula de R$ 5,00 e 1 cédula de R$ 2,00",
        "options": ["3 cédulas de R$ 2,00 e 1 de R$ 1,00", "1 cédula de R$ 10,00", "1 cédula de R$ 5,00 e 1 cédula de R$ 2,00", "7 cédulas de R$ 1,00"],
        "skill": "EF02MA20 - Equivalência (economia de cédulas)",
        "rationale": "R$ 5,00 + R$ 2,00 = R$ 7,00 (2 cédulas)."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA21 - Classificar eventos aleatórios (certo, provável, impossível). (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Ao jogar um dado de 6 lados, é **certo** que o número sorteado será:",
        "answer": "Menor que 7",
        "options": ["Igual a 10", "Menor que 7", "Igual a 1", "Par"],
        "skill": "EF02MA21 - Classificação de evento (Certo)",
        "rationale": "Um dado de 6 lados só tem números de 1 a 6. É certo que o número será menor que 7."
    },
    {
        "question": "Em uma caixa só há bolas azuis. Se você pegar uma bola sem olhar, é **impossível** que ela seja:",
        "answer": "Vermelha",
        "options": ["Azul", "Redonda", "Vermelha", "Grande"],
        "skill": "EF02MA21 - Classificação de evento (Impossível)",
        "rationale": "Se a caixa só tem bolas azuis, é impossível tirar uma vermelha."
    },
    {
        "question": "Em um sorteio de nomes com 9 meninas e 1 menino, é mais **provável** que seja sorteado:",
        "answer": "O nome de uma menina",
        "options": ["O nome de um menino", "O nome de uma menina", "Um número", "O nome de um animal"],
        "skill": "EF02MA21 - Classificação de evento (Provável)",
        "rationale": "A probabilidade é maior para o grupo com maior quantidade (9 meninas)."
    },
    {
        "question": "Ao jogar uma moeda para cima, é mais **provável** que caia:",
        "answer": "É igualmente provável que caia cara ou coroa",
        "options": ["Cara", "Coroa", "É igualmente provável que caia cara ou coroa", "Nenhuma das opções"],
        "skill": "EF02MA21 - Classificação de evento (Igualmente Provável)",
        "rationale": "A moeda tem duas faces, e a chance de cair em cada uma é de 50% (igualmente provável)."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA22 - Ler, interpretar e comparar dados em tabelas simples e de dupla entrada. (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Em uma tabela de frutas, qual informação fica na **coluna**?",
        "answer": "A quantidade de cada fruta",
        "options": ["O título da tabela", "A quantidade de cada fruta", "O nome do autor", "A data do dia seguinte"],
        "skill": "EF02MA22 - Estrutura da tabela",
        "rationale": "As colunas (verticais) e linhas (horizontais) contêm os dados e suas categorias."
    },
    {
        "question": "Se uma tabela compara 'Meninos' e 'Meninas' com as cores 'Azul' e 'Amarelo', ela é uma tabela de:",
        "answer": "Dupla entrada",
        "options": ["Simples entrada", "Dupla entrada", "Gráfico de colunas", "Gráfico de barras"],
        "skill": "EF02MA22 - Tipo de tabela (dupla entrada)",
        "rationale": "A tabela de dupla entrada compara duas variáveis diferentes ao mesmo tempo (gênero e cor)."
    },
    {
        "question": "Em uma tabela simples, a **linha** contém:",
        "answer": "Os dados de uma categoria",
        "options": ["O total de todos os dados", "Os dados de uma categoria", "A cor da letra", "A data de hoje"],
        "skill": "EF02MA22 - Estrutura da tabela (linhas)",
        "rationale": "As linhas agrupam informações ou dados relacionados a uma categoria."
    },
    {
        "question": "Se uma tabela mostra que há 15 laranjas e 20 maçãs, qual fruta está em **maior** quantidade?",
        "answer": "Maçã",
        "options": ["Laranja", "Maçã", "As duas em igual quantidade", "Nenhuma"],
        "skill": "EF02MA22 - Interpretação e comparação de dados",
        "rationale": "20 é maior que 15."
    },

    // ----------------------------------------------------------------------
    // Habilidade: EF02MA23 - Ler, interpretar e comparar dados em gráficos de colunas simples. (4 Questões)
    // ----------------------------------------------------------------------
    {
        "question": "Em um **gráfico de colunas**, a altura da coluna indica:",
        "answer": "A quantidade de um item",
        "options": ["A cor do gráfico", "A quantidade de um item", "O nome da escola", "O dia da semana"],
        "skill": "EF02MA23 - Leitura de gráfico (altura da coluna)",
        "rationale": "A altura da coluna é proporcional à frequência ou quantidade de dados."
    },
    {
        "question": "Qual é a principal função de um **gráfico de colunas**?",
        "answer": "Facilitar a comparação visual das quantidades",
        "options": ["Contar histórias", "Facilitar a comparação visual das quantidades", "Apenas decorar a página", "Medir o tempo"],
        "skill": "EF02MA23 - Função do gráfico",
        "rationale": "Gráficos tornam a comparação e interpretação dos dados mais rápida e visual."
    },
    {
        "question": "Em um gráfico de vendas, qual produto foi o mais vendido?",
        "answer": "O que tiver a coluna mais alta",
        "options": ["O que tiver a coluna mais baixa", "O que tiver a coluna mais alta", "O que tiver a cor azul", "O que for o seu preferido"],
        "skill": "EF02MA23 - Interpretação e comparação (maior valor)",
        "rationale": "A coluna mais alta representa a maior quantidade."
    },
    {
        "question": "O que o **eixo vertical** (o que sobe) de um gráfico de colunas geralmente representa?",
        "answer": "Os números (quantidades)",
        "options": ["O nome dos itens", "Os números (quantidades)", "As cores", "Os dias da semana"],
        "skill": "EF02MA23 - Estrutura do gráfico (eixo vertical)",
        "rationale": "O eixo vertical (y) geralmente é a escala numérica."
    }
];
