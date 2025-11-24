// ===============================================
// ARQUIVO: app.js
// Lógica Principal do Quiz (Revisada com Relatório Detalhado da BNCC)
// ===============================================

// 1. VARIÁVEIS DE ESTADO (STATE)
const state = {
    // Stage 1: Seleção de Componente
    // Stage 3: Atividade (Questão em andamento)
    // Stage 4: Feedback (Após responder)
    // Stage 5: Relatório Final Detalhado
    currentStage: 1, 
    selectedComponent: null, // 'mat', 'lin', 'cn', 'ch'
    activeQuestions: [],     // As 5 questões selecionadas para o quiz
    currentQuestionIndex: 0, // Índice da questão atual (0 a 4)
    score: 0,                // Pontuação total
    attempted: 0,
    // NOVO: Armazena o desempenho por Habilidade (BNCC Skill)
    // Exemplo: {'EF02MA01': {total: 2, correct: 1, name: "Descrição da habilidade"}}
    skillResults: {} 
};

// 2. CONFIGURAÇÃO
const MAX_QUESTIONS = 5; // Número de questões por rodada

// 3. FUNÇÕES PRINCIPAIS

/**
 * Junta, embaralha e seleciona 5 questões do componente escolhido.
 */
function loadAndShuffleQuestions() {
    let sourceBank;
    switch (state.selectedComponent) {
        case 'mat':
            sourceBank = typeof questionBank_mat !== 'undefined' ? questionBank_mat : [];
            break;
        case 'lin':
            sourceBank = typeof questionBank_lin !== 'undefined' ? questionBank_lin : [];
            break;
        case 'cn':
            sourceBank = typeof questionBank_cn !== 'undefined' ? questionBank_cn : [];
            break;
        case 'ch':
            sourceBank = typeof questionBank_ch !== 'undefined' ? questionBank_ch : [];
            break;
        default:
            return;
    }

    if (sourceBank.length === 0) {
        console.error(`O banco de questões para o componente '${state.selectedComponent}' está vazio ou não foi carregado.`);
        document.getElementById('app').innerHTML = `
            <div class="text-center p-8 bg-orange-100 border-2 border-orange-500 rounded-xl max-w-lg mx-auto">
                <h2 class="text-2xl text-orange-700">Atenção!</h2>
                <p class="text-gray-600">Não foi possível encontrar questões para este componente. Verifique os arquivos questions_*.js.</p>
                <button onclick="resetApp();" class="mt-4 px-6 py-3 bg-orange-500 text-white font-bold rounded-xl shadow-lg hover:bg-orange-600">Voltar</button>
            </div>
        `;
        return;
    }

    // Algoritmo Fisher-Yates para embaralhar o array
    const shuffled = [...sourceBank];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Seleciona as 5 primeiras questões
    state.activeQuestions = shuffled.slice(0, MAX_QUESTIONS);
    state.currentQuestionIndex = 0;
    state.score = 0;
    state.attempted = 0;
    state.skillResults = {}; // Reinicia o registro de habilidades
}

/**
 * Retorna as informações de tema (cor e ícone) para o componente.
 */
function getThemeInfo(component) {
    switch (component) {
        case 'mat': return { color: 'bg-red-500', icon: '🔢 Matemática', title: 'Matemática' };
        case 'lin': return { color: 'bg-green-500', icon: '📖 Linguagens', title: 'Linguagens' };
        case 'cn': return { color: 'bg-blue-500', icon: '🔬 Ciências da Natureza', title: 'Ciências da Natureza' };
        case 'ch': return { color: 'bg-yellow-500', icon: '🌍 Ciências Humanas', title: 'Ciências Humanas' };
        default: return { color: 'bg-gray-500', icon: '❓ Componente', title: 'Componente' };
    }
}

// 4. FUNÇÕES DE RENDERIZAÇÃO (VIEWS)

/**
 * Renderiza a tela de seleção de componente (Stage 1).
 */
