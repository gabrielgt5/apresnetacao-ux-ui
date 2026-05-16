"use client";
import { motion } from "framer-motion";
import { itemVariant, staggerContainer } from "@/lib/animations";

// ─── USABILIDADE ───────────────────────────────────────────────────────────────

function UsabilityBad() {
  const fields = ["Nome completo *", "CPF *", "RG *", "Data de nascimento *", "Telefone *", "CEP *", "Endereço *", "Número *", "E-mail *", "Confirmar e-mail *"];
  return (
    <div className="flex flex-col gap-2 p-6 bg-white rounded-2xl w-full h-full overflow-hidden">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest mb-2">Cadastro — 10 campos obrigatórios</p>
      <div className="flex flex-col gap-2 flex-1 overflow-hidden">
        {fields.slice(0, 7).map((f, i) => (
          <div key={i} className="flex flex-col gap-1">
            <label className="text-xs text-slate-400 font-medium">{f}</label>
            <div className="h-7 rounded-lg bg-slate-100 border border-slate-200" />
          </div>
        ))}
        <p className="text-xs text-slate-400 italic">... + 3 campos a mais</p>
      </div>
      <button className="mt-2 self-end text-xs text-slate-400 border border-slate-200 rounded-lg px-3 py-1.5">enviar</button>
    </div>
  );
}

function UsabilityGood() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-2">Cadastro Rápido — 3 campos</p>
      <div className="flex flex-col gap-4 flex-1">
        {["Nome *", "E-mail *", "Senha *"].map((f, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <label className="text-sm text-slate-600 font-semibold">{f}</label>
            <div className="h-11 rounded-xl bg-slate-50 border-2 border-slate-200" />
          </div>
        ))}
      </div>
      <button className="w-full h-12 rounded-xl bg-[#101070] text-white text-base font-bold shadow-lg mt-2">
        ✓ Criar Conta
      </button>
    </div>
  );
}

// ─── ACESSIBILIDADE ────────────────────────────────────────────────────────────

function AccessibilityBad() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest mb-2">Baixo Contraste</p>
      <div className="bg-gray-50 rounded-xl p-5 flex flex-col gap-3 flex-1">
        <p className="font-bold" style={{ color: "#cccccc", fontSize: "1.1rem" }}>Título do Artigo</p>
        <p style={{ color: "#d8d8d8", fontSize: "0.9rem", lineHeight: 1.6 }}>
          Este é o corpo do texto. Consegue ler facilmente? O contraste está muito abaixo do mínimo recomendado pelo WCAG 2.1.
        </p>
        <button
          style={{ color: "#c8c8c8", border: "1px solid #e0e0e0", fontSize: "0.85rem", padding: "8px 16px", borderRadius: "8px", background: "white", alignSelf: "flex-start" }}>
          Saiba mais →
        </button>
      </div>
      <p className="text-xs text-red-400 font-semibold">Contraste: ~1.5:1 — REPROVADO pelo WCAG ❌</p>
    </div>
  );
}

function AccessibilityGood() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-2">Alto Contraste + Apoio Visual</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-3 flex-1">
        <p className="font-bold" style={{ color: "#0f172a", fontSize: "1.1rem" }}>Título do Artigo</p>
        <p style={{ color: "#334155", fontSize: "0.9rem", lineHeight: 1.6 }}>
          Este é o corpo do texto. Muito mais legível com contraste adequado para todos — incluindo pessoas com baixa visão.
        </p>
        <button
          style={{ color: "white", background: "#101070", fontSize: "0.85rem", padding: "8px 16px", borderRadius: "8px", fontWeight: 700, alignSelf: "flex-start" }}>
          🔗 Saiba mais →
        </button>
      </div>
      <p className="text-xs text-green-600 font-semibold">Contraste: 12.6:1 — APROVADO pelo WCAG ✅</p>
    </div>
  );
}

// ─── FEEDBACK ──────────────────────────────────────────────────────────────────

function FeedbackBad() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest mb-2">Sem Feedback — O que aconteceu?</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-slate-400 font-medium">Seu e-mail</label>
            <div className="h-10 rounded-lg bg-white border border-slate-200" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-slate-400 font-medium">Mensagem</label>
            <div className="h-20 rounded-lg bg-white border border-slate-200" />
          </div>
        </div>
        <button className="w-full h-11 rounded-xl bg-slate-200 text-slate-400 text-sm font-medium">
          Enviar
        </button>
      </div>
      <p className="text-xs text-red-400 font-semibold italic">O usuário clicou... nada mudou. Clicou de novo. E de novo. 😰</p>
    </div>
  );
}

function FeedbackGood() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-2">Feedback em Cada Etapa</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-slate-600 font-medium">Seu e-mail</label>
            <div className="h-10 rounded-lg bg-white border-2 border-green-400 flex items-center px-3">
              <span className="text-sm text-slate-500">✅ gabriel@email.com</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-slate-600 font-medium">Mensagem</label>
            <div className="h-20 rounded-lg bg-white border-2 border-slate-200" />
          </div>
        </div>
        <button className="w-full h-11 rounded-xl bg-amber-400 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md">
          <span className="inline-block animate-spin">⏳</span> Enviando...
        </button>
        <div className="bg-green-50 border border-green-300 rounded-lg p-3 text-center text-sm text-green-700 font-semibold">
          ✅ Mensagem enviada com sucesso!
        </div>
      </div>
    </div>
  );
}

// ─── CONSISTÊNCIA ──────────────────────────────────────────────────────────────

function ConsistencyBad() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest mb-2">Botões Inconsistentes</p>
      <div className="flex flex-col gap-4 flex-1 justify-center">
        <button style={{ background: "#ef4444", color: "white", borderRadius: "4px", padding: "14px", fontSize: "0.9rem", fontWeight: "900", border: "none", letterSpacing: "2px" }}>
          SALVAR
        </button>
        <button style={{ background: "transparent", color: "#3b82f6", borderRadius: "24px", padding: "14px", fontSize: "1.05rem", fontStyle: "italic", border: "2px dashed #3b82f6" }}>
          Cancelar...
        </button>
        <button style={{ background: "linear-gradient(to right, #f59e0b, #ef4444)", color: "white", borderRadius: "14px", padding: "16px", fontSize: "0.8rem", fontFamily: "serif", border: "none" }}>
          ❗ CONFIRMAR AGORA ❗
        </button>
      </div>
      <p className="text-xs text-red-400 font-semibold italic">Cada botão parece de um app diferente.</p>
    </div>
  );
}

