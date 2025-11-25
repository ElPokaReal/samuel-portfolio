import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Terminal, Copy, Check, Loader2, Sparkles, Database, UploadCloud } from 'lucide-react';
import { projectService } from '../services/projectService';
import { translations } from '../i18n/translations';
import { projectData } from '../data/projectLinks';

export const ProjectGenerator = () => {
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_GEMINI_API_KEY || '');
  const [titleEs, setTitleEs] = useState('');
  const [descriptionEs, setDescriptionEs] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');

  const [isGenerating, setIsGenerating] = useState(false);
  const [isMigrating, setIsMigrating] = useState(false);
  const [migrationStatus, setMigrationStatus] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleMigration = async () => {
    setIsMigrating(true);
    setMigrationStatus('Iniciando migración...');
    setError('');

    try {
      // Combine data
      const itemsToMigrate = translations.es.projects.items.map((item, index) => {
        const data = projectData[index];
        const enItem = translations.en.projects.items[index];

        if (!data || !enItem) return null;

        return {
          title_es: item.title,
          description_es: item.description,
          title_en: enItem.title,
          description_en: enItem.description,
          image_url: data.image,
          technologies: data.technologies,
          live_url: data.live,
          github_url: data.github,
          featured: index < 2, // First 2 as featured for example
          display_order: index
        };
      }).filter(Boolean);

      // Add other items if possible (assuming they match index 4 onwards in projectData if it existed)
      // For now, let's just migrate the main items that have full data

      let count = 0;
      for (const project of itemsToMigrate) {
        if (project) {
          setMigrationStatus(`Migrando: ${project.title_es}...`);
          await projectService.createProject(project);
          count++;
        }
      }

      setMigrationStatus(`¡Éxito! Se migraron ${count} proyectos.`);
    } catch (err) {
      console.error(err);
      setError('Error en la migración: ' + (err instanceof Error ? err.message : String(err)));
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSaveProject = async () => {
    if (!apiKey || !titleEs || !descriptionEs || !imageUrl || !technologies) {
      setError('Por favor completa los campos obligatorios (API Key, Título, Descripción, Imagen, Tecnologías)');
      return;
    }

    setIsGenerating(true);
    setError('');
    setGeneratedCode('');

    try {
      // 1. Translate with Gemini
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

      const prompt = `
        Actúa como un traductor profesional técnico.
        Traduce el siguiente título y descripción de un proyecto de desarrollo web del español al inglés.
        El tono debe ser profesional, técnico y persuasivo.
        
        Título original: "${titleEs}"
        Descripción original: "${descriptionEs}"

        Devuelve SOLO un objeto JSON con el siguiente formato:
        {
          "title": "Título traducido",
          "description": "Descripción traducida"
        }
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
      const translation = JSON.parse(cleanJson);

      // 2. Create Project Object
      const newProject = {
        title_es: titleEs,
        description_es: descriptionEs,
        title_en: translation.title,
        description_en: translation.description,
        image_url: imageUrl,
        technologies: technologies.split(',').map(t => t.trim()).filter(Boolean),
        live_url: liveUrl || undefined,
        github_url: githubUrl || undefined,
        featured: false,
        display_order: 0 // Default, can be updated later
      };

      // 3. Save to Supabase
      const savedProject = await projectService.createProject(newProject);

      setGeneratedCode(JSON.stringify(savedProject, null, 2));
      setMigrationStatus('¡Proyecto creado exitosamente en la base de datos!');

      // Clear form
      setTitleEs('');
      setDescriptionEs('');
      setImageUrl('');
      setTechnologies('');
      setLiveUrl('');
      setGithubUrl('');

    } catch (err) {
      console.error(err);
      setError('Error al guardar: ' + (err instanceof Error ? err.message : String(err)));
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background-light p-8 font-family-body">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center gap-4 border-b-4 border-black pb-4">
          <div className="w-12 h-12 bg-black text-primary flex items-center justify-center rounded-full border-2 border-black">
            <Terminal size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-black font-family-display">Project Uploader</h1>
            <p className="text-slate-gray">Crea y traduce tus proyectos con IA</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="font-bold text-sm">Gemini API Key</label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Pegar API Key aquí (o configura VITE_GEMINI_API_KEY)"
                className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
              />
              <p className="text-xs text-slate-gray">
                Obtén tu key en <a href="https://aistudio.google.com/" target="_blank" className="underline hover:text-primary">Google AI Studio</a>.
                {!apiKey && <span className="text-red-500 ml-2 font-bold">No se detectó VITE_GEMINI_API_KEY en .env</span>}
              </p>
            </div>

            <div className="space-y-2">
              <label className="font-bold text-sm">Título del Proyecto (Español)</label>
              <input
                type="text"
                value={titleEs}
                onChange={(e) => setTitleEs(e.target.value)}
                placeholder="Ej: E-commerce de Zapatos"
                className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="font-bold text-sm">Descripción (Español)</label>
              <textarea
                value={descriptionEs}
                onChange={(e) => setDescriptionEs(e.target.value)}
                placeholder="Describe tu proyecto..."
                rows={4}
                className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="font-bold text-sm">URL de Imagen</label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="/tu-imagen.webp o https://..."
                className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="font-bold text-sm">Tecnologías (separadas por coma)</label>
              <input
                type="text"
                value={technologies}
                onChange={(e) => setTechnologies(e.target.value)}
                placeholder="React, TypeScript, Tailwind..."
                className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-bold text-sm">Live URL (Opcional)</label>
                <input
                  type="text"
                  value={liveUrl}
                  onChange={(e) => setLiveUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold text-sm">GitHub URL (Opcional)</label>
                <input
                  type="text"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-100 border-2 border-red-500 text-red-700 rounded-lg text-sm font-bold">
                {error}
              </div>
            )}

            <button
              onClick={handleSaveProject}
              disabled={isGenerating}
              className="w-full py-4 bg-black text-white font-black text-lg rounded-xl border-2 border-black hover:bg-primary hover:text-black transition-all hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="animate-spin" /> Procesando...
                </>
              ) : (
                <>
                  <Sparkles size={20} /> Traducir y Guardar
                </>
              )}
            </button>

            <div className="border-t-4 border-black pt-6 mt-8">
              <h3 className="font-black text-xl mb-4 flex items-center gap-2">
                <Database size={24} /> Migración de Datos
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Exporta los proyectos existentes de <code>projectLinks.ts</code> a Supabase.
              </p>
              <button
                onClick={handleMigration}
                disabled={isMigrating}
                className="w-full py-3 bg-white text-black font-bold rounded-xl border-2 border-black hover:bg-green-400 transition-all hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isMigrating ? (
                  <>
                    <Loader2 className="animate-spin" /> {migrationStatus}
                  </>
                ) : (
                  <>
                    <UploadCloud size={20} /> Migrar Proyectos Existentes
                  </>
                )}
              </button>
              {migrationStatus && !isMigrating && (
                <p className="mt-2 text-center font-bold text-green-600">{migrationStatus}</p>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-black/5 rounded-2xl transform rotate-2"></div>
            <div className="relative h-full bg-white border-2 border-black rounded-2xl p-6 shadow-[8px_8px_0px_0px_#000] flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-black text-xl">Código Generado</h3>
                <button
                  onClick={copyToClipboard}
                  disabled={!generatedCode}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                  title="Copiar código"
                >
                  {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                </button>
              </div>

              <div className="flex-1 bg-gray-900 rounded-xl p-4 overflow-auto font-mono text-sm text-green-400">
                {generatedCode ? (
                  <pre className="whitespace-pre-wrap">{generatedCode}</pre>
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500 italic text-center">
                    Completa el formulario para generar el código JSON para translations.ts
                  </div>
                )}
              </div>

              <div className="mt-4 text-xs text-slate-gray text-center">
                El proyecto se guardará directamente en Supabase.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
