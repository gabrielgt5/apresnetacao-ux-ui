# Implementação Completa da Apresentação UX/UI

O objetivo deste plano é garantir que **nenhum slide do PDF original seja omitido** e que o projeto inclua espaços claramente definidos para que as imagens correspondentes possam ser inseridas manualmente no futuro.

## Levantamento de Slides (30 Telas Mapeadas)

1. **Capa:** "O Mundo do Software" - Metáfora da Cidade Digital.
2. **Reflexão (Cidade Digital):** "Quem vai cuidar da experiência dos moradores?"
3. **Transição:** "A Vida do Usuário" - Antes de falar de UX/UI.
4. **Conceito:** "O que é modelo conceitual?"
5. **Atividade 1 (Bicicleta):** Faça o desenho de uma bicicleta (30 seg).
   - `[PLACEHOLDER DE IMAGEM]` - Bicicleta convergente de Jacques Carelman
6. **Explicação:** Modelos conceituais e a simulação mental.
7. **Definição:** O que é Design? Processo de pensamento (Insight, Razão, Intuição).
8. **Analogia:** Toda cidade existe para as pessoas (foco no usuário).
9. **Conceito UX:** UX Design - Sentimento, usabilidade, redução de fricção.
10. **Lista:** Princípios de UX (Usabilidade, Acessibilidade, etc).
11. **Lista:** Processo de UX Design (Pesquisa, Wireframes, Prototipação, Testes).
12. **Atividade 2:** "Qual App/site vocês mais usam e por quê?"
13. **Exemplo UX:** Exemplo de Feedback
    - `[PLACEHOLDER DE IMAGEM]`
14. **Exemplo UX:** Exemplo de Consistência
    - `[PLACEHOLDER DE IMAGEM]`
15. **Exemplo UX:** Exemplo de Hierarquia Visual
    - `[PLACEHOLDER DE IMAGEM]`
16. **Conceito:** Norman e os Modelos Mentais
17. **Exemplo UX:** Exemplo de Acessibilidade
    - `[PLACEHOLDER DE IMAGEM]`
18. **Atividade 3:** "Desenhe uma tela de login"
19. **Transição:** Linguagem Visual e Fachada (Transição para UI).
20. **Conceito UI:** UI Design - Camada visível, botões, cores, tipografia.
21. **Analogia UI:** O Semáforo
    - `[PLACEHOLDER DE IMAGEM]`
22. **Conceito UI:** Por que a UI importa? (Não pensar demais, reduzir erros).
23. **Exemplos UI:** Aplicações combinadas do UX/UI
    - `[PLACEHOLDER DE IMAGEM]`
24. **Transição Gestalt:** "Como sabemos se a cidade é clara?" Leis invisíveis.
25. **Conceito Gestalt:** Leis da Percepção Visual (Psicologia).
26. **Gestalt 1:** Proximidade
    - `[PLACEHOLDER DE IMAGEM]`
27. **Gestalt 2:** Similaridade
    - `[PLACEHOLDER DE IMAGEM]`
28. **Gestalt 3:** Figura-Fundo
    - `[PLACEHOLDER DE IMAGEM]`
29. **Heurísticas:** As 10 Leis de Nielsen
    - `[PLACEHOLDER DE IMAGEM]`
30. **Atividade Final:** Atividade prática de criação de wireframes e testes em grupo.

## Proposed Changes

### [MODIFICAR] `src/app/page.tsx`
- Refatorar a lista de slides para mapear todas as 30 telas acima.
- Criar um novo componente de slide: `SlideWithImagePlaceholder`.
  - Este componente renderizará um quadrado/retângulo central estilizado, com ícone de imagem e texto "Insira sua imagem aqui: [Nome da Imagem]".
  - O desenvolvedor poderá facilmente substituir esta `div` pela tag `<img>` ou `<Image>` posteriormente.
- Ajustar os contadores de slide na interface (HUD) para refletir 30 slides.

## Open Questions

> [!IMPORTANT]
> Gostaria que os placeholders de imagem tenham algum tamanho padrão específico (por exemplo, 16:9, ou um quadrado), ou posso criar um placeholder flexível e responsivo que você pode ajustar conforme o tamanho real das imagens depois?

## Verification Plan
1. O HUD de navegação marcará `01 / 30`.
2. Acessar manualmente as telas de Exemplo e verificar a presença do placeholder visual.
3. Testar todas as teclas direcionais para garantir fluidez, mesmo com muitos slides.