function ConsistencyGood() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-2">Sistema de Botões Coeso</p>
      <div className="flex flex-col gap-4 flex-1 justify-center">
        <button style={{ background: "#101070", color: "white", borderRadius: "12px", padding: "14px", fontSize: "0.95rem", fontWeight: 700, border: "none" }}>
          Salvar
        </button>
        <button style={{ background: "white", color: "#101070", borderRadius: "12px", padding: "14px", fontSize: "0.95rem", fontWeight: 700, border: "2px solid #101070" }}>
          Cancelar
        </button>
        <button style={{ background: "#6366f1", color: "white", borderRadius: "12px", padding: "14px", fontSize: "0.95rem", fontWeight: 700, border: "none" }}>
          Confirmar
        </button>
      </div>
      <p className="text-xs text-green-600 font-semibold italic">Mesmo sistema visual. O usuário aprende uma vez e usa sempre.</p>
    </div>
  );
}

// ─── HIERARQUIA VISUAL ─────────────────────────────────────────────────────────

function HierarchyBad() {
  const items = ["Promoção do Mês", "Só hoje: 50% de desconto em todos os produtos da loja", "Frete grátis acima de R$ 99", "Tênis Runner Pro X - Azul", "R$ 249,90 por R$ 124,95", "Adicionar ao carrinho", "Ver mais produtos"];
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest mb-2">Sem Hierarquia Visual</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-2 flex-1">
        {items.map((t, i) => (
          <p key={i} style={{ fontSize: "0.9rem", color: "#475569" }}>{t}</p>
        ))}
      </div>
      <p className="text-xs text-red-400 font-semibold italic">O olho não sabe onde ir. Tudo parece igual.</p>
    </div>
  );
}

function HierarchyGood() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-2">Hierarquia Clara</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-3 flex-1">
        <p style={{ fontSize: "0.65rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 800 }}>PROMOÇÃO DO MÊS</p>
        <p style={{ fontSize: "1.4rem", fontWeight: 900, color: "#0f172a", lineHeight: 1.2 }}>Tênis Runner Pro X</p>
        <p style={{ fontSize: "0.9rem", color: "#64748b" }}>Só hoje: frete grátis + 50% OFF</p>
        <div style={{ display: "flex", alignItems: "baseline", gap: "10px", margin: "4px 0" }}>
          <p style={{ fontSize: "0.85rem", color: "#94a3b8", textDecoration: "line-through" }}>R$ 249,90</p>
          <p style={{ fontSize: "1.6rem", fontWeight: 900, color: "#101070" }}>R$ 124,95</p>
        </div>
        <button style={{ background: "#101070", color: "white", borderRadius: "10px", padding: "12px", fontSize: "0.9rem", fontWeight: 700, border: "none" }}>
          Adicionar ao carrinho
        </button>
        <button style={{ background: "transparent", color: "#94a3b8", fontSize: "0.8rem", border: "none", textDecoration: "underline", textAlign: "left" }}>
          Ver mais produtos
        </button>
      </div>
      <p className="text-xs text-green-600 font-semibold italic">O olho segue um caminho natural e previsível.</p>
    </div>
  );
}

// ─── NIELSEN 1: VISIBILIDADE DO STATUS ────────────────────────────────────────

function Nielsen1Bad() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Upload sem Feedback</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-4 flex-1">
        <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center text-3xl mx-auto">📁</div>
        <div className="text-center">
          <p className="font-bold text-slate-700">relatorio-final.pdf</p>
          <p className="text-sm text-slate-400">2.4 MB</p>
        </div>
        <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold">Enviar Arquivo</button>
        <div className="h-10 flex items-center justify-center">
          <p className="text-slate-300 text-sm italic">... (silêncio total)</p>
        </div>
      </div>
      <p className="text-xs text-red-400 font-semibold italic">O usuário clica várias vezes achando que não funcionou.</p>
    </div>
  );
}

function Nielsen1Good() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Upload com Status Claro</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-4 flex-1">
        <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center text-3xl mx-auto">📁</div>
        <div className="text-center">
          <p className="font-bold text-slate-700">relatorio-final.pdf</p>
          <p className="text-sm text-slate-400">2.4 MB</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm font-bold">
            <span className="text-blue-600">Enviando...</span>
            <span className="text-slate-500">67%</span>
          </div>
          <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-2 text-center text-sm text-green-700 font-semibold">
          ✅ Arquivo enviado com sucesso!
        </div>
      </div>
      <p className="text-xs text-green-600 font-semibold italic">O usuário sabe exatamente o que está acontecendo.</p>
    </div>
  );
}

// ─── NIELSEN 2: CORRESPONDÊNCIA COM O MUNDO REAL ──────────────────────────────

function Nielsen2Bad() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Linguagem de Máquina</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-3 flex-1 justify-center">
        <div className="flex flex-col gap-3">
          <button className="w-full py-3 bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 text-sm">
            <span>💾</span> WRITE_TO_DISK
          </button>
          <button className="w-full py-3 bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 text-sm">
            <span>🗑️</span> DELETE_RECORD_0x4F
          </button>
          <button className="w-full py-3 bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 text-sm">
            <span>⚠️</span> EXECUTE_PROCESS
          </button>
        </div>
      </div>
      <p className="text-xs text-red-400 font-semibold italic">Só quem desenvolveu entende o que cada botão faz.</p>
    </div>
  );
}

