import { motion } from "framer-motion";
import { itemVariant, staggerContainer } from "@/lib/animations";
import { 
  Heart, 
  ShareNetwork, 
  ChatCircle, 
  DotsThree,
  Check,
  Bell,
  MagnifyingGlass,
  Plus
} from "@phosphor-icons/react";

export function SlideUIComponents({ slide }: { slide: any }) {
  return (
    <div className="w-full h-full flex flex-col p-12 md:p-20 bg-slate-50/50">
      <div className="text-center mb-12">
        <motion.h2 variants={itemVariant} className="text-5xl md:text-6xl font-black mb-4 text-[#101070] tracking-tight">
          {slide.title}
        </motion.h2>
        <motion.p variants={itemVariant} className="text-2xl text-slate-500 font-medium">
          {slide.subtitle || "Os elementos que compõem a linguagem visual."}
        </motion.p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Coluna 1: Botões e Inputs */}
        <motion.div variants={itemVariant} className="space-y-8">
          <div className="glass-panel p-8 rounded-3xl space-y-6 bg-white/80 border-slate-200 shadow-xl">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">Interações & Botões</h4>
            
            <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
              Confirmar Pagamento
            </button>
            
            <button className="w-full py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all active:scale-95">
              Cancelar Operação
            </button>

            <div className="flex gap-4">
              <button className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all">
                Salvar
              </button>
              <button className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center hover:bg-rose-200 transition-all">
                <Heart size={24} weight="fill" />
              </button>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl space-y-4 bg-white/80 border-slate-200 shadow-xl">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Campos de Entrada</h4>
            <div className="relative">
              <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Pesquisar cidade..." 
                className="w-full pl-12 pr-4 py-4 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              />
            </div>
            <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                <Check size={14} weight="bold" />
              </div>
              <span className="text-emerald-700 font-bold">Email validado com sucesso</span>
            </div>
          </div>
        </motion.div>

        {/* Coluna 2: Cards e Mídia */}
        <motion.div variants={itemVariant} className="space-y-8">
          <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 group">
            <div className="h-56 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center mix-blend-overlay opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
               <div className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                 <DotsThree size={24} weight="bold" />
               </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">Inovação</span>
                <span className="text-slate-400 text-sm font-medium">12 de Outubro</span>
              </div>
              <h3 className="text-2xl font-black text-[#101070] mb-4">A Cidade do Futuro</h3>
              <p className="text-slate-500 leading-relaxed mb-6">Como o design centrado no humano está transformando as metrópoles digitais.</p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#101070] text-white flex items-center justify-center text-xs font-bold">+5</div>
                </div>
                <div className="flex gap-4 text-slate-400">
                  <ChatCircle size={24} />
                  <ShareNetwork size={24} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coluna 3: Feedback e Controles */}
        <motion.div variants={itemVariant} className="space-y-8">
          <div className="glass-panel p-8 rounded-3xl space-y-6 bg-white/80 border-slate-200 shadow-xl">
             <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Notificações</h4>
             <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md border border-slate-50 relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-blue-500"></div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Bell size={24} weight="duotone" />
                </div>
                <div>
                  <p className="font-black text-[#101070]">Nova atualização disponível</p>
                  <p className="text-sm text-slate-500">A versão 2.0 foi instalada com sucesso.</p>
                </div>
             </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl space-y-6 bg-white/80 border-slate-200 shadow-xl">
             <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Controles de Sistema</h4>
             <div className="flex items-center justify-between">
                <span className="font-bold text-[#101070]">Modo Noturno</span>
                <div className="w-14 h-8 bg-blue-600 rounded-full p-1 flex justify-end">
                  <div className="w-6 h-6 bg-white rounded-full shadow-md"></div>
                </div>
             </div>
             <div className="flex items-center justify-between">
                <span className="font-bold text-[#101070]">Notificações Push</span>
                <div className="w-14 h-8 bg-slate-200 rounded-full p-1 flex justify-start">
                  <div className="w-6 h-6 bg-white rounded-full shadow-md"></div>
                </div>
             </div>
             <div className="space-y-2 pt-4">
                <div className="flex justify-between text-sm font-bold text-slate-400">
                  <span>Espaço em Disco</span>
                  <span>75%</span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
             </div>
          </div>

          <button className="w-full h-20 bg-[#101070] text-white rounded-[2rem] flex items-center justify-center gap-4 text-2xl font-black shadow-2xl hover:scale-105 transition-all">
            <Plus size={32} weight="bold" />
            Criar Novo Projeto
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