function renderSelection() {
    document.getElementById('app').innerHTML = `
        <div class="text-center p-8">
            <h1 class="text-4xl font-extrabold text-gray-800 mb-6">👋 Olá! Escolha o Componente Curricular:</h1>
            <p class="text-xl text-gray-600 mb-10">Responda a ${MAX_QUESTIONS} perguntas aleatórias para revisar a matéria.</p>

            <div class="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
                <button onclick="startQuiz('mat')" class="p-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 bg-red-100 border-2 border-red-500 hover:bg-red-200">
                    <span class="text-3xl block mb-2">🔢</span>
                    <span class="font-bold text-lg text-red-700">Matemática</span>
                </button>
                <button onclick="startQuiz('lin')" class="p-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 bg-green-100 border-2 border-green-500 hover:bg-green-200">
                    <span class="text-3xl block mb-2">📖</span>
                    <span class="font-bold text-lg text-green-700">Linguagens</span>
                </button>
                <button onclick="startQuiz('cn')" class="p-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 bg-blue-100 border-2 border-blue-500 hover:bg-blue-200">
                    <span class="text-3xl block mb-2">🔬</span>
                    <span class="font-bold text-lg text-blue-700">Ciências da Natureza</span>
                </button>
                <button onclick="startQuiz('ch')" class="p-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 bg-yellow-100 border-2 border-yellow-500 hover:bg-yellow-200">
                    <span class="text-3xl block mb-2">🌍</span>
                    <span class="font-bold text-lg text-yellow-700">Ciências Humanas</span>
                </button>
            </div>
        </div>
    `;
}

/**
 * Renderiza a tela de atividade (Quiz em andamento - Stage 3).
 */
function renderActivity() {
    const qIndex = state.currentQuestionIndex;
    const currentQ = state.activeQuestions[qIndex];

    if (!currentQ) {
        // Se todas as questões foram respondidas, move para o relatório final
        state.currentStage = 5; 
        return renderApp();
    }
    
    const theme = getThemeInfo(state.selectedComponent);
    
    // Embaralha as opções para não ficarem sempre na mesma ordem
    const shuffledOptions = [...currentQ.options].sort(() => Math.random() - 0.5);

    document.getElementById('app').innerHTML = `
        <div class="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border-t-8 ${theme.color}">
            <p class="text-lg text-gray-500 mb-2 font-semibold">${theme.icon} | Questão ${qIndex + 1} de ${MAX_QUESTIONS}</p>
            <h2 class="text-2xl font-bold text-gray-800 mb-8">${currentQ.question}</h2>

            <div id="options-container" class="space-y-4">
                ${shuffledOptions.map((option, index) => `
                    <button 
                        class="w-full text-left p-4 rounded-xl border-2 border-gray-300 text-gray-700 font-medium transition duration-150 hover:bg-indigo-100 hover:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                        onclick="checkAnswer('${option.replace(/'/g, "\\'")}')"
                    >
                        <span class="font-extrabold pr-2 text-indigo-500">${String.fromCharCode(65 + index)}.</span> ${option}
                    </button>
                `).join('')}
            </div>

            <p class="mt-8 text-sm text-gray-400">Habilidade: ${currentQ.skill}</p>
        </div>
    `;
}

/**
 * Renderiza o feedback imediato (Stage 4).
 */
function renderFeedback(isCorrect, rationale) {
    const theme = getThemeInfo(state.selectedComponent);
    const resultColor = isCorrect ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500';
    const resultTitleColor = isCorrect ? 'text-green-700' : 'text-red-700';
    const resultText = isCorrect ? '✅ Acertou! Parabéns!' : '❌ Errou... Vamos aprender!';
    const buttonColor = isCorrect ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600';

    document.getElementById('app').innerHTML = `
        <div class="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border-t-8 ${theme.color}">
            <div class="p-4 rounded-xl border-2 ${resultColor} mb-6">
                <h2 class="text-3xl font-bold ${resultTitleColor} mb-2">${resultText}</h2>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-700 mb-2">💡 Explicação:</h3>
            <p class="text-gray-600 mb-6 border-l-4 border-gray-300 pl-4 py-1">${rationale}</p>
            
            <button 
                class="w-full px-6 py-3 text-white font-bold text-xl rounded-xl shadow-lg transition duration-150 ${buttonColor}"
                onclick="nextQuestion()"
            >
                ${state.currentQuestionIndex + 1 < MAX_QUESTIONS ? 'Próxima Questão' : 'Ver Relatório Detalhado'}
            </button>
        </div>
    `;
}