function Nielsen2Good() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Linguagem do Usuário</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-3 flex-1 justify-center">
        <div className="flex flex-col gap-3">
          <button className="w-full py-3 bg-[#101070] text-white rounded-xl font-bold flex items-center justify-center gap-2">
            <span>☁️</span> Salvar no Drive
          </button>
          <button className="w-full py-3 bg-rose-50 text-rose-600 border border-rose-200 rounded-xl font-bold flex items-center justify-center gap-2">
            <span>🗑️</span> Excluir Arquivo
          </button>
          <button className="w-full py-3 bg-amber-50 text-amber-600 border border-amber-200 rounded-xl font-bold flex items-center justify-center gap-2">
            <span>▶️</span> Iniciar Processo
          </button>
        </div>
      </div>
      <p className="text-xs text-green-600 font-semibold italic">Qualquer pessoa entende o que cada ação faz.</p>
    </div>
  );
}

// ─── NIELSEN 3: CONTROLE E LIBERDADE DO USUÁRIO ───────────────────────────────

function Nielsen3Bad() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Sem Saída de Emergência</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-3 flex-1">
        <p className="text-sm font-bold text-slate-600 mb-1">Formulário de Compra</p>
        {["Nome completo", "Número do Cartão", "Validade", "CVV"].map((f) => (
          <div key={f} className="flex flex-col gap-1">
            <label className="text-xs text-slate-400">{f}</label>
            <div className="h-8 bg-white border border-slate-200 rounded-lg" />
          </div>
        ))}
        <button className="w-full py-3 bg-green-600 text-white rounded-xl font-bold mt-2">
          Confirmar Compra
        </button>
        <p className="text-xs text-slate-300 text-center italic">← Não há botão de voltar ou cancelar</p>
      </div>
      <p className="text-xs text-red-400 font-semibold italic">O usuário está preso. Única saída: fechar o app.</p>
    </div>
  );
}

function Nielsen3Good() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Controle Total</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <button className="text-slate-400 text-sm font-bold">← Voltar</button>
          <span className="text-sm font-bold text-slate-600">Formulário de Compra</span>
        </div>
        {["Nome completo", "Número do Cartão"].map((f) => (
          <div key={f} className="flex flex-col gap-1">
            <label className="text-xs text-slate-400">{f}</label>
            <div className="h-8 bg-white border border-slate-200 rounded-lg" />
          </div>
        ))}
        <button className="w-full py-3 bg-green-600 text-white rounded-xl font-bold mt-2">
          Confirmar Compra
        </button>
        <button className="w-full py-2 bg-transparent text-slate-400 border border-slate-200 rounded-xl text-sm font-medium">
          Cancelar e voltar ao carrinho
        </button>
      </div>
      <p className="text-xs text-green-600 font-semibold italic">O usuário tem sempre uma saída clara e segura.</p>
    </div>
  );
}

// ─── NIELSEN 4: CONSISTÊNCIA E PADRONIZAÇÃO ───────────────────────────────────

function Nielsen4Bad() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Termos Inconsistentes</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-3 flex-1 justify-center">
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
          <p className="text-xs text-slate-400 mb-1">Tela de Arquivos</p>
          <button className="text-sm text-red-500 font-bold">🗑️ Deletar arquivo</button>
        </div>
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
          <p className="text-xs text-slate-400 mb-1">Tela de Mensagens</p>
          <button className="text-sm text-orange-500 font-bold">❌ Apagar conversa</button>
        </div>
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
          <p className="text-xs text-slate-400 mb-1">Tela de Contatos</p>
          <button className="text-sm text-rose-500 font-bold">✖ Remover contato</button>
        </div>
      </div>
      <p className="text-xs text-red-400 font-semibold italic">3 palavras para a mesma ação. O usuário fica confuso.</p>
    </div>
  );
}

function Nielsen4Good() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Padrão Único</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-3 flex-1 justify-center">
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
          <p className="text-xs text-slate-400 mb-1">Tela de Arquivos</p>
          <button className="text-sm text-red-500 font-bold">🗑️ Excluir</button>
        </div>
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
          <p className="text-xs text-slate-400 mb-1">Tela de Mensagens</p>
          <button className="text-sm text-red-500 font-bold">🗑️ Excluir</button>
        </div>
        <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
          <p className="text-xs text-slate-400 mb-1">Tela de Contatos</p>
          <button className="text-sm text-red-500 font-bold">🗑️ Excluir</button>
        </div>
      </div>
      <p className="text-xs text-green-600 font-semibold italic">Mesmo ícone, mesma cor, mesmo termo. Aprende uma vez.</p>
    </div>
  );
}

// ─── NIELSEN 5: PREVENÇÃO DE ERROS ────────────────────────────────────────────

function Nielsen5Bad() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Sem Validação</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-600">Data de Nascimento</label>
          <div className="h-11 bg-white border-2 border-slate-200 rounded-xl flex items-center px-4">
            <span className="text-slate-400 text-sm">99/99/9999</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-600">CPF</label>
          <div className="h-11 bg-white border-2 border-slate-200 rounded-xl flex items-center px-4">
            <span className="text-slate-400 text-sm">000.000.000-XX</span>
          </div>
        </div>
        <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold mt-auto">
          Enviar
        </button>
        <p className="text-xs text-red-400 text-center italic">Aceita qualquer coisa. O erro vem só depois.</p>
      </div>
    </div>
  );
}

function Nielsen5Good() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Validação em Tempo Real</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-600">Data de Nascimento</label>
          <div className="h-11 bg-white border-2 border-red-300 rounded-xl flex items-center px-4 justify-between">
            <span className="text-slate-500 text-sm">32/13/2024</span>
            <span className="text-red-500 text-xs font-bold">✗</span>
          </div>
          <p className="text-xs text-red-500 font-semibold">⚠️ Data inválida. Use o formato DD/MM/AAAA</p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-600">CPF</label>
          <div className="h-11 bg-white border-2 border-green-400 rounded-xl flex items-center px-4 justify-between">
            <span className="text-slate-700 text-sm">123.456.789-09</span>
            <span className="text-green-500 text-xs font-bold">✓</span>
          </div>
          <p className="text-xs text-green-600 font-semibold">✅ CPF válido!</p>
        </div>
        <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold mt-auto opacity-50 cursor-not-allowed">
          Enviar (corrija os erros)
        </button>
      </div>
    </div>
  );
}

// ─── MAPA DE SIMULADORES ───────────────────────────────────────────────────────

