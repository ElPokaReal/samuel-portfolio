import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Lock, Loader2, ArrowRight } from 'lucide-react';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;
            // App.tsx will handle the redirect based on session state
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background-light flex items-center justify-center p-4 font-family-body">
            <div className="w-full max-w-md">
                <div className="bg-white border-2 border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_#000]">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-black text-primary flex items-center justify-center rounded-full border-2 border-black">
                            <Lock size={32} />
                        </div>
                    </div>

                    <h1 className="text-2xl font-black text-center mb-2 font-family-display">Admin Access</h1>
                    <p className="text-slate-gray text-center mb-8">Ingresa tus credenciales para continuar</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label className="font-bold text-sm">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
                                placeholder="admin@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="font-bold text-sm">Contraseña</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-red-100 border-2 border-red-500 text-red-700 rounded-lg text-sm font-bold text-center">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-black text-white font-black text-lg rounded-xl border-2 border-black hover:bg-primary hover:text-black transition-all hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" /> Verificando...
                                </>
                            ) : (
                                <>
                                    Entrar <ArrowRight size={20} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
