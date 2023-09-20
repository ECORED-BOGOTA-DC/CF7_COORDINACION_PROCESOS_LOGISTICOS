<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 2
      h1 Requerimientos de la distribución de mercancías
    
    p(data-aos="zoom-in") La distribución de mercancías es uno de los elementos propios del proceso logístico en su conjunto, más no es, en sí mismo, toda la actividad logística. Este se encamina a planificar y controlar todo el movimiento de mercancías físicas (materias primas, producto semielaborado, producto terminado) desde el lugar de fabricación hasta el sitio establecido para la entrega. A grandes rasgos, se pueden distinguir dos tipos de distribución de mercancías o de transporte, a saber:
    
    .col-lg-10.col-xl-6.m-auto.mt-5
      figure
        img(src="@/assets/curso/tema2/1.svg" data-aos="zoom-in-up" alt="A.	Transporte interno: se realiza dentro de la propia empresa.<br>B.	Transporte externo: hace referencia a cuando el producto sale de la empresa al punto establecido por el consumidor final.")
    
    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_2_1 2.1  Necesidades de clientes, proveedores, importadores y exportadores
    
    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/2.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;")
        p(data-aos="zoom-in") Uno de los aspectos más relevantes es seleccionar el nicho adecuado, donde dependiendo de la naturaleza de la empresa, se pueden encontrar los recursos necesarios para cumplir con la propuesta misional, para ello, las empresas deben considerar las amenazas y oportunidades presentes en el mercado. 
        p.mt-4(data-aos="zoom-in") Desde el punto de vista de los clientes, las necesidades presentes en su nicho son la disponibilidad inmediata del producto adquirido, la calidad y el costo por el cual se accede a la mercancía. Los proveedores, por su parte, tienen inconvenientes al momento de entregar sus materias primas en los almacenes de la empresa; generalmente, los encargados de recepcionar las mercancías no cuentan con espacio para el bodegaje y el tiempo del trámite es prolongado mientras se verifica el estado y condición de la entrega.
    p.mt-4(dataaos="zoom-in") Las necesidades que afrontan los exportadores están asociadas al componente sociodemográfico del lugar de destino, como el desconocimiento de la cultura de negocios, entrar a la actividad exportadora por casualidad sin tener un plan definido de exportación y crecimiento de la compañía que supla los requerimientos del cliente. Los importadores experimentan la necesidad de solucionar barreras como el incremento en el cambio de la divisa, el idioma, tiempos de entrega y trámites aduaneros.

    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_2_2 2.2  Sistema de distribución - Funciones
    
    p(data-aos="zoom-in") En el cumplimiento del objetivo de la distribución física es necesario poner en práctica las siguientes funciones y modelos:

    .mt-5.p-3(style="max-width:450px;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-up")
      h4.mb-0.ps-3 Funciones del proceso de distribución
    
    p.mt-4(data-aos="zoom-in") Para Mora, (2014) “las funciones y objetivos del proceso de distribución, se cumplen a través de una serie de actividades cruciales dentro de la cadena de suministro que son controlables”. A continuación, se manifiestan algunas de esas funciones.

    AcordionA.acordion1.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris" data-aos="zoom-in")
      .row.col-xl-11.m-auto(titulo="Estimación de la demanda")
        p  Como plan de negocios hace referencia a la predicción en el estado comportamental de los consumidores en relación con los productos y servicios a futuro. 
      .row.col-xl-11.m-auto(titulo="Procesamiento de pedidos ")
        p Son las actividades asociadas al proceso de órdenes de compra.
      .row.col-xl-11.m-auto(titulo="Gestión de pedidos")
        p Hace referencia al control y vigilancia de las entradas y salidas de las mercancías presentes en el inventario del almacén.
      .row.col-xl-11.m-auto(titulo="Embalaje")
        p Es el acondicionamiento seguro de los productos para su transporte, manipulación y almacenaje.
      .row.col-xl-11.m-auto(titulo="Transporte del producto")
        p Comprende el desplazamiento interno y externo de las mercancías, desde las instalaciones de producción hasta el cliente.
      .row.col-xl-11.m-auto(titulo="Gestión de cobros")
        p Es la coordinación de canales con los cuales hay contacto con el cliente, orientados a la recepción de recursos económicos generados por las transacciones mercantiles.

    .mt-5.p-3(style="max-width:450px;background-color:#57DBD8;border-radius: 0px 30px 0px 30px;" data-aos="zoom-in-up")
      h4.mb-0.ps-3 Modelos de distribución
    
    p.mt-4(data-aos="zoom-in")  Los modelos de distribución son los fundamentos que adopta la organización para que sus productos lleguen a los diferentes mercados establecidos, estos modelos son variados según las necesidades de las empresas y están en función de su uso, como lo puede ver a continuación:

    .row.m-0.mt-5(data-aos="zoom-in-up")
      .col-lg-6.mb-4.mb-lg-0.p-md-0
        .h-100.p-4.p-md-5.d-flex.align-content-center.align-items-center(style="background-color:#F6F6F6;")
          figure.text-center
            img(src="@/assets/curso/tema2/3.svg" style="display:inline;" alt="Imagen decorativa")
      .col-lg-6.p-md-0
        .h-100.p-4.p-md-5(style="background-color:#EFF4FF;")
          h3 Modelo descentralizado
          p.mt-4.mb-0 Este modelo de distribución es el más usado. Posterior al proceso de fabricación pasa directamente a un almacén central, conocido como regulador. Una vez aquí, pasa de nuevo a transportarse a otros almacenes para acercar la mercancía a los puntos de venta.
          p.mt-4.mb-0 También tiene como virtud el ahorro de tiempo, en relación con la cercanía de los productos al punto de destino. Por el contrario, su principal desventaja es el alto costo en infraestructura, por lo que resulta más caro.
    .row.m-0(data-aos="zoom-in-up")
      .col-lg-6.mb-4.mb-lg-0.p-md-0
        .h-100.p-4.p-md-5.d-flex.align-content-center.align-items-center(style="background-color:#E8E8E8;")
          figure.text-center
            img(src="@/assets/curso/tema2/4.svg" style="display:inline;" alt="Imagen decorativa")
      .col-lg-6.p-md-0
        .h-100.p-4.p-md-5(style="background-color:#D8E4FD;")
          h3 Modelo centralizado
          p.mb-0.mt-4 En este modelo logístico de distribución la mercancía, una vez salida de la fábrica, pasa a un almacén central donde se planifica la distribución de rutas para las diferentes zonas, y disminuir los costos que incurría con el modelo descentralizado. A diferencia del modelo descentralizado, aquí no hay necesidad de infraestructuras, por lo que se produce un mayor ahorro.
    .row.m-0(data-aos="zoom-in-up")
      .col-lg-6.mb-4.mb-lg-0.p-md-0
        .h-100.p-4.p-md-5.d-flex.align-content-center.align-items-center(style="background-color:#F6F6F6;")
          figure.text-center
            img(src="@/assets/curso/tema2/5.svg" style="display:inline;" alt="Imagen decorativa")
      .col-lg-6.p-md-0
        .h-100.p-4.p-md-5(style="background-color:#EFF4FF;")
          h3 Distribución #[em cross-docking]
          p.mt-4.mb-0 En este proceso se reemplazan los almacenes por las plataformas de cross-docking (plataformas de carga y descarga), buscando que la mercancía no se almacene, sino que se genera un flujo continuo de mercancía en el cual se reexpide en menos de 24 horas.
    .row.m-0(data-aos="zoom-in-up")
      .col-lg-6.mb-4.mb-lg-0.p-md-0
        .h-100.p-4.p-md-5.d-flex.align-content-center.align-items-center(style="background-color:#E8E8E8;")
          figure.text-center
            img(src="@/assets/curso/tema2/6.svg" style="display:inline;" alt="Imagen decorativa")
      .col-lg-6.p-md-0
        .h-100.p-4.p-md-5(style="background-color:#D8E4FD;")
          h3 Plataforma de consolidación
          p.mb-0.mt-4 El modelo de consolidación de la carga se utiliza para la reducción de los costos en el proceso de transporte de mercancía, como para la agrupación de cargas de diferentes empresas para ser enviados a los proveedores.
    
    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_2_3 2.3  Tecnologías de la información y la comunicación aplicadas al transporte
    
    .col-xl-10.m-auto
      div(style="border-top:1px #3BC192 solid;")
      .cont_2_1.mt-2.pt-3(data-aos="flip-up")
        p.mb-0 #[i.fas.fa-quote-left(style="color: #3BC192;font-size:25px;")] La tecnología hace que el transporte genere importantes cambios en relación con los procesos de la empresa, pues una de sus ventajas se encamina a reducir notablemente los tiempos de respuesta en la entrega y la ejecución del mismo, haciendo que se mejore también el servicio ofrecido al cliente en todo momento. 
        .text-end.mt-2
          p.fw-bold Para Mora (2014) #[i.fas.fa-quote-right(style="color: #3BC192;font-size:25px;")]
    
    p.mt-4 Por eso, los sistemas de información orientados al transporte poseen diferentes maneras en las que se pueden utilizar con el fin de proporcionar información en tiempo real de los atributos de la mercancía que está en camino.
    
    .mt-5.p-3(style="max-width:450px;background-color: #57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-up")
      h4.mb-0.ps-3 Sistemas de gestión del transporte (TMS)
    
    p.mt-4(data-aos="zoom-in") Llamado de igual manera como #[em Transportation Management System] (TMS), es un sistema de logística que permite mejorar la gestión en el proceso de transporte, por lo cual da la posibilidad al usuario de simplificar, visualizar y controlar toda la operación, así como el costo de transporte de una manera conjunta o integrada.
    p.mt-4(data-aos="zoom-in") En este sentido, el TMS con relación con sus funciones, permite:
    
    AcordionA.acordion1.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris" data-aos="zoom-in")
      .row.col-xl-11.m-auto(titulo="Control de fletes a terceros")
        p Obtener la información de la red de transporte y los transportadores, direccionamiento de las tarifas y tasas, registros de embarque, cálculo de las provisiones de fletes, como de la emisión de prefacturas. 
      .row.col-xl-11.m-auto(titulo="Mantenimiento")
        p Llevar el control de las garantías de las piezas, así como de la mano de obra que participa en el proceso para los variados componentes.
      .row.col-xl-11.m-auto(titulo="Planeación")
        p Administrar las rutas, la renovación de la flota, el cálculo de dimensionamiento de recursos, la capacidad y el análisis de otras variables.
      .row.col-xl-11.m-auto(titulo="Costos")
        p Tener información de dos tipos de costos: 
        ol.lista-ol
          li 
            span.text-bold 1. 
            | Los costos de mantenimiento son informes que el sistema de mantenimiento alimenta de una manera integrada. 
          li 
            span.text-bold 2. 
            | Los costos de operación: son informes generados de manera integrada por el sistema de operación.
      .row.col-xl-11.m-auto(titulo="Operación")
        p Realizar el seguimiento lógico de las cargas, control de transbordo y entrega, el tráfico, la liberación de embarque, las órdenes de transporte, la gestión del transportador y el registro de eventos.
      .row.col-xl-11.m-auto(titulo="Seguimiento")
        p A través de las interfaces con rastreadores GPS realizar el seguimiento, con lectores de códigos de barras, así como la transmisión de datos en tiempo real. 
      .row.col-xl-11.m-auto(titulo="Facturación de transporte")
        p Es el registro de notas físicas, clientes y tercerización, requisitos de transporte, de tasas y tarifas, emisión de facturas de cobro a clientes y emisión de conocimientos y manifiestos de carga. 
      .row.col-xl-11.m-auto(titulo="Implementos")
        p Es el control de materiales en oficinas propias, de compras y requisiciones. 
    
    .mt-5.p-3(style="max-width:450px;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-up")
      h4.mb-0.ps-3 Sistemas de información
    
    p.mt-4(data-aos="zoom-in") Los datos son el “oro” de la realidad actual en la sociedad de la información en la que se desempeñan las empresas cada día y todos esos datos bien administrados se convierten en la historia de cada una de las empresas (trazabilidad), es por eso que se deben trabajar esos datos de manera ordenada y es ahí donde adquieren importancia los #[strong sistemas de información que son los encargados de la administración de todos los datos de la empresa] y siempre están en dinamismo, es decir que cada día una empresa trabaja con muchos datos que deben quedar en rastreo por algún modelo, estos modelos son de diferentes tipos para cubrir todas las necesidades de las empresas y a nivel general los sistemas de información más usados son:

    TabsA.color-acento-botones.mt-5(data-aos="zoom-in")
      .tarjeta.color-acento-botones.p-4(titulo="Sistema de gestión de <br> distribución (DMS)" style="background-color:#FFEAE7;")
        p El sistema de gestión de distribución, señalado también como #[em Distribution Management System] (DMS), permite reunir, visualizar, organizar y analizar en tiempo real la información relacionada con la actividad de distribución. Así mismo, permite planificar y ejecutar las operaciones del sistema de distribución en aras de que sean más eficientes, optimizar los flujos de productos y materiales de una manera más óptima. Finalmente, este sistema tiene la facultad de interactuar con otros sistemas de información como CIS, GPS o RFID, en aras de contar con una visión global de las operaciones de distribución. 
      .tarjeta.color-acento-botones.p-4(titulo="Sistema de información <br> geográfica (SIG)" style="background-color:#FFEAE7;")
        p El #[em Geographical Information System] (SIG), es una integración constituida de software, hardware y datos geográficos, creada para almacenar, manipular, capturar y desarrollar en todas sus formas posibles la información geográficamente referenciada, con el objeto de dar solución a problemas complejos de gestión geográfica y planificación.  
    
    p.mt-5(data-aos="zoom-in") De manera general, se puede decir que las SIG son instrumentos que permiten a los usuarios realizar consultas interactivas, editar mapas, datos, analizar la información especial y presentar resultados de datos de estas operaciones.
    p.mt-4(data-aos="zoom-in") En este sentido, los SIG son funcionales atendiendo los siguientes aspectos: 

    AcordionA.acordion1.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris" data-aos="zoom-in")
      .row.col-xl-11.m-auto(titulo="Tráfico")
        p  Los sistemas de información geográfica pueden ser utilizados para modelar la conducta del tráfico, estableciendo simulaciones de circulación por vías en función de las dimensiones del trazado y las condiciones de tránsito. En este sentido, el poder contar con información de ejes viales permite la generación de análisis de redes: las rutas óptimas. 
      .row.col-xl-11.m-auto(titulo="Sistemas de navegación para automóviles")
        p Permite que los conductores conozcan su punto de ubicación mediante la tecnología de posicionamiento global (GPS), se puede ver o identificar en un mapa digital la zona o el sector donde se está desplazando y poder calcular rutas eficientes en función de las condiciones del tráfico. 
      .row.col-xl-11.m-auto(titulo="Gestión")
        p Da la posibilidad de identificar la ubicación de los diferentes tipos de vías que son aptas para el transporte a través de ferrocarriles, rutas aéreas, carreteras e itinerarios marítimos, de los lugares de carga y descarga, de la flota de vehículos, puntos de abastecimiento, registrando fundamentos que permiten realizar un análisis especial eficiente. 
      .row.col-xl-11.m-auto(titulo="Impacto de nuevas infraestructuras ")
        p Los SIG permiten evaluar el impacto de nuevas infraestructuras de transporte (ferrocarriles, aeropuertos, autopistas, puertos marítimos y fluviales, etc.). 
      .row.col-xl-11.m-auto(titulo="Mantenimiento y conservación de infraestructura")
        p Se infiere una aplicación eficaz para la gestión y planificación vial, de la posibilidad de información, como la señalización, las características geométricas, el estado de conservación, el tipo de pavimento, la intensidad del tráfico, las interacciones viales y los accidentes, entre otros. 
      .row.col-xl-11.m-auto(titulo="Sistema de administración de patios (YMS)")
        p Conocido también como #[em Yard Management System], es una aplicación que da la posibilidad de administrar y controlar los movimientos de vehículos, inventarios y recursos humanos en el patio de un centro de distribución.
        p.mt-3 Este tipo de aplicaciones son muy solicitadas por empresas con activos grandes como vehículos de transporte o por compañías cuyo tráfico necesita ser controlado en el patio, así mismo lo requieren empresas como los puertos de contenedores para tener total control. 
        p.mt-3 El #[em software] implementado inspecciona el movimiento de los vehículos, dando prioridad a las cargas que serán recibidas mediante las instrucciones dadas a los administrativos de patio a través de comunicación inalámbrica. 
        p.mt-3 Este sistema permite: 
        ol.lista-ol
          li 
            span.text-bold 1. 
            | Disminuir costos en gestión de parqueaderos y plataforma de maniobras.
          li 
            span.text-bold 2. 
            | Optimización de los vehículos disponibles. 
          li 
            span.text-bold 3. 
            | Ejecutar operaciones de #[em cross-docking], organización del movimiento de vehículos en patio y administración de contenedores.


    .mt-5.p-3(style="max-width:450px;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-up")
      h4.mb-0.ps-3 Sistemas de localización satelital (GPS)
    
    p.mt-4(data-aos="zoom-in") Este sistema global de navegación por satélite también se conoce como Sistema de Posicionamiento Global (SPG) o #[em Global Position System] (GPS) que permite determinar en el mundo la ubicación o posición de un objeto, un vehículo, un individuo, con una exactitud que puede ser de incluso centímetros, utilizando un GPS diferencial; siendo lo usual es unos metros de precisión. 
    p.mt-4(data-aos="zoom-in") El sistema GPS está compuesto por tres segmentos:

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/7.svg" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;") 
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Segmento de control") Compuesto por cinco estaciones de monitores (MS): una de control (MCS) y tres estaciones terrenas (TS) que se encuentran localizadas en puntos clave o estratégicos para tener un control constante de la ubicación de los satélites del sistema. 
          p(numero="2" titulo="Segmento especial") Hace referencia a los satélites que son un aspecto relevante del sistema, toda vez que emiten de manera constante las señales hacia los receptores GPS, abarcando todo el globo terráqueo.
          p(numero="3" titulo="Segmento del usuario") Está constituido por los receptores que suministran la posición, velocidad, altitud y tiempo exacto al usuario en cualquier parte del mundo, las 24 horas del día.  


    separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_2_4 2.4   Sistemas de gestión de calidad
    
    p(data-aos="zoom-in") Atendiendo las normas ISO 2021, las que se encuentran enfocadas en la logística de distribución son: 

    ul.lista-ul.mt-4
      li.h5(data-aos="zoom-in" style="color:#1A0F91;")
        i.lista-ul__vineta(style="color:#1A0F91;")
        | ISO 9001
    
    p.mt-4(data-aos="zoom-in") Esta norma internacional está orientada a la obtención de la calidad de una empresa u organización a través de la implementación de un Sistema de Gestión de Calidad (SGC). Es un referente desde el 2002 de calidad a nivel mundial. 
    
    .col-xl-8.col-lg-10.m-auto.mt-5
      .cajon.color-secundario.p-4(style="background-color:#EFF4FF;" data-aos="flip-up")
        p.mb-0 En la mencionada norma se señalan los requisitos de un sistema de gestión de la calidad, que dan la posibilidad a que una organización o empresa demuestre su capacidad de satisfacer las peticiones o requisitos del cliente y acreditar esta capacidad ante cualquier parte interesada. El certificado de la ISO 9001 es el certificado ISO mejor reconocido a nivel general. 
    
    ul.lista-ul.mt-4
      li.h5(data-aos="zoom-in" style="color:#1A0F91;")
        i.lista-ul__vineta(style="color:#1A0F91;")
        | ISO 28000
    
    p.mt-4(data-aos="zoom-in") La norma ISO 28000 “Especificaciones para los sistemas de gestión de la seguridad para la cadena de suministro” se lanzó en el año 2007 como primera norma internacional dirigida únicamente a la seguridad de riesgos en una cadena de suministros. El fin último de la norma es dar un marco o referente de buenas prácticas en aras de disminuir los riesgos para los individuos y las cargas en la cadena de suministros. Hace relación a temas potenciales de seguridad en cada una de las fases del proceso de suministro, enfocándose especialmente en las áreas de logística; así mismo se concentra en aminorar o disminuir los efectos de los incidentes de seguridad. 
    p.mt-4(data-aos="zoom-in") Adicionalmente, su estructura es compatible con las normas ISO 9001 y la ISO 14001, por cuanto la mencionada norma está creada y trazada para colaborar a la integración en los sistemas de gestión de calidad, medioambiente y seguridad de la cadena de suministro en una empresa u organización. 
    p.mt-4(data-aos="zoom-in") Esta norma está centrada en gestionar activamente y disminuir los riesgos, aspectos críticos de seguridad en la cadena de suministro, igualmente puede incluir aspectos de: fabricación, gestión de la información y logística, almacenamiento y depósito de mercancías como financieros.

    .col-xl-8.col-lg-10.m-auto.mt-5
      .cajon.color-secundario.p-4(style="background-color:#EFF4FF;" data-aos="flip-up")
        p.mb-0 En este sentido, la norma es aplicable a cualquier tipo de organización, sin importar su tamaño, en los sectores de fabricación, servicios, transporte o almacenaje y básicamente en cualquiera de sus fases de producción o de la cadena de suministro.
    
    p.mt-5(data-aos="zoom-in") La norma ISO 28000 de seguridad de la cadena de suministro permite a las empresas lo siguiente:

    .row.mt-5
      .col-lg-4.col-md-6.mb-4.mb-md-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/8.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-8.col-md-6(style="place-self:center;")
        ul.lista-ul--separador
          li(data-aos="zoom-in")
            i.fas.fa-angle-right(style="color:#FE7062;")
            | Revisar los riesgos de seguridad y así implementar controles para disminuir o minimizar las amenazas y potenciales impactos en la seguridad de su cadena de suministro. 
          li(data-aos="zoom-in")
            i.fas.fa-angle-right(style="color:#FE7062;")
            | Evidenciar que la organización se compromete a alcanzar la satisfacción del cliente. 
          li(data-aos="zoom-in")
            i.fas.fa-angle-right(style="color:#FE7062;")
            | Facilitar la integración, toda vez que al usar un Sistema de Gestión basado en el método “#[em Plan - Do-Check-Act]”, implementado y aprobado por la norma ISO 14001, las empresas familiarizadas con este enfoque basado en riesgos, podrá implementar uno similar para analizar los peligros o riesgos de seguridad de su cadena de suministro. 
          li(data-aos="zoom-in")
            i.fas.fa-angle-right(style="color:#FE7062;")
            | Probar la existencia de un sistema robusto y seguro de gestión de su cadena de suministro con los clientes y las partes interesadas. 
          li(data-aos="zoom-in")
            i.fas.fa-angle-right(style="color:#FE7062;")
            | Otorgar un enfoque común a todos los proveedores dentro de su cadena de suministro. 
    
    ul.lista-ul.mt-4
      li.h5(data-aos="zoom-in" style="color:#1A0F91;")
        i.lista-ul__vineta(style="color:#1A0F91;")
        | ISO 39001
    
    p.mt-4(data-aos="zoom-in") La implementación de un sistema de gestión de la seguridad vial basado en la Norma ISO 39001, es necesario que se incluya en las empresas de transporte y logística dentro de sus políticas de prevención de riesgos laborales, atendiendo que sus trabajadores tienen mayor riesgo de sufrir un accidente vial laboral, por desarrollar su actividad en la vía. 
    p.mt-4(data-aos="zoom-in") La mencionada norma es de carácter internacional que de manera específica relaciona los requisitos para implementar un Sistema de Gestión de Tráfico de Seguridad (#[em Road Traffic Security] –RTS) o de Seguridad Vial (SV) para que las organizaciones que tienen relación directa con el sistema vial disminuyan el número de lesiones, muertes y heridos graves que se generan de los accidentes de tránsito.
    p.mt-4(data-aos="zoom-in") El contexto de la seguridad vial está compuesto por cuatro factores sobre los que reposa la Norma ISO 39001:2013:

    .col-lg-4.col-xl-3.col-md-6.mt-4
      ul.lista-ul--separador
        li(data-aos="zoom-in")
          i.fas.fa-angle-right(style="color:#FE7062;")
          | Componente humano.
        li(data-aos="zoom-in")
          i.fas.fa-angle-right(style="color:#FE7062;")
          | Factor vía.
        li(data-aos="zoom-in")
          i.fas.fa-angle-right(style="color:#FE7062;")
          | Factor vehículo.
        li(data-aos="zoom-in")
          i.fas.fa-angle-right(style="color:#FE7062;")
          | Aspectos organizativos.
    
    .col-xl-8.col-lg-10.m-auto.mt-5
      .cajon.color-secundario.p-4(style="background-color:#EFF4FF;" data-aos="flip-up")
        p.mb-0 Así las cosas, la implementación y certificación de un Sistema de Gestión de la Seguridad Vial conforme la ISO 39001 da la posibilidad de salvar vidas, acrecentar comportamientos más seguros al momento de conducir, presumiendo un impacto positivo en las empresas u organizaciones que implementan este estándar y de manera general en la sociedad. 
        p.mt-4.mb-0 Las Normas como la ISO 39001 proporciona una ventaja competitiva para las empresas que la ponen en marcha al disminuir los riesgos viales, así como los impactos de la materialización de estos y constituyen una actitud responsable frente al personal, la sociedad y el medioambiente.

</template>

<script>
export default {
  name: 'Tema2',
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
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 70%
  height: 50%
  top: 0
  left: -20px
  background-color: #CFE8FE
.tabs-a__tab
  background-color: #F6F6F6
.linea-tiempo-d__item.row.linea-tiempo-d__item--selected .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #F2F6FE
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: dotted 2px #b0c0d2
</style>