// ─── NIELSEN 6: RECONHECIMENTO VS MEMÓRIA ─────────────────────────────────────

function Nielsen6Bad() {
  const items = ["RD", "UX", "AB", "NF", "DB", "CF"];
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Menu só com Siglas</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-2 flex-1">
        <p className="text-xs text-slate-400 mb-2">Painel de navegação</p>
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <div key={item} className="h-10 bg-white border border-slate-200 rounded-lg flex items-center px-4">
              <span className="text-sm font-black text-slate-400">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-red-400 font-semibold italic">O que é "NF"? O usuário precisa decorar o significado de cada sigla.</p>
    </div>
  );
}

function Nielsen6Good() {
  const items = [
    { icon: "📊", label: "Relatórios" },
    { icon: "🎨", label: "UX Design" },
    { icon: "🔬", label: "Testes A/B" },
    { icon: "🔔", label: "Notificações" },
  ];
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Menu com Ícone + Rótulo</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-2 flex-1">
        <p className="text-xs text-slate-400 mb-2">Painel de navegação</p>
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <div key={item.label} className="h-11 bg-white border border-slate-200 rounded-lg flex items-center gap-3 px-4">
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-bold text-slate-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-green-600 font-semibold italic">Usuário reconhece de imediato — não precisa memorizar nada.</p>
    </div>
  );
}

// ─── NIELSEN 7: EFICIÊNCIA E FLEXIBILIDADE ────────────────────────────────────

function Nielsen7Bad() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Um Único Caminho — 5 Cliques</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-2 flex-1 justify-center items-center">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
          <span className="px-3 py-2 bg-white border rounded-lg">Menu</span>
          <span>→</span>
          <span className="px-3 py-2 bg-white border rounded-lg">Arquivo</span>
          <span>→</span>
          <span className="px-3 py-2 bg-white border rounded-lg">Salvar</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-bold text-slate-500 mt-2">
          <span>→</span>
          <span className="px-3 py-2 bg-white border rounded-lg">Confirmar</span>
          <span>→</span>
          <span className="px-3 py-2 bg-white border rounded-lg">OK</span>
        </div>
        <p className="text-xs text-red-400 text-center mt-4">5 cliques toda vez. Não importa se é novato ou expert.</p>
      </div>
    </div>
  );
}

function Nielsen7Good() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Atalhos para Quem Sabe + Guia para Novatos</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-4 flex-1 justify-center">
        <div className="bg-white rounded-xl p-4 border border-blue-100">
          <p className="text-xs text-slate-400 mb-2 font-bold uppercase">👶 Para novatos</p>
          <button className="w-full py-2 bg-[#101070] text-white rounded-lg text-sm font-bold">
            💾 Salvar Documento
          </button>
        </div>
        <div className="bg-white rounded-xl p-4 border border-purple-100">
          <p className="text-xs text-slate-400 mb-2 font-bold uppercase">🚀 Para avançados</p>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg font-mono font-bold text-sm border">Ctrl</span>
            <span className="text-slate-400 font-bold">+</span>
            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg font-mono font-bold text-sm border">S</span>
            <span className="text-sm text-slate-500 ml-2">— Salvar instantâneo</span>
          </div>
        </div>
      </div>
      <p className="text-xs text-green-600 font-semibold italic">Cada usuário usa o caminho que preferir.</p>
    </div>
  );
}

// ─── NIELSEN 8: ESTÉTICA E DESIGN MINIMALISTA ─────────────────────────────────

function Nielsen8Bad() {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-2xl w-full h-full overflow-hidden">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Sobrecarga Visual</p>
      <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-2 text-center">
        <p className="text-xs font-black text-yellow-700">🔥 PROMOÇÃO IMPERDÍVEL! ATÉ HOJE!</p>
      </div>
      <div className="bg-red-50 border border-red-300 rounded-lg p-2 flex flex-col gap-1">
        <p className="text-xs font-bold text-red-600">⚠️ Cadastre-se na newsletter</p>
        <p className="text-xs text-red-500">Não perca nenhuma oferta!</p>
      </div>
      <div className="grid grid-cols-2 gap-1 flex-1 overflow-hidden">
        {["Produto A", "Produto B", "Produto C", "Produto D"].map(p => (
          <div key={p} className="bg-slate-100 rounded-lg p-2 flex flex-col items-center justify-center">
            <div className="w-8 h-8 bg-slate-300 rounded mb-1" />
            <p className="text-xs text-slate-600 font-bold">{p}</p>
            <span className="text-xs bg-red-500 text-white px-1 rounded">-50%</span>
          </div>
        ))}
      </div>
      <div className="bg-blue-100 rounded-lg p-1 text-center">
        <p className="text-xs text-blue-700 font-bold">💬 Chat ao vivo disponível!</p>
      </div>
    </div>
  );
}

function Nielsen8Good() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Design Focado</p>
      <div className="flex-1 flex flex-col items-center justify-center gap-4 bg-slate-50 rounded-xl p-6">
        <div className="w-20 h-20 bg-slate-200 rounded-2xl flex items-center justify-center text-4xl">👟</div>
        <div className="text-center">
          <p className="text-xl font-black text-[#101070]">Tênis Runner Pro</p>
          <p className="text-slate-400 text-sm">Corrida • Azul • Tam. 42</p>
          <p className="text-2xl font-black text-[#101070] mt-2">R$ 124,95</p>
          <p className="text-sm text-slate-400 line-through">R$ 249,90</p>
        </div>
        <button className="w-full py-3 bg-[#101070] text-white rounded-xl font-bold">
          Adicionar ao Carrinho
        </button>
      </div>
      <p className="text-xs text-green-600 font-semibold italic">Um produto. Um objetivo. Um botão de ação. Zero distrações.</p>
    </div>
  );
}

// ─── NIELSEN 9: RECUPERAÇÃO DIANTE DE ERROS ───────────────────────────────────

