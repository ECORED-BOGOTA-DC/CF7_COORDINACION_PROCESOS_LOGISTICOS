<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 1
      h1 El flujo de mercancías
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 La cadena de suministro es una herramienta para aumentar la productividad y competitividad de las empresas; y el flujo de mercancías o la administración de almacenes es un proceso vinculado a la cadena de suministro correspondiente a todas las actividades intrínsecas a la naturaleza de los productos.
        br
        br
        | La gestión de almacenes posee como procesos fundamentales la coordinación de procesos logísticos, el balance en la administración de inventarios, el servicio al cliente y la adaptación a la dinámica global de las empresas. Así las cosas, la gestión de almacenes en relación con las mercancías debe tener como objetivo minimizar y maximizar las siguientes opciones:
    
    .row.mt-5
      .col-lg-1
      .col-lg-9
        figure
          img(src="@/assets/curso/tema1/2.svg" data-aos="zoom-in-up" alt="Imagen que relaciona los aspectos que se tienen en cuenta al momento de minimizar y maximizar los procesos en el flujo de mercancías.")
      .col-lg-2
    
    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_1_1 1.1 Conceptos generales
    
    p(data-aos="zoom-in") Son varios los conceptos que se deben tratar al respecto del flujo de las mercancías, a continuación, se exponen los más representativos:

    AcordionA.acordion1.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris" data-aos="zoom-in")
      .row.col-xl-11.m-auto(titulo="Almacenamiento")
        p Proceso en el cual una vez verificada la mercadería se dispone a ubicarla en un espacio físico de acuerdo con sus caracterizas de tamaño, peso, fragilidad, rotación y fecha de expiración.
      .row.col-xl-11.m-auto(titulo="Control de inventario")
        p Vigila las existencias de mercancías en las instalaciones de la organización (inventarios cíclicos, inventarios de barrido, preservación de producto), de tal manera un indicador ERI (Exactitud Registro de Inventario), así como los desplazamientos relacionados con los productos (producto no conforme, devoluciones, transferencias, etc.).
      .row.col-xl-11.m-auto(titulo="Despacho")
        p Gestión de la salida de los productos de la fábrica hacia el destino o consumidor final. Lo anterior incluye la emisión de documentos, inspección física y transporte.
      .row.col-xl-11.m-auto(titulo="Preparación de pedidos (<em>picking</em> / <em>packing</em>)")
        p Corresponde a la recolección de unidades disponibles de acuerdo con su naturaleza, almacenadas y dispuestas a ser transportadas al lugar donde el consumidor las requirió.
      .row.col-xl-11.m-auto(titulo="Producción no terminada")
        p Concierne a aquellos productos que no han finalizado su ciclo de producción en los plazos de tiempo estipulados por la empresa.
      .row.col-xl-11.m-auto(titulo="Productos terminados")
        p Son los productos con todas las características establecidas para la satisfacción de la necesidad del cliente.
      .row.col-xl-11.m-auto(titulo="Recepción")
        p Proceso mediante el cual se realiza la verificación y control físico y documental de la mercadería ingresada al almacén desde su adquisición hasta el proceso de devolución.
      .row.col-xl-11.m-auto(titulo="Recursos materiales")
        p Hace referencia a los materiales básicos y auxiliares, productos semiacabados, componentes, combustibles, piezas de repuesto, residuos de producción, envases y embalajes. 
    
    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_1_2 1.2 Modos y medios de transporte
    
    p(data-aos="zoom-in") Dentro de la gestión logística, el transporte es la parte principal, pues que garantiza la distribución y/o entrega de la mercancía de forma segura, puntual y económica, en algunos casos. Actualmente, existe una gran variedad de alternativas de transporte con los cuales las empresas pueden soportar su estructura logística; a continuación, se hace la diferenciación de los dos conceptos trabajados, así como los modos y medios para tener claridad de los conceptos en la coordinación logística:

    .col-xl-10.m-auto.mt-5
      figure
        img(src="@/assets/curso/tema1/3.svg" data-aos="zoom-in-up" alt="Imagen que relaciona los conceptos de modos y medios de transporte, aspectos presentes en la coordinación logística.")
      
      p.mt-4(data-aos="zoom-in") #[strong Nota:] los modos y medios de transporte tienen ventajas y desventajas, según la alternativa seleccionada para el envío del bien, por tal motivo, se hace necesario la identificación de los factores que ofrecen mejores garantías de transporte, teniendo en cuenta el tipo y la cantidad de mercancía involucrada en la negociación.

    p.mt-5(data-aos="zoom-in") Luego de entender los conceptos, la invitación es a ver cada medio como un todo según su finalidad, tal como lo muestra la siguiente tabla que lo relaciona con el modo, esta distinción sirve para Colombia y las economías vecinas:

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Tabla 1.
      span Modos y medios de transporte 
    
    .tabla-a.color-primario.mt-4
      table
        thead
          tr(data-aos="fade-right")
            th(colspan="5") Modo
        tbody
          tr(data-aos="fade-right")
            td.fw-bold.text-center(rowspan="2") Terrestre
            td.fw-bold.text-center Terrestre
            td.text-center Camionetas
            td.text-center Carrotanques
            td.text-center Camabajas
          tr(data-aos="fade-right")
            td(colspan="4") Es el sistema más cercano e inmediato para casi todas las empresas, debido a la capacidad de ofrecer un servicio puerta a puerta. Es el modo más asequible, lo cual facilita la movilización de los productos de manera inmediata.
          tr(data-aos="fade-right")
            td.fw-bold.text-center(rowspan="2") Marítimo
            td.fw-bold.text-center Marítimo
            td.text-center Graneleros
            td.text-center Frigoríficos
            td.text-center Ro-Ro
          tr(data-aos="fade-right")
            td(colspan="4") Es el transporte de carga más empleado por su gran capacidad de carga y la de mayor amplitud geográfica en distancias. Es tan flexible que ofrece para cada tipo de carga una clase de barco sin considerar su naturaleza.
          tr(data-aos="fade-right")
            td.fw-bold.text-center(rowspan="2") Aéreo
            td.fw-bold.text-center Aéreo
            td.text-center Aviones mixtos
            td.text-center Avioneta
            td.text-center Helicóptero
          tr(data-aos="fade-right")
            td(colspan="4") Es el sistema de transporte más expedito considerando largas distancias, sin embargo, sus costos son elevados. Generalmente, opera para el transporte de productos perecederos, químicos y farmacéuticos, electrónicos y telecomunicaciones, animales vivos y productos frágiles. 
          tr(data-aos="fade-right")
            td.fw-bold.text-center(rowspan="2") Férreo
            td.fw-bold.text-center(colspan="4") Férreo
          tr(data-aos="fade-right")
            td(colspan="4") Su principal utilización se basa en su capacidad de transportar grandes volúmenes. Es el complemento ideal del transporte marítimo. #[br] #[br] En Colombia ha desaparecido en gran parte, sin embargo, en algunas regiones constituye el modo de transporte más importante.
          tr(data-aos="fade-right")
            td.fw-bold.text-center(rowspan="2") Ductos
            td.fw-bold.text-center(colspan="4") Ductos
          tr(data-aos="fade-right")
            td(colspan="4") Están asociados al transporte de petróleo y gas natural. Se fundamenta en los acuerdos de integración entre los países para ampliar su red de distribución mundial.
          tr(data-aos="fade-right")
            td.fw-bold.text-center(rowspan="2") Multimodal
            td.fw-bold.text-center(colspan="4") Multimodal
          tr(data-aos="fade-right")
            td(colspan="4") Es la utilización de dos o más modos de transporte, con el objetivo que la carga llegue a su lugar de destino. Su utilización se basa en la necesidad y la economía a escala.
    
    p.mt-5(data-aos="zoom-in") El elemento diferenciador, y en ocasiones decisivo para la elección de un transporte, se basa en la determinación de algunos aspectos que pueden establecer la comparación de alternativas para estructurar el transporte a utilizar, como se presenta en la siguiente tabla:

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Tabla 2.
      span Elementos de seguimiento para el seguimiento de mercancías 
    
    .tabla-a.color-primario.mt-4
      table
        thead(style="border:0;")
          tr(style="background-color:#57DBD8;" data-aos="fade-right")
            th.text-center(colspan="2") Elementos de seguimiento para el transporte de mercancías
        tbody
          tr(style="background-color:#F6F6F6;" data-aos="fade-right")
            td.fw-bold.text-center(style="border:0;") Velocidad
            td(style="border:0;") Define la posibilidad de llevar mercancías de un lugar a otro en el menor tiempo posible.
          tr(style="background-color:#fff;" data-aos="fade-right")
            td.fw-bold.text-center(style="border:0;") Consistencia
            td(style="border:0;") Es la capacidad de que los destinos lleguen en las mejores condiciones, de acuerdo con lo programado y contratado.
          tr(style="background-color:#F6F6F6;" data-aos="fade-right")
            td.fw-bold.text-center(style="border:0;") Control
            td(style="border:0;") Verificación de las condiciones óptimas del transporte utilizado, y el seguimiento al mismo.
          tr(style="background-color:#fff;" data-aos="fade-right")
            td.fw-bold.text-center(style="border:0;") Capacidad de carga
            td(style="border:0;") Determina la correcta elección en capacidad de peso del vehículo, para el traslado de la totalidad de la mercancía.
          tr(style="background-color:#F6F6F6;" data-aos="fade-right")
            td.fw-bold.text-center(style="border:0;") Seguridad
            td(style="border:0;") Realizar seguimiento al transporte y garantizar que las mercancías lleguen en óptimas condiciones.
    
    p.mt-5(data-aos="zoom-in") El transporte de carga tiene una importancia notable desde todo punto de vista. Por ello, es imperativo analizar todas las variables (cuantitativas y cualitativas) en relación con la correcta elección para la logística de distribución (tabla 3).

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Tabla 3.
      span Principales características de los medios de transporte 
    
    .tabla-a.color-acento-botones.mt-4
      table
        caption Nota. <span style="font-weight: 400">Elaborada con base en Castellanos (2015).</span>
        thead
          tr(data-aos="fade-right")
            th.text-center Modo
            th.text-center Rapidez
            th.text-center Capacidad
            th.text-center Seguridad
            th.text-center Costo
            th.text-center Tipo de carga
        tbody
          tr(data-aos="fade-right")
            td.fw-bold.text-center.p-4 Aéreo
            td.text-center.p-4 Muy alta 
            td.text-center.p-4 Baja
            td.text-center.p-4 Muy alta
            td.text-center.p-4 Alto
            td.text-center.p-4 Alto valor y perecederas
          tr(data-aos="fade-right")
            td.fw-bold.text-center.p-4 Terrestre
            td.text-center.p-4 Alta
            td.text-center.p-4 Baja
            td.text-center.p-4 Media
            td.text-center.p-4 Bajo
            td.text-center.p-4 Todas
          tr(data-aos="fade-right")
            td.fw-bold.text-center.p-4 Férreo
            td.text-center.p-4 Media
            td.text-center.p-4 Alta
            td.text-center.p-4 Alta
            td.text-center.p-4 Medio
            td.text-center.p-4 Graneles y sólidos
          tr(data-aos="fade-right")
            td.fw-bold.text-center.p-4 Marítimo
            td.text-center.p-4 Baja
            td.text-center.p-4 Muy alta
            td.text-center.p-4 Alta
            td.text-center.p-4 Bajo
            td.text-center.p-4 Contenedores y granel
          tr(data-aos="fade-right")
            td.fw-bold.text-center.p-4 Multimodal
            td.text-center.p-4 Alta
            td.text-center.p-4 Media
            td.text-center.p-4 Media
            td.text-center.p-4 Medio
            td.text-center.p-4 Todas

    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_1_3 1.3 Legislación aplicada al transporte
    
    p(data-aos="zoom-in") El Decreto 173 de 2001 reglamenta la actividad del transporte de carga terrestre, por el cual, se establecen normas para la habilitación de empresas de transporte público terrestre automotor de carga y su prestación del servicio con características idóneas de eficiencia, seguridad, economía y oportunidad. Cumpliendo con los principios rectores del transporte, como la libre competencia y el de la iniciativa privada, con dependencia de las restricciones formuladas por las leyes colombianas y acuerdos internacionales.

    .col-xl-10.m-auto.mt-5
      .row.m-0.p-4(style="background: linear-gradient(280deg, rgba(58,180,177,1) 0%, rgba(26,15,145,1) 100%);border-radius:10px;" data-aos="flip-up")
        .col-lg-1.col-md-3.mb-4.mb-md-0(style="place-self:center;")
          figure.text-center
            img(src="@/assets/curso/tema1/4.svg" data-aos="zoom-in-right" style="display:inline;max-width:80px;" alt="Imagen decorativa")
        .col-lg-9.col-md-6.mb-4.mb-md-0
          h4.text-white(data-aos="zoom-in") Para dar conformidad a la legislación se debe conocerla, por eso se requiere revisar el siguiente material de conformidad con los estatutos nacionales.
          p.text-small.text-white(data-aos="zoom-in") Base de Datos: Google #[br] Lectura: Decreto 173 de 2001
        .col-lg-2.col-md-3.text-center(style="place-self:center;")
          a.boton.color-acento-botones(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4308" target="_blank" style="box-shadow:0px 0px 4px 1px rgba(0,0,0,.4);")
            span Ir al enlace
            i.fas.fa-link
    
    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_1_4 1.4 Analizar el plan de ruta
    
    p(data-aos="zoom-in") De acuerdo con CAF - Banco de Desarrollo de América Latina (2015), “Latinoamérica presenta tendencia preponderante hacia el uso de la carretera como vía principal en la distribución logística”, y es por ello, que el análisis y diseño de rutas de transporte de carga representa una prioridad para las empresas y permite planificar estrategias de distribución previendo posibles obstáculos que dificulten la entrega de mercancía asignada a una ruta de última milla. 

    .mt-5.p-3(style="max-width:450px;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-up")
      h4.mb-0.ps-3 Planificación y diseño de la ruta
    
    p.mt-4(data-aos="zoom-in") Para realizar una correcta planificación de una ruta de distribución, se deberán tener en cuenta los siguientes aspectos: 

    .h4.TB.mt-5 <i class="fas fa-globe fa-spin" style="color:#57DBD8; padding-left: 5px"></i> Identificación de recursos disponibles
    
    p.mt-4(data-aos="zoom-in") Para realizar una correcta planificación de la ruta logística y una eficaz entrega de última milla, es necesario determinar con cuáles recursos se cuentan justo en el momento del despacho tal como se muestra en la siguiente tabla.
    
    .titulo-sexto.color-acento-contenido.mt-5
      h5 Tabla 4.
      span Identificación de los recursos 
    
    .tabla-a.color-primario.mt-4
      table
        thead
          tr(data-aos="fade-right")
            th.text-center Recursos necesarios
            th.text-center Recursos disponibles
            th.text-center Objetivo
        tbody
          tr(data-aos="fade-right")
            td Características de la mercancía: tamaños, pesos, cadena de frío, fragilidad, tipos de envases, entre otros.
            td(rowspan="3") *Selección del vehículo #[br] Volumen de almacenamiento y peso, sin afectar su rendimiento.
            td(rowspan="3") Verificar que los recursos disponibles van acorde a los recursos necesarios para satisfacer la ruta logística terrestre.
          tr(data-aos="fade-right")
            td Cantidad de unidades disponibles: nivel de inventario disponible.
          tr(data-aos="fade-right")
            td Urgencia de la entrega: disponibilidad de vehículos y conductores.

    p.mt-5(data-aos="zoom-in") *Selección de vehículos para la ruta de transporte: se deben tener en cuenta los recursos necesarios para no generar desgastes en el transporte de los productos. Ante esto, es importante realizar una selección del vehículo escogido para cada entrega, considerando dos aspectos significativos como lo son el tipo de ruta de transporte que se debe recorrer, el tipo de producto que se debe entregar. 

    .h4.TB.mt-5 <i class="fas fa-globe fa-spin" style="color:#57DBD8; padding-left: 5px"></i> Fijación de puntos de entrega
    
    p.mt-4(data-aos="zoom-in") Una vez se hayan identificado y coordinado los recursos necesarios y disponibles, se identifica la ruta de entrega, es decir, la ubicación de los clientes. 
    p.mt-4(data-aos="zoom-in") Para la realización de este proceso existen diversas plataformas en línea:

    .row.m-0.mt-5(data-aos="zoom-in-up")
      .col-lg-4.col-md-6.mb-4.mb-md-0.p-md-0
        .h-100.p-4.p-md-5.d-flex.align-content-center.align-items-center(style="background-color:#F6F6F6;")
          figure.text-center
            img(src="@/assets/curso/tema1/5.svg" style="display:inline;max-width:300px;" alt="Imagen decorativa")
      .col-lg-8.col-md-6.p-md-0
        .h-100.p-4.p-md-5(style="background-color:#EFF4FF;")
          h3 Sistema de Información de Costos Eficientes para el Transporte Automotor de Carga SICE-TAC
          p.mt-4.mb-0 Sistema de información que permite calcular los costos operativos del transporte de conformidad con las características cada viaje: tipo de vehículo, tipo de carga, origen-destino, horas estimadas de espera, cargue y descargue.
    .row.m-0(data-aos="zoom-in-up")
      .col-lg-4.col-md-6.mb-4.mb-md-0.p-md-0
        .h-100.p-4.p-md-5.d-flex.align-content-center.align-items-center(style="background-color:#E8E8E8;")
          figure.text-center
            img(src="@/assets/curso/tema1/6.svg" style="display:inline;max-width:150px;" alt="Imagen decorativa")
      .col-lg-8.col-md-6.p-md-0
        .h-100.p-4.p-md-5(style="background-color:#D8E4FD;")
          h3 VesselFinder 
          p.mb-0.mt-4 Es un localizador de barcos que muestra en tiempo real, la ubicación de todas las embarcaciones que tienen un dispositivo AIS (#[em Automatic Identification System]).
    .row.m-0(data-aos="zoom-in-up")
      .col-lg-4.col-md-6.mb-4.mb-md-0.p-md-0
        .h-100.p-4.p-md-5.d-flex.align-content-center.align-items-center(style="background-color:#F6F6F6;")
          figure.text-center
            img(src="@/assets/curso/tema1/7.svg" style="display:inline;max-width:300px;" alt="Imagen decorativa")
      .col-lg-8.col-md-6.p-md-0
        .h-100.p-4.p-md-5(style="background-color:#EFF4FF;")
          h3 Flightradar24
          p.mt-4.mb-0 Sitio web diseñado para obtener información en tiempo real de las aeronaves que circulan en el espacio aéreo alrededor del mundo. Ahí se pueden tener datos como la posición del avión, altitud, rumbo, velocidad, etc.
    .row.m-0(data-aos="zoom-in-up")
      .col-lg-4.col-md-6.mb-4.mb-md-0.p-md-0
        .h-100.p-4.p-md-5.d-flex.align-content-center.align-items-center(style="background-color:#E8E8E8;")
          figure.text-center
            img(src="@/assets/curso/tema1/8.svg" style="display:inline;max-width:200px;" alt="Imagen decorativa")
      .col-lg-8.col-md-6.p-md-0
        .h-100.p-4.p-md-5(style="background-color:#D8E4FD;")
          h3 Inrix
          p.mb-0.mt-4 Proporciona datos y análisis basados en la ubicación, como tráfico y estacionamiento, a fabricantes de automóviles, ciudades y autoridades viales de todo el mundo, y en aplicaciones de navegación paso a paso como Google Waze.
    
    .h4.TB.mt-5 <i class="fas fa-globe fa-spin" style="color:#57DBD8; padding-left: 5px"></i> Planeación de la ruta logística
    
    p.mt-4(data-aos="zoom-in") Con la información clave, se procede a planificar la ruta logística. En este paso se deben tener en cuenta aspectos fundamentales como la #[strong selección de las rutas de transporte con criterios de capacidad y niveles de servicio], en donde los planes de ruta son generados considerando la trayectoria con menos distancia y menor tiempo recorrido, con el objetivo de minimizar costos operativos, desgaste de equipos de transporte y personal. Además, se deben tener en cuenta las características de la flota en cuanto a capacidad de carga (volumen y peso), tamaño de los vehículos, ya que la configuración de la infraestructura vial de las urbes es muy específica en determinadas zonas (vías con un solo carril y bidireccionales, pendientes altas, condiciones de seguridad, etc.). 

    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_1_5 1.5 Entidades que regulan el transporte en Colombia
    
    p(data-aos="zoom-in") El organismo gubernamental regulador del transporte en Colombia es el Ministerio de Transporte, de conformidad con el Decreto 087 de 2011, donde se modifica la estructura del Ministerio y se determinan las funciones de sus dependencias. Además, es el ente de Gobierno encargado de formular y adoptar las políticas, planes, programas, proyectos y regulación económica del transporte, el tránsito y la infraestructura, en los modos carretero, marítimo, fluvial, férreo, fluvial y aéreo del país.

    p.mt-4(data-aos="zoom-in") Dentro de las instituciones dirigidas están:

    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0
        ul.lista-ul--separador
          li(data-aos="fade-right")
            i.fas.fa-angle-right(style="color:#FE7062;")
            | Policía de carreteras.
          li(data-aos="fade-right")
            i.fas.fa-angle-right(style="color:#FE7062;")
            | Policía fluvial.
          li(data-aos="fade-right")
            i.fas.fa-angle-right(style="color:#FE7062;")
            | Unidad Administrativa Especial de Aeronáutica Civil - Policía Aeroportuaria.
          li(data-aos="fade-right")
            i.fas.fa-angle-right(style="color:#FE7062;")
            | Dirección General Marítima -DIMAR– Ministerio de Defensa Nacional.
          li(data-aos="fade-right")
            i.fas.fa-angle-right(style="color:#FE7062;")
            | Dirección General de Transporte Fluvial – Inspecciones fluviales. 
      .col-lg-4(style="place-self:center;")
        figure(data-aos="fade-left")
          img(src="@/assets/curso/tema1/9.png" alt="Imagen decorativa")

    .col-lg-11.m-auto.mt-4
      p(data-aos="zoom-in") El Ministerio de Transporte como órgano regulador de nivel central, está constituido por el Instituto Nacional de Vías (Invías), la Agencia Nacional de Infraestructura (ANI), la Unidad Administrativa Especial de Aeronáutica Civil (Aerocivil), la Superintendencia de Puertos y Transporte (Supertransporte) y la Agencia Nacional de Seguridad Vial (ANSV). 

    p.mt-5(data-aos="zoom-in") En el siguiente recurso se identifican con claridad las dos instancias que regulan a nivel general el transporte en Colombia, si se requiere más información de cada una de ellas se puede ir al sitio web en donde reposa toda la información:

    .row.mt-5
      .col-lg.mb-4.mb-lg-0.pe-lg-0
        .h-100.p-4.p-md-5.text-center(style="background-color:#0F0957;border-radius:15px 0px 0px 15px;")
          figure.text-center
            img(src="@/assets/curso/tema1/10.svg" data-aos="zoom-in" style="display:inline;max-width:300px;" alt="Imagen decorativa")
          h3.mt-5.text-white(data-aos="zoom-in") Unidad Administrativa Especial #[br] de Aeronáutica Civil (Aerocivil)
          p.mt-4.text-white(data-aos="zoom-in") Realiza las funciones propias de autoridad de la aviación civil en Colombia, donde garantiza el desarrollo de la actividad aérea y de la industria aeronáutica colombiana, constituida sobre criterios de seguridad por medio del ejercicio de las facultades asignadas; certificación y licenciamiento, reglamentación aeronáutica, seguimiento y control con propiedades de régimen sancionatorio.
      .col-lg.mb-4.mb-lg-0.ps-lg-0
        .h-100.p-4.p-md-5.text-center(style="background-color:#576B96;border-radius:0px 15px 15px 0px;")
          figure.text-center
            img(src="@/assets/curso/tema1/11.svg" data-aos="zoom-in" style="display:inline;max-width:300px;" alt="Imagen decorativa")
          h3.mt-5.text-white(data-aos="zoom-in") Superintendencia de Puertos y #[br] Transporte (Supertransporte)
          p.mt-4.text-white(data-aos="zoom-in") Es la encargada de inspeccionar, vigilar y controlar la prestación del servicio del transporte marítimo, fluvial, terrestre, férreo, y aéreo en el país, en temas relacionados con la infraestructura y los servicios ofrecidos.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.acordion1 .tarjeta.tarjeta--gris.acordion__activo
  background-color: #E9F0FE
.acordion1 .tarjeta.tarjeta--gris.acordion__activo .acordion__accion__btn--a
  background-color: #1A0F91
  color: #fff
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: dotted 2px #b0c0d2
</style>
