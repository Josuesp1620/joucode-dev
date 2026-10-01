/**
 * Blog posts. Each one has its page in src/pages/blog/<slug>.astro.
 * Never name clients, private repositories or internal products: aggregate figures only.
 */
export interface Articulo {
  slug: string;
  titulo: string;
  resumen: string;
  fecha: string;
  fechaTexto: string;
  lectura: string;
  etiquetas: string[];
  idioma: 'es' | 'en';
  /** Slug of the same article in the other language. */
  traduccion?: string;
}

export const ARTICULOS: Articulo[] = [
  {
    slug: 's1-code-y-s1grep',
    titulo: 'De Laya a s1-code: entrené un modelo System One para buscar código y construí s1grep',
    resumen:
      'Mi primer modelo entrenado, con todo medido: tres versiones de s1-code y un buscador local en Rust, s1grep, que encuentra el código por lo que hace en nueve lenguajes, en inglés y en español, sin enviar nada a la nube.',
    fecha: '2026-10-01',
    fechaTexto: '1 de octubre de 2026',
    lectura: '24 min de lectura',
    etiquetas: ['IA', 'Modelos propios', 'Rust', 'Investigación'],
    idioma: 'es',
    traduccion: 's1-code-and-s1grep',
  },
  {
    slug: 's1-code-and-s1grep',
    titulo: 'From Laya to s1-code: I trained a System One model to search code and built s1grep',
    resumen:
      'My first trained model, measured end to end: three versions of s1-code and a local Rust search tool, s1grep, that finds code by what it does in nine languages, in English and Spanish, without sending anything to the cloud.',
    fecha: '2026-10-01',
    fechaTexto: 'October 1, 2026',
    lectura: '22 min read',
    etiquetas: ['AI', 'Own models', 'Rust', 'Research'],
    idioma: 'en',
    traduccion: 's1-code-y-s1grep',
  },
];

/** Articles listed on the blog index; translations are reached from their article. */
export const ARTICULOS_INDICE = ARTICULOS.filter((articulo) => articulo.idioma === 'es');

/** Public links of the s1-code case study. */
export const ENLACES_S1 = {
  s1grep: 'https://github.com/apiservicesac/s1grep',
  modeloV3: 'https://huggingface.co/api-service-sac/s1-code-v3',
  modeloV2: 'https://huggingface.co/api-service-sac/s1-code-v2',
  modeloV1: 'https://huggingface.co/api-service-sac/s1-code-v1',
  granite: 'https://huggingface.co/api-service-sac/granite-embedding-278m-multilingual-onnx',
  graniteSmall: 'https://huggingface.co/api-service-sac/granite-embedding-97m-multilingual-r2-onnx',
  organizacion: 'https://huggingface.co/api-service-sac',
};