function Nielsen9Bad() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Mensagem de Erro Técnica</p>
      <div className="flex-1 flex flex-col items-center justify-center gap-4 bg-slate-50 rounded-xl p-6">
        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-4xl">💥</div>
        <div className="text-center">
          <p className="text-lg font-black text-slate-700">Error 502</p>
          <p className="text-sm font-mono text-slate-500 mt-2">Bad Gateway: upstream connect error or disconnect/reset before headers.</p>
          <p className="text-xs text-slate-400 mt-1">ECONNREFUSED 127.0.0.1:3000</p>
        </div>
        <button className="px-6 py-2 bg-slate-200 text-slate-500 rounded-lg text-sm">OK</button>
      </div>
      <p className="text-xs text-red-400 font-semibold italic">O usuário não entende o que aconteceu nem o que fazer.</p>
    </div>
  );
}

function Nielsen9Good() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Mensagem Amigável + Ação Clara</p>
      <div className="flex-1 flex flex-col items-center justify-center gap-4 bg-slate-50 rounded-xl p-6">
        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-4xl">📶</div>
        <div className="text-center">
          <p className="text-lg font-black text-slate-700">Sem conexão com a internet</p>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">Verifique se o Wi-Fi ou seus dados móveis estão ativos e tente novamente.</p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <button className="w-full py-3 bg-[#101070] text-white rounded-xl font-bold">
            🔄 Tentar novamente
          </button>
          <button className="w-full py-2 text-slate-400 text-sm border border-slate-200 rounded-xl">
            Ver dados salvos offline
          </button>
        </div>
      </div>
      <p className="text-xs text-green-600 font-semibold italic">O usuário entende o problema e sabe exatamente o que fazer.</p>
    </div>
  );
}

// ─── NIELSEN 10: AJUDA E DOCUMENTAÇÃO ────────────────────────────────────────

function Nielsen10Bad() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Tela Vazia Sem Orientação</p>
      <div className="flex-1 flex flex-col items-center justify-center gap-4 bg-slate-50 rounded-xl p-6">
        <div className="w-full flex-1 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 text-3xl mb-4">📋</div>
          <p className="text-slate-300 font-bold text-lg">Nenhum projeto encontrado.</p>
        </div>
        <p className="text-xs text-slate-300 italic text-center">O usuário fica olhando para a tela sem saber o que fazer a seguir.</p>
      </div>
      <p className="text-xs text-red-400 font-semibold italic">Nenhuma dica, nenhum botão, nenhum próximo passo.</p>
    </div>
  );
}

function Nielsen10Good() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Estado Vazio com Orientação</p>
      <div className="flex-1 flex flex-col items-center justify-center gap-4 bg-slate-50 rounded-xl p-6">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">🚀</div>
        <div className="text-center">
          <p className="font-black text-[#101070] text-lg">Você ainda não tem projetos</p>
          <p className="text-sm text-slate-500 mt-1">Crie seu primeiro projeto em menos de 2 minutos.</p>
        </div>
        <button className="px-8 py-3 bg-[#101070] text-white rounded-xl font-bold shadow-lg">
          + Criar Primeiro Projeto
        </button>
        <a href="#" className="text-sm text-blue-500 font-bold underline">❓ Como funciona? Ver tutorial</a>
      </div>
      <p className="text-xs text-green-600 font-semibold italic">O usuário sabe o que fazer, como fazer e onde pedir ajuda.</p>
    </div>
  );
}

// ─── MAPA DE SIMULADORES ───────────────────────────────────────────────────────

// ─── GESTALT 1: PROXIMIDADE ───────────────────────────────────────────────────

function Gestalt1Bad() {
  const items = ["João Silva", "Designer", "R$ 4.800", "Ana Costa", "Dev", "R$ 6.200", "Pedro Lins", "PM", "R$ 7.500"];
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Sem Proximidade — Dados Espalhados</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col flex-1">
        <p className="text-xs text-slate-400 mb-3">Lista de colaboradores</p>
        <div className="flex flex-wrap gap-3">
          {items.map((item, i) => (
            <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600">{item}</span>
          ))}
        </div>
        <p className="text-xs text-red-400 italic mt-4">O olho não sabe o que pertence a quem.</p>
      </div>
    </div>
  );
}

function Gestalt1Good() {
  const people = [
    { name: "João Silva", role: "Designer", salary: "R$ 4.800" },
    { name: "Ana Costa", role: "Dev", salary: "R$ 6.200" },
    { name: "Pedro Lins", role: "PM", salary: "R$ 7.500" },
  ];
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Com Proximidade — Dados Agrupados</p>
      <div className="bg-slate-50 rounded-xl p-4 flex flex-col gap-3 flex-1">
        {people.map((p) => (
          <div key={p.name} className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="font-black text-[#101070] text-sm">{p.name}</p>
              <p className="text-xs text-slate-400">{p.role}</p>
            </div>
            <span className="font-bold text-emerald-600 text-sm">{p.salary}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-green-600 font-semibold italic">Cada grupo é percebido como uma unidade — leitura instantânea.</p>
    </div>
  );
}

// ─── GESTALT 2: SIMILARIDADE ──────────────────────────────────────────────────

function Gestalt2Bad() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Sem Similaridade — Botões Idênticos</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-3 flex-1 justify-center">
        <p className="text-xs text-slate-400 mb-1">Qual botão faz o quê?</p>
        <button className="w-full py-3 bg-slate-200 text-slate-600 rounded-xl font-bold">Salvar Rascunho</button>
        <button className="w-full py-3 bg-slate-200 text-slate-600 rounded-xl font-bold">Publicar Agora</button>
        <button className="w-full py-3 bg-slate-200 text-slate-600 rounded-xl font-bold">Excluir Tudo</button>
        <p className="text-xs text-red-400 italic text-center">Todos iguais. Um exclui tudo. Bom sorte descobrir qual.</p>
      </div>
    </div>
  );
}

function Gestalt2Good() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Com Similaridade — Padrão por Função</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-3 flex-1 justify-center">
        <p className="text-xs text-slate-400 mb-1">Cada tipo de ação tem sua aparência</p>
        <button className="w-full py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-xl font-bold">💾 Salvar Rascunho</button>
        <button className="w-full py-3 bg-[#101070] text-white rounded-xl font-bold shadow-lg">🚀 Publicar Agora</button>
        <button className="w-full py-3 bg-red-50 border-2 border-red-300 text-red-600 rounded-xl font-bold">🗑️ Excluir Tudo</button>
        <p className="text-xs text-green-600 italic text-center">Ação secundária, primária e destrutiva — distinguíveis à primeira vista.</p>
      </div>
    </div>
  );
}

