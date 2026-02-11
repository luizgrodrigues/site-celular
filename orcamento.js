// Formulário de Orçamento
const budgetForm = document.getElementById('budgetForm');

if (budgetForm) {
    budgetForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coletar dados do formulário
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Coletar checkboxes marcados
        const problems = [];
        document.querySelectorAll('input[name="problems"]:checked').forEach(checkbox => {
            problems.push(checkbox.value);
        });
        
        // Validar pelo menos um problema selecionado
        if (problems.length === 0) {
            alert('Por favor, selecione pelo menos um problema.');
            return;
        }
        
        // Criar objeto com todos os dados
        const budgetRequest = {
            nome: data.name,
            email: data.email,
            telefone: data.phone,
            tipoDispositivo: data.deviceType,
            modelo: data.deviceModel,
            problemas: problems,
            descricao: data.problemDescription,
            urgencia: data.urgency,
            preferencia: data.budgetPreference,
            dataHora: new Date().toLocaleString('pt-BR')
        };
        
        // Simular envio ao servidor
        console.log('Solicitação de orçamento:', budgetRequest);
        
        // Salvar no localStorage (simulação)
        let requests = JSON.parse(localStorage.getItem('budgetRequests')) || [];
        requests.push(budgetRequest);
        localStorage.setItem('budgetRequests', JSON.stringify(requests));
        
        // Mostrar mensagem de sucesso
        alert(`Obrigado, ${data.name}! Sua solicitação de orçamento foi enviada com sucesso.\n\nEntraremos em contato em até 2 horas úteis no telefone: ${data.phone}`);
        
        // Resetar formulário
        this.reset();
        
        // Redirecionar após 3 segundos
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    });
}

// Adicionar estilos específicos para a página de orçamento
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar CSS específico
    const style = document.createElement('style');
    style.textContent = `
        .budget-page {
            padding: 120px 5% 5rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .budget-container {
            background-color: #59595a;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .budget-container h2 {
            text-align: center;
            color: white;
            margin-bottom: 0.5rem;
        }
        
        .budget-subtitle {
            text-align: center;
            color: var(--gray-color);
            margin-bottom: 2rem;
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: var(--dark-color);
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #0906bb;
            border-radius: 5px;
            font-family: inherit;
            font-size: 1rem;
        }
        
        .checkbox-group {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 0.5rem;
            margin-top: 0.5rem;
        }
        
        .checkbox-group label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: normal;
            cursor: pointer;
        }
        
        .checkbox-group input[type="checkbox"] {
            width: auto;
        }
        
        .budget-info {
            margin-top: 3rem;
            padding: 1.5rem;
            background-color: #f0f7ff;
            border-radius: 10px;
            border-left: 4px solid var(--primary-color);
        }
        
        .budget-info h3 {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
            color: var(--primary-color);
        }
        
        .budget-info ul {
            list-style-position: inside;
            color: var(--gray-color);
        }
        
        .budget-info li {
            margin-bottom: 0.5rem;
        }
        
        @media (max-width: 768px) {
            .checkbox-group {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(style);
});

// Menu Mobile (reutilizando função da página principal)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = '#59595a';
        navLinks.style.padding = '1rem';
        navLinks.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
    });
}