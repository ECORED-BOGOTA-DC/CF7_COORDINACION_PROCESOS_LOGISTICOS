export default {
  global: {
    componenteFormativo: 'Coordinar el flujo de mercancía',
    descripcionCurso:
      'La logística de distribución representa el elemento individual más importante en la logística, esta es la estrategia que organiza desde la adquisición hasta la entrega de los productos conocidos como mercancía, en este concepto se trabaja todo lo concerniente a logística que a su vez hace parte de la propuesta de valor de cada empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-7.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Proyectar la oferta y demanda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos generales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Modos y medios de transportes',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Legislación aplicada al transporte',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Analizar el plan de ruta',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Entidades que regulan el transporte en Colombia',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Requerimientos de la distribución de mercancías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Necesidades de clientes, proveedores, importadores y exportadores',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Sistema de distribución - Funciones',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Tecnologías de la información y la comunicación aplicadas al transporte',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Sistemas de gestión de calidad',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Operaciones logísticas y el flujo de mercancías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Procesos Logísticos en el flujo de la mercancía',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Producción',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Distribución',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Plan de recursos de distribución',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Sistemas de información en el flujo de mercancías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Gestión del transporte',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Seguimiento y rastreo a los productos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Trazabilidad en los procesos logísticos de flujo de mercancías',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Cumplimiento de requisitos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Indicadores de gestión',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Cadena de suministro',
      significado:
        'gestión e integración de los productos, servicios e información de los procesos clave del negocio, de los proveedores, productores y distribuidores, que permiten adicionar valor y satisfacer las necesidades de los clientes y los <em>stakeholders</em>.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'grado en que el sistema de salud efectúa la máxima contribución a las metas sociales definidas dados los recursos disponibles del sistema de salud y de aquellos que no pertenecen al sistema de salud. Implica la relación favorable entre resultados obtenidos y costos de los recursos empleados. Tiene dos dimensiones: la relativa a la asignación de recursos y la referente a la productividad de los servicios. En economía, eficiencia es un concepto que describe la relación entre insumos y resultados en la producción de bienes y servicios. Esta relación puede medirse en términos físicos (eficiencia técnica) o términos de costo (eficiencia económica).',
    },
    {
      termino: '<em>Lead Time</em>',
      significado:
        'tiempo entre el diseño original o idea de un producto particular y su producción real o real.',
    },
    {
      termino: 'Logística inversa',
      significado:
        'se ocupa básicamente en el flujo inverso de la materia prima o productos y de sus embalajes: reutilización mediante las tiendas de ahorro, reparación, restauración, remanufacturar parcial, reciclado de materias primas o eliminación definitiva, diciendo en cada caso, cuándo y cómo hacerlo o aplicarlo.',
    },
    {
      termino: 'Logística urbana',
      significado:
        'proceso de optimizar totalmente las actividades privadas de transporte y logística en las áreas urbanas considerando el tránsito, la congestión y el consumo de energía dentro de la estructura de una economía de mercados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bravo, J. J., Orejuela, J. P., Osorio, J. C. (2007). Administración de recursos de distribución: Indicadores para la priorización en transporte. <em>Estudios Gerenciales</em>, 23(102), 101-118',
      link: '',
    },
    {
      referencia:
        'CAF - Banco de Desarrollo de América Latina. (2015). <em>Perfil logístico de América Latina</em>. CAF.',
      link:
        'https://scioteca.caf.com/bitstream/handle/123456789/1022/CAF_PERLOG%20LATAM.pdf',
    },
    {
      referencia:
        'Castellanos R, A. (2015). <em>Logística comercial internacional</em>. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia: 'Economipedia. (2021). <em>Producción</em>.',
      link: 'https://economipedia.com/definiciones/produccion.html',
    },
    {
      referencia:
        'Kottler, P., y Keller, K. (2016). <em>Dirección de marketing</em>. Pearson.',
      link: '',
    },
    {
      referencia:
        'Mora, G., L. A. (2014). <em>Logística de transporte y distribución de carga</em>. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Swamidass, P. M. (2020). <em>Interview with S. Joshua Swamidass, author of "The Genealogical Adam and Eve</em>". [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=q_5ZwLUVGcw',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Guadrón',
          cargo: 'Responsable Línea de Producción Distrito Capital',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuador Instruccional',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Rafael Rodríguez Cuéllar',
          cargo: 'Instructor',
          centro:
            'Regional Huila – Centro de la industria, la empresa y los servicios',
        },
        {
          nombre: 'Fabio Salazar',
          cargo: 'Experto técnico',
          centro:
            'Regional Huila – Centro de la industria, la empresa y los servicios',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital, Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Evaluador Instruccional',
          centro: 'Regional Distrito Capital, Centro de Gestión Industrial',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander, Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Regional Distrito Capital, Centro para la Industria de la Comunicación Gráfica',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