/**
 * Renderiza o relatório final com detalhes da BNCC (Stage 5).
 */
function renderReport() {
    const theme = getThemeInfo(state.selectedComponent);
    const percentage = (state.score / MAX_QUESTIONS) * 100;
    const finalMessage = percentage === 100 ? 
        '⭐ Parabéns! Você gabaritou a revisão!' : percentage >= 60 ?
        '👍 Ótimo resultado! Continue praticando para melhorar!' : 
        '🧐 Revisão concluída. Vamos focar nos pontos fracos para dominar o conteúdo!';
    
    const scoreColor = percentage === 100 ? 'text-green-600' : percentage >= 60 ? 'text-yellow-600' : 'text-red-600';

    // Gera o HTML do Relatório por Habilidade
    const skillReportHtml = Object.keys(state.skillResults).map(skillCode => {
        const result = state.skillResults[skillCode];
        const skillPercentage = (result.correct / result.total) * 100;
        // Define as cores com base na porcentagem de acerto da Habilidade
        const resultColor = skillPercentage === 100 ? 'bg-green-200' : skillPercentage >= 50 ? 'bg-yellow-200' : 'bg-red-200';
        const resultTextColor = skillPercentage === 100 ? 'text-green-800' : skillPercentage >= 50 ? 'text-yellow-800' : 'text-red-800';
        const feedbackIcon = skillPercentage === 100 ? '🌟' : skillPercentage >= 50 ? '💡' : '⚠️';
        
        // Pega apenas a parte após o hífen (a descrição), se houver
        const skillName = result.name.includes(' - ') ? result.name.split(' - ').slice(1).join(' - ') : result.name;

        return `
            <li class="p-3 rounded-lg flex justify-between items-center ${resultColor} shadow-sm border border-gray-300">
                <div class="flex flex-col text-left">
                    <span class="text-sm font-bold text-gray-700">${skillCode}</span>
                    <span class="text-xs text-gray-600">${skillName}</span>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-lg font-bold ${resultTextColor}">${feedbackIcon} ${result.correct}/${result.total}</span>
                </div>
            </li>
        `;
    }).join('');


    document.getElementById('app').innerHTML = `
        <div class="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border-t-8 ${theme.color} text-center">
            <h2 class="text-3xl font-bold text-gray-800 mb-1">${theme.icon}</h2>
            <h3 class="text-xl text-gray-600 mb-6">${theme.title}</h3>

            <div class="mb-8 p-4 bg-indigo-50 rounded-xl">
                <p class="text-base text-gray-700 font-semibold">Total de Acertos:</p>
                <p class="text-6xl font-extrabold ${scoreColor} mt-1">${state.score} / ${MAX_QUESTIONS}</p>
                <p class="text-xl text-gray-700 mt-2">${finalMessage}</p>
            </div>
            
            <!-- Relatório Detalhado por Habilidade -->
            <div class="text-left mb-8">
                <h4 class="text-xl font-bold text-gray-800 mb-3 border-b-2 pb-1">Desempenho por Habilidade (BNCC)</h4>
                <ul class="space-y-3">
                    ${skillReportHtml}
                </ul>
            </div>
            
            <div class="space-y-4 pt-4 border-t border-gray-200">
                <button 
                    class="w-full px-6 py-3 bg-indigo-500 text-white font-bold text-xl rounded-xl shadow-lg transition duration-150 hover:bg-indigo-600"
                    onclick="startQuiz(state.selectedComponent)"
                >
                    🔁 Refazer Quiz Desta Área (Novas Questões)
                </button>
                <button 
                    class="w-full px-6 py-3 bg-gray-500 text-white font-bold text-xl rounded-xl shadow-lg transition duration-150 hover:bg-gray-600"
                    onclick="resetApp()"
                >
                    🏠 Escolher Novo Componente
                </button>
            </div>
        </div>
    `;
}