// ─── GESTALT 3: FIGURA-FUNDO ──────────────────────────────────────────────────

function Gestalt3Bad() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Sem Figura-Fundo — CTA Invisível</p>
      <div className="flex-1 flex flex-col" style={{ background: "#e2e8f0" }}>
        <div className="p-4 flex-1 flex flex-col gap-3">
          <div className="h-4 bg-slate-300 rounded w-3/4" />
          <div className="h-3 bg-slate-300 rounded w-full" />
          <div className="h-3 bg-slate-300 rounded w-5/6" />
          <div className="h-3 bg-slate-300 rounded w-4/6" />
        </div>
        <div className="p-4">
          <button style={{ background: "#cbd5e1", color: "#94a3b8", borderRadius: "12px", padding: "12px", width: "100%", fontWeight: 700, border: "none" }}>
            Assinar Plano Premium
          </button>
          <p className="text-xs text-red-400 italic text-center mt-2">CTA some no fundo cinza. O usuário não vê a ação principal.</p>
        </div>
      </div>
    </div>
  );
}

function Gestalt3Good() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Com Figura-Fundo — CTA em Destaque</p>
      <div className="flex-1 flex flex-col" style={{ background: "#f8fafc" }}>
        <div className="p-4 flex-1 flex flex-col gap-3">
          <div className="h-4 bg-slate-200 rounded w-3/4" />
          <div className="h-3 bg-slate-100 rounded w-full" />
          <div className="h-3 bg-slate-100 rounded w-5/6" />
          <div className="h-3 bg-slate-100 rounded w-4/6" />
        </div>
        <div className="p-4">
          <button style={{ background: "#101070", color: "white", borderRadius: "12px", padding: "14px", width: "100%", fontWeight: 800, border: "none", fontSize: "1rem", boxShadow: "0 8px 24px rgba(16,16,112,0.3)" }}>
            🌟 Assinar Plano Premium
          </button>
          <p className="text-xs text-green-600 italic text-center mt-2">Botão escuro sobre fundo claro. O olho vai direto para ele.</p>
        </div>
      </div>
    </div>
  );
}

// ─── GESTALT 4: CONTINUIDADE ──────────────────────────────────────────────────

function Gestalt4Bad() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Sem Continuidade — Formulário Perdido</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-4 flex-1">
        <p className="text-sm font-bold text-slate-500">Tela de Cadastro</p>
        {["Nome", "E-mail", "Senha"].map(f => (
          <div key={f} className="flex flex-col gap-1">
            <label className="text-xs text-slate-400">{f}</label>
            <div className="h-9 bg-white border border-slate-200 rounded-lg" />
          </div>
        ))}
        <button className="w-full py-3 bg-slate-300 text-slate-500 rounded-xl font-bold">Próximo</button>
        <p className="text-xs text-red-400 italic text-center">Passo 1 de quantos? O usuário não sabe.</p>
      </div>
    </div>
  );
}

