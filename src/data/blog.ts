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
}

export const ARTICULOS: Articulo[] = [
  {
    slug: 's1-code-y-s1grep',
    titulo: 'De Laya a s1-code: entrené un modelo System One para buscar código y construí s1grep',
    resumen:
      'Tres versiones de un modelo propio, 18 pasos medidos y un buscador local en Rust que encuentra el código por lo que hace, en inglés y en español, sin enviar nada a la nube.',
    fecha: '2026-10-01',
    fechaTexto: '1 de octubre de 2026',
    lectura: '18 min de lectura',
    etiquetas: ['IA', 'Modelos propios', 'Rust', 'Investigación'],
  },
];

/** Public links of the s1-code case study. */
export const ENLACES_S1 = {
  s1grep: 'https://github.com/apiservicesac/s1grep',
  modeloV3: 'https://huggingface.co/api-service-sac/s1-code-v3',
  modeloV2: 'https://huggingface.co/api-service-sac/s1-code-v2',
  modeloV1: 'https://huggingface.co/api-service-sac/s1-code-v1',
  granite: 'https://huggingface.co/api-service-sac/granite-embedding-278m-multilingual-onnx',
  organizacion: 'https://huggingface.co/api-service-sac',
};