// 5. FUNÇÕES DE CONTROLE DE FLUXO (CONTROLLER)

/**
 * Inicia o quiz para o componente selecionado.
 */
function startQuiz(component) {
    state.selectedComponent = component;
    loadAndShuffleQuestions();
    if (state.activeQuestions.length > 0) {
        state.currentStage = 3; // Mudar para a etapa de atividade
        renderApp();
    }
}

/**
 * Verifica a resposta do usuário, registra o resultado por habilidade e exibe o feedback.
 */
function checkAnswer(selectedOption) {
    const currentQ = state.activeQuestions[state.currentQuestionIndex];
    // Limpa a string para evitar problemas de comparação de espaços/caracteres
    const sanitizedOption = selectedOption.trim();
    const isCorrect = sanitizedOption === currentQ.answer.trim();
    
    // --- Lógica de Registro de Habilidade ---
    // Pega apenas o código (ex: EF02MA01)
    const skillCode = currentQ.skill.includes(' - ') ? currentQ.skill.split(' - ')[0] : currentQ.skill; 

    if (!state.skillResults[skillCode]) {
        state.skillResults[skillCode] = {
            total: 0,
            correct: 0,
            name: currentQ.skill // Guarda a descrição completa da habilidade
        };
    }

    state.skillResults[skillCode].total++;
    if (isCorrect) {
        state.score++;
        state.skillResults[skillCode].correct++;
    }
    // ---------------------------------------------

    state.attempted++;
    state.currentStage = 4; // Mudar para a etapa de feedback
    // Chama renderApp, passando se a resposta foi correta e a justificativa
    renderApp(isCorrect, currentQ.rationale); 
}

/**
 * Avança para a próxima questão (ou para o relatório final).
 */
function nextQuestion() {
    state.currentQuestionIndex++;
    state.currentStage = 3; // Mudar para a etapa de atividade (ou relatório se for a última)
    renderApp();
}

/**
 * Reseta o app para a seleção inicial (Stage 1).
 */
function resetApp() {
    state.currentStage = 1;
    state.selectedComponent = null;
    state.activeQuestions = [];
    state.skillResults = {}; // Garante que o relatório detalhado seja limpo
    renderApp();
}

/**
 * Função principal para renderizar a tela baseada no estado.
 */
function renderApp(isCorrect = null, rationale = '') {
    const appContainer = document.getElementById('app');
    if (!appContainer) {
        console.error("Elemento 'app' não encontrado. Verifique se o index.html está correto.");
        return;
    }

    try {
        switch (state.currentStage) {
            case 1:
                renderSelection();
                break;
            case 3:
                renderActivity();
                break;
            case 4: 
                renderFeedback(isCorrect, rationale);
                break;
            case 5:
                renderReport(); 
                break;
            default:
                renderSelection();
                break;
        }
    } catch (error) {
        console.error("Erro fatal na aplicação:", error);
        appContainer.innerHTML = `
            <div class="text-center p-8 bg-red-100 border-2 border-red-500 rounded-xl max-w-xl mx-auto">
                <h2 class="text-2xl text-red-700 font-bold">⚠️ Erro Inesperado!</h2>
                <p class="text-gray-600 mt-2">Ocorreu um problema ao carregar a tela. Detalhes: ${error.message}.</p>
                <button onclick="window.location.reload();" class="mt-4 px-6 py-3 bg-red-500 text-white font-bold text-xl rounded-xl shadow-lg hover:bg-red-600 transition duration-150">Recarregar Página</button>
            </div>
        `;
    }
}

// Inicializa a aplicação quando a página carregar
window.onload = renderApp;