function Gestalt4Good() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Com Continuidade — Barra de Progresso</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-4 flex-1">
        <div className="flex items-center gap-2">
          {["Dados", "Endereço", "Pagamento"].map((step, i) => (
            <div key={step} className="flex items-center gap-2 flex-1">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${i === 0 ? "bg-[#101070] text-white" : "bg-slate-200 text-slate-400"}`}>{i + 1}</div>
              <span className={`text-xs font-bold ${i === 0 ? "text-[#101070]" : "text-slate-400"}`}>{step}</span>
              {i < 2 && <div className="h-0.5 flex-1 bg-slate-200" />}
            </div>
          ))}
        </div>
        {["Nome", "E-mail"].map(f => (
          <div key={f} className="flex flex-col gap-1">
            <label className="text-xs text-slate-600 font-semibold">{f}</label>
            <div className="h-9 bg-white border-2 border-slate-200 rounded-lg" />
          </div>
        ))}
        <button className="w-full py-3 bg-[#101070] text-white rounded-xl font-bold shadow-md">Próximo →</button>
      </div>
      <p className="text-xs text-green-600 font-semibold italic">O olhar segue a linha — o usuário sabe onde está e para onde vai.</p>
    </div>
  );
}

// ─── GESTALT 5: FECHAMENTO ────────────────────────────────────────────────────

function Gestalt5Bad() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Sem Fechamento — Ícones Quebrados</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-4 flex-1 justify-center items-center">
        <div className="grid grid-cols-3 gap-6">
          {["❓", "❓", "❓"].map((icon, i) => (
            <div key={i} className="w-16 h-16 rounded-xl bg-slate-200 border-2 border-dashed border-slate-300 flex items-center justify-center">
              <div className={`w-8 h-8 border-4 border-slate-400 ${i === 0 ? "rounded-tl-full border-b-0 border-r-0" : i === 1 ? "rounded-tr-full border-b-0 border-l-0" : "rounded-bl-full border-t-0 border-r-0"}`} />
            </div>
          ))}
        </div>
        <p className="text-xs text-red-400 italic text-center">Arcos quebrados — o olho não consegue completar a forma.</p>
      </div>
    </div>
  );
}

function Gestalt5Good() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Com Fechamento — O Olho Completa a Forma</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-4 flex-1 justify-center items-center">
        <div className="grid grid-cols-3 gap-6">
          {[
            { label: "Home", dots: [[1,1],[1,3],[3,1],[3,3],[2,2]] },
            { label: "Busca", arc: true },
            { label: "Config", cog: true },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                <span className="text-2xl">{i === 0 ? "🏠" : i === 1 ? "🔍" : "⚙️"}</span>
              </div>
              <span className="text-xs font-bold text-slate-500">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-green-600 italic text-center">O cérebro fecha formas simples automaticamente. Reconhecimento instantâneo.</p>
      </div>
    </div>
  );
}

// ─── GESTALT 6: PREGNÂNCIA ────────────────────────────────────────────────────

function Gestalt6Bad() {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-2xl w-full h-full overflow-hidden">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Sem Pregnância — Caos Visual</p>
      <div className="bg-slate-50 rounded-xl p-4 flex flex-col gap-2 flex-1 overflow-hidden">
        <p style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem", color: "#7c3aed", fontWeight: 900 }}>Título Principal</p>
        <p style={{ fontFamily: "Courier New, monospace", fontSize: "0.75rem", color: "#dc2626", fontStyle: "italic" }}>Subtítulo com fonte diferente</p>
        <div className="flex gap-2 flex-wrap">
          <button style={{ background: "linear-gradient(to right, #f59e0b, #ef4444)", color: "white", borderRadius: "50px", padding: "6px 12px", fontSize: "0.7rem", border: "none", fontFamily: "cursive" }}>Ação A</button>
          <button style={{ background: "#3b82f6", color: "white", borderRadius: "4px", padding: "6px 12px", fontSize: "0.85rem", border: "2px dashed #1d4ed8" }}>Ação B</button>
          <button style={{ background: "transparent", color: "#059669", borderRadius: "0", padding: "6px 12px", fontSize: "0.9rem", border: "3px solid #059669", fontWeight: 900 }}>AÇÃO C</button>
        </div>
        <p style={{ fontFamily: "Times New Roman", fontSize: "0.8rem", color: "#f97316", lineHeight: 1.8 }}>Corpo do texto em fonte serifada laranja com espaçamento exagerado.</p>
        <p style={{ fontFamily: "Arial", fontSize: "0.7rem", color: "#8b5cf6", textTransform: "uppercase", letterSpacing: "4px" }}>rodapé em caixa alta roxa</p>
      </div>
    </div>
  );
}

function Gestalt6Good() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Com Pregnância — Simplicidade e Clareza</p>
      <div className="bg-slate-50 rounded-xl p-5 flex flex-col gap-4 flex-1">
        <p className="text-xl font-black text-[#101070]">Título Principal</p>
        <p className="text-sm text-slate-500 font-medium">Subtítulo claro e consistente com o título.</p>
        <p className="text-sm text-slate-600 leading-relaxed">Corpo do texto em fonte limpa, tamanho legível, cor neutra para não competir com o título.</p>
        <div className="flex gap-3 mt-auto">
          <button className="flex-1 py-2.5 bg-[#101070] text-white rounded-xl font-bold text-sm">Ação Principal</button>
          <button className="flex-1 py-2.5 bg-white border-2 border-slate-200 text-slate-600 rounded-xl font-bold text-sm">Secundária</button>
        </div>
      </div>
      <p className="text-xs text-green-600 font-semibold italic">1 família tipográfica, 2 cores, 1 sistema de botões — clareza total.</p>
    </div>
  );
}

// ─── GESTALT 7: SIMETRIA ──────────────────────────────────────────────────────

function Gestalt7Bad() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-red-400 uppercase tracking-widest">Sem Simetria — Layout Caótico</p>
      <div className="bg-slate-50 rounded-xl p-4 flex-1 relative overflow-hidden">
        <div className="absolute top-2 left-4 w-24 h-16 bg-slate-200 rounded-lg" />
        <div className="absolute top-2 right-2 w-40 h-10 bg-slate-300 rounded" />
        <div className="absolute top-20 left-16 w-32 h-20 bg-slate-200 rounded-xl" />
        <div className="absolute top-28 right-4 w-20 h-24 bg-slate-300 rounded" />
        <div className="absolute bottom-4 left-2 w-48 h-10 bg-slate-200 rounded-lg" />
        <div className="absolute bottom-2 right-8 w-16 h-16 bg-slate-300 rounded-full" />
        <p className="absolute bottom-1 left-1 text-xs text-red-400 italic">Sem alinhamento, sem ritmo, sem descanso visual.</p>
      </div>
    </div>
  );
}

function Gestalt7Good() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full h-full">
      <p className="text-xs font-black text-green-600 uppercase tracking-widest">Com Simetria — Grid Equilibrado</p>
      <div className="bg-slate-50 rounded-xl p-4 flex-1 flex flex-col gap-3">
        <div className="h-10 bg-white rounded-xl border border-slate-200 shadow-sm w-full" />
        <div className="grid grid-cols-2 gap-3 flex-1">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center">
            <div className="w-8 h-8 bg-slate-200 rounded-full" />
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center">
            <div className="w-8 h-8 bg-slate-200 rounded-full" />
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center">
            <div className="w-8 h-8 bg-slate-200 rounded-full" />
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center">
            <div className="w-8 h-8 bg-slate-200 rounded-full" />
          </div>
        </div>
        <div className="h-10 bg-[#101070] rounded-xl shadow-md w-full" />
      </div>
      <p className="text-xs text-green-600 font-semibold italic">Grid 2×2 com header e footer — ritmo e harmonia visual imediatos.</p>
    </div>
  );
}

// ─── MAPA DE SIMULADORES ───────────────────────────────────────────────────────

const simulators: Record<string, { Bad: React.FC; Good: React.FC; badLabel: string; goodLabel: string }> = {
  usability:     { Bad: UsabilityBad,     Good: UsabilityGood,     badLabel: "❌ Muitos campos — usuário desiste no meio",        goodLabel: "✅ Simples e direto — usuário completa a ação" },
  accessibility: { Bad: AccessibilityBad, Good: AccessibilityGood, badLabel: "❌ Ilegível para quem tem dificuldade visual",       goodLabel: "✅ Legível para todos, aprovado pelo WCAG 2.1" },
  feedback:      { Bad: FeedbackBad,      Good: FeedbackGood,      badLabel: "❌ Sem resposta — usuário acha que está travado",    goodLabel: "✅ Cada etapa comunica o que está acontecendo" },
  consistency:   { Bad: ConsistencyBad,   Good: ConsistencyGood,   badLabel: "❌ Parece que misturaram 3 apps diferentes",        goodLabel: "✅ Sistema coeso — o usuário aprende uma vez" },
  hierarchy:     { Bad: HierarchyBad,     Good: HierarchyGood,     badLabel: "❌ Tudo com o mesmo peso — o olho fica perdido",    goodLabel: "✅ Caminho visual claro do mais para o menos importante" },
  nielsen_1:     { Bad: Nielsen1Bad,      Good: Nielsen1Good,      badLabel: "❌ Sem feedback — o usuário não sabe o que ocorre",  goodLabel: "✅ Status visível — usuário acompanha cada etapa" },
  nielsen_2:     { Bad: Nielsen2Bad,      Good: Nielsen2Good,      badLabel: "❌ Jargão técnico — só quem criou entende",         goodLabel: "✅ Linguagem natural — qualquer pessoa entende" },
  nielsen_3:     { Bad: Nielsen3Bad,      Good: Nielsen3Good,      badLabel: "❌ Sem saída — usuário fica preso na tela",         goodLabel: "✅ Controle total — sempre há uma saída clara" },
  nielsen_4:     { Bad: Nielsen4Bad,      Good: Nielsen4Good,      badLabel: "❌ Termos diferentes para a mesma ação",            goodLabel: "✅ Padrão consistente — o usuário reconhece rápido" },
  nielsen_5:     { Bad: Nielsen5Bad,      Good: Nielsen5Good,      badLabel: "❌ Erros descobertos só após o envio",              goodLabel: "✅ Erros prevenidos em tempo real durante o preenchimento" },
  nielsen_6:     { Bad: Nielsen6Bad,      Good: Nielsen6Good,      badLabel: "❌ Menu abstrato — usuário precisa memorizar tudo",  goodLabel: "✅ Ícones + rótulos — usuário reconhece sem memorizar" },
  nielsen_7:     { Bad: Nielsen7Bad,      Good: Nielsen7Good,      badLabel: "❌ Um único caminho lento para todos os usuários",   goodLabel: "✅ Atalhos para avançados, fluxo normal para novatos" },
  nielsen_8:     { Bad: Nielsen8Bad,      Good: Nielsen8Good,      badLabel: "❌ Sobrecarga visual — o foco do usuário se perde",  goodLabel: "✅ Interface limpa — cada elemento tem um propósito" },
  nielsen_9:     { Bad: Nielsen9Bad,      Good: Nielsen9Good,      badLabel: "❌ Mensagem técnica — o usuário não sabe o que fazer", goodLabel: "✅ Mensagem clara + ação de recuperação sugerida" },
  nielsen_10:    { Bad: Nielsen10Bad,     Good: Nielsen10Good,     badLabel: "❌ Tela vazia — usuário não sabe o que fazer",       goodLabel: "✅ Estado vazio orientado — instrução clara + link de ajuda" },
  gestalt_1:     { Bad: Gestalt1Bad,      Good: Gestalt1Good,      badLabel: "❌ Elementos espalhados — olho não agrupa nada",       goodLabel: "✅ Proximidade cria grupos — usuário lê e entende rápido" },
  gestalt_2:     { Bad: Gestalt2Bad,      Good: Gestalt2Good,      badLabel: "❌ Tudo igual — o usuário não distingue o que é o quê", goodLabel: "✅ Forma e cor diferentes por função — reconhecimento imediato" },
  gestalt_3:     { Bad: Gestalt3Bad,      Good: Gestalt3Good,      badLabel: "❌ CTA se mistura ao fundo — o usuário não vê a ação",  goodLabel: "✅ Figura se destaca do fundo — o botão chama atenção" },
  gestalt_4:     { Bad: Gestalt4Bad,      Good: Gestalt4Good,      badLabel: "❌ Sem continuidade — usuário não sabe em que etapa está", goodLabel: "✅ Linha de progresso guia o olhar e orienta o fluxo" },
  gestalt_5:     { Bad: Gestalt5Bad,      Good: Gestalt5Good,      badLabel: "❌ Ícone incompleto — o olho não consegue interpretar",  goodLabel: "✅ O olho fecha a forma — ícone reconhecido mesmo incompleto" },
  gestalt_6:     { Bad: Gestalt6Bad,      Good: Gestalt6Good,      badLabel: "❌ Caos visual — muitos estilos sem padrão",             goodLabel: "✅ Pregnância: forma simples e clara vence sempre" },
  gestalt_7:     { Bad: Gestalt7Bad,      Good: Gestalt7Good,      badLabel: "❌ Layout quebrado — o olho não encontra equilíbrio",   goodLabel: "✅ Simetria e grid criam harmonia visual instantânea" },
};


// ─── COMPONENTE PRINCIPAL ──────────────────────────────────────────────────────

export function SlidePrincipleSimulator({ slide }: { slide: any }) {
  const sim = simulators[slide.principleId];
  if (!sim) return null;

  const { Bad, Good } = sim;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="w-full h-full flex flex-col p-10 md:p-16 gap-6"
    >
      {/* Header */}
      <motion.div variants={itemVariant} className="text-center">
        <span className="text-sm font-black uppercase tracking-widest text-purple-500">Simulação de Princípio</span>
        <h2 className="text-4xl md:text-5xl font-black text-[#101070] mt-1">{slide.title}</h2>
        <p className="text-xl text-slate-500 font-light mt-1">{slide.subtitle}</p>
      </motion.div>

      {/* Panels */}
      <div className="flex-1 grid grid-cols-2 gap-8 min-h-0">
        <motion.div variants={itemVariant} className="flex flex-col gap-3 min-h-0">
          <div className="flex-1 min-h-0 rounded-2xl shadow-md border-2 border-red-200 overflow-hidden bg-white">
            <Bad />
          </div>
          <p className="text-center text-sm font-bold text-red-500 leading-snug px-2">{sim.badLabel}</p>
        </motion.div>

        <motion.div variants={itemVariant} className="flex flex-col gap-3 min-h-0">
          <div className="flex-1 min-h-0 rounded-2xl shadow-md border-2 border-green-200 overflow-hidden bg-white">
            <Good />
          </div>
          <p className="text-center text-sm font-bold text-green-600 leading-snug px-2">{sim.goodLabel}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